import { pathToRoot, joinSegments } from "../../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { classNames } from "../../util/lang"

// Antetul din stânga: logo-ul PAGM (două variante, pentru fond deschis și închis)
// și numele ghidului. Înlocuiește PageTitle.
const Brand: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const logo = (v: string) => joinSegments(baseDir, "static", v)
  return (
    <div class={classNames(displayClass, "ghid-brand")}>
      <a href={baseDir} class="ghid-brand-link" aria-label="Pagina principală a ghidului">
        <img class="ghid-logo ghid-logo-light" src={logo("pagm-logo.svg")} alt="ProActive Group Moldova" width="188" height="100" />
        <img class="ghid-logo ghid-logo-dark" src={logo("pagm-logo-dark.svg")} alt="" aria-hidden="true" width="188" height="100" />
        <span class="ghid-brand-title">{cfg.pageTitle}</span>
        <span class="ghid-brand-scurt">Ghid digital</span>
      </a>
      <div class="ghid-rainbow" aria-hidden="true"><span /><span /><span /><span /><span /></div>
    </div>
  )
}

Brand.css = `
.ghid-brand { margin: 0; }
.ghid-brand-link { display: flex; flex-direction: column; gap: .35rem; color: var(--dark) !important; text-decoration: none; background: none !important; }
.ghid-logo { width: 172px; height: auto; display: block; margin-left: -6px; }
.ghid-logo-dark { display: none; }
:root[saved-theme="dark"] .ghid-logo-light { display: none; }
:root[saved-theme="dark"] .ghid-logo-dark { display: block; }
.ghid-brand-title { font-family: var(--titleFont); font-weight: 800; font-size: 1.3rem; line-height: 1.15; letter-spacing: -.01em; }
.ghid-brand-scurt { display: none; }
.ghid-rainbow { display: flex; gap: 4px; margin-top: .6rem; }
.ghid-rainbow span { height: 4px; flex: 1; border-radius: 2px; }
.ghid-rainbow span:nth-child(1) { background: #e91348; }
.ghid-rainbow span:nth-child(2) { background: #fbc108; }
.ghid-rainbow span:nth-child(3) { background: #40b93c; }
.ghid-rainbow span:nth-child(4) { background: #51ade5; }
.ghid-rainbow span:nth-child(5) { background: #7f248d; }
@media all and (max-width: 800px) {
  .ghid-brand-link { flex-direction: row; align-items: center; gap: .6rem; }
  .ghid-logo { width: 92px; margin-left: 0; }
  .ghid-brand-title { display: none; }
  .ghid-brand-scurt { display: block; font-family: var(--titleFont); font-weight: 800; font-size: 1rem; line-height: 1.1; }
  .ghid-rainbow { display: none; }
}
`

export default (() => Brand) satisfies QuartzComponentConstructor
