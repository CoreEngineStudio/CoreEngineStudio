# CoreEngineStudio · Source Structure Map

Stand: **CES-BUILD-046 · Source Structure Map**

Diese Datei ist die Arbeitskarte für die CoreEngineStudio-Landingpage.  
Sie erklärt, wo Inhalte, Bereiche und Designs gepflegt werden.

---

## Projektpfade

Lokales Projekt:

```txt
F:\CoreEngineStudio\coreenginestudio
```

Wichtige Dateien:

```txt
src/App.jsx
src/App.css
src/assets/references/
src/components/showcase-cube/ShowcaseCube
src/components/matrix-rain/MatrixRain
```

---

## Grundregel für spätere Bearbeitung

Die Seite besteht aus zwei Hauptdateien:

```txt
App.jsx = Inhalte, Datenlisten, sichtbare Bereiche, React-Logik
App.css = Aussehen, Layout, Animationen, Farben, responsive Verhalten
```

Wenn du später etwas ändern willst:

```txt
1. Erst in App.jsx prüfen, ob es Inhalt/Daten/Text/Karten sind.
2. Danach in App.css prüfen, wie dieser Bereich aussieht.
3. Bei Bildern zusätzlich src/assets/references/ prüfen.
```

---

## App.jsx · Bereichskarte

### BUILD-Kennung

Suche nach:

```txt
BUILD_ID
```

Zuständig für:

```txt
sichtbare Versionskennung im Footer
```

---

### Farb-/Pulse-System

Suche nach:

```txt
colorPhases
colorValues
mixColor
colorToRgb
```

Zuständig für:

```txt
automatischer Farbwechsel:
green -> cyan -> purple -> red
```

Wirkt über CSS-Variablen:

```txt
--pulse-main
--pulse-next-main
--pulse-rgb
--pulse-next-rgb
```

---

### Leistungen / Core Engine Panels

Suche nach:

```txt
const services
```

Zuständig für:

```txt
Bereich: Leistungen
Karten:
- Sichtbarer Auftritt / Webseiten
- Smarte Engine / Digitale Systeme
- Weniger Handarbeit / Automatisierung
- Look & Marke / Design & Auftritt
- Weiterentwicklung / Betreuung
```

Typische Änderungen:

```txt
Kartentext ändern
Punkte ändern
Icon ändern
Reihenfolge ändern
```

Styling in App.css suchen nach:

```txt
SECTION: LEISTUNGEN
premium-service-card
service-engine-visual
```

---

### WebCube / sechs Richtungen

Suche nach:

```txt
const cubeThemes
```

Zuständig für:

```txt
Bereich: Webseiten-Cube · Version 1
Karten:
- Business Clean
- Dark Premium
- Gaming Matrix
- Shopflow
- Booking / Rental
- Smart Systems
```

Wichtiges Muster:

```txt
theme.label = kleine Zeile oben
theme.title = große Zeile darunter
theme.text  = Beschreibung
theme.tone  = rechte Stilzeile oben in der Karte
```

Styling in App.css suchen nach:

```txt
SECTION: WEBCUBE
theme-title-stack
theme-title-label
theme-title-main
theme-card
```

---

### CoreHub / Showroom

Suche nach:

```txt
const hubCubes
```

Zuständig für:

```txt
Bereich: Der Showroom wird zur Beratung
CoreHub-Karten:
- Webseiten
- Systeme
- Portale
- Tools
- Automation
- Design
```

Styling in App.css suchen nach:

```txt
SECTION: COREHUB
corehub-panel
hub-preview-upgrade
hub-card
```

---

### Referenzen / CaseCube / Case Viewer

Suche nach:

```txt
const referenceCases
```

Zuständig für:

```txt
Bereich: Referenzen
CaseCube
Referenz-Auswahlbuttons
Detailkarte
Großansicht / Case Viewer
```

Bildfelder:

```txt
image   = Hauptbild im CaseCube
gallery = Bilder in der Großansicht
url     = optionaler Live-Link
```

Bilder liegen unter:

```txt
src/assets/references/
```

Styling in App.css suchen nach:

