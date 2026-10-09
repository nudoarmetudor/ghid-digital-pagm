import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { pathToRoot, joinSegments } from "../../util/path"

const Subsol: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const img = (v: string) => joinSegments(baseDir, "static", v)
  return (
    <footer class={`ghid-subsol ${displayClass ?? ""}`}>
      <div class="ghid-rainbow" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <div class="ghid-subsol-rand">
        <p>
          Ghid realizat pentru <strong>ProActive Group Moldova</strong>, ca o continuare a programului
          „AI în Comunități”. Conținut și design:{" "}
          <a href="https://lappsus.com" target="_blank" rel="noopener">Tudor Lapp, Lappsus</a>.
        </p>
        <a class="ghid-subsol-lappsus" href="https://lappsus.com" target="_blank" rel="noopener" aria-label="Lappsus">
          <img class="ghid-logo-light" src={img("lappsus-dark.png")} alt="Lappsus" width="84" height="30" />
          <img class="ghid-logo-dark" src={img("lappsus-light.png")} alt="" aria-hidden="true" width="84" height="30" />
        </a>
      </div>
      <p class="ghid-subsol-mic">
        Instrumentele și ofertele lor se schimbă des. Dacă un pas nu mai arată la fel, căutați
        ghidul oficial din linkul „Tutoriale” al paginii. Construit cu{" "}
        <a href="https://quartz.jzhao.xyz/" target="_blank" rel="noopener">Quartz</a>; sursa pe{" "}
        <a href="https://github.com/nudoarmetudor/ghid-digital-pagm" target="_blank" rel="noopener">GitHub</a>.
      </p>
    </footer>
  )
}

Subsol.css = `
.ghid-subsol { margin: 3rem 0 4rem; font-size: .92rem; color: var(--darkgray); }
.ghid-subsol .ghid-rainbow { margin-bottom: 1.2rem; display: flex; }
.ghid-subsol-rand { display: flex; gap: 1.5rem; align-items: center; justify-content: space-between; }
.ghid-subsol-rand p { margin: 0; }
.ghid-subsol-lappsus { flex: none; background: none !important; }
.ghid-subsol-lappsus img { width: 84px; height: auto; display: block; }
.ghid-subsol .ghid-logo-dark { display: none; }
:root[saved-theme="dark"] .ghid-subsol .ghid-logo-light { display: none; }
:root[saved-theme="dark"] .ghid-subsol .ghid-logo-dark { display: block; }
.ghid-subsol-mic { opacity: .75; font-size: .82rem; margin-top: 1rem; }
@media all and (max-width: 800px) { .ghid-subsol-rand { flex-direction: column; align-items: flex-start; gap: .8rem; } }
`

export default (() => Subsol) satisfies QuartzComponentConstructor
