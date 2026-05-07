# CoreEngineStudio · Source Structure Map

Stand: **CES-BUILD-115 · Public Content Cleanup Check**


## CES-BUILD-115 · Public Content Cleanup Check

### Ziel
- Letzter Kundentauglichkeits-Check vor einer öffentlichen Prüfung.
- Sichtbare Ausbau-, Devlink-, später-/vorbereitet- und Demo-Preview-Sprache in kundenfertige Showcase-Sprache glätten.
- Datenschutzseite auf den aktuellen Stand fokussieren, ohne geplante spätere Tools als aktive Nutzung darzustellen.
- Keine neuen Funktionen, keine neuen Styles, keine Änderungen an CoreCube-Logik oder Live-Links.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-115 · Public Content Cleanup Check` gesetzt
  - CoreHub-/Showcase-Hinweise von Ausbau-/Baustellen-Wording auf kundenfertige Formulierungen geglättet
  - Galerie- und Storytexte für All4You, Inselleben, Hammer, RentalOps, CoreOps und Dark Premium an öffentliche Kundensprache angepasst
  - sichtbare Begriffe wie `Devlink`, `Mockup`, `Demo-Link folgt später`, `Nächster Ausbau`, `geplante Demo-Bausteine` und ähnliche Entwicklungswörter aus der Oberfläche entfernt bzw. neutralisiert
  - Datenschutzseite verschlankt: sichtbarer Abschnitt `Geplante Erweiterungen` entfernt und Fokus auf aktuellen Stand gelegt
  - Referenzstatus `Demo Preview` / `Beta Preview` auf `Showcase` vereinheitlicht

### Nicht geändert
- Keine Änderung an `src/App.css`
- Keine Änderung an Footer-/Social-Icon-Layout
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Live-Demo-Links oder Bildern
- Keine Änderung an `/projekt-starten` Formular-/Mail-Fallback-Logik
- Keine Änderung an Impressum-Daten, Sitemap oder Redirects

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- coreHubSteps sichtbare Notizen
- Showcase-/Galerie-Texte
- getCoreHubDemoTarget() sichtbare Status-/Next-Texte
- referenceCases Statuslabel
- DatenschutzPage sichtbare Abschnitte
```

---

## CES-BUILD-114 · Scroll Target Correction

### Ziel
- Die Header-Navigation für `Leistungen` und `Ablauf` minimal sauberer ausrichten.
- Den Hero-Button `CoreCube starten` nicht zu tief in den CoreHub scrollen lassen.
- Sichtbare fallback-/routebezogene Texte etwas kundenfertiger formulieren.
- Keine neuen Funktionen, keine neuen Demos und keine Änderung an Footer/Socials.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-114 · Scroll Target Correction` gesetzt
  - `scrollToShowroom()` für den Hero-CTA `CoreCube starten` höher/ruhiger ausgerichtet
  - generischen CoreHub-Fallbacktext von Ausbau-/Shell-Sprache auf kundenfertige Showcase-Sprache geglättet
- `src/App.css`
  - neue CSS-Sektion `CES-BUILD-113 / SCROLL ANCHOR POLISH` ergänzt
  - `#leistungen` und `#ablauf` bekommen eigene `scroll-margin-top`-Werte für sauberere Header-Navigation
  - mobile Scroll-Margins reduziert, damit kleine Screens nicht zu viel Leerraum bekommen

### Nicht geändert
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Live-Demo-Links oder Bildern
- Keine Änderung an Footer-Social-Icons
- Keine Änderung an `/projekt-starten`, Impressum, Datenschutz, Sitemap oder Redirects
- Keine sichtbaren internen Tipps, TODOs oder Entwicklerkommentare auf der Oberfläche ergänzt

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- scrollToShowroom()
- getCoreHubDemoTarget() Fallbacktext

src/App.css
- SECTION: CES-BUILD-113 / SCROLL ANCHOR POLISH
```

---

## CES-BUILD-112 · Footer Social Icon Polish

### Ziel
- Die bestätigte kompakte Footer-Höhe aus Build 111 beibehalten.
- Instagram, Discord und TikTok nicht mehr als Textkürzel `IG / DC / TT`, sondern als echte Icon-Buttons darstellen.
- Social-Icons etwas größer und hochwertiger zeigen, ohne den Footer wieder breit oder hoch wirken zu lassen.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-112 · Footer Social Icon Polish` gesetzt
  - Social-Icon-Assets importiert
  - `publicSocialLinks` auf Icon-Daten umgestellt
  - Social-Link-Markup in `SiteFooter()` zeigt jetzt nur noch das jeweilige Bild/Icon mit zugänglichem `aria-label`
- `src/App.css`
  - neue CSS-Sektion `CES-BUILD-112 / FOOTER SOCIAL ICON POLISH` ergänzt
  - Social-Buttons als etwas größere quadratische Icon-Pills gestaltet
  - mobile Icon-Größe leicht reduziert, Footer bleibt kompakt
- `src/assets/social/`
  - `social-instagram.png`
  - `social-discord.png`
  - `social-tiktok.svg`

### Nicht geändert
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Live-Demo-Links oder Bildern
- Keine Änderung an `/projekt-starten` Formular-/Mail-Fallback-Logik
- Keine Änderung an Impressum-/Datenschutztexten, Sitemap oder Redirects
- Keine sichtbaren internen Tipps, TODOs oder Entwicklerkommentare auf der Oberfläche ergänzt

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- Social-Asset-Imports
- publicSocialLinks
- SiteFooter() Social-Link-Markup

src/App.css
- SECTION: CES-BUILD-112 / FOOTER SOCIAL ICON POLISH

src/assets/social
- Social-Icon-Dateien
```

---

## CES-BUILD-111 · Footer Compact Polish

### Ziel
- Den unteren Footer kompakter und weniger dominant machen.
- Social Links nicht mehr als breite Text-Panels zeigen, sondern als kleine hochwertige Kürzel-Buttons.
- Trust-Hinweise wie `Erstkontakt kostenlos`, `Showcases live prüfbar`, `Deutschlandweit anfragbar` und `Website + Engine` behalten, aber schmaler verpacken.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-111 · Footer Compact Polish` gesetzt
  - `publicSocialLinks` um kurze Labels `IG`, `DC`, `TT` ergänzt
  - Social-Link-Markup in `SiteFooter()` auf kompakte Pills mit zugänglichem `aria-label`/`title` umgestellt
- `src/App.css`
  - neue CSS-Sektion `CES-BUILD-111 / FOOTER COMPACT POLISH` ergänzt
  - Footer-Padding, Spaltenabstände, Social-Pills, Link-Chips, Trust-Chips und mobile Footer-Regeln kompakter gestaltet

### Nicht geändert
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Live-Demo-Links oder Bildern
- Keine Änderung an `/projekt-starten` Formular-/Mail-Fallback-Logik
- Keine Änderung an Impressum-/Datenschutztexten, Sitemap oder Redirects
- Keine sichtbaren internen Tipps, TODOs oder Entwicklerkommentare auf der Oberfläche ergänzt

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- publicSocialLinks
- SiteFooter() Social-Link-Markup

src/App.css
- SECTION: CES-BUILD-111 / FOOTER COMPACT POLISH
```

---


## CES-BUILD-110 · Public Launch Polish

### Ziel
- Die bestätigte öffentliche Basis noch einmal ruhig glätten, ohne neue Funktionen oder CoreCube-Änderungen zu starten.
- Footer und Kontaktwege launch-reifer machen: Projektstart, Showroom, E-Mail, WhatsApp, Impressum/Datenschutz und Social Links sind dezent erreichbar.
- Startseiten-Wording klarer auf kostenlosen, unverbindlichen Erstkontakt und konkrete digitale Angebote ausrichten.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-110 · Public Launch Polish` gesetzt
  - Footer-Navigation um WhatsApp ergänzt und Reihenfolge klarer sortiert
  - dezente Footer-Social-Links für Instagram, Discord und TikTok ergänzt
  - Trust-Hinweis `Showcases live prüfbar` ergänzt
  - Leistungsheading und Beschreibung kundenklarer formuliert
  - Kontaktabschluss stärker auf kostenlosen, unverbindlichen Projektstart formuliert
- `src/App.css`
  - Footer-Social-Links an vorhandene Footer-Chip-Optik angepasst
  - mobile Footer-Regeln für Social Links ergänzt
  - Dokumentationsblock `CES-BUILD-110 / PUBLIC LAUNCH POLISH` ergänzt

### Nicht geändert
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Live-Demo-Links oder Bildern
- Keine Änderung an `/projekt-starten` Formular-/Mail-Fallback-Logik
- Keine Änderung an Impressum-/Datenschutztexten, Sitemap oder Redirects

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- publicTrustFooterItems
- SiteFooter()
- serviceOfferNotes
- Abschnitt #leistungen
- Abschnitt #kontakt

src/App.css
- Footer-Link-/Social-Link-Selektoren
- SECTION: CES-BUILD-110 / PUBLIC LAUNCH POLISH
```

---

## CES-BUILD-109 · Service Sections & Offer Clarity

### Ziel
- Leistungsbereich der Startseite klarer als konkrete Angebotsübersicht ausbauen.
- Besucher sollen schneller verstehen: CoreEngineStudio baut Webseiten, Shops, Anfrageflows, Buchungssysteme, Portale, Dashboards, Automatisierung und Betreuung.
- Keine neue Funktion, kein Backend und keine Änderung am CoreCube-/Showcase-Routing.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-109 · Service Sections & Offer Clarity` gesetzt
  - Datenliste `services` auf sechs klare Angebotsbereiche erweitert
  - neue Datenliste `serviceOfferNotes` ergänzt
  - Leistungsheading, Lead-Karte und CTA-Wording kundenklarer formuliert
  - Orientierungsstreifen unter den Leistungskarten ergänzt
  - CTA-Reihe `Projekt starten` und `Showcases ansehen` ergänzt
- `src/App.css`
  - neue CSS-Sektion `CES-BUILD-109 / SERVICE SECTIONS & OFFER CLARITY` ergänzt
  - Orientierungsstreifen und CTA-Reihe responsiv gestylt

### Nicht geändert
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Live-Demo-Links oder Bildern
- Keine Änderung an `/projekt-starten` Formular-/Mail-Fallback-Logik
- Keine Änderung an Legal Pages, Sitemap, Redirects oder SEO-Meta-Daten

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- services
- serviceOfferNotes
- Abschnitt #leistungen

src/App.css
- SECTION: CES-BUILD-109 / SERVICE SECTIONS & OFFER CLARITY
```

---



## CES-BUILD-108 · Legal Pages Scaffold

### Ziel
- Dezente rechtliche Pflichtseiten für die öffentliche Basis ergänzen, ohne den CoreCube, Showcase-Welten oder Projektstart-Flow umzubauen.
- Footer-Links zu `/impressum` und `/datenschutz` ergänzen.
- Impressum mit den echten Anbieterangaben von CoreEngineStudio pflegen.
- Datenschutzerklärung auf den aktuellen statischen Stand abstimmen: Cloudflare Pages, externe Links, Mailto/Kopier-Fallback und SessionStorage-Kontext.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-108 · Legal Pages Scaffold` gesetzt
  - Pfade `LEGAL_IMPRESSUM_PATH` und `LEGAL_PRIVACY_PATH` ergänzt
  - Anbieter-/Kontaktdaten zentral über `legalProvider`, `PUBLIC_PHONE_*`, `PUBLIC_WHATSAPP_URL` und `publicSocialLinks` gepflegt
  - `SiteFooter()` um dezente Links zu Impressum und Datenschutz erweitert
  - neue Komponenten `LegalPageShell()`, `LegalSection()`, `ImpressumPage()` und `DatenschutzPage()` ergänzt
  - Routing in `App()` für `/impressum` und `/datenschutz` ergänzt