```txt
SECTION: REFERENZEN
SECTION: CASE VIEWER
reference-case-cube
reference-detail-card
case-preview-modal
case-preview-arrow
```

---

### Ablauf / Projekt-Steps

Suche nach:

```txt
const steps
```

Zuständig für:

```txt
Bereich: Vom ersten Gespräch bis zur fertigen Engine
linke Step-Karten
```

Felder:

```txt
tag   = kleine Zeile oben
title = große Überschrift
text  = Beschreibung
```

Styling in App.css suchen nach:

```txt
SECTION: ABLAUF
final-step-card
```

---

### Builder Visual / Baukastenlösungsfenster

Im JSX suchen nach:

```txt
chaos-builder-visual
builder-chip
merge-project-chip
chaos-output
```

Zuständig für:

```txt
rechtes Visual im Ablaufbereich:
01 Idee
02 Ziel
03 Design
04 Daten
05 Projekt
Engine-Fenster
```

Styling in App.css suchen nach:

```txt
chaos-builder-visual
builder-chip
merge-project-chip
builder-sort-beam
chaos-output
```

---

### Kontakt / Projektanfrage

Im JSX suchen nach:

```txt
final-contact-section
contact-card
contact-card-grid-polished
```

Zuständig für:

```txt
Bereit für den nächsten digitalen Schritt?
E-Mail-Karte
2x2 Hinweisraster
```

Kontaktadresse:

```txt
info@coreenginestudio.de
```

Styling in App.css suchen nach:

```txt
SECTION: KONTAKT
contact-card
contact-mail-link
contact-card-grid-polished
```

---

## App.css · Bereichskarte

In `App.css` wurden große Abschnittsmarker eingefügt.  
Suche direkt nach:

```txt
SECTION:
```

Wichtige Marker:

```txt
SECTION: GLOBAL / DESIGN-TOKENS / BACKGROUND
SECTION: HEADER / NAVIGATION
SECTION: HERO / START / CORE CUBE
SECTION: LEISTUNGEN / SERVICE CARDS / SERVICE ENGINE FLOW
SECTION: COREHUB / SHOWROOM
SECTION: WEBCUBE / THEME CARDS
SECTION: REFERENZEN / CASECUBE
SECTION: CASE VIEWER / MODAL / BILDERGALERIE
SECTION: ABLAUF / STEP CARDS / BUILDER VISUAL
SECTION: KONTAKT / PROJEKTANFRAGE
SECTION: FOOTER
SECTION: QUICK SEARCH MAP / AKTUELL WICHTIGE KLASSEN
```

---

## Häufige Änderungswünsche und Fundstellen

### Texte der Leistungen ändern

```txt
App.jsx -> const services
App.css -> premium-service-card / service-lead-card
```

### WebCube-Karten ändern

```txt
App.jsx -> const cubeThemes
App.css -> theme-card / theme-title-stack / theme-title-label / theme-title-main
```

### Referenzbild austauschen

```txt
src/assets/references/
App.jsx -> const referenceCases
```

### Referenz-Galerie erweitern

```txt
App.jsx -> referenceCases -> gallery: [...]
src/assets/references/ -> neues Bild ablegen
```

### Ablaufkarten ändern

```txt
App.jsx -> const steps
App.css -> final-step-card
```

### Builder-Visual ändern

```txt
App.jsx -> chaos-builder-visual
App.css -> chaos-builder-visual / builder-chip / merge-project-chip / chaos-output
```

### Kontaktkarte ändern

```txt
App.jsx -> final-contact-section / contact-card-grid-polished
App.css -> contact-card / contact-mail-link / contact-card-grid-polished
```

---

## Wichtiger Hinweis zur CSS-Struktur

Die CSS-Datei enthält viele spätere Build-Blöcke mit Overrides.  
Das ist aktuell gewollt, weil die Website iterativ aufgebaut wurde.

Bei späterem Cleanup wäre sinnvoll:

```txt
1. funktionierenden Stand sichern
2. CSS nur abschnittsweise zusammenführen
3. danach npm run build testen
4. danach optisch mit Screenshots vergleichen
```

Aktuell ist das Ziel dieser Version:

```txt
bessere Orientierung ohne Designänderung
```
