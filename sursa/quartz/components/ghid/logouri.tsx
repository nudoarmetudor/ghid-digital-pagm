import { joinSegments } from "../../util/path"

// Banda de logo-uri a proiectului, în ordinea din LOGOURI.pptx primit de la PAGM.
// Stă pe fond alb în ambele teme, ca logo-urile să rămână lizibile.
const LOGOURI = [
  { fisier: "ue.png", alt: "Finanțat de Uniunea Europeană", clasa: "logo-ue" },
  { fisier: "people-in-need.png", alt: "People in Need", clasa: "logo-pin" },
  { fisier: "proactive-group-moldova.png", alt: "ProActive Group Moldova", clasa: "logo-pagm" },
  { fisier: "alianta-bastinasi.png", alt: "Alianța Asociațiilor de Băștinași din Moldova", clasa: "logo-aab" },
]

export function BandaLogouri({ baseDir }: { baseDir: string }) {
  return (
    <div class="banda-logouri" role="group" aria-label="Finanțatori și parteneri">
      {LOGOURI.map((l) => (
        <img class={l.clasa} src={joinSegments(baseDir, "static", "logouri", l.fisier)} alt={l.alt} />
      ))}
    </div>
  )
}

export const bandaLogouriCss = `
.banda-logouri { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 1.2rem 2.2rem;
  background: #fff; border: 1px solid var(--lightgray); border-radius: 12px; padding: 1rem 1.4rem; }
.banda-logouri img { display: block; width: auto; max-width: 100%; }
.banda-logouri .logo-ue { height: 76px; }
.banda-logouri .logo-pin { height: 48px; }
.banda-logouri .logo-pagm { height: 62px; }
.banda-logouri .logo-aab { height: 44px; }
@media all and (max-width: 800px) {
  .banda-logouri { gap: 1rem 1.6rem; padding: .9rem 1rem; }
  .banda-logouri .logo-ue { height: 64px; }
  .banda-logouri .logo-pin { height: 40px; }
  .banda-logouri .logo-pagm { height: 52px; }
  .banda-logouri .logo-aab { height: 36px; }
}
`
