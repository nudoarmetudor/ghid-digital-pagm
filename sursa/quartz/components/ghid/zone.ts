// Zonele ghidului și culorile lor, luate din logo-ul PAGM.
// `nume` repetă titlul paginii din nevoi/; `scurt` e pentru butoanele de filtrare.
export const ZONE: Record<string, { nume: string; scurt: string; culoare: string }> = {
  vizibilitate: { nume: "Vizibilitate și comunicare", scurt: "Vizibilitate", culoare: "#e91348" },
  proiecte: { nume: "Proiecte și finanțare", scurt: "Proiecte", culoare: "#e0a800" },
  colaborare: { nume: "Colaborare și organizare", scurt: "Colaborare", culoare: "#2f9bd8" },
  date: { nume: "Date și feedback", scurt: "Date", culoare: "#3aa936" },
  ai: { nume: "AI în munca asociației", scurt: "AI", culoare: "#7f248d" },
  siguranta: { nume: "Siguranță online", scurt: "Siguranță", culoare: "#5b6072" },
}

export function zonaDin(tags: unknown): string | undefined {
  if (!Array.isArray(tags)) return undefined
  return tags.find((t) => typeof t === "string" && t in ZONE) as string | undefined
}
