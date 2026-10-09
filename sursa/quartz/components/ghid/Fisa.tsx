import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { ZONE, zonaDin } from "./zone"

// Caseta de sub titlu: fișa instrumentului (cost, platforme, link) sau,
// pentru o rețetă, durata, nivelul și instrumentele.
const Fisa: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const fm = (fileData.frontmatter ?? {}) as Record<string, any>
  const slug = fileData.slug ?? ""
  const zona = zonaDin(fm.tags)
  const culoare = zona ? ZONE[zona].culoare : "var(--secondary)"
  const eticheta = zona ? ZONE[zona].nume : undefined

  if (slug.startsWith("instrumente/") && !slug.endsWith("index")) {
    const rand = (k: string, v: unknown) =>
      v ? (
        <div class="fisa-rand">
          <dt>{k}</dt>
          <dd>{String(v)}</dd>
        </div>
      ) : null
    return (
      <aside class="fisa" style={`--zona:${culoare}`}>
        {eticheta && <span class="fisa-zona">{eticheta}</span>}
        <dl>
          {rand("Cost", fm.cost)}
          {rand("Pe ce merge", fm.platforme)}
          {rand("Interfață în română", fm.limba_ro)}
        </dl>
        {fm.link && (
          <a class="fisa-buton external" href={fm.link} target="_blank" rel="noopener">
            Deschideți {fm.title} ↗
          </a>
        )}
      </aside>
    )
  }

  if (slug.startsWith("cum-sa-faci/") && !slug.endsWith("index")) {
    const instr = Array.isArray(fm.instrumente) ? fm.instrumente.join(", ") : fm.instrumente
    return (
      <aside class="fisa fisa-reteta" style={`--zona:${culoare}`}>
        {eticheta && <span class="fisa-zona">{eticheta}</span>}
        <div class="fisa-insigne">
          {fm.durata && <span>⏱ {fm.durata}</span>}
          {fm.nivel && <span>Nivel: {fm.nivel}</span>}
          {instr && <span>Cu: {instr}</span>}
        </div>
      </aside>
    )
  }

  if (slug.startsWith("nevoi/") && !slug.endsWith("index")) {
    return <div class="fisa-banda" style={`--zona:${culoare}`} aria-hidden="true" />
  }
  return null
}

Fisa.css = `
.fisa { margin: 1rem 0 1.5rem; padding: .9rem 1.1rem; border-radius: 12px; border: 1px solid var(--lightgray);
  border-left: 5px solid var(--zona); background: var(--highlight); }
.fisa-zona { display: inline-block; font-size: .75rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  color: var(--zona); margin-bottom: .4rem; }
.fisa dl { margin: 0; display: grid; gap: .3rem; }
.fisa-rand { display: grid; grid-template-columns: 10.5rem 1fr; gap: .6rem; }
.fisa dt { font-weight: 600; color: var(--dark); }
.fisa dd { margin: 0; }
.fisa a.fisa-buton { display: inline-block; margin-top: .8rem; padding: .55rem 1rem; border-radius: 8px; font-weight: 700;
  background: linear-gradient(135deg, #3b9dd7, #e82e61); color: #fff !important; text-decoration: none; }
.fisa a.fisa-buton:hover { opacity: .9; }
.fisa-insigne { display: flex; flex-wrap: wrap; gap: .45rem; }
.fisa-insigne span { font-size: .85rem; padding: .25rem .65rem; border-radius: 999px; background: var(--light); border: 1px solid var(--lightgray); }
.fisa-banda { height: 6px; border-radius: 3px; background: var(--zona); margin: .4rem 0 1.2rem; max-width: 120px; }
@media all and (max-width: 800px) { .fisa-rand { grid-template-columns: 1fr; gap: 0; } .fisa-rand + .fisa-rand { margin-top: .35rem; } }
`

export default (() => Fisa) satisfies QuartzComponentConstructor
