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
          { text: "Stack Technique", link: "/documentation/01-stack-technique" },
          { text: "Architecture des Fichiers", link: "/documentation/02-architecture" },
          { text: "Configuration TypeScript", link: "/documentation/03-typescript-config" },
          { text: "Sources de Données", link: "/documentation/04-sources-donnees" },
          { text: "Système i18n", link: "/documentation/05-i18n" },
          { text: "Circulation des Données", link: "/documentation/06-circulation-donnees" },
          { text: "Système de Thèmes", link: "/documentation/07-themes" },
          { text: "Styling & CSS", link: "/documentation/08-styling" },
          { text: "Composants Principaux", link: "/documentation/09-composants" },
          { text: "Utilitaires", link: "/documentation/10-utilitaires" },
          { text: "SEO & Meta Tags", link: "/documentation/11-seo" },
          { text: "Accessibilité", link: "/documentation/12-accessibilite" },
          { text: "Sécurité", link: "/documentation/13-securite" },
          { text: "Build & Déploiement", link: "/documentation/14-build-deploiement" },
          { text: "Nouvelles Fonctionnalités", link: "/documentation/15-nouvelles-fonctionnalites" },
          { text: "Debugging", link: "/documentation/16-debugging" },
          { text: "Maintenance", link: "/documentation/17-maintenance" }
        ]
      }
    ],
    search: {
      provider: "local"
    }
  }
});