- `src/App.css`
  - neue CSS-Sektion `CES-BUILD-108 / LEGAL PAGES SCAFFOLD` ergänzt
  - ruhiges, lesbares Legal-Layout mit Mobile-Regeln ergänzt
- `index.html`
  - Build-Kommentar aktualisiert
  - JSON-LD um `legalName`, Telefonnummer, Gründer, Anschrift und Social Links ergänzt
- `public/sitemap.xml`
  - `/impressum` und `/datenschutz` aufgenommen

### Nicht geändert
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Galerie-Bildern oder Live-Demo-Links
- Keine Änderung an `/projekt-starten` Formular-/Mail-Fallback-Logik
- Keine Steuernummer veröffentlicht; nur Kleinunternehmerhinweis nach § 19 UStG sichtbar
- Keine aktive Analytics-/Cookie-/Supabase-/Resend-Integration behauptet

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- LEGAL_IMPRESSUM_PATH / LEGAL_PRIVACY_PATH
- legalProvider / publicSocialLinks
- SiteFooter()
- LegalPageShell() / LegalSection()
- ImpressumPage() / DatenschutzPage()
- App() Routen

src/App.css
- SECTION: CES-BUILD-108 / LEGAL PAGES SCAFFOLD

index.html
- JSON-LD Organization

public/sitemap.xml
- /impressum
- /datenschutz
```

---


## CES-BUILD-107 · SEO & Public Trust Basics

### Ziel
- Die bestätigte CoreCube-/Projektstart-Basis öffentlich sauberer vorbereiten, ohne neue Produktbereiche oder große UI-Umbauten zu starten.
- SEO-Grunddaten für die Hauptseite aktualisieren und `/projekt-starten` in die Sitemap aufnehmen.
- Footer als klareren Vertrauens-/Kontaktbereich ausbauen: Projektstart, E-Mail, Showroom und kurze Trust-Hinweise.

### Geändert
- `index.html`
  - Meta Title/Description auf die aktuelle Positionierung angepasst
  - OpenGraph-/Twitter-Texte aktualisiert
  - JSON-LD um Website-Grunddaten ergänzt
- `public/sitemap.xml`
  - `/projekt-starten` als eigene URL ergänzt
- `public/site.webmanifest`
  - Shortcut `Projekt starten` ergänzt
- `public/_redirects`
  - SPA-Fallback für direkte Unterseitenaufrufe abgesichert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-107 · SEO & Public Trust Basics` gesetzt
  - zentrale Konstanten `PUBLIC_CONTACT_EMAIL` und `PUBLIC_SITE_DOMAIN` ergänzt
  - wiederverwendbaren `SiteFooter()` ergänzt
  - Footer auf Startseite und `/projekt-starten` vereinheitlicht
- `src/App.css`
  - neue CSS-Sektion `CES-BUILD-107 / SEO & PUBLIC TRUST BASICS` ergänzt
  - Footer-Links und Trust-Hinweise responsive gestaltet

### Nicht geändert
- Keine Änderung an CoreCube-/CoreHub-Routing
- Keine Änderung an Showcase-Welten, Live-Demo-Links oder Bildern
- Keine Backend-/Formularübermittlung ergänzt
- Keine Impressum-/Datenschutzinhalte erfunden; echte rechtliche Angaben müssen später separat ergänzt werden

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- PUBLIC_CONTACT_EMAIL / PUBLIC_SITE_DOMAIN
- publicTrustFooterItems
- SiteFooter()

src/App.css
- SECTION: CES-BUILD-107 / SEO & PUBLIC TRUST BASICS

index.html
public/sitemap.xml
public/site.webmanifest
public/_redirects
```

---

## CES-BUILD-106 · Mobile & Customer QA Polish

### Ziel
- CoreCube-/Showroom-Basis nicht umbauen, sondern aus Kundensicht und auf kleinen Screens ruhiger machen.
- `/projekt-starten` besser auf Mobile/Tablet nutzbar halten.
- CTA-/Kontaktlogik klarer formulieren, ohne Backend oder Live-Demo-Links anzufassen.

### Geändert
- `src/App.jsx`
  - Build-Kennung auf `CES-BUILD-106 · Mobile & Customer QA Polish` gesetzt
  - Projektstart-Navigation auf der Unterseite klarer auf den Assistenten geführt
  - Vertrauenstext „Direkter Kontakt“ an Mailprogramm + Kopier-Fallback angepasst
  - Zusammenfassungstext verständlicher gemacht: Mailprogramm öffnen oder Kopier-Block nutzen
- `src/App.css`
  - neue CSS-Sektion `CES-BUILD-106 · MOBILE & CUSTOMER QA POLISH` ergänzt
  - Tablet-Regeln für Projektstart-Header/Nav ergänzt
  - Mobile-Regeln für Projektstart-Hero, Statuskarte, Trust-Karten, Formular und Buttons ergänzt
  - Mobile-Regeln für CoreHub-Demo-Shell, Galerie-Dock und Demo-Actions ergänzt

### Nicht geändert
- Keine Änderung an ShowcaseCube/MatrixRain
- Keine Änderung an Bildern oder Assets
- Keine Änderung an Live-Demo-Links
- Keine Änderung am CoreCube-Routing
- Keine Backend-/Formularübermittlung ergänzt

---

## CES-BUILD-105 · Project Start Confidence Strip

Dieser Stand ergänzt auf `/projekt-starten` einen kleinen Vertrauens-/Orientierungsstreifen zwischen Hero und Assistent. Ziel ist mehr Klarheit für echte Besucher: Erstkontakt kostenlos, Anfrage unverbindlich, direkte E-Mail-Übergabe. Zusätzlich wird der vorbereitete E-Mail-Text entsprechend präzisiert. Der CoreCube, die Showcase-Welten und alle Live-Demo-Links bleiben unverändert.

### Geändert

- Build-Kennung auf `CES-BUILD-105 · Project Start Confidence Strip` gesetzt
- neue Datenliste `projectStartTrustItems` ergänzt
- neuer Abschnitt `.project-start-confidence` auf `/projekt-starten` eingefügt
- drei kurze Hinweise ergänzt:
  - Kostenloser Erstkontakt
  - Saubere Ersteinschätzung
  - Direkter Kontakt
- vorbereiteter E-Mail-Text erwähnt jetzt klar, dass es erstmal um einen kostenlosen und unverbindlichen Erstkontakt geht
- CSS für Trust-/Confidence-Karten ergänzt, inklusive Responsive-Verhalten
- CODEMAP-Stand korrigiert und Build 104 nachgetragen

### Nicht geändert

- Keine Änderung an ShowcaseCube.jsx / ShowcaseCube.css
- Keine Änderung an MatrixRain.jsx / MatrixRain.css
- Keine Änderung an CoreHub-/CoreCube-Logik
- Keine Änderung an Showcase-Bildern oder Assets
- Keine Änderung an externen Live-Demo-Links
- Keine Backend-/Datenbank-Anbindung

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- projectStartTrustItems
- buildProjectEmailContent()
- ProjectStartPage()

src/App.css
- .project-start-confidence
- .project-start-confidence-card
```


## CES-BUILD-104 · Customer Journey CTA Polish

Dieser Stand glättet die Kundennavigation nach dem bestätigten Projektstart-Flow: Der primäre CTA heißt jetzt konsequent `Projekt starten`, die alte interne Hero-Kennung wurde entfernt und der Kontaktabschluss führt klarer zum Projektstart-Assistenten. Direkte E-Mail bleibt als sekundärer Kontakt sichtbar.

### Geändert

- Build-Kennung auf `CES-BUILD-104 · Customer Journey CTA Polish` gesetzt
- Hero-Kennung `Component Map · Build 047` durch `CoreCube Showcase · Digital Studio` ersetzt
- Header-Link `Kontakt` führt klarer auf den Projektstart
- Hero-Button `Projekt anfragen` in `Projekt starten` umbenannt
- Kontaktabschluss priorisiert den Link zur Unterseite `/projekt-starten`
- direkte E-Mail bleibt als sekundäre Kontaktmöglichkeit sichtbar

### Nicht geändert

- Keine Änderung an ShowcaseCube.jsx / ShowcaseCube.css
- Keine Änderung an MatrixRain.jsx / MatrixRain.css
- Keine Änderung an CoreHub-/CoreCube-Logik
- Keine Änderung an Showcase-Bildern oder Assets
- Keine Änderung an externen Live-Demo-Links
- Keine Änderung an der Formularlogik von `/projekt-starten`

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- Header-/Hero-/Kontakt-CTA-Texte

src/App.css
- .contact-mail-link-secondary
```


## CES-BUILD-103 · Project Start Mail Fallback

Dieser Stand macht die Unterseite `/projekt-starten` robuster für echte Besucher: Der vorhandene `mailto:`-Button bleibt erhalten, aber zusätzlich gibt es jetzt eine kopierbare Anfrage-Zusammenfassung, falls sich auf dem Gerät kein Mailprogramm öffnet. Der CoreCube, die Showcase-Welten und alle Live-Demo-Links bleiben unverändert.

### Geändert

- Build-Kennung auf `CES-BUILD-103 · Project Start Mail Fallback` gesetzt
- E-Mail-Inhalt wird jetzt zentral über `buildProjectEmailContent(...)` erzeugt
- `buildProjectMailto(...)` nutzt denselben Inhalt wie die neue Kopierfunktion
- Projektstart-Zusammenfassung rechts erhält einen Fallback-Block
- Button `Anfrage kopieren` kopiert Empfänger, Betreff und vorbereiteten Nachrichtentext in die Zwischenablage
- sichtbarer Hinweis ergänzt, falls das Kopieren im Browser nicht möglich ist
- CTA-Text im Formular von `Projektanfrage per E-Mail vorbereiten` auf `E-Mail im Mailprogramm öffnen` präzisiert
- CSS für den neuen Fallback-Block ergänzt

### Nicht geändert

- Keine Änderung an ShowcaseCube.jsx / ShowcaseCube.css
- Keine Änderung an MatrixRain.jsx / MatrixRain.css
- Keine Änderung an CoreHub-/CoreCube-Logik
- Keine Änderung an Showcase-Bildern oder Assets
- Keine Änderung an externen Live-Demo-Links
- Keine Backend-/Datenbank-Anbindung

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- buildProjectEmailContent()
- buildProjectMailto()
- ProjectStartPage()

src/App.css
- .project-start-fallback
```


## CES-BUILD-102 · Project Start Flow Polish

Dieser Stand poliert die neue Unterseite `/projekt-starten`, ohne den CoreCube oder die Showcase-Welten umzubauen. Der Projektstart-Assistent sammelt jetzt etwas mehr Kontext, bleibt aber weiterhin bewusst Frontend-only mit vorbereiteter E-Mail.

### Geändert

- Build-Kennung auf `CES-BUILD-102 · Project Start Flow Polish` gesetzt
- Projektstart-Assistent erweitert um `Zeitrahmen & Kontaktweg`
- neue Auswahlfelder für zeitlichen Rahmen:
  - Sobald möglich
  - 2–4 Wochen
  - 1–3 Monate
  - Flexibel / noch offen
- neue Auswahlfelder für bevorzugten Kontaktweg:
  - E-Mail
  - WhatsApp
  - Telefon / kurzes Gespräch
  - Noch offen
