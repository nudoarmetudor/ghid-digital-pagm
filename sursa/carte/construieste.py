"""Construiește versiunea tipăribilă a ghidului: un PDF A4 așezat ca o carte.

Citește aceleași fișiere markdown ca site-ul (sursa/content) și le pune în ordinea unei
cărți: copertă, pagina de gardă cu licența și textul finanțatorului, cuprins, introducere,
câte un capitol pentru fiecare nevoie (pagina nevoii, apoi rețetele, apoi fișele
instrumentelor), anexe și coperta din spate.

    python sursa/carte/construieste.py [--iesire ghid.pdf] [--html ghid.html]
"""

from __future__ import annotations

import argparse
import datetime as dt
import html
import re
import sys
from pathlib import Path

import yaml
from bs4 import BeautifulSoup
from markdown_it import MarkdownIt
from mdit_py_plugins.tasklists import tasklists_plugin
from weasyprint import HTML

AICI = Path(__file__).resolve().parent
SURSA = AICI.parent
CONTINUT = SURSA / "content"
STATIC = SURSA / "quartz" / "static"

TITLU = (
    "Ghidul Bunelor Practici în utilizarea Inteligenței Artificiale "
    "în activitatea ONG-urilor și Grupurilor de Inițiativă"
)
TITLU_SCURT = "Ghidul Bunelor Practici AI"
ADRESA = "https://ghid.lappsus.com/"
TITULAR = "AO ProActive Group Moldova"
AUTORI = "Tudor Lapp (Lappsus) și Victor Babcinețchi"

# Textul finanțatorului, cuvânt cu cuvânt; același ca în Subsol.tsx și despre.md.
DISCLAIMER_RO = (
    "Acest material a fost produs și realizat cu suportul financiar al Uniunii Europene, "
    "în cadrul proiectului INSPIRĂ Moldova. Conținutul acestuia reprezintă responsabilitatea "
    "exclusivă a proiectului „PRO-Active Digital Communities – Ambasadori Digitali în "
    "Comunități Rurale”, implementat de AO ProActive Group Moldova, în parteneriat cu Alianța "
    "Asociațiilor de Băștinași din Moldova. Conținutul aparține AO ProActive Group Moldova și "
    "nu reflectă în mod necesar viziunea Uniunii Europene."
)

# Zonele, în ordinea capitolelor; numele și culorile repetă zone.ts.
ZONE = {
    "vizibilitate": ("Vizibilitate și comunicare", "#e91348"),
    "proiecte": ("Proiecte și finanțare", "#e0a800"),
    "colaborare": ("Colaborare și organizare", "#2f9bd8"),
    "date": ("Date și feedback", "#3aa936"),
    "ai": ("AI în munca asociației", "#7f248d"),
    "siguranta": ("Siguranță online", "#5b6072"),
}

LUNI = [
    "ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
    "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie",
]

# Fraze scrise pentru site care pe hârtie nu mai sunt adevărate. Fiecare înlocuire trebuie
# să găsească textul exact; dacă pagina se schimbă, construcția se oprește și spune unde.
PE_HARTIE = {
    "index": [
        (
            re.compile(r"## Cum folosiți ghidul\n.*?(?=\n> \[!tip\])", re.S),
            "## Cum folosiți ghidul tipărit\n\n"
            "1. **Porniți de la ce aveți de făcut.** Capitolele 1-6 urmează nevoile unei "
            "asociații. Fiecare începe cu o pagină despre problemă și cu „Primul pas de azi”.\n"
            "2. **Urmați o rețetă „cum să faceți”.** Fiecare are un exemplu dintr-o asociație, "
            "pașii pe rând și o listă de verificare pe care o bifați cu pixul.\n"
            "3. **Deschideți fișa instrumentului doar când aveți nevoie.** Acolo găsiți costul "
            "(gratuit sau nu), pe ce merge, primii pași și adresa tutorialelor oficiale.\n"
            "4. **Urmați trimiterile.** Un „(p. 24)” după un nume arată pagina unde e explicat. "
            "Adresele de internet stau în paranteză, după text.\n"
            "5. **Folosiți și versiunea online**, de la ghid.lappsus.com, unde linkurile se "
            "deschid direct și puteți căuta orice cuvânt. Codul QR e pe ultima pagină.\n",
        ),
        ("de pe pagina ei.", "din capitolul ei."),
    ],
    "autoevaluare": [
        (
            "Bifele rămân salvate în browserul acestui dispozitiv, așa că puteți reveni peste "
            "o lună și compara.",
            "Bifați cu pixul și notați data, ca să puteți reveni peste o lună și compara.",
        ),
    ],
    "prompturi": [
        (
            "Copiați-le cu butonul din colțul blocului, înlocuiți",
            "Copiați-le în asistent (din versiunea online merge cu un clic), înlocuiți",
        ),
    ],
    "despre": [
        # Codul QR e pe coperta din spate, textul finanțatorului pe pagina de gardă.
        (re.compile(r"\n## Codul QR al ghidului\n.*\Z", re.S), "\n"),
    ],
}


