# Ghid digital pentru asociații

Ghid interactiv cu instrumente utile pentru asociații și ONG-uri, realizat pentru
**ProActive Group Moldova** ca o continuare a programului „AI în Comunități”.

**Site-ul:** https://nudoarmetudor.github.io/ghid-digital-pagm/

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
| rădăcina (`index.html`, `static/`, ...) | **Site-ul generat. Nu se editează de mână**, se rescrie la fiecare publicare. |

## Cum se publică

GitHub Pages servește ramura `main`, din rădăcină. La fiecare modificare în `sursa/`,
fluxul `.github/workflows/publica.yml` construiește site-ul cu Quartz și pune rezultatul
în rădăcină. Durează câteva minute.

## Lucru local

```bash
cd sursa
npm ci
npx quartz build --serve   # http://localhost:8080
```

Formatul paginilor (frontmatter, zone, culori) se vede în orice fișă existentă
din `sursa/content/`.

Conținut și design: Tudor Lapp, [Lappsus](https://lappsus.com). Construit cu
[Quartz](https://quartz.jzhao.xyz/) (licență MIT, `sursa/LICENSE.txt`). Fonturile Urbanist
și Onest sunt sub SIL Open Font License (`sursa/quartz/static/fonts/`).