- `Domain / Hosting vorhanden` als vorhandenes Material ergänzt
- vorbereitete E-Mail enthält jetzt Zeitraum und bevorzugten Kontaktweg
- Zusammenfassung rechts zeigt jetzt Projektart, Richtung, Zeitrahmen, Kontaktweg, CoreCube-Ausgangspunkt und vorhandene Materialien
- Name und E-Mail sind im Formular jetzt Pflichtfelder
- Texte im Projektstart-Hero und im Assistenten leicht klarer formuliert
- CSS für die neue zweigeteilte Auswahlkarte ergänzt

### Nicht geändert

- Keine Änderung an ShowcaseCube.jsx / ShowcaseCube.css
- Keine Änderung an MatrixRain.jsx / MatrixRain.css
- Keine Änderung an CoreHub-/CoreCube-Logik
- Keine Änderung an Galerie-Bildern oder Assets
- Keine Änderung an externen Live-Demo-Links
- Keine Backend-/Datenbank-Anbindung
- Keine echte Formularübermittlung außer vorbereitetem `mailto:`

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- projectStartExisting
- projectStartTimelines
- projectStartContactWays
- buildProjectMailto()
- ProjectStartPage()

src/App.css
- CES-BUILD-101/102 / PROJEKTSTART-SEITE
- .project-start-split-grid
- .project-start-pill-grid.compact
- Summary-Gridspan von 4 auf 5 Panels
```

## CES-BUILD-101 · Project Start Page Scaffold

Dieser Stand ergänzt eine eigenständige Unterseite für den Projektstart. Der CoreCube bleibt als bestätigte Showroom-Basis erhalten; die Änderung betrifft nur den neuen Anfrage-Einstieg und die Weiterleitung der Projekt-CTAs.

### Geändert

- Build-Kennung auf `CES-BUILD-101 · Project Start Page Scaffold` gesetzt
- neue Route `/projekt-starten` in `src/App.jsx` ergänzt
- `ProjectStartPage` als eigenständige Frontend-Seite eingeführt
- Projektstart-Assistent mit vier Blöcken ergänzt:
  - Projektart auswählen
  - Showcase-/Designrichtung auswählen
  - vorhandene Materialien markieren
  - Kontakt und kurze Idee eintragen
- Button `Projekt anfangen` aus der CoreHub-/Showcase-Ansicht führt jetzt auf `/projekt-starten`
- CoreCube-Kontext wird per `sessionStorage` an die Projektstart-Seite übergeben
- Hero-CTA `Projekt anfragen` führt ebenfalls auf `/projekt-starten`
- E-Mail-Vorbereitung per `mailto:info@coreenginestudio.de` ergänzt
- `public/_redirects` ergänzt, damit `/projekt-starten` auf Cloudflare Pages direkt geladen werden kann
- neue CSS-Sektion `CES-BUILD-101 / PROJEKTSTART-SEITE` in `src/App.css` ergänzt

### Nicht geändert

- Keine Änderung an ShowcaseCube.jsx / ShowcaseCube.css
- Keine Änderung an MatrixRain.jsx / MatrixRain.css
- Keine Änderung an Galerie-Bildern oder Assets
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Booking / Rental / RentalOps
- Keine Änderung an Smart Systems / CoreOps
- Keine Änderung an Dark Premium / DarkPremium
- Keine Änderung an externen Live-Demo-Links

### Änderungsstellen

```txt
src/App.jsx
- BUILD_ID
- PROJECT_START_PATH
- projectStartTypes / projectStartDirections / projectStartExisting
- ProjectStartPage()
- LandingPage() statt bisheriger App-Hauptkomponente
- App() als kleiner Route-Switch zwischen Startseite und /projekt-starten

src/App.css
- CES-BUILD-101 / PROJEKTSTART-SEITE

public/_redirects
- SPA-Fallback für direkte Unterseiten-URL
```



## CES-BUILD-099 · CoreCube Text Polish

Dieser Stand ist ein ruhiger Feinschliff auf der bestätigten CoreCube-Basis aus Build 098. Die sechs Showcase-Welten bleiben strukturell unverändert, werden aber in den sichtbaren Texten einheitlicher und kundenfreundlicher formuliert.

### Geändert

- Build-Kennung auf `CES-BUILD-099 · CoreCube Text Polish` gesetzt
- sichtbare Begriffe im CoreHub stärker auf `Showcase` vereinheitlicht
- Statuszeilen der fertigen Showcase-Welten auf `SHOWCASE BEREIT` geglättet
- Button im Launch-Ergebnis von `Demo ansehen` auf `Showcase ansehen` umgestellt
- rechte Galerie-Karte zeigt jetzt `Showcase Galerie` statt `Demo Galerie geladen`
- Launch- und Routentexte sprechen jetzt von `Showcase-Welt` statt `Demo-Welt` oder `Demo-Ziel`
- Beschreibungstexte für All4You, Inselleben, Hammer Modding, RentalOps, CoreOps und Dark Premium sprachlich geglättet
- Hinweise wie `Showcase bereit: Galerie, Vorschau und Live-Demo-Link sind verbunden.` vereinheitlicht

### Nicht geändert

- Keine Änderung an `src/App.css`
- Keine Änderung an der CoreHub-/CoreCube-Logik
- Keine Änderung an Galerie-Bildern oder Assets
- Keine Änderung an ShowcaseCube.jsx / ShowcaseCube.css
- Keine Änderung an MatrixRain.jsx / MatrixRain.css
- Keine Änderung an externen Live-Demo-Links
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Booking / Rental / RentalOps
- Keine Änderung an Smart Systems / CoreOps
- Keine Änderung an Dark Premium


## CES-BUILD-098 · Smart Systems Showcase Badge Fix

Dieser Stand ergänzt die fehlende einheitliche `Showcase`-Markierung in der dritten CoreHub-Ebene von **Smart Systems**. Damit verhalten sich die Smart-Systems-Unteroptionen wie die anderen fertigen Showcase-Richtungen.

### Geändert

- Build-Kennung auf `CES-BUILD-098 · Smart Systems Showcase Badge Fix` gesetzt
- `getCoreHubDemoCaseMeta(...)` erweitert die Smart-Systems-Unteroptionen um das einheitliche `Showcase`-Badge
- insbesondere `Anfrageformular Plus` zeigt jetzt ebenfalls die farbige `Showcase`-Markierung
- alle sechs Smart-Systems-Unteroptionen können auf CoreOps als Showcase-Hinweis zeigen

### Nicht geändert

- Keine Änderung an `src/App.css`
- Keine Änderung am CoreHub-Grundablauf
- Keine Änderung an den Galerie-Bildern
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Booking / Rental / RentalOps
- Keine Änderung an Dark Premium
- Keine Änderung an externen Live-Demo-Links


## CES-BUILD-097 · Dark Premium Devlink Gallery

Dieser Stand baut **Dark Premium** als letzte der sechs Haupt-Webseitenrichtungen nach dem gleichen Showroom-Prinzip ein: CoreCube mit Vorschau-Bildern, Galerie mit rechter Beschreibungskarte, einheitlichem `Showcase`-Badge und externem Live-Demo-Link.

### Geändert

- Build-Kennung auf `CES-BUILD-097 · Dark Premium Devlink Gallery` gesetzt
- neue Dark-Premium-Vorschauassets unter `src/assets/demos/darkpremium/` ergänzt
- neue Galerie `darkPremiumDemoGallery` angelegt
- neue Cube-Faces `darkPremiumSharedCubeFaces` angelegt
- Dark-Premium-Demo-Ziel heißt jetzt `dark-premium-darkpremium-demo`
- Demo-Link für Dark Premium zeigt auf `https://darkpremium.pages.dev/`
- Button-Label nutzt `Live-Demo öffnen`
- CoreHub-Badge für Dark Premium zeigt einheitlich nur `Showcase`
- Demo-World-Map in `src/App.jsx` aktualisiert: alle sechs Haupt-Webseitenrichtungen haben jetzt einen Showcase-/Devlink-Pfad

### Nicht geändert

- Keine Änderung an `src/App.css`
- Keine Änderung am CoreHub-Grundablauf
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Booking / Rental / RentalOps
- Keine Änderung an Smart Systems / CoreOps
- Keine Änderung an den externen Standalone-Demos selbst


## CES-BUILD-096 · Showcase Label Cleanup

Dieser Stand vereinheitlicht die sichtbaren CoreHub-Hinweise für vorhandene Showroom-/Demo-Welten. Aus gemischten Labels wie „Demo verfügbar“, „Live Demo“, „RentalOps Showcase“ oder ähnlichen Mehrfachhinweisen wird nach außen nur noch ein kurzes, farbiges Label: **Showcase**.

### Geändert

- Build-Kennung auf `CES-BUILD-096 · Showcase Label Cleanup` gesetzt
- CoreHub-Badges für vorhandene Showroom-Ziele zeigen nur noch `Showcase`
- zusätzliche Badge-Texte wie Projektname/Detailzeile werden in den kleinen CoreHub-Karten nicht mehr angezeigt
- vorhandene Live-Demo-Links bleiben unverändert
- `previewLabel` für die bereits vorhandenen echten Demo-Ziele wurde auf `Showcase` vereinheitlicht
- CoreOps-Cube-Face unten nutzt nicht mehr `Live Demo`, sondern ebenfalls `Showcase`

### Nicht geändert

- Keine Änderung an Galerie-Bildern
- Keine Änderung an Live-Demo-Buttons wie `Live-Demo öffnen`
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Booking / Rental / RentalOps
- Keine Änderung an Smart Systems / CoreOps
- Keine Änderung an Dark Premium
- Keine Änderung an `src/App.css`


## CES-BUILD-095 · RentalOps Devlink Gallery

Dieser Stand baut Booking/Rental auf dasselbe Showroom-Prinzip um wie CoreOps. Booking/Rental nutzt jetzt eine eigene RentalOps-Vorschauwelt mit lokalen Mockup-Bildern und öffnet die klickbare Live-Demo extern über den Cloudflare-Pages-Devlink.

### Geändert

- Build-Kennung auf `CES-BUILD-095 · RentalOps Devlink Gallery` gesetzt
- neue RentalOps-Vorschauassets unter `src/assets/demos/rentalops/` ergänzt
- `bookingRentalDemoGallery` von All4You-Scaffold-Bildern auf RentalOps-Bild-/Story-Slides umgestellt
- `bookingRentalSharedCubeFaces` nutzt jetzt eigene RentalOps-Preview-Bilder auf den Cube-Flächen
- Booking/Rental Demo-Ziel heißt jetzt `booking-rental-rentalops-demo`
- Demo-Link für Booking/Rental zeigt auf `https://corerental.pages.dev/`
- Button-Label für RentalOps nutzt `Live-Demo öffnen`
- CoreHub-Badges für Booking/Rental wurden von Scaffold/All4You Rental auf RentalOps/Showcase umgestellt

### Nicht geändert

- Keine Änderung am CoreHub-Grundablauf
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Smart Systems / CoreOps
- Keine Änderung an Dark Premium
- Keine Änderung an der externen RentalOps-Live-Demo selbst


## CES-BUILD-094 · CoreOps Gallery Panel Fix

Dieser Stand repariert die Smart-Systems/CoreOps-Galerie nach Build 093. CoreOps verhält sich damit wieder wie die anderen Demo-Welten: links/zentral das Vorschau-Bild, rechts die beschriftete Detailkarte mit Text, Tags, Zurück-Button und externem Live-Demo-Link.

### Geändert

