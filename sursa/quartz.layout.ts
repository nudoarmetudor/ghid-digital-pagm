import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Ordinea din meniu: întâi nevoile, apoi rețetele, apoi fișele instrumentelor.
// Funcția e trimisă ca text în browser, deci rămâne fără referințe din afara ei.
const sortare = (a: any, b: any) => {
  const rang: Record<string, number> = {
    nevoi: 1, "cum-sa-faci": 2, instrumente: 3, prompturi: 4, autoevaluare: 5,
    "ce-am-facut-impreuna": 6, despre: 7,
    vizibilitate: 11, proiecte: 12, colaborare: 13, date: 14, ai: 15, siguranta: 16,
  }
  const ra = rang[a.slugSegment] ?? 50
  const rb = rang[b.slugSegment] ?? 50
  if (ra !== rb) return ra - rb
  return a.displayName.localeCompare(b.displayName, "ro", { numeric: true, sensitivity: "base" })
}

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Subsol(),
}

const stanga = [
  Component.Brand(),
  Component.MobileOnly(Component.Spacer()),
  Component.Flex({
    components: [
      { Component: Component.Search(), grow: true },
      { Component: Component.Darkmode() },
    ],
  }),
  Component.Explorer({ title: "Ghidul", folderDefaultState: "collapsed", sortFn: sortare }),
]

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({ rootName: "Acasă" }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.Fisa(),
    Component.ConditionalRender({
      component: Component.Acasa(),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  left: stanga,
  right: [
    Component.Graph({
      localGraph: { depth: 1, showTags: false },
      globalGraph: { showTags: false },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({ rootName: "Acasă" }), Component.ArticleTitle()],
  left: stanga,
  right: [],
}
