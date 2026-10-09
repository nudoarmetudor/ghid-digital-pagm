import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Ghid digital pentru asociații (ProActive Group Moldova).
 * Fonturile sunt servite de pe site (quartz/static/fonts), nu de la Google:
 * vizitatorii nu își trimit adresa IP unui terț doar ca să citească ghidul.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ghid digital pentru asociații",
    pageTitleSuffix: " · Ghid digital PAGM",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ro-RO",
    baseUrl: "nudoarmetudor.github.io/ghid-digital-pagm",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        title: "Urbanist",
        header: "Urbanist",
        body: "Onest",
        code: "ui-monospace",
      },
      colors: {
        // Lumină: fond alb-gheață Lappsus, legături în movul PAGM, accent coral.
        lightMode: {
          light: "#ffffff",
          lightgray: "#e3e5ec",
          gray: "#9a9caa",
          darkgray: "#313544",
          dark: "#1a1d28",
          secondary: "#7f248d",
          tertiary: "#e82e61",
          highlight: "rgba(81, 173, 229, 0.12)",
          textHighlight: "#fbc10866",
        },
        // Întuneric: fondul Lappsus, legături în albastrul comun celor două branduri.
        darkMode: {
          light: "#1a1d28",
          lightgray: "#313544",
          gray: "#6d7083",
          darkgray: "#d6d8e0",
          dark: "#edeff4",
          secondary: "#51ade5",
          tertiary: "#f0587f",
          highlight: "rgba(81, 173, 229, 0.14)",
          textHighlight: "#fbc10855",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false, enableCheckbox: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "absolute", openLinksInNewTab: true }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