- Build-Kennung auf `CES-BUILD-094 · CoreOps Gallery Panel Fix` gesetzt
- `src/App.css` ergänzt einen gezielten Override für `.target-smart-systems`
- alte Smart-Systems-Story-Slide-Optik aus Build 091 wird für die neue CoreOps-Bildgalerie überschrieben
- rechte Beschreibungs-/Aktionskarte ist bei CoreOps wieder sichtbar
- Button `Live-Demo öffnen` zeigt weiterhin auf `https://coreops-60f.pages.dev/`
- CoreOps-Galerietexte in `smartSystemsDemoGallery` verständlicher und näher an den bestehenden Demo-Welten formuliert
- aktive kleine Galerie-Beschriftung für Smart Systems nutzt jetzt ebenfalls die vorhandene `.active`-Klasse

### Nicht geändert

- Kein Umbau der Hauptseite
- Keine Änderung am CoreHub-Grundablauf
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Booking / Rental
- Keine Änderung an der externen CoreOps-Live-Demo selbst


## CES-BUILD-093 · CoreOps External Devlink

Dieser Stand setzt die Smart-Systems/CoreOps-Live-Demo auf den externen Cloudflare-Pages-Devlink. Die Hauptseite bleibt weiterhin nur Showroom/Preview-Einstieg; die klickbare CoreOps-Demo liegt separat.

### Geändert

- Build-Kennung auf `CES-BUILD-093 · CoreOps External Devlink` gesetzt
- CoreOps Demo-Link von lokalem Pfad `/demos/coreops/` auf `https://coreops-60f.pages.dev/` geändert
- Kommentarblock in `src/App.jsx` angepasst, damit klar ist: CoreOps ist externe Live-Demo/Devlink-Welt

### Nicht geändert

- Keine Änderung an `src/App.css`
- Keine Änderung am CoreHub-Grundaufbau
- Keine Änderung an Business Clean / All4You
- Keine Änderung an Gaming Matrix / Inselleben
- Keine Änderung an Shopflow / Hammer Modding
- Keine Änderung an Booking / Rental
- Keine Änderung an der Standalone-Demo unter `public/demos/coreops/`

## CES-BUILD-092 · CoreOps Preview Link Scaffold

Dieser Stand baut Smart Systems/CoreOps auf dasselbe Showroom-Prinzip um wie die anderen Demo-Welten: Der CoreCube zeigt zuerst Vorschau-Bilder, danach kann eine Galerie geöffnet werden und zusätzlich führt ein Demo-Link zur klickbaren CoreOps-Demo.

Änderungen:
- Build-Kennung auf `CES-BUILD-092 · CoreOps Preview Link Scaffold` gesetzt
- neue CoreOps-Vorschauassets unter `src/assets/demos/coreops/` ergänzt
- `smartSystemsDemoGallery` von reinen Story-Slides auf Bild-/Mockup-Slides umgestellt
- `smartSystemsSharedCubeFaces` nutzt jetzt echte Preview-Bilder auf den Cube-Flächen
- Smart-Systems-Demo-Ziel heißt jetzt `smart-systems-coreops-demo`
- Demo-Link für CoreOps auf `/demos/coreops/` gesetzt
- klickbare CoreOps-Standalone-Demo unter `public/demos/coreops/` ergänzt
- Button-Label für CoreOps kann über `liveLabel` als „Live-Demo öffnen“ angezeigt werden
- Smart-Systems-Badges im CoreHub von `Concept` auf `Showcase` geändert
- bestehende Demo-Welten bleiben unverändert:
  - Business Clean / All4You
  - Gaming Matrix / Inselleben
  - Shopflow / Hammer Modding
  - Booking / Rental / All4You Rental Scaffold

Betroffene Bereiche:
- `src/App.jsx`
- `src/assets/demos/coreops/*`
- `public/demos/coreops/*`
- `CODEMAP.md`

Wichtig:
Die Hauptseite wird dadurch nicht zur CoreOps-App umgebaut. CoreOps bleibt eine getrennte Demo-/Devlink-Welt, die später separat live gestellt oder über den Hauptauftritt unter `/demos/coreops/` erreichbar gemacht werden kann.


## CES-BUILD-091 · Smart Systems Dashboard Concept

Dieser Stand legt Smart Systems als eigene Dashboard-/Portal-/Systemwelt an, statt dafür nur eine bestehende Website zu zeigen.

Änderungen:
- Build-Kennung auf `CES-BUILD-091 · Smart Systems Dashboard Concept` gesetzt
- neue Concept-Galerie `smartSystemsDemoGallery`
- neue Cube-Faces `smartSystemsSharedCubeFaces`
- Smart-Systems-Demo-Ziel wird auf `smart-systems-coreops-concept` gesetzt
- Route: Webseiten → Smart Systems → z. B. Dashboard / Ticket / Admin
- Fokus:
  - CoreOps Dashboard
  - Kunden & Anfragen
  - Tickets & Statuslogik
  - Automationen / Statusmails / Follow-ups
  - Admin / Rollen / Rechte
- aktuell bewusst ohne neue Screenshot-Assets
- Smart Systems wird nicht als normale Website, sondern als System-/Dashboard-Demo vorbereitet
- bestehende Demos bleiben unverändert

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Dieser Stand ist bewusst ein Konzept-/Scaffold-Schritt. Später sollen eigene Dashboard-/System-Mockups bzw. Screens für CoreOps gebaut werden.



## CES-BUILD-090 · Booking Rental Case Scaffold

Dieser Stand ergänzt einen ersten Booking-/Rental-Scaffold auf Basis der All4You-Anhängervermietung.

Änderungen:
- Build-Kennung auf `CES-BUILD-090 · Booking Rental Case Scaffold` gesetzt
- neue Galerie `bookingRentalDemoGallery`
- neue gemeinsame Cube-Faces `bookingRentalSharedCubeFaces`
- Booking-/Rental-Demo-Ziel wird auf `booking-rental-all4you-demo` gesetzt
- Route: Webseiten → Booking / Rental → z. B. Mietanfrage / Kalender-Check
- Inhaltlicher Fokus:
  - Anhängervermietung
  - Mietzeitraum
  - Kalender
  - Preislogik
  - Anfrage statt Direktbuchung
  - interne Belegung / Mitarbeiterportal
- Hero-Cube kann bei aktiver Booking/Rental-Demo dieselben Faces nutzen wie der Showroom-Cube
- keine neuen Assets nötig, vorhandene All4You-Bilder werden genutzt
- Business Clean / All4You, Gaming Matrix / Inselleben und Shopflow / Hammer bleiben unverändert
- kein iframe und keine externe Website im Cube

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Dieser Stand ist bewusst ein Scaffold. Später können bessere spezielle Booking-/Rental-Screenshots ergänzt werden.



## CES-BUILD-089 · Demo Worlds Cleanup Map

Dieser Stand ist ein reiner Struktur-/Dokumentationsstand für die aktuellen Showroom-Demo-Welten.

Änderungen:
- Build-Kennung auf `CES-BUILD-089 · Demo Worlds Cleanup Map` gesetzt
- neue Dokumentationskarte in `src/App.jsx`: `COREHUB / DEMO WORLD MAP`
- die drei aktiven Demo-Welten werden klar markiert:
  - Business Clean → Dienstleister-Seite → All4You
  - Gaming Matrix → RP-Server Website → Inselleben
  - Shopflow → Tebex / Externer Checkout → Hammer Modding
- die drei offenen Demo-Slots werden klar notiert:
  - Dark Premium
  - Booking / Rental
  - Smart Systems
- `getCoreHubDemoTarget()` erhält einen Pflegehinweis als zentrale Demo-Ziel-Umschaltstelle
- `src/App.css` erhält einen reinen Dokumentationsblock zu Demo-Welten und target-Blöcken
- keine sichtbare Designänderung
- keine neue Route
- keine neue Demo
- keine Änderung an All4You, Inselleben oder Hammer Modding

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Die in CES-BUILD-085 eingeführten Demo-Hinweise bleiben weiterhin nur temporäre Entwicklungs-/Orientierungshilfen und sind nicht finaler Endnutzer-Look.



## CES-BUILD-088 · Shopflow Hammer Demo Polish

Dieser Stand poliert nur die Hammer-Modding-/Shopflow-Demo.

Änderungen:
- Build-Kennung auf `CES-BUILD-088 · Shopflow Hammer Demo Polish` gesetzt
- Hammer-Screenshots in der Demo-Galerie heller, ruhiger und vollständiger sichtbar
- Preview-Fläche kontrollierter im Viewport
- rechte Info-Karte kompakter
- Galerie-Dock für 10 Slides flacher und besser nutzbar
- Story-Slide kompakter und zweispaltig
- Hammer-Cube-Faces etwas klarer
- Selector/Hub-Karten bleiben unangetastet
- All4You und Inselleben bleiben unangetastet
- keine neue Logik, keine neue Route, keine neue Demo

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `src/assets/demos/hammer/*`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-087 · Selector Neutral Panels

Dieser Stand korrigiert die optische Demo-Markierung im CoreHub.

Änderungen:
- Build-Kennung auf `CES-BUILD-087 · Selector Neutral Panels` gesetzt
- temporäre `Demo verfügbar`-/`Live Demo`-Hinweise bleiben für die Entwicklung sichtbar
- CoreHub-Panels mit Demo-Hinweis bekommen keine eigene rote/lila/grüne Hintergrundfläche mehr
- Business Clean, Gaming Matrix und Shopflow wirken im Selector wieder transparent/neutral wie die übrigen Karten
- auffälliger Demo-Punkt unten rechts wird entfernt
- Demo-Badge wird optisch ruhiger
- All4You-, Inselleben- und Hammer-Demos bleiben unverändert
- keine neue Logik, keine neue Route, keine neue Demo

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Die Demo-Badges bleiben weiterhin nur temporäre Entwicklungs-/Orientierungshilfen und sind nicht finaler Endnutzer-Look.



## CES-BUILD-086 · Shopflow Hammer Modding Case

Dieser Stand ergänzt den dritten echten Showroom-Case: Shopflow auf Basis von Hammer Modding.

Änderungen:
- Build-Kennung auf `CES-BUILD-086 · Shopflow Hammer Modding Case` gesetzt
- neue lokale Assets unter `src/assets/demos/hammer/`
- neue Galerie `hammerDemoGallery`
- neue gemeinsame Cube-Faces `hammerSharedCubeFaces`
- Shopflow-Demo-Ziel wird auf `shopflow-hammermodding-demo` gesetzt
- Route: Webseiten → Shopflow → z. B. Tebex / Externer Checkout
- Live-Link: `https://hammer-modding.de/`
- Demo-Slides: Startseite, Scripts, Kleidung, Produktdetail, Free Scripts, Registrierung, Login, Profil, Produktverwaltung, Story
- Hero-Cube kann bei aktiver Hammer-Demo dieselben Shopflow-Faces nutzen wie der Showroom-Cube
- Demo-Case-Hinweise aus 085 werden für Shopflow/Hammer ergänzt
- All4You und Inselleben bleiben unverändert
- kein iframe und keine externe Website im Cube

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `src/assets/demos/hammer/*`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-085 · Demo Case Selector Polish

Dieser Stand markiert im CoreHub sichtbar, welche Wege bereits echte Demo-Cases besitzen.

Änderungen:
- Build-Kennung auf `CES-BUILD-085 · Demo Case Selector Polish` gesetzt
- neuer Helper `getCoreHubDemoCaseMeta`
- Karten mit vorhandener Demo bekommen die Klasse `has-demo-case`
- sichtbare Demo-Badges für:
  - Webseiten → Business Clean → All4You
  - Webseiten → Gaming Matrix → Inselleben
  - Business Clean → Dienstleister-Seite → All4You
  - Gaming Matrix → RP-Server Website → Inselleben
- Business- und Gaming-Cases bekommen dezente eigene Markierung
- keine neue Demo, keine neue Route, keine Änderung an All4You-/Inselleben-Demo selbst

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-084 · Gaming Matrix Demo Polish

