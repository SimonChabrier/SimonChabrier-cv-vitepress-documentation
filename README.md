
# 📚 Documentation Technique – Portfolio Simon Chabrier

Ce dépôt contient la documentation technique de mon portfolio, générée avec [VitePress](https://vitepress.dev/).

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de documentation en développement
npm run docs:dev

# Générer la documentation statique
npm run docs:build

# Prévisualiser la documentation générée
npm run docs:preview
```

## 📁 Structure du projet

- `docs/` : Dossier principal de la documentation
	- `index.md` : Page d'accueil de la doc
	- `documentation/` : Tous les chapitres thématiques (architecture, stack, i18n, etc.)
- `.vitepress/` : Configuration VitePress (config.mjs, thème, etc.)
- `package.json` : Scripts et dépendances

## ✍️ Modifier la documentation

Éditez ou ajoutez des fichiers Markdown dans `docs/documentation/` pour enrichir la doc. Utilisez le frontmatter suivant en haut de chaque fichier :

```yaml
---
title: Titre de la page
description: Description courte de la page
---
```

## 🌐 Accéder à la documentation

Après lancement du serveur (`npm run docs:dev`), ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 🛠️ Personnalisation

- Navigation, sidebar et recherche sont configurées dans `docs/.vitepress/config.mjs`.
- Pour changer le label "On this page" : modifiez la propriété `outline.label` dans la config.

## 📦 Dépendances principales

- [VitePress](https://vitepress.dev/) (générateur de documentation statique)

## 👤 Auteur

Simon Chabrier – [simonchabrier.fr](https://simonchabrier.fr)
