import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { resolveRelative, FullSlug } from "../../util/path"
import { ZONE, zonaDin } from "./zone"

// Pagina principală: cardurile pe nevoi și selectorul „Ce vreți să faceți azi?”.
const Acasa: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const aici = fileData.slug! as FullSlug
  const nevoi = allFiles
    .filter((f) => f.slug?.startsWith("nevoi/") && !f.slug.endsWith("index"))
    .sort((a, b) => Number(a.frontmatter?.ordine ?? 99) - Number(b.frontmatter?.ordine ?? 99))
  const reteteAll = allFiles
    .filter((f) => f.slug?.startsWith("cum-sa-faci/") && !f.slug.endsWith("index"))
    .map((f) => ({ f, zona: zonaDin(f.frontmatter?.tags) ?? "altele" }))
  const ordineZone = Object.keys(ZONE)
  const retete = reteteAll.sort(
    (a, b) =>
      ordineZone.indexOf(a.zona) - ordineZone.indexOf(b.zona) ||
      String(a.f.frontmatter?.title).localeCompare(String(b.f.frontmatter?.title), "ro"),
  )
  const nrInstr = allFiles.filter((f) => f.slug?.startsWith("instrumente/") && !f.slug.endsWith("index")).length

  return (
    <div class="acasa">
      {fileData.frontmatter?.description && <p class="acasa-lead">{fileData.frontmatter.description}</p>}
      <section class="acasa-nevoi" aria-labelledby="acasa-nevoi-t">
        <h2 id="acasa-nevoi-t">De ce are nevoie asociația voastră?</h2>
        <div class="acasa-carduri">
          {nevoi.map((n) => {
            const z = zonaDin(n.frontmatter?.tags)
            const c = z ? ZONE[z].culoare : "#7f248d"
            const nInstr = (n.links ?? []).filter((l) => l.startsWith("instrumente/")).length
            const nRet = (n.links ?? []).filter((l) => l.startsWith("cum-sa-faci/")).length
            return (
              <a class="acasa-card internal" href={resolveRelative(aici, n.slug!)} style={`--zona:${c}`}>
                <span class="acasa-card-titlu">{n.frontmatter?.title}</span>
                <span class="acasa-card-desc">{n.frontmatter?.description ?? n.description}</span>
                <span class="acasa-card-meta">
                  {nInstr} instrumente · {nRet} rețete
                </span>
              </a>
            )
          })}
        </div>
      </section>

      <section class="acasa-retete" aria-labelledby="acasa-retete-t">
        <h2 id="acasa-retete-t">Ce vreți să faceți azi?</h2>
        <p class="acasa-sub">Alegeți o zonă și deschideți rețeta pas cu pas. Fiecare are un exemplu dintr-o asociație și o listă de verificare.</p>
        <div class="acasa-filtre" role="group" aria-label="Filtrați după zonă">
          <button type="button" class="acasa-filtru activ" data-zona="toate">Toate</button>
          {ordineZone
            .filter((z) => retete.some((r) => r.zona === z))
            .map((z) => (
              <button type="button" class="acasa-filtru" data-zona={z} style={`--zona:${ZONE[z].culoare}`}>
                {ZONE[z].scurt}
              </button>
            ))}
        </div>
        <ul class="acasa-lista">
          {retete.map(({ f, zona }) => (
            <li data-zona={zona} style={`--zona:${ZONE[zona]?.culoare ?? "#7f248d"}`}>
              <a class="internal" href={resolveRelative(aici, f.slug!)}>
                <span class="acasa-lista-titlu">{f.frontmatter?.title}</span>
                <span class="acasa-lista-meta">
                  {[f.frontmatter?.durata, f.frontmatter?.nivel].filter(Boolean).join(" · ")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section class="acasa-rapid" aria-label="Acces rapid">
        <a class="internal" href={resolveRelative(aici, "prompturi" as FullSlug)}>
          <strong>Bibliotecă de prompturi</strong>
          <span>Instrucțiuni gata de copiat pentru asistenții AI.</span>
        </a>
        <a class="internal" href={resolveRelative(aici, "autoevaluare" as FullSlug)}>
          <strong>Autoevaluare</strong>
          <span>Unde e asociația azi și ce faceți primul.</span>
        </a>
        <a class="internal" href={resolveRelative(aici, "instrumente/index" as FullSlug)}>
          <strong>Toate instrumentele</strong>
          <span>{nrInstr} fișe, cu primii pași și tutoriale.</span>
        </a>
        <a class="internal" href={resolveRelative(aici, "ce-am-facut-impreuna" as FullSlug)}>
          <strong>Ce am făcut împreună</strong>
          <span>Pe scurt, sesiunile „AI în Comunități”.</span>
        </a>
      </section>
    </div>
  )
}

Acasa.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const root = document.querySelector(".acasa-retete")
  if (!root) return
  const butoane = root.querySelectorAll(".acasa-filtru")
  const elemente = root.querySelectorAll(".acasa-lista li")
  const alege = (zona) => {
    butoane.forEach((b) => b.classList.toggle("activ", b.dataset.zona === zona))
    elemente.forEach((li) => { li.hidden = !(zona === "toate" || li.dataset.zona === zona) })
  }
  const onClick = (e) => alege(e.currentTarget.dataset.zona)
  butoane.forEach((b) => {
    b.addEventListener("click", onClick)
    window.addCleanup(() => b.removeEventListener("click", onClick))
  })
})
`

Acasa.css = `
.acasa h2 { margin-top: 2.2rem; }
.acasa-lead { font-size: 1.2rem; line-height: 1.5; color: var(--darkgray); margin-top: .2rem; max-width: 40rem; }
.acasa-carduri { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: .9rem; }
.acasa a.acasa-card { line-height: 1.4; display: flex; flex-direction: column; gap: .4rem; padding: 1rem 1.1rem 1rem; border-radius: 12px;
  border: 1px solid var(--lightgray); border-top: 5px solid var(--zona); background: var(--light);
  color: var(--darkgray) !important; font-weight: 400 !important; text-decoration: none; transition: transform .15s, box-shadow .15s; }
.acasa a.acasa-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(26,29,40,.10); }
.acasa-card-titlu { font-family: var(--headerFont); font-weight: 800; font-size: 1.15rem; color: var(--dark); line-height: 1.2; }
.acasa-card-desc { font-size: .93rem; line-height: 1.45; flex: 1; }
.acasa-card-meta { font-size: .8rem; font-weight: 600; color: var(--zona); filter: saturate(1.1); }
.acasa-sub { margin-top: -.4rem; }
.acasa-filtre { display: flex; flex-wrap: wrap; gap: .45rem; margin: .8rem 0 1rem; }
.acasa-filtru { font-family: var(--bodyFont); font-size: .88rem; padding: .45rem .85rem; border-radius: 999px; cursor: pointer;
  border: 1.5px solid var(--zona, var(--darkgray)); background: transparent; color: var(--dark); min-height: 40px; }