Dieser Stand poliert die Inselleben-/Gaming-Matrix-Demo optisch, ohne neue Logik einzubauen.

Änderungen:
- Build-Kennung auf `CES-BUILD-084 · Gaming Matrix Demo Polish` gesetzt
- Inselleben-Screenshots in der Demo-Shell heller und lesbarer
- Gaming-Demo-Shell bekommt etwas ruhigere lila/orange Tiefenwirkung
- rechte Info-Karte kompakter und stärker im Gaming-Stil
- Galerie-Dock kompakter
- Story-Slide kompakter und klarer als Case-Zusammenfassung
- Pfeile/Counter im Gaming-Case etwas deutlicher
- Projekt-CTA bleibt passend zur Gaming-Farbwelt
- All4You bleibt unverändert
- keine neue Logik, keine Routing-Änderung, keine Cube-Animation

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `src/assets/demos/inselleben/*`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-083 · Gaming Matrix Inselleben Case

Dieser Stand ergänzt den ersten echten Gaming-Matrix-Demo-Case auf Basis des bereitgestellten Inselleben-Materials.

Änderungen:
- Build-Kennung auf `CES-BUILD-083 · Gaming Matrix Inselleben Case` gesetzt
- neue lokale Assets unter `src/assets/demos/inselleben/`
- neue Galerie `insellebenDemoGallery`
- neue gemeinsame Cube-Faces `insellebenSharedCubeFaces`
- neuer Demo-Target-Zweig `gaming-matrix-inselleben-demo`
- Route: Webseiten → Gaming Matrix → RP-Server Website
- Live-Link: `https://insellebenv2.pages.dev/`
- Demo-Slides: Startseite, Philosophie, Geschichte, Regelwerk, Team, Status/Kurzvorstellung, Community-Bilder, Story
- Hero-Cube kann bei aktiver Inselleben-Demo dieselben Gaming-Faces nutzen wie der Showroom-Cube
- All4You-Demo bleibt unverändert
- kein iframe und keine externe Website im Cube

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `src/assets/demos/inselleben/*`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-082 · Kontakt CTA Polish

Dieser Stand poliert nur die Kontakt-Kontextkarte aus dem Button `Projekt anfangen`.

Änderungen:
- Build-Kennung auf `CES-BUILD-082 · Kontakt CTA Polish` gesetzt
- Kontextkarte wirkt kompakter und stärker wie ein eigenes Anfrage-Modul
- Hauptbutton `Anfrage per E-Mail starten` wird klarer hervorgehoben
- kleine Zusatzmarkierung `kostenlos` am Haupt-CTA
- Route/Context-Zeile wird als Pill dargestellt
- Reset-Button bleibt dezenter
- keine neue Logik
- kein Backend, keine Datenbank, kein Formularversand
- keine Änderung an Cube-Animation, Demo-Galerie oder Routing-Daten

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-081 · Kontakt Mailto Context

Dieser Stand erweitert die Kontextkarte im Kontaktbereich.

Änderungen:
- Build-Kennung auf `CES-BUILD-081 · Kontakt Mailto Context` gesetzt
- `projectRequestContext` bekommt Betreff und vorbereiteten Mailtext
- Kontextkarte erhält den Button `Anfrage per E-Mail starten`
- der Button öffnet eine E-Mail an `info@coreenginestudio.de` mit Demo-Kontext
- `Zurücksetzen` bleibt erhalten
- kein Backend, kein Formularversand, keine Datenbank
- keine Änderung an Cube-Animation, Demo-Galerie oder Routing-Daten

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-080 · Projekt Anfangen CTA Flow

Dieser Stand erweitert den Demo-CTA `Projekt anfangen`.

Änderungen:
- Build-Kennung auf `CES-BUILD-080 · Projekt Anfangen CTA Flow` gesetzt
- neuer State `projectRequestContext`
- neuer Handler `startProjectRequestFromDemo`
- Button `Projekt anfangen` springt zum Kontaktbereich und übergibt sichtbar den Kontext der aktuellen Demo
- im Kontaktbereich erscheint eine Kontextkarte mit Demo-Ausgangspunkt, Route und Anfrageidee
- kein Formular-Backend, keine Datenbank, kein Mailversand
- keine Änderung an Cube-Animation, Demo-Galerie oder Routing-Daten

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-079 · CoreCube Demo Sync Polish

Dieser Stand poliert die gemeinsame All4You-Demo-Face-Anzeige im CoreCube.

Änderungen:
- Build-Kennung auf `CES-BUILD-079 · CoreCube Demo Sync Polish` gesetzt
- Hero-CoreCube oben und Showroom-Cube unten nutzen weiter dieselbe Datenquelle `all4YouSharedCubeFaces`
- kleine Kommentar-Markierung bei `sharedDemoCubeFaces`
- All4You-Screenshots auf Cube-Flächen werden heller/lesbarer dargestellt
- Preview-Screen im Cube bekommt etwas mehr nutzbare Fläche
- Overlay-Texte auf Cube-Flächen werden kleiner/ruhiger, damit mehr vom Screenshot sichtbar bleibt
- optionale visuelle Markierung `DEMO SYNC` am Hero-Cube im Desktop-Zustand
- keine neue Logik, keine neue Animation, keine Änderung an Demo-Galerie, Routing oder Cube-Launch

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `src/components/showcase-cube/ShowcaseCube.jsx`
- `src/components/showcase-cube/ShowcaseCube.css`
- `CODEMAP.md`

Wichtig:
Diese Version ist eine Manual-Copy-ZIP. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-078 · Shared Demo Cube Faces

Dieser Stand synchronisiert den Hero-CoreCube oben mit der All4You-Demo-Welt im CoreHub.

Änderungen:
- Build-Kennung auf `CES-BUILD-078 · Shared Demo Cube Faces` gesetzt
- neue gemeinsame Datenquelle `all4YouSharedCubeFaces`
- All4You-Cube-Faces enthalten lokale Preview-Bilder für Startseite, Navigation, Anfrage-Assistent, Mietkalender, Mitarbeiterportal und internen Anhänger-Kalender
- der CoreHub-/Showroom-Cube unten nutzt diese gemeinsamen Faces
- der Hero-CoreCube oben bleibt im Standardzustand normal, wechselt aber bei aktiver All4You-/Dienstleisterseiten-Route auf dieselben Demo-Faces
- kein iframe und keine externe Website im Cube
- zusätzliche CSS-Politur für helle All4You-Preview-Bilder auf Cube-Flächen

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `src/components/showcase-cube/ShowcaseCube.jsx`
- `src/components/showcase-cube/ShowcaseCube.css`
- `CODEMAP.md`

Wichtig:
Diese Version ist bewusst als Manual-Copy-ZIP gebaut. Dateien manuell kopieren, damit keine PowerShell-Patchlogik dazwischenfunkt.



## CES-BUILD-077 · Demo Viewport Fit

Dieser Stand ist eine manuelle Clean-Copy-Version der Demo-/Viewport-Korrektur.

Änderungen:
- Build-Kennung auf `CES-BUILD-077 · Demo Viewport Fit` gesetzt
- Demo startet nach der finalen CoreHub-Auswahl automatisch
- Demo-Shell wird gezielt im Viewport ausgerichtet statt den ganzen Showroom grob zu scrollen
- All4You-Screenshots bleiben hell und vollständig sichtbar
- Story-Slide bleibt kompakt und ohne große Plakat-Headline
- Button `Projekt anfangen` wird direkt in der Demo-Shell ergänzt
- keine externe Website im Cube, kein iframe, keine Änderung an CoreHub-Routing oder Cube-Animation

Betroffene Bereiche:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtig:
Diese Version ist bewusst als manuelle Copy-Datei gebaut. Die Dateien können direkt in das Projekt kopiert werden, damit keine PowerShell-Regel oder alter Patch-Block unbemerkt dazwischenfunkt.



## CES-BUILD-070 · All4You Demo Gallery Story

Dieser Stand erweitert die interne All4You-Demo nach dem CoreHub-Zoom. Statt nur einem einzelnen Preview-Bild zeigt die Demo-Shell jetzt eine lokale Galerie mit mehreren Screenshots und einem Story-Panel.

Änderungen:
→ Build-Kennung auf `CES-BUILD-070 · All4You Demo Gallery Story` gesetzt
→ All4You-Demo-Bilder lokal ergänzt unter `src/assets/demos/all4you/`
→ `all4YouDemoGallery` in `src/App.jsx` angelegt
→ Business Clean / Dienstleisterseite nutzt jetzt die All4You-Galerie
→ Demo-Shell bekommt Bildnavigation, Bildzähler und Slide-Dock
→ letztes Slide ist ein CoreEngineStudio-Story-Panel: aus Logo + Leistungsidee wurde Website plus smarte Engine
→ weiterhin kein iframe und keine externe Website im Cube
→ Performance Guard bleibt erhalten

Betroffene Bereiche:
→ `src/App.jsx`
→ COREHUB / ALL4YOU DEMO GALLERY
→ COREHUB / DEMO TARGET SYSTEM
→ COREHUB / DEMO ZOOM TRANSITION
→ `src/App.css`
→ SECTION: CES-BUILD-070 / ALL4YOU DEMO GALLERY STORY
→ `src/assets/demos/all4you/`

Wichtig:
Neue Demo-Bilder werden künftig im Ordner `src/assets/demos/all4you/` ergänzt und dann in `all4YouDemoGallery` eingetragen. Die Demo bleibt bewusst lokal und leichtgewichtig, damit keine fremde Website in den Cube geladen wird.


## CES-BUILD-069 · Demo Zoom Transition

Dieser Stand ergänzt den ersten internen Demo-Übergang nach dem CoreHub-Cube-Launch. Der Cube lädt weiterhin keine externe Website per iframe, sondern führt per Zoom-Animation in eine interne Demo-/Case-Shell.

Änderungen:
→ Build-Kennung auf `CES-BUILD-069 · Demo Zoom Transition` gesetzt
→ neue Zustände `coreHubDemoZoom` und `coreHubDemoView` in `src/App.jsx` ergänzt
→ Button `Demo ansehen` im Launch-Ergebnis ergänzt
→ Klick auf `Demo ansehen` startet eine kurze Zoom-in-Animation des CoreCubes
→ danach erscheint eine interne Demo-Shell mit Preview-Bild, Route, Modulen und optionalem Live-Link
→ `Zurück` schließt zuerst die Demo-Shell, danach den Launch
→ kein iframe, keine externe Website im Cube, keine neue Demo-Unterseite

Betroffene Bereiche:
→ `src/App.jsx`
→ COREHUB / DEMO ZOOM TRANSITION
→ COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE
→ `src/App.css`
→ SECTION: CES-BUILD-069 / COREHUB DEMO ZOOM TRANSITION

Wichtig:
Dies ist die erste Übergangsstufe. Später kann aus der Demo-Shell eine vollständige Demo-Seite oder eigene Route werden.


## CES-BUILD-068 · Demo Face Preview System

Dieser Stand bereitet den nächsten CoreHub-Schritt vor: finale Routen können jetzt ein echtes Demo-/Case-Ziel mit Cube-Flächenvorschau bekommen.

Änderungen:
→ Build-Kennung auf `CES-BUILD-068 · Demo Face Preview System` gesetzt
→ `getCoreHubDemoTarget()` erkennt `Webseiten / Business Clean / Dienstleister-Seite` als erstes echtes Live-Preview-Ziel
→ All4You Service München wird als Business-Clean-/Dienstleister-Beispiel zugeordnet
→ CoreHub-Launch-Cube kann jetzt optionale Preview-Bilder auf einzelnen Cube-Flächen anzeigen
→ ShowcaseCube unterstützt pro Face optional `previewImage` und `previewAlt`
→ Launch-Ergebnis zeigt bei Live-Zielen zusätzlich Case-Titel, Preview-Label und Live-Projekt-Link
→ kein iframe im Cube, keine externe Seite live eingebettet, nur optimierte lokale Preview-Grafik
→ Performance Guard aus 067 bleibt erhalten

