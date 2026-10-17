# Ghidul Bunelor Practici în utilizarea Inteligenței Artificiale în activitatea ONG-urilor și Grupurilor de Inițiativă

Ghid interactiv cu instrumente utile pentru asociații și ONG-uri, realizat pentru
**ProActive Group Moldova** ca o continuare a programului „AI în Comunități”.

**Site-ul:** https://ghid.lappsus.com/ (copie: https://nudoarmetudor.github.io/ghid-digital-pagm/)

## Cum e organizat depozitul

| Unde | Ce este |
|---|---|
| `sursa/content/` | **Textele ghidului**, câte un fișier markdown pe pagină. Aici se editează. |
| `sursa/content/nevoi/` | Zonele: vizibilitate, proiecte, colaborare, date, AI, siguranță |
| `sursa/content/instrumente/` | Fișele instrumentelor |
| `sursa/content/cum-sa-faci/` | Rețetele pas cu pas |
| `sursa/quartz/components/ghid/` | Componentele proprii: antet, subsol, pagina principală, fișa instrumentului |
| `sursa/quartz/styles/custom.scss` | Stilul: fonturile Lappsus (Urbanist, Onest) și paleta PAGM |
| `sursa/quartz.config.ts`, `sursa/quartz.layout.ts` | Configurarea Quartz 4.5.2 |
| `sursa/carte/` | Versiunea tipăribilă: scriptul și stilul care fac din aceleași texte un PDF A4, ca o carte |
| `docs/` | **Site-ul generat**, servit de ghid.lappsus.com. Nu se editează de mână. |
| rădăcina (`index.html`, `static/`, ...) | Aceeași copie, pentru oglinda de pe GitHub Pages. Lista ei e în `.publicat`. Nu se editează de mână. |

## Cum se publică

La fiecare modificare în `sursa/`, fluxul `.github/workflows/publica.yml` construiește
site-ul cu Quartz și îl pune în `docs/` (servit de ghid.lappsus.com) și în rădăcină
(oglinda GitHub Pages). În același pas face și PDF-ul tipăribil,
`ghidul-bunelor-practici-ai.pdf`, din aceleași texte. Serverul trage `main` și servește doar
`docs/`. Durează câteva minute.

Unele fraze scrise pentru site („bifele rămân salvate în browser”) sunt înlocuite pe hârtie;
lista e în `PE_HARTIE`, în `sursa/carte/construieste.py`. Dacă schimbați una din aceste fraze
în pagină, construcția PDF-ului se oprește și spune unde.

## Lucru local

```bash
cd sursa
npm ci
npx quartz build --serve   # http://localhost:8080
```

PDF-ul, local (Python 3, plus Pango pe Linux):

```bash
pip install -r sursa/carte/cerinte.txt
python sursa/carte/construieste.py --iesire ghid.pdf
```

Formatul paginilor (frontmatter, zone, culori) se vede în orice fișă existentă
din `sursa/content/`.

## Licență

Textul ghidului: © 2026 AO ProActive Group Moldova, sub licența
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ro). Logourile Uniunii
Europene, ale partenerilor și ale programelor nu intră sub această licență. Codul: MIT (`LICENSE`).

Autori: Tudor Lapp ([Lappsus](https://lappsus.com)) și Victor Babcinețchi. Design: Tudor Lapp, [Lappsus](https://lappsus.com). Construit cu
[Quartz](https://quartz.jzhao.xyz/) (licență MIT, `sursa/LICENSE.txt`). Fonturile Urbanist
și Onest sunt sub SIL Open Font License (`sursa/quartz/static/fonts/`).
