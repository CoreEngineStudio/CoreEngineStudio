# CoreEngineStudio

**CoreEngineStudio** ist ein Digital Studio für Webseiten, Systeme, Portale, Automatisierung und smarte digitale Auftritte.

> Digitale Auftritte. Smarte Systeme. Klare Engine.

Die Website zeigt einen interaktiven Showroom mit mehreren Showcase-Welten: Business Clean, Gaming Matrix, Shopflow, Booking/Rental, Smart Systems und Dark Premium.

## Live

- Website: https://coreenginestudio.de
- Projektstart: https://coreenginestudio.de/projekt-starten

## Technik

- React
- Vite
- Cloudflare Pages
- GitHub Deployment

## Lokale Entwicklung

```bat
cd /d F:\CoreEngineStudio\coreenginestudio
npm install
npm run dev
```

## Build & Preview

```bat
cd /d F:\CoreEngineStudio\coreenginestudio
npm run build
npm run preview -- --host 0.0.0.0
```

## Cloudflare Pages Build-Konfiguration

```txt
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: leer lassen
```

## Projektstruktur

```txt
src/       React-App, Komponenten, Styles und Assets
public/    statische Dateien, Redirects, Manifest, Sitemap
CODEMAP.md interne Projektkarte und Änderungsübersicht
```

## Hinweise

Der Ordner `dist/` wird bei jedem Build automatisch erzeugt und sollte nicht manuell bearbeitet werden. Cloudflare Pages baut die Website aus dem GitHub-Repository und veröffentlicht den erzeugten `dist`-Ordner.