Betroffene Bereiche:
→ `src/App.jsx`
→ BUILD-KENNUNG
→ COREHUB / DEMO TARGET SYSTEM
→ CORECUBE START FLOW / LAUNCH SEQUENCE
→ `src/components/showcase-cube/ShowcaseCube.jsx`
→ optionale Preview-Flächen pro Cube-Face
→ `src/components/showcase-cube/ShowcaseCube.css`
→ SECTION: CES-BUILD-068 / CORECUBE DEMO FACE PREVIEW
→ `src/App.css`
→ SECTION: CES-BUILD-068 / COREHUB DEMO TARGET ACTIONS

Wichtig:
Der Cube lädt weiterhin keine echten Webseiten per iframe. Für Demo-/Case-Ziele werden lokale, optimierte Screenshots genutzt. Das schützt Performance und hält den CoreHub kontrollierbar.


## CES-BUILD-067 Â· Runtime Performance Guard

Dieser Stand ist ein gezielter Performance-Schutz nach den starken CoreHub-/CoreCube-Animationen.

Ã„nderungen:
â†’ Build-Kennung auf `CES-BUILD-067 Â· Runtime Performance Guard` gesetzt
â†’ `runtimePerformanceGuard` in `src/App.jsx` ergÃ¤nzt
â†’ `.runtime-performance-guard` wird bei Touch/Mobile, Save-Data, Reduced-Motion oder schwÃ¤cherer Hardware gesetzt
â†’ `.corehub-launch-runtime` wird wÃ¤hrend aktiver CoreHub-Cube-Launch-Sequenz gesetzt
â†’ MatrixRain wird wÃ¤hrend Runtime-Guard/Launch nicht gerendert, damit der Cube-Launch PrioritÃ¤t bekommt
â†’ Smooth-Pulse-CSS-Variablenloop wurde gedrosselt: Desktop nicht mehr volle 60fps, Mobile noch stÃ¤rker reduziert
â†’ Hintergrund-/Offscreen-Animationen pausieren wÃ¤hrend des CoreHub-Launch
â†’ Cube-Glow/Shadow/Backdrop-Ketten werden im Guard reduziert, ohne den Look grundsÃ¤tzlich zu Ã¤ndern
â†’ 066 CoreCube Accent Sync bleibt erhalten

Betroffene Bereiche:
â†’ `src/App.jsx`
â†’ BUILD-KENNUNG
â†’ RUNTIME PERFORMANCE GUARD
â†’ SMOOTH PULSE / CSS-VARIABLEN
â†’ App-Shell-Klassen / MatrixRain-Rendering
â†’ `src/App.css`
â†’ SECTION: CES-BUILD-067 / RUNTIME PERFORMANCE GUARD
â†’ `src/components/showcase-cube/ShowcaseCube.css`
â†’ SECTION: CES-BUILD-067 / CORECUBE PERFORMANCE TRIM

Wichtig:
Dieser Patch ist kein Design-Cut. Er soll die Seite wieder sauberer und flÃ¼ssiger machen, indem laufende Dauerlast reduziert wird. Wenn spÃ¤ter Performance-Probleme auftreten, zuerst diesen 067-Block prÃ¼fen.


## CES-BUILD-066 · CoreCube Accent Sync

Dieser Stand synchronisiert den CoreCube-Look mit der aktuellen Akzentfarbe der Website.

Änderungen:
→ Build-Kennung auf `CES-BUILD-066 · CoreCube Accent Sync` gesetzt
→ feste grüne Cube-Linien/Glows aus `ShowcaseCube.css` über Akzentvariablen überschrieben
→ Hero-Cube oben und CoreHub-Launch-Cube unten nutzen dieselben Pulse-/Accent-Variablen
→ Cube-Rahmen, Unterlinien, Glow, Face-Orb und innere UI-Linien folgen jetzt `--pulse-main`, `--pulse-next-main`, `--pulse-rgb` und `--pulse-next-rgb`
→ keine Layoutänderung, keine neue Animation, kein CoreHub-Flow-Umbau

Betroffene Bereiche:
→ `src/App.jsx`
→ BUILD-KENNUNG
→ `src/App.css`
→ SECTION: CES-BUILD-066 / HERO + COREHUB CUBE ACCENT BRIDGE
→ `src/components/showcase-cube/ShowcaseCube.css`
→ SECTION: CES-BUILD-066 / CORECUBE ACCENT SYNC

Wichtig:
Der Cube ist weiterhin ein CSS-/React-CoreCube. Wenn später der Cube-Look geändert wird, zuerst den Abschnitt `CES-BUILD-066 / CORECUBE ACCENT SYNC` in `ShowcaseCube.css` prüfen.


## CES-BUILD-065 · CoreHub Animation Cleanup

Dieser Stand ist ein gezielter Cleanup-/Audit-Patch nach den CoreCube-Animationsversuchen 062–064. Der funktionierende Look aus 064 bleibt erhalten; es werden nur alte, nicht mehr benötigte Runtime-Reste entfernt und die Pflegebereiche sauberer beschriftet.

Änderungen:
→ Build-Kennung auf `CES-BUILD-065 · CoreHub Animation Cleanup` gesetzt
→ unsichtbare Outline-Elemente aus der CoreHub-Launch-Animation entfernt
→ alte 063-Partikel-Zielmap und nicht mehr verwendete Outline-/Assembly-Keyframes entfernt
→ doppelte/überschriebene Launch-Keyframes bereinigt, damit nur der aktuelle Particle-Merge-Pfad aktiv bleibt
→ Particle-Anzahl als Konstante `COREHUB_ASSEMBLY_PARTICLE_COUNT` in `src/App.jsx` beschriftet
→ CSS-Bereich für die aktuelle Particle-Merge-Animation klar als Pflegezone markiert
→ kein Designwechsel, keine neue Animation, kein Flow-Umbau

Betroffene Bereiche:
→ src/App.jsx
→ SECTION: COREHUB / LAUNCH PARTICLE SETTINGS
→ SECTION: CORECUBE START FLOW / COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE
→ src/App.css
→ SECTION: CES-BUILD-065 / COREHUB PARTICLE MERGE ASSEMBLY
→ SECTION: CES-BUILD-065 / COREHUB PARTICLE MERGE MAP

Wichtig:
Dieser Patch soll die bestätigte Animation aus 064 stabilisieren. Wenn später Partikelanzahl oder Bewegungen angepasst werden, zuerst `COREHUB_ASSEMBLY_PARTICLE_COUNT` und danach die passenden `.assembly-particle.particle-X` Regeln in `App.css` prüfen.

## CES-BUILD-064 · CoreCube Particle Merge

Dieser Stand ersetzt die zu geometrische Partikel-/Linienbildung aus 063 durch eine logischere Merge-Animation. Die Partikel bilden keine feste Punkt-/Linienform mehr, sondern kreisen zur Mitte, kollidieren/verdichten sich dort und verblassen sichtbar in den kleinen Ghost-Cube. Dadurch wirkt der CoreCube weniger wie ein plötzlich eingeblendetes Objekt und mehr wie eine entstehende Struktur.

Änderungen:
→ Build-Kennung auf `CES-BUILD-064 · CoreCube Particle Merge` gesetzt
→ Partikel-Zielmuster von Cube-Flächen/Punktreihen auf Swirl-/Merge-Bewegung umgestellt
→ Outline-Flächen aus der sichtbaren Animation entfernt, damit keine störenden Linien/Punkte entstehen
→ Partikel kreisen in die Mitte, klatschen/verdichten sich optisch und lösen sich dann in den Cube auf
→ CoreCube startet weiter klein/transparent, wird während des Merge-Vorgangs sichtbarer und wächst danach in Stufen
→ Mobile bleibt reduziert/stabil; Hero-Cube bleibt unangetastet

Betroffene Bereiche:
→ src/App.jsx
→ SECTION: CORECUBE START FLOW / COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE
→ src/App.css
→ SECTION: COREHUB PARTICLE MERGE ASSEMBLY
→ SECTION: COREHUB CUBE LAUNCH SEQUENCE

Wichtig:
Diese Animation ist weiterhin bewusst Fake-3D/CSS/React statt echter Physik. Der Ablauf ist jetzt logischer: Partikel sammeln sich → verdichten sich in der Mitte → Cube kommt in den Vordergrund → Pulse/Wachstum → Demo-Ziel.

## CES-BUILD-063 · CoreCube Particle Pulse Assembly

Dieser Stand ersetzt die Fragment-/Splitter-Assembly aus 062 durch eine logischere Particle-/Pixel-Assembly. Die Partikel fliegen nicht mehr nur dekorativ in die Mitte, sondern sammeln sich kurz sichtbar in einer Cube-Silhouette. Der eigentliche CoreCube startet klein und transparent im Zentrum, wird während der Partikelphase sichtbarer, übernimmt die Struktur, pulsiert kontrolliert in mehreren Stufen und wächst anschließend zur Präsentationsgröße.

Änderungen:
→ Build-Kennung auf `CES-BUILD-063 · CoreCube Particle Pulse Assembly` gesetzt
→ Fragment-/Splitter-Elemente durch 34 kleine Partikel/Pixels ersetzt
→ Partikel bilden kurz Front-/Top-/Right-Face einer Cube-Silhouette
→ kleiner transparenter CoreCube ist während der Assembly bereits vorhanden
→ Partikel verblassen in den Cube hinein, statt nur in einem Punkt zu verschwinden
→ Cube wird in Stufen sichtbarer, pulsiert kontrolliert und wächst danach final
→ Cube richtet sich anschließend weiter zur passenden Demo-Richtung aus
→ Mobile bleibt reduziert/stabil; Hero-Cube bleibt unangetastet

Betroffene Bereiche:
→ src/App.jsx
→ SECTION: CORECUBE START FLOW / COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE
→ src/App.css
→ SECTION: COREHUB PARTICLE PULSE ASSEMBLY
→ SECTION: COREHUB CUBE LAUNCH SEQUENCE

Wichtig:
Die Animation ist weiterhin eine performante Fake-3D-Webanimation. Sie ist bewusst keine echte Physik-Simulation, wirkt aber logischer: Partikel sammeln sich → Struktur entsteht → Cube stabilisiert sich → Cube pulsiert/wächst → Demo-Ziel bleibt sichtbar.


## CES-BUILD-062 · CoreCube Assembly Animation

Dieser Stand verbessert den wichtigsten CoreHub-Moment: Nach einer finalen Auswahl erscheint der CoreCube nicht mehr einfach aus dem Nichts, sondern entsteht über eine kontrollierte Fragment-/Assembly-Animation.

Änderungen:
→ CoreCube-Launch bekommt Fragment-/Splitter-Elemente
→ Fragmente fliegen aus verschiedenen Richtungen in die Mitte
→ der vollständige Cube erscheint verzögert, wächst smoother und richtet sich zur Zielrichtung aus
→ Desktop bekommt den stärkeren Wow-Moment
→ Mobile bleibt bewusst reduziert/stabil
→ Demo Target System aus 061 bleibt erhalten

Betroffene Bereiche:
→ src/App.jsx
→ SECTION: COREHUB / CUBE LAUNCH TARGETS
→ SECTION: CORECUBE START FLOW / COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE
→ src/App.css
→ SECTION: COREHUB CORECUBE ASSEMBLY ANIMATION
→ SECTION: COREHUB CUBE LAUNCH SEQUENCE

