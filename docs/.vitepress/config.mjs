import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Accueil",
  description: "Documentation technique du portfolio Simon Chabrier",
  lang: "fr-FR",
  themeConfig: {
    // nav: [{ text: "Accueil", link: "/" }],
    outline: {
      label: "Sur cette page"
    },
    sidebar: [
      {
        // text: "Chapitres",
        items: [
          // { text: "Accueil", link: "/" },
          { text: "Stack Technique", link: "/docs/documentation/01-stack-technique" },
          { text: "Architecture des Fichiers", link: "/docs/documentation/02-architecture" },
          { text: "Configuration TypeScript", link: "/docs/documentation/03-typescript-config" },
          { text: "Sources de Données", link: "/docs/documentation/04-sources-donnees" },
          { text: "Système i18n", link: "/docs/documentation/05-i18n" },
          { text: "Circulation des Données", link: "/docs/documentation/06-circulation-donnees" },
          { text: "Système de Thèmes", link: "/docs/documentation/07-themes" },
          { text: "Styling & CSS", link: "/docs/documentation/08-styling" },
          { text: "Composants Principaux", link: "/docs/documentation/09-composants" },
          { text: "Utilitaires", link: "/docs/documentation/10-utilitaires" },
          { text: "SEO & Meta Tags", link: "/docs/documentation/11-seo" },
          { text: "Accessibilité", link: "/docs/documentation/12-accessibilite" },
          { text: "Sécurité", link: "/docs/documentation/13-securite" },
          { text: "Build & Déploiement", link: "/docs/documentation/14-build-deploiement" },
          { text: "Nouvelles Fonctionnalités", link: "/docs/documentation/15-nouvelles-fonctionnalites" },
          { text: "Debugging", link: "/docs/documentation/16-debugging" },
          { text: "Maintenance", link: "/docs/documentation/17-maintenance" }
        ]
      }
    ],
    search: {
      provider: "local"
    }
  }
});