.acasa-filtru.activ { background: var(--zona, var(--dark)); color: #fff; }
.acasa-filtru[data-zona="toate"].activ { background: var(--dark); color: var(--light); }
.acasa-lista { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: minmax(0, 1fr); gap: .5rem; }
.acasa-lista li { margin: 0; }
.acasa-lista li[hidden] { display: none; }
.acasa .acasa-lista a { line-height: 1.4; font-weight: 400; display: flex; justify-content: space-between; gap: 1rem; align-items: baseline; padding: .7rem .9rem;
  border-radius: 10px; border-left: 4px solid var(--zona); background: var(--highlight); color: var(--dark) !important; text-decoration: none; }
.acasa .acasa-lista a:hover { background: var(--lightgray); }
.acasa-lista-titlu { font-weight: 600; }
.acasa-lista-meta { font-size: .8rem; color: var(--gray); white-space: nowrap; }
.acasa-rapid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: .8rem; margin-top: 2.2rem; }
.acasa .acasa-rapid a { line-height: 1.4; display: flex; flex-direction: column; gap: .25rem; padding: .9rem 1rem; border-radius: 12px; text-decoration: none;
  background: linear-gradient(135deg, rgba(59,157,215,.12), rgba(232,46,97,.10)); color: var(--darkgray) !important; font-weight: 400 !important; }
.acasa-rapid strong { color: var(--dark); font-family: var(--headerFont); font-size: 1.05rem; }
.acasa-rapid span { font-size: .88rem; }
@media all and (max-width: 800px) {
  .acasa .acasa-lista a { flex-direction: column; gap: .15rem; }
  .acasa-lista-meta { white-space: normal; }
}
`

export default (() => Acasa) satisfies QuartzComponentConstructor