def citeste(cale: Path) -> tuple[dict, str]:
    text = cale.read_text(encoding="utf-8")
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        return {}, text
    return yaml.safe_load(m.group(1)) or {}, text[m.end():]


def ancora(slug: str) -> str:
    return "p-" + slug.replace("/", "--")


class Carte:
    def __init__(self) -> None:
        self.pagini: dict[str, tuple[dict, str]] = {}
        for cale in sorted(CONTINUT.rglob("*.md")):
            slug = cale.relative_to(CONTINUT).with_suffix("").as_posix()
            self.pagini[slug] = citeste(cale)
        self.md = MarkdownIt("commonmark", {"html": False, "typographer": False})
        self.md.enable("table").use(tasklists_plugin)
        self.lipsa: list[str] = []
        self.incluse: set[str] = set()
        # Paginile de index ale secțiunilor nu intră în carte; trimiterile spre ele merg aici.
        self.redirect = {
            "index": "introducere",
            "nevoi/index": "cuprins",
            "cum-sa-faci/index": "cuprins",
            "instrumente/index": "toate-instrumentele",
        }

    # ---------- conversie markdown ----------

    def tinta(self, slug: str) -> str | None:
        slug = slug.strip().strip("/")
        if slug in self.redirect:
            return self.redirect[slug]
        if slug in self.pagini:
            return ancora(slug)
        return None

    def wikilinkuri(self, text: str) -> str:
        def inlocuieste(m: re.Match) -> str:
            slug, eticheta = m.group(1), m.group(3)
            slug = slug.split("#")[0]
            if eticheta is None:
                eticheta = self.pagini.get(slug, ({}, ""))[0].get("title", slug)
            t = self.tinta(slug)
            if t is None:
                self.lipsa.append(slug)
                return eticheta
            return f"[{eticheta}](#{t})"

        return re.sub(r"\[\[([^\]|]+?)(\|([^\]]+))?\]\]", inlocuieste, text)

    def adapteaza(self, slug: str, text: str) -> str:
        for vechi, nou in PE_HARTIE.get(slug, []):
            if isinstance(vechi, re.Pattern):
                text, n = vechi.subn(nou, text)
            else:
                n = text.count(vechi)
                text = text.replace(vechi, nou)
            if n != 1:
                sys.exit(f"{slug}.md: adaptarea pentru tipar nu mai găsește textul: {vechi!r}")
        return text

    def html_din(self, slug: str, text: str, coboara: int = 1) -> str:
        text = self.adapteaza(slug, text)
        text = self.wikilinkuri(text)
        sup = BeautifulSoup(self.md.render(text), "html.parser")

        # Titlurile din pagină coboară un nivel: titlul paginii e h2, secțiunile ei h3.
        for h in sup.find_all(["h1", "h2", "h3", "h4", "h5"]):
            h.name = f"h{min(int(h.name[1]) + coboara, 6)}"

        # Callout-urile Obsidian: > [!tip] Titlu
        for bq in sup.find_all("blockquote"):
            p = bq.find("p")
            if not p or not p.contents or not isinstance(p.contents[0], str):
                continue
            m = re.match(r"\[!(\w+)\][ \t]*([^\n]*)\n?", p.contents[0])
            if not m:
                continue
            tip, titlu = m.group(1).lower(), m.group(2).strip()
            rest = p.contents[0][m.end():]
            p.contents[0].replace_with(rest)
            if not p.get_text(strip=True):
                p.decompose()
            bq.name = "div"
            bq["class"] = ["callout", f"callout-{tip}"]
            if titlu:
                t = sup.new_tag("p", attrs={"class": "callout-titlu"})
                t.string = titlu
                bq.insert(0, t)

        # Linkuri: spre alte pagini cu numărul paginii, spre internet cu adresa scrisă.
        for a in sup.find_all("a"):
            href = a.get("href", "")
            if href.startswith("#"):
                a["class"] = ["int"]
            elif href.startswith("http"):
                a["class"] = ["ext"]
                scurt = re.sub(r"^https?://(www\.)?", "", href).rstrip("/")
                if a.get_text(strip=True).rstrip("/") not in (href.rstrip("/"), scurt):
                    url = sup.new_tag("span", attrs={"class": "url"})
                    url.string = f"({scurt})"
                    a.insert_after(url)
                    a.insert_after(" ")

        # Un titlu, sau rândul scurt care anunță un prompt, nu rămâne singur la capăt de pagină.
        for h in sup.find_all(["h3", "h4", "h5", "p"]):
            urm = h.find_next_sibling()
            if urm is None or h.parent.name == "li":
                continue
            if h.name == "p" and (urm.name != "pre" or len(h.get_text()) > 200):
                continue
            if urm.name == "pre" or "callout" in (urm.get("class") or []):
                bloc = sup.new_tag("div", attrs={"class": "impreuna"})
                h.insert_before(bloc)
                bloc.append(h.extract())
                bloc.append(urm.extract())

        # Listele de verificare: căsuțe goale de bifat cu pixul.
        for inp in sup.find_all("input"):
            casuta = sup.new_tag("span", attrs={"class": "casuta"})
            inp.replace_with(casuta)

        for img in sup.find_all("img"):
            img["src"] = (CONTINUT / img["src"]).resolve().as_uri()

        return str(sup)

    # ---------- bucățile cărții ----------

    def sectiune(self, slug: str, fel: str, zona: str | None) -> str:
        fm, corp = self.pagini[slug]
        self.incluse.add(slug)
        culoare = ZONE[zona][1] if zona else "#7f248d"
        cap = f'<p class="eticheta">{fel}</p>' if fel else ""
        meta = ""
        if slug.startswith("instrumente/"):
            randuri = [
                ("Cost", fm.get("cost")),
                ("Pe ce merge", fm.get("platforme")),
                ("Interfață în română", fm.get("limba_ro")),
            ]
            if fm.get("link"):
                randuri.append(("Adresa", re.sub(r"^https?://(www\.)?", "", fm["link"]).rstrip("/")))
            meta = "<dl class=\"fisa\">" + "".join(
                f"<dt>{k}</dt><dd>{html.escape(str(v))}</dd>" for k, v in randuri if v
            ) + "</dl>"
        elif slug.startswith("cum-sa-faci/"):
            instr = fm.get("instrumente")
            if isinstance(instr, list):
                instr = ", ".join(instr)
            bucati = [
                f"Durata: {fm['durata']}" if fm.get("durata") else "",
                f"Nivel: {fm['nivel']}" if fm.get("nivel") else "",
                f"Cu: {instr}" if instr else "",
            ]
            meta = '<p class="insigne">' + "".join(
                f"<span>{html.escape(b)}</span>" for b in bucati if b
            ) + "</p>"
        descriere = (
            f'<p class="descriere">{html.escape(fm["description"])}</p>'
            if fm.get("description") and not slug.startswith("nevoi/")
            else ""
        )
        return (
            f'<section class="pagina" id="{ancora(slug)}" style="--zona:{culoare}">'
            f"{cap}<h2>{html.escape(fm.get('title', slug))}</h2>{descriere}{meta}"
            f"{self.html_din(slug, corp)}</section>"
        )

    def ordine_capitol(self, zona: str) -> tuple[list[str], list[str]]:
        """Rețetele și instrumentele unui capitol, în ordinea din pagina nevoii."""
        _, corp = self.pagini[f"nevoi/{zona}"]
        def din_lista(prefix: str) -> list[str]:
            vazute = []
            for slug in re.findall(r"\[\[(" + prefix + r"/[^\]|#]+)", corp):
                if slug not in vazute and slug not in self.alocate:
                    vazute.append(slug)
            return vazute
        retete, unelte = din_lista("cum-sa-faci"), din_lista("instrumente")
        self.alocate.update(retete + unelte)
        return retete, unelte

    def construieste(self) -> str:
        azi = dt.date.today()
        data = f"{azi.day} {LUNI[azi.month - 1]} {azi.year}"
        self.alocate: set[str] = set()

        zone_ord = sorted(ZONE, key=lambda z: self.pagini[f"nevoi/{z}"][0].get("ordine", 99))
        capitole = {z: self.ordine_capitol(z) for z in zone_ord}
        # Ce nu e listat în nicio pagină de nevoie merge la prima lui zonă.
        for slug, (fm, _) in self.pagini.items():
            if slug.endswith("index") or slug in self.alocate:
                continue
            if slug.startswith(("cum-sa-faci/", "instrumente/")):
                zona = next((t for t in fm.get("tags", []) if t in ZONE), None)
                if zona is None:
                    sys.exit(f"{slug}.md nu are o zonă în tags")
                capitole[zona][0 if slug.startswith("cum-sa-faci/") else 1].append(slug)
                self.alocate.add(slug)

        corp: list[str] = []
        cuprins: list[str] = []

        def in_cuprins(nivel: int, ancora_: str, text: str) -> None:
            cuprins.append(
                f'<li class="n{nivel}"><a href="#{ancora_}">{html.escape(text)}</a></li>'
            )

        # Introducerea
        fm, txt = self.pagini["index"]
        corp.append(
            '<section class="capitol fara-numar" id="introducere" '
            'data-titlu="Introducere"><h1>Introducere</h1>'
            f'<p class="descriere">{html.escape(fm["description"])}</p>'
            f"{self.html_din('index', txt)}</section>"
        )
        self.incluse.add("index")
        in_cuprins(1, "introducere", "Introducere")
        fm, txt = self.pagini["ce-am-facut-impreuna"]
        corp.append(self.sectiune("ce-am-facut-impreuna", "", None))
        in_cuprins(2, ancora("ce-am-facut-impreuna"), fm["title"])

        # Capitolele
        for nr, zona in enumerate(zone_ord, 1):
            nume, culoare = ZONE[zona]
            slug = f"nevoi/{zona}"
            fm, txt = self.pagini[slug]
            self.incluse.add(slug)
            corp.append(
                f'<section class="capitol" id="{ancora(slug)}" data-titlu="{nume}" '
                f'style="--zona:{culoare}">'
                f'<p class="nr-capitol">Capitolul {nr}</p><h1>{nume}</h1>'
                f'<p class="descriere">{html.escape(fm["description"])}</p>'
                f"{self.html_din(slug, txt)}</section>"
            )
            in_cuprins(1, ancora(slug), f"{nr}. {nume}")
            retete, unelte = capitole[zona]
            for s in retete:
                corp.append(self.sectiune(s, "Cum să faceți", zona))
                in_cuprins(2, ancora(s), self.pagini[s][0]["title"])
            for s in unelte:
                corp.append(self.sectiune(s, "Fișa instrumentului", zona))
                in_cuprins(3, ancora(s), self.pagini[s][0]["title"])

        # Anexele
        corp.append(
            '<section class="capitol fara-numar" id="anexe" data-titlu="Anexe">'
            '<p class="nr-capitol">Anexe</p><h1>Pentru lucru</h1>'
            '<p class="descriere">Prompturi gata de folosit, o autoevaluare de bifat și '
            "toate instrumentele pe scurt.</p></section>"
        )
        in_cuprins(1, "anexe", "Anexe")
        for s in ["prompturi", "autoevaluare"]:
            corp.append(self.sectiune(s, "Anexă", None))
            in_cuprins(2, ancora(s), self.pagini[s][0]["title"])
        corp.append(self.tabel_instrumente())
        in_cuprins(2, "toate-instrumentele", "Toate instrumentele pe scurt")
        corp.append(self.sectiune("despre", "", None))
        in_cuprins(2, ancora("despre"), self.pagini["despre"][0]["title"])

        ramase = sorted(
            s for s in self.pagini if s not in self.incluse and not s.endswith("index")
        )
        if ramase:
            sys.exit(f"Pagini care nu au intrat în carte: {', '.join(ramase)}")
        if self.lipsa:
            sys.exit(f"Trimiteri spre pagini inexistente: {', '.join(sorted(set(self.lipsa)))}")

        css = (AICI / "carte.css").read_text(encoding="utf-8").replace(
            "STATIC/", STATIC.as_uri() + "/"
        )
        return f"""<!doctype html>
<html lang="ro"><head><meta charset="utf-8"><title>{TITLU}</title>
<meta name="author" content="Tudor Lapp, Victor Babcinețchi">
<meta name="description" content="{html.escape(self.pagini['index'][0]['description'])}">
<style>{css}</style></head><body>
{self.coperta()}
{self.garda(data)}
<section class="cuprins" id="cuprins"><h1>Cuprins</h1><ol>{''.join(cuprins)}</ol></section>
{''.join(corp)}
{self.coperta_spate()}
</body></html>"""

    def logouri(self) -> str:
        l = STATIC / "logouri"
        return (
            '<div class="logouri">'
            f'<img class="inspira" src="{(l / "inspira-moldova.png").as_uri()}" alt="INSPIRĂ Moldova">'
            '<div class="parteneri">'
            f'<img src="{(l / "proactive-group-moldova.png").as_uri()}" alt="ProActive Group Moldova">'
            f'<img src="{(l / "alianta-bastinasi.png").as_uri()}" alt="Alianța Asociațiilor de Băștinași din Moldova">'
            "</div></div>"
        )

    def curcubeu(self) -> str:
        return '<div class="curcubeu">' + "".join(
            f'<span style="background:{c}"></span>' for _, c in ZONE.values()
        ) + "</div>"

    def coperta(self) -> str:
        return f"""<section class="coperta">
{self.curcubeu()}
<img class="pagm" src="{(STATIC / 'pagm-logo.svg').as_uri()}" alt="ProActive Group Moldova">
<h1 class="titlu-carte">{TITLU}</h1>
<p class="subtitlu">{html.escape(self.pagini['index'][0]['description'])}</p>
<p class="autori">{AUTORI}</p>
<div class="jos">{self.logouri()}</div>
</section>"""

    def garda(self, data: str) -> str:
        return f"""<section class="garda">
<p class="g-titlu">{TITLU}</p>
<p><strong>Autori:</strong> {AUTORI}</p>
<p><strong>Editor:</strong> {TITULAR}, în cadrul proiectului „PRO-Active Digital Communities – Ambasadori Digitali în Comunități Rurale”, în parteneriat cu Alianța Asociațiilor de Băștinași din Moldova.</p>
<p><strong>Versiunea tipărită din</strong> {data}. Versiunea online, actualizată: {ADRESA}</p>
<p class="licenta"><strong>© {dt.date.today().year} {TITULAR}.</strong> Textul este publicat sub licența
Creative Commons Atribuire-Partajare în Condiții Identice 4.0 Internațional (CC BY-SA 4.0):
îl puteți copia, tipări, traduce și adapta, inclusiv în scop comercial, cu condiția să menționați
sursa și autorii și să publicați versiunile adaptate sub aceeași licență.
Textul licenței: creativecommons.org/licenses/by-sa/4.0/deed.ro.
Logourile Uniunii Europene, ale partenerilor și ale programelor nu intră sub această licență
și aparțin titularilor lor.</p>
<p class="disclaimer">{DISCLAIMER_RO}</p>
</section>"""

    def coperta_spate(self) -> str:
        qr = (CONTINUT / "imagini" / "qr-ghid.png").as_uri()
        return f"""<section class="spate">
<p class="s-titlu">Ghidul e și online, cu linkuri pe care le puteți apăsa</p>
<img class="qr" src="{qr}" alt="Cod QR spre ghid">
<p class="s-adresa">ghid.lappsus.com</p>
<div class="jos">{self.logouri()}
<p class="disclaimer">{DISCLAIMER_RO}</p>
<p class="licenta-scurt">© {dt.date.today().year} {TITULAR} · CC BY-SA 4.0</p></div>
{self.curcubeu()}
</section>"""

    def tabel_instrumente(self) -> str:
        randuri = []
        unelte = sorted(
            (s for s in self.pagini if s.startswith("instrumente/") and not s.endswith("index")),
            key=lambda s: self.pagini[s][0]["title"].lower(),
        )
        for s in unelte:
            fm = self.pagini[s][0]
            randuri.append(
                f'<tr><td><a class="int" href="#{ancora(s)}">{html.escape(fm["title"])}</a></td>'
                f"<td>{html.escape(str(fm.get('cost', '')))}</td>"
                f"<td>{html.escape(str(fm.get('platforme', '')))}</td>"
                f"<td>{html.escape(str(fm.get('limba_ro', '')))}</td></tr>"
            )
        return (
            '<section class="pagina" id="toate-instrumentele"><p class="eticheta">Anexă</p>'
            "<h2>Toate instrumentele pe scurt</h2>"
            '<p class="descriere">Instrumentele din ghid, în ordine alfabetică, cu pagina fișei.</p>'
            '<table class="instrumente"><thead><tr><th>Instrument</th><th>Cost</th>'
            "<th>Pe ce merge</th><th>În română</th></tr></thead><tbody>"
            + "".join(randuri)
            + "</tbody></table></section>"
        )


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--iesire", default="ghidul-bunelor-practici-ai.pdf")
    ap.add_argument("--html", help="salvează și HTML-ul intermediar, pentru verificare")
    args = ap.parse_args()

    document = Carte().construieste()
    if args.html:
        Path(args.html).write_text(document, encoding="utf-8")
    HTML(string=document, base_url=str(CONTINUT)).write_pdf(args.iesire)
    print(f"Scris {args.iesire}")


if __name__ == "__main__":
    main()