Wichtig:
Der Hero-Cube wird nicht verändert. Die Assembly-Animation betrifft nur den Launch-Cube im CoreHub nach finaler Auswahl.

## CES-BUILD-061 · CoreHub Demo Target System

Dieser Stand koppelt die CoreHub-Launch-Sequenz an ein klares Demo-Ziel. Nach einer finalen Auswahl zeigt der Launch nicht nur den Cube, sondern auch, welche spätere Demo-Welt daraus entstehen soll.

Geändert:

→ Build-Kennung auf `CES-BUILD-061 · CoreHub Demo Target System` gesetzt
→ neue Funktion `getCoreHubDemoTarget()` ergänzt
→ finale CoreHub-Route wird in ein Demo-Ziel übersetzt
→ Launch-Fenster zeigt jetzt Demo-Titel, Zielbeschreibung und geplante Bausteine
→ Business Clean, Dark Premium, Gaming Matrix, Shopflow, Booking/Rental und Smart Systems bekommen eigene Demo-Ziele
→ nächster Ausbau-Schritt wird im Launch-Ergebnis sichtbar
→ Desktop-/Mobile-Launch-Logik bleibt erhalten

Betroffene Dateien:

- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtige Pflegebereiche:

- `src/App.jsx` → `COREHUB / DEMO TARGET SYSTEM`
- `src/App.jsx` → `CORECUBE START FLOW / COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE`
- `src/App.css` → `CES-BUILD-061 / COREHUB DEMO TARGET SYSTEM`


## CES-BUILD-060 · CoreHub Cube Launch Sequence

Dieser Stand ergänzt den ersten echten Wow-Moment im CoreHub: Eine finale Auswahl startet nicht mehr nur einen Textwechsel, sondern eine Demo-Initialisierung mit eigenem CoreHub-Cube.

Geändert:

→ finale CoreHub-Auswahl ohne `nextStep` startet Launch-Modus
→ `CoreHub://Route` bleibt sichtbar und zeigt den vollständigen Pfad
→ rechts im Terminal läuft ein Engine-Init-Indikator mit `01 / 02 / 03 / 04`
→ sechs Antwort-Panels verschwinden im Launch-Modus
→ CoreCube fährt im CoreHub-Fenster von oben ein, wächst und richtet sich zur passenden WebCube-Richtung aus
→ Zurück beendet zuerst den Launch und kehrt zur vorherigen Auswahl zurück
→ Mobile nutzt eine reduzierte, stabile Launch-Variante

Betroffene Dateien:

- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtige Codebereiche:

- `COREHUB / CUBE LAUNCH TARGETS`
- `CORECUBE START FLOW / COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE`
- `CES-BUILD-060 / COREHUB CUBE LAUNCH SEQUENCE`

## CES-BUILD-059 · CoreHub Deep Routing

Dieser Stand vertieft den CoreHub-Router und macht den Panel-Wechsel ruhiger erkennbar.

Änderungen:
- CoreHub-Panels wechseln jetzt langsamer und smoother, damit die Terminal-/Glitch-Transition sichtbar bleibt.
- Nach Klick auf `Webseiten` erscheinen weiterhin die sechs WebCube-Richtungen.
- Jede WebCube-Richtung öffnet jetzt eine dritte Auswahl-Ebene mit jeweils sechs passenden Unteroptionen:
  - Business Clean
  - Dark Premium
  - Gaming Matrix
  - Shopflow
  - Booking / Rental
  - Smart Systems
- Der horizontale Pfad wächst weiter im Stil `CoreHub://Route / Webseiten / Gaming Matrix / RP-Server Website`.
- `Zurück` arbeitet jetzt schrittweise bzw. entfernt zuerst eine finale Auswahl, bevor es eine Ebene zurückgeht.
- CoreHub-Daten, Routing-State und CSS-Animationsbereiche wurden deutlich beschriftet.
- Desktop bekommt die smoothere Animation; Mobile bleibt leicht und stabil.

Betroffene Dateien:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`

Wichtige Pflegebereiche:
- `src/App.jsx` → `COREHUB ROUTING DATA / EBENE 01`
- `src/App.jsx` → `COREHUB ROUTING DATA / EBENE 02 / WEBSITES`
- `src/App.jsx` → `COREHUB ROUTING DATA / EBENE 03 / ...`
- `src/App.jsx` → `COREHUB ROUTING STATE`
- `src/App.css` → `CES-BUILD-059 / COREHUB DEEP ROUTING`

---

## CES-BUILD-058 · CoreHub Route Terminal

Dieser Stand baut den CoreHub als geführtes Route-/Terminal-System aus.

Änderungen:
- CoreHub nutzt jetzt eine horizontale `CoreHub://Route`-Anzeige statt der alten CoreHub-Kreisanimation.
- Die sechs CoreHub-Panels bleiben als Antwortflächen bestehen und wechseln je nach Auswahl ihren Inhalt.
- Startfrage: `Was brauchst du?` mit Webseiten, Systeme, Portale, Tools, Automation und Design.
- Klick auf `Webseiten` zeigt die sechs WebCube-Richtungen: Business Clean, Dark Premium, Gaming Matrix, Shopflow, Booking / Rental und Smart Systems.
- Andere Hauptbereiche zeigen passende realistische Unteroptionen.
- Tools enthält jetzt `Rechnungstool` statt Mini-Dashboard.
- Desktop bekommt eine kurze Terminal-/Glitch-Transition. Mobile bleibt mit leichter Fade-Animation stabil.

Betroffene Dateien:
- `src/App.jsx`
- `src/App.css`
- `CODEMAP.md`


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


---

---

## CES-BUILD-057 · WebCube Direction Selection

Dieser Stand ergänzt die zweite Auswahl-Ebene nach dem CoreHub.

Änderungen:

→ Webseiten-Cube-Karten sind anklickbar
→ aktive Website-Richtung wird sichtbar markiert
→ Auswahlbanner zeigt die aktuelle Richtung
→ aktives Preview-Panel erklärt den nächsten Demo-Welt-Schritt
→ CoreHub-Banner kann zum Webseiten-Cube springen
→ Desktop-Premium-Look und Mobile-Stabilität bleiben geschützt

Betroffene Dateien:

→ `src/App.jsx`
→ `src/App.css`

Nächster sinnvoller Schritt:

CES-BUILD-058 · WebCube Demo Preview Foundation

---

## CES-BUILD-056 · CoreHub Routing Interaction

Dieser Stand macht die CoreHub-Karten erstmals wirklich interaktiv.
Der Button „CoreCube starten“ führt weiterhin sauber zum CoreHub; dort kann jetzt eine Hub-Richtung ausgewählt werden.

Betroffene Stellen:

```txt
src/App.jsx
→ Build-Kennung aktualisiert
→ Hub-Daten um Banner-/Hinweis-/Badge-Texte erweitert
→ activeHubCube aus activeHubIndex abgeleitet
→ selectHubCube(index) ergänzt
→ Hub-Karten von statischen Artikeln zu anklickbaren Auswahl-Buttons umgebaut
→ Banner und Hinweistext reagieren auf die aktive Auswahl

src/App.css
→ Hub-Karten als Buttons optisch neutralisiert
→ Fokuszustand ergänzt
→ aktives Badge nutzt jetzt data-badge
→ geplante Hub-Bereiche bleiben sichtbar auswählbar, aber weiterhin als geplant markiert
```

Ziel:

```txt
- CoreHub fühlt sich weniger statisch an
- Webseiten bleibt Version 1 / Startbereich
- Systeme, Portale, Tools, Automation und Design sind als spätere Cubes auswählbar
- Desktop-Look bleibt geschützt
- Mobile-Stabilität bleibt geschützt
- noch keine Demo-Welten, Unterseiten oder Backend-Logik
```

Nächster sinnvoller Schritt:

```txt
CES-BUILD-057 · CoreHub Route Details
→ zweite Frage-/Auswahlstufe vorbereiten
→ Webseiten-Auswahl gezielt mit den sechs Website-Richtungen verbinden
→ Zurück-/Reset-Logik vorbereiten
```

---

## CES-BUILD-055 · CoreHub Scroll Micro Align

Dieser Stand korrigiert die Zielposition des Buttons „CoreCube starten“ noch einmal minimal.
Build 054 war fast korrekt, landete im Desktop-Test aber noch einen Tick zu tief im CoreHub.

Betroffene Stellen:

```txt
src/App.jsx
→ Build-Kennung aktualisiert
→ startCoreCubeFlow nutzt leicht reduzierte Offset-Werte
→ Desktop landet etwas höher/zurück im Showroom
→ Tablet/Mobile erhalten entsprechend kleinere Offset-Werte
```

Ziel:

```txt
- Klick auf „CoreCube starten“ landet näher am gewünschten CoreHub-Bild
- kein CSS geändert
- kein Design geändert
- keine Animationen geändert
- Mobile-Stabilität bleibt geschützt
```

Nächster sinnvoller Schritt:

```txt
CES-BUILD-056 · CoreHub Routing Interaction
→ Hub-Karten anklickbar machen
→ erste Frage-/Auswahl-Logik einbauen
→ Zurück-/Reset-Zustand vorbereiten
```

## CES-BUILD-053 · CoreHub Scroll Align

Dieser Stand korrigiert die Zielposition des Buttons „CoreCube starten“.
Der Button startet weiterhin den CoreHub-Zustand, scrollt aber etwas tiefer in den Showroom,
damit das CoreHub-Panel nach dem Klick zentraler im sichtbaren Browserfenster landet.

Betroffene Stellen:

```txt
src/App.jsx
→ Build-Kennung aktualisiert
→ startCoreCubeFlow nutzt jetzt einen kontrollierten Scroll-Offset
→ Desktop, Tablet und Mobile erhalten eigene Offset-Werte
```

Ziel:

```txt
- Landeposition nach Klick auf „CoreCube starten“ verbessern
- CoreHub-Panel stärker in die Bildmitte bringen
- keine Design-/CSS-Änderungen
- Mobile-Stabilität aus Build 051 bleibt geschützt
- CoreHub-Inhalt bleibt unverändert
```

Nächster sinnvoller Schritt:

```txt
CES-BUILD-055 · CoreHub Routing Interaction
→ Hub-Karten anklickbar machen
→ erste Frage-/Auswahl-Logik einbauen
→ Zurück-/Reset-Zustand vorbereiten
```

---

## CES-BUILD-052 · CoreCube Start Flow

Dieser Stand ergänzt den ersten echten Einstieg in den CoreCube-/CoreHub-Showroom.

Betroffene Stellen:

```txt
src/App.jsx
→ Build-Kennung aktualisiert
→ Hero-CTA „CoreCube starten" startet einen aktiven CoreHub-Zustand
→ Showroom-Ref und Smooth-Scroll zum CoreHub ergänzt
→ CoreHub-Webseiten-Cube wird als erster aktiver Einstieg gesetzt

src/App.css
→ SECTION: CES-BUILD-052 / CORECUBE START FLOW
```

Ziel:

```txt
- Button „CoreCube starten" bekommt eine echte Funktion
- Besucher wird sauber zum CoreHub / Showroom geführt
- CoreHub bekommt einen aktiven Startzustand
- Desktop-Premium-Look bleibt geschützt
- Mobile-Stabilität aus Build 051 bleibt geschützt
- noch keine vollständige Routing-/Fragenlogik und noch keine Demo-Welten
```

Nächster sinnvoller Schritt:

```txt
CES-BUILD-055 · CoreHub Routing Interaction
→ Hub-Karten anklickbar machen
→ erste Frage-/Auswahl-Logik einbauen
→ Zurück-/Reset-Zustand vorbereiten
```

---

## CES-BUILD-051 · Mobile Shadow Guard

Dieser Stand ergänzt einen gezielten Mobile-Schutz gegen den gelegentlichen schwarzen Schatten-/Kasten-Pop am rechten Bildrand.

Betroffene Stellen:

```txt
src/App.jsx
→ Build-Kennung aktualisiert

src/App.css
→ SECTION: CES-BUILD-051 / MOBILE SHADOW GUARD
```

Ziel:

```txt
- Desktop-Premium-Look unverändert lassen
- Mobile-/Touch-Geräte stabilisieren
- feste Smooth-Pulse-/Ambient-Overlays mobil deaktivieren
- rechten Offscreen-/Shadow-Pop verhindern
- horizontales Overflow und problematische Mobile-Compositing-Layer begrenzen
```

Hinweis:

```txt
Dieser Patch greift nur auf Touch-Geräten oder kleinen Viewports.
Die Desktop-Version bleibt optisch geschützt.
```

---

## CES-BUILD-050 · Mobile Lite Performance

Dieser Stand schützt den Desktop-Premium-Look und reduziert schwere Effekte gezielt nur auf Handy-/Tablet-/Touch-Geräten.

Betroffene Stellen:

```txt
src/App.jsx
→ gedrosselter CSS-Farbvariablen-Loop auf Touch-/kleinen Geräten

src/App.css
→ SECTION: CES-BUILD-050 / MOBILE LITE PERFORMANCE

src/components/matrix-rain/MatrixRain.jsx
→ MatrixRain rendert auf Mobile/Touch mit weniger FPS, weniger DPR und weniger Spalten

src/components/matrix-rain/MatrixRain.css
→ Mobile MatrixRain-Deckkraft/Containment reduziert
```

Ziel:

```txt
- Desktop-Version optisch möglichst unverändert lassen
- Mobile/Tablet deutlich stabiler machen
- weniger GPU-Layer beim Scrollen
- weniger Flackern in grafisch schweren Bereichen
- Matrix-/Glow-/Blur-Effekte mobil entschärfen, aber nicht komplett entfernen
```

Wichtig:

```txt
Wenn es auf Handy weiterhin flackert, als Nächstes nicht am Desktop drehen,
sondern zuerst diesen 050-Block und MatrixRain Mobile Lite weiter reduzieren.
```

---

## CES-BUILD-049 · Mobile Render Stability

Dieser Stand ergänzt gezielte mobile Rendering-Stabilisierung, ohne den Desktop-Look umzubauen.

Betroffene Stellen:

```txt
src/App.css
→ SECTION: CES-BUILD-049 / MOBILE RENDER STABILITY
```

Ziel:

```txt
- Service Engine Flow auf Handy ruhiger rendern
- CoreHub Routing auf Handy ruhiger rendern
- schwere Blur-/Glow-/Animationslayer mobil entschärfen
- Desktop-Design unverändert lassen
```

Wichtig:

```txt
Dieser Block ist bewusst als später Override am Ende von App.css angelegt.
Bei Problemen zuerst dort prüfen, bevor ältere Designblöcke verändert werden.
```

---

## Komponenten / Component Source Map

Diese Dateien liegen außerhalb von `App.jsx`, sind aber für sichtbare Bereiche wichtig.

### MatrixRain

Pfad:

```txt
src/components/matrix-rain/MatrixRain.jsx
src/components/matrix-rain/MatrixRain.css
```

Zuständig für:

```txt
animierter Matrix-Code-Regen im Hintergrund
Canvas-Animation
Farbwechsel passend zur aktuellen Akzentfarbe
```

Wichtige Stellen:

```txt
SYMBOLS
→ Zeichen, die im Matrix-Regen fallen

TONE_COLORS
→ RGB-Farben der Akzentphasen

MatrixRain({ tone })
→ React-Komponente, bekommt aktive Farbe von App.jsx

useEffect(tone)
→ aktualisiert Ziel-Farbe bei Farbwechsel

useEffect(canvas)
→ startet Canvas, Resize-Handling und Animation
```

Typische Änderungen:

```txt
Zeichen im Regen ändern:
MatrixRain.jsx -> SYMBOLS

Farben für Matrix-Regen ändern:
MatrixRain.jsx -> TONE_COLORS

Dichte/Geschwindigkeit ändern:
MatrixRain.jsx -> fontSize, drops, speed/step-Werte im Canvas-Loop

Canvas über der Seite positionieren:
MatrixRain.css -> .matrix-rain-canvas
```

---

### ShowcaseCube

Pfad:

```txt
src/components/showcase-cube/ShowcaseCube.jsx
src/components/showcase-cube/ShowcaseCube.css
```

Zuständig für:

```txt
Hero-/CoreCube-Visual
3D-Würfel
Cube-Flächen
Cube-Rotation
Cube-Glow/Schatten
```

Wichtige Stellen:

```txt
defaultFaces
→ Standard-Flächen des Würfels

ShowcaseCube({ size, faces, autoRotate, rotationMode, className })
→ Hauptkomponente des Würfels

normalizedFaces
→ verbindet Standardflächen mit optionalen externen Face-Daten

modeClass
→ legt fest, welche Animationsklasse aktiv ist
```

Typische Änderungen:

```txt
Texte auf Cube-Flächen ändern:
ShowcaseCube.jsx -> defaultFaces
oder App.jsx -> faces-Prop, falls später externe Daten übergeben werden

Cube-Größe ändern:
App.jsx -> <ShowcaseCube size={...} />
oder ShowcaseCube.css -> --cube-size

Rotation/Animation ändern:
ShowcaseCube.css -> .showcase-cube / keyframes / is-touring / is-orbiting

Cube-Look ändern:
ShowcaseCube.css -> glow, edge, face, shadow
```

---

### Assets / Bilder

Wichtige Ordner:

```txt
src/assets/
src/assets/references/
```

Zuständig für:

```txt
Logo
Referenzbilder
CaseViewer-Galeriebilder
```

Aktuelle Referenzbilder:

```txt
reference-hammer.webp
reference-all4you.webp
reference-coplink.webp
reference-inselleben.webp
reference-inselleben-2.webp
reference-inselleben-3.webp
reference-inselleben-4.webp
```

Wenn ein Referenzbild geändert wird:

```txt
1. Bild in src/assets/references/ ersetzen oder ergänzen.
2. App.jsx -> referenceCases prüfen.
3. Bei neuen Bildern gallery: [...] erweitern.
```

---

### Projektdateien

Diese Dateien werden in diesem Patch nicht verändert, sind aber wichtig:

```txt
package.json
→ npm-Scripts wie npm run dev und npm run build

vite.config.js
→ Vite-Konfiguration

index.html
→ HTML-Einstiegspunkt

src/main.jsx
→ React-Einstiegspunkt
```

Typische Befehle:

```bat
cd /d F:\CoreEngineStudio\coreenginestudio
npm run dev
npm run build
```


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


---

## CES-BUILD-100 · CoreCube Baseline Checkpoint

Dieser Stand markiert den bestätigten CoreCube-/Showroom-Basisstand nach dem Text-Polish aus Build 099.

Ziel dieses Builds:

```txt
- keine neuen Funktionen
- keine CSS-Änderung
- keine Showcase-Logik verändert
- nur sichtbare Build-Kennung auf Build 100 gesetzt
- aktueller Arbeitsstand als stabile Basis dokumentiert
```

Bestätigter CoreCube-Stand:

```txt
Business Clean   -> All4You Showcase
Gaming Matrix    -> Inselleben Showcase
Shopflow         -> Hammer Modding Showcase
Booking / Rental -> RentalOps Showcase / https://corerental.pages.dev/
Smart Systems    -> CoreOps Showcase / https://coreops-60f.pages.dev/
Dark Premium     -> DarkPremium Showcase / https://darkpremium.pages.dev/
```

Wichtige nächste Baustellen nach diesem Checkpoint:

```txt
1. CoreCube optisch mobil/desktop final gegenprüfen
2. Projekt-anfragen-CTA sauber planen
3. Kontakt-/Anfragebereich später passend zum CoreHub ausbauen
4. Startseite/Hero danach inhaltlich stärker auf CoreEngineStudio-Angebot ausrichten
5. CSS-Cleanup erst später und nur nach gesichertem Stand
```

Geänderte Datei in Build 100:

```txt
src/App.jsx -> BUILD_ID
CODEMAP.md -> Checkpoint-Dokumentation
```


---

## CES-BUILD-104 · Customer Journey CTA Polish

Dieser Stand ist ein kleiner Kundensicht-Feinschliff nach dem bestätigten Projektstart-Flow aus Build 103.

Ziel dieses Builds:

```txt
- keine CoreCube-/Showcase-Logik verändert
- keine Live-Demo-Links verändert
- keine Assets oder Demo-Bilder verändert
- technische/developerartige Hero-Kennung entschärft
- Header-CTA stärker auf /projekt-starten ausgerichtet
- Kontaktbereich führt primär zum Projektstart-Assistenten
- direkte E-Mail bleibt als sekundärer Kontaktweg sichtbar
```

Geänderte Bereiche:

```txt
src/App.jsx
- BUILD_ID -> CES-BUILD-104 · Customer Journey CTA Polish
- Hero Eyebrow -> CoreCube Showcase · Digital Studio
- Header Kontakt-Link -> Projekt starten (/projekt-starten)
- Hero Ghost-CTA -> Projekt starten
- Kontaktabschluss -> Projektstart-Assistent als primärer Weg

src/App.css
- kleiner Zusatz für sekundären E-Mail-Link in der Kontaktkarte
```

Wichtig:

```txt
Der CoreCube, die sechs Showcase-Welten, externe Devlinks, Bilder, Galerie-Logik und /projekt-starten-Formularlogik bleiben unverändert.
```


## CES-BUILD-114 · Scroll Target Correction

**Ziel:** Korrektur der in Build 113 zu stark verschobenen Scroll-Ziele.

**Geändert:**
- `src/App.jsx`: Build-Kennung auf 114 gesetzt und CoreCube-Startscroll ruhiger/höher korrigiert.
- `src/App.css`: `#leistungen` und `#ablauf` wieder deutlich kompaktere Scroll-Margins gegeben.

**Nicht geändert:**
- CoreHub-/CoreCube-Routing
- Showcase-Welten und Live-Demo-Links
- Footer/Social Icons
- `/projekt-starten`, Impressum und Datenschutz


## CES-BUILD-116 · Live Launch Final QA

**Ziel:** letzter Launch-Check nach erfolgreicher Cloudflare-Pages-Veröffentlichung.

**Geändert:**

```txt
src/App.jsx   -> BUILD_ID auf CES-BUILD-116 gesetzt und sichtbaren Referenz-Fallback "Preview ansehen" in "Großansicht ansehen" geglättet.
README.md     -> öffentliches GitHub-README von Vite-Standardtext auf CoreEngineStudio-Projektübersicht geändert.
.gitignore    -> Backup-/Patch-Dateien künftig vom Repository fernhalten.
CODEMAP.md    -> diesen Stand dokumentiert.
```

**Nicht geändert:**

```txt
CoreCube-/CoreHub-Routing
Showcase-Welten und Live-Demo-Links
/projekt-starten Mail-/Kopier-Fallback
Impressum / Datenschutz
Footer-Social-Icons und Layout
Cloudflare-/DNS-Konfiguration
```

**Cloudflare Pages Build-Konfiguration:**

```txt
Framework/Projekt: React + Vite
Build command: npm run build
Build output directory: dist
Root directory: leer
Branch: main
```
