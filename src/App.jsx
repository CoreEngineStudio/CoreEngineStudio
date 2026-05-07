// =====================================================
// CoreEngineStudio Landingpage
// Datei: src/App.jsx
//
// Zweck dieser Datei:
// - Inhalte und Datenlisten der Landingpage pflegen
// - Seitenbereiche zusammensetzen
// - aktive Farbstimmung / Pulse-Farbwechsel steuern
// - Referenz-CaseViewer und Bildergalerie steuern
//
// Orientierung:
// - Texte/Karten/Referenzen werden oben in Datenlisten gepflegt.
// - Sichtbare Seitenbereiche stehen unten im return().
// - Das Styling zu diesen Bereichen liegt in src/App.css.
// =====================================================

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Globe2,
  Layers,
  Mail,
  ExternalLink,
  MonitorSmartphone,
  Palette,
  Settings,
  ShoppingBag,
  Sparkles,
  Wrench,
  Workflow,
  PanelTop,
  Bot,
  Rocket,
} from "lucide-react";
import logoIcon from "./assets/ces-logo-icon.png";
import refHammer from "./assets/references/reference-hammer.webp";
import refAll4You from "./assets/references/reference-all4you.webp";
import all4YouDemoHome from "./assets/demos/all4you/all4you-demo-01-startseite.png";
import all4YouDemoNavigation from "./assets/demos/all4you/all4you-demo-02-navigation.png";
import all4YouDemoTransport from "./assets/demos/all4you/all4you-demo-03-transport-assistent.png";
import all4YouDemoTrailer from "./assets/demos/all4you/all4you-demo-04-anhaenger-preise.png";
import all4YouDemoCalendar from "./assets/demos/all4you/all4you-demo-05-mietkalender.png";
import all4YouDemoAbout from "./assets/demos/all4you/all4you-demo-06-ueber-uns.png";
import all4YouDemoDashboard from "./assets/demos/all4you/all4you-demo-07-mitarbeiterportal.png";
import all4YouDemoInternalCalendar from "./assets/demos/all4you/all4you-demo-08-anhaenger-kalender.png";
import insellebenDemoHome from "./assets/demos/inselleben/inselleben-demo-01-startseite.webp";
import insellebenDemoPhilosophy from "./assets/demos/inselleben/inselleben-demo-02-philosophie.webp";
import insellebenDemoHistory from "./assets/demos/inselleben/inselleben-demo-03-geschichte.webp";
import insellebenDemoRules from "./assets/demos/inselleben/inselleben-demo-04-regelwerk.webp";
import insellebenDemoTeam from "./assets/demos/inselleben/inselleben-demo-05-team.webp";
import insellebenDemoStatus from "./assets/demos/inselleben/inselleben-demo-06-startseite-status.webp";
import insellebenDemoGalleryImage from "./assets/demos/inselleben/inselleben-demo-07-community-bilder.webp";
import hammerDemoHome from "./assets/demos/hammer/hammer-demo-01-startseite.webp";
import hammerDemoScripts from "./assets/demos/hammer/hammer-demo-02-scripte.webp";
import hammerDemoClothing from "./assets/demos/hammer/hammer-demo-03-kleidung.webp";
import hammerDemoProductDetail from "./assets/demos/hammer/hammer-demo-04-produktdetail.webp";
import hammerDemoFreeScripts from "./assets/demos/hammer/hammer-demo-05-free-scripts.webp";
import hammerDemoRegister from "./assets/demos/hammer/hammer-demo-06-registrierung.webp";
import hammerDemoLogin from "./assets/demos/hammer/hammer-demo-07-login.webp";
import hammerDemoProfile from "./assets/demos/hammer/hammer-demo-08-profil.webp";
import hammerDemoAdmin from "./assets/demos/hammer/hammer-demo-09-produktverwaltung.webp";
import rentalOpsDemoHome from "./assets/demos/rentalops/rentalops-demo-01-startseite.webp";
import rentalOpsDemoFleet from "./assets/demos/rentalops/rentalops-demo-02-mietflotte.webp";
import rentalOpsDemoBooking from "./assets/demos/rentalops/rentalops-demo-03-anfrage-preis.webp";
import rentalOpsDemoFlow from "./assets/demos/rentalops/rentalops-demo-04-ablauf.webp";
import rentalOpsDemoPortal from "./assets/demos/rentalops/rentalops-demo-05-portal.webp";
import rentalOpsDemoEngine from "./assets/demos/rentalops/rentalops-demo-06-engine.webp";
import coreOpsDemoDashboard from "./assets/demos/coreops/coreops-demo-01-dashboard.webp";
import coreOpsDemoClients from "./assets/demos/coreops/coreops-demo-02-kunden-anfragen.webp";
import coreOpsDemoTickets from "./assets/demos/coreops/coreops-demo-03-tickets-workflow.webp";
import coreOpsDemoAutomation from "./assets/demos/coreops/coreops-demo-04-automationen.webp";
import coreOpsDemoAdmin from "./assets/demos/coreops/coreops-demo-05-admin-rollen.webp";
import darkPremiumDemoStatement from "./assets/demos/darkpremium/darkpremium-demo-01-statement.webp";
import darkPremiumDemoSignature from "./assets/demos/darkpremium/darkpremium-demo-02-signature.webp";
import darkPremiumDemoExperience from "./assets/demos/darkpremium/darkpremium-demo-03-experience.webp";
import darkPremiumDemoPulse from "./assets/demos/darkpremium/darkpremium-demo-04-studio-pulse.webp";
import darkPremiumDemoModules from "./assets/demos/darkpremium/darkpremium-demo-05-module.webp";
import darkPremiumDemoContact from "./assets/demos/darkpremium/darkpremium-demo-06-kontakt.webp";
import socialInstagram from "./assets/social/social-instagram.png";
import socialDiscord from "./assets/social/social-discord.png";
import socialTikTok from "./assets/social/social-tiktok.svg";
import refCopLink from "./assets/references/reference-coplink.webp";
import refInselleben from "./assets/references/reference-inselleben.webp";
import refInselleben2 from "./assets/references/reference-inselleben-2.webp";
import refInselleben3 from "./assets/references/reference-inselleben-3.webp";
import refInselleben4 from "./assets/references/reference-inselleben-4.webp";
import ShowcaseCube from "./components/showcase-cube/ShowcaseCube";
import MatrixRain from "./components/matrix-rain/MatrixRain";
import "./App.css";

// =====================================================
// BUILD-KENNUNG
// Hier steht die sichtbare Versionskennung der aktuellen Website.
// Diese Kennung erscheint unten im Footer und hilft beim Prüfen,
// ob die richtige Version lokal/live geladen ist.
// =====================================================
const BUILD_ID = "CES-BUILD-115 · Public Content Cleanup Check";

// =====================================================
// FARB-/PULSE-SYSTEM
// Hier wird die automatische Akzentfarb-Reihenfolge gepflegt.
// Die Farben laufen smooth durch die Seite:
// green -> cyan -> purple -> red -> green
//
// Diese Werte treiben CSS-Variablen wie:
// --pulse-main, --pulse-next-main, --pulse-rgb.
// =====================================================
const colorPhases = ["green", "cyan", "purple", "red"];

const colorValues = {
  green: {
    main: [118, 255, 22],
    soft: [184, 255, 122],
  },
  cyan: {
    main: [65, 217, 255],
    soft: [191, 244, 255],
  },
  purple: {
    main: [176, 92, 255],
    soft: [223, 194, 255],
  },
  red: {
    main: [255, 69, 58],
    soft: [255, 177, 170],
  },
};

function mixColor(current, target, strength) {
  return current.map((value, index) => value + (target[index] - value) * strength);
}

function colorToRgb(value) {
  return value.map((part) => Math.round(part)).join(", ");
}


// =====================================================
// LEISTUNGEN / CORE ENGINE PANELS
// Hier werden die Karten im Bereich "Leistungen" gepflegt.
//
// Ändern hier wirkt auf:
// Bereich: "Leistungen"
// Karten: Sichtbarer Auftritt, Smarte Engine,
// Weniger Handarbeit, Look & Marke, Weiterentwicklung.
//
// Felder:
// - icon: Icon-Komponente
// - title: große Überschrift der Karte
// - kicker: kleine Akzentzeile über der Überschrift
// - text: Beschreibung
// - points: Liste mit Hakenpunkten
// =====================================================
const services = [
  {
    icon: Globe2,
    title: "Webseiten & digitale Auftritte",
    kicker: "Sichtbarer Auftritt",
    text: "Moderne Websites, Onepager und Landingpages, die dein Angebot klar erklären und Besucher sauber zur Anfrage führen.",
    points: ["Struktur & Seitenaufbau", "Responsive Design", "Kontakt- und Anfragewege"],
  },
  {
    icon: ShoppingBag,
    title: "Shops & Produktseiten",
    kicker: "Angebote verkaufen",
    text: "Produktseiten, digitale Kataloge und Shop-Auftritte für Scripts, Kleidung, Dienstleistungen oder einzelne Angebots-Pakete.",
    points: ["Produktpräsentation", "Kategorien & Detailseiten", "Checkout-/Anfragewege"],
  },
  {
    icon: Calendar,
    title: "Anfrageflows & Buchungssysteme",
    kicker: "Geführte Kundenwege",
    text: "Schritt-für-Schritt-Assistenten, Termin- oder Mietanfragen und klare Formularstrecken statt chaotischer Einzelmails.",
    points: ["Wizard-Flows", "Zeitraum & Preislogik", "E-Mail-/Ticket-Vorbereitung"],
  },
  {
    icon: Database,
    title: "Dashboards & Portale",
    kicker: "Smarte Engine",
    text: "Interne Bereiche, Kundenportale und Verwaltungsoberflächen, wenn hinter der Website echte Abläufe sichtbar werden sollen.",
    points: ["Kunden- oder Mitarbeiterbereiche", "Status & Verwaltung", "Rollen & Übersichten"],
  },
  {
    icon: Workflow,
    title: "Automatisierung & smarte Abläufe",
    kicker: "Weniger Handarbeit",
    text: "Automatische Zusammenfassungen, Statusmails, Generatoren und Datenflüsse, die aus einer Website ein nutzbares System machen.",
    points: ["Anfrage-Automation", "E-Mail-Logik", "Rechner & Generatoren"],
  },
  {
    icon: Wrench,
    title: "Betreuung & Weiterentwicklung",
    kicker: "Nach dem Launch",
    text: "Pflege, Feinschliff, neue Bereiche und Erweiterungen, damit dein digitaler Auftritt nicht nach dem ersten Stand stehen bleibt.",
    points: ["Updates & Pflege", "Neue Funktionen", "Saubere Versionierung"],
  },
];

// CES-BUILD-109:
// Kurzer Orientierungsstreifen unter den Leistungskarten.
// Ziel: Besucher verstehen schneller, für wen CoreEngineStudio passt,
// was konkret entsteht und wie niedrigschwellig der Erstkontakt beginnt.
const serviceOfferNotes = [
  {
    title: "Für wen passt das?",
    text: "Selbstständige, kleine Unternehmen, Shops, Communities, RP-Projekte, Dienstleister und Teams mit digitalen Abläufen.",
  },
  {
    title: "Was entsteht daraus?",
    text: "Eine Website, ein Shop, ein Portal oder ein System, das vorne gut aussieht und hinten sinnvoll mitarbeitet.",
  },
  {
    title: "Wie starten wir?",
    text: "Du schickst eine kurze Projektidee, bekommst eine erste Einschätzung und danach eine klare Empfehlung für den Einstieg.",
  },
];

// =====================================================
// WEBCUBE / SECHS WEBSITE-RICHTUNGEN
// Hier werden die sechs Karten im Bereich
// "Webseiten-Cube · Version 1" gepflegt.
//
// Ändern hier wirkt auf:
// - Business Clean
// - Dark Premium
// - Gaming Matrix
// - Shopflow
// - Booking / Rental
// - Smart Systems
//
// Felder:
// - title: große Kartenüberschrift
// - label: kleine Zeile über der großen Überschrift
// - text: Beschreibung der Richtung
// - tone: rechte Ton-/Stilzeile oben in der Karte
// =====================================================
const cubeThemes = [
  {
    icon: Briefcase,
    title: "Business Clean",
    label: "Seriöser Firmenauftritt",
    text: "Für Unternehmen, Selbstständige und Dienstleister, die klar, vertrauenswürdig und professionell auftreten wollen.",
    tone: "Clean · Ruhig · Vertrauensstark",
    routeStep: "webBusinessClean",
    routeOptionId: "website-business-clean",
  },
  {
    icon: Sparkles,
    title: "Dark Premium",
    label: "Hochwertige Markenwirkung",
    text: "Für Marken, Studios und Premium-Projekte, die nicht nur informieren, sondern Eindruck hinterlassen wollen.",
    tone: "Dunkel · Edel · Markant",
    routeStep: "webDarkPremium",
    routeOptionId: "website-dark-premium",
  },
  {
    icon: Gamepad2,
    title: "Gaming Matrix",
    label: "Community & Gaming",
    text: "Für RP-Server, Gaming-Communities, Discord-Projekte, Modding-Shops und digitale Welten mit Charakter.",
    tone: "Neon · Code · Bewegung",
    routeStep: "webGamingMatrix",
    routeOptionId: "website-gaming-matrix",
  },
  {
    icon: ShoppingBag,
    title: "Shopflow",
    label: "Produkte & Angebote",
    text: "Für Produktkataloge, digitale Shops, Paketangebote und Verkaufsseiten mit sauberem Anfrage- oder Kauf-Fluss.",
    tone: "Karten · Preise · Conversion",
    routeStep: "webShopflow",
    routeOptionId: "website-shopflow",
  },
  {
    icon: Calendar,
    title: "Booking / Rental",
    label: "Buchung & Vermietung",
    text: "Für Termine, Reservierungen, Mietanfragen, Kalender, Verfügbarkeit und strukturierte Buchungsprozesse.",
    tone: "Kalender · Rechner · Anfrage",
    routeStep: "webBookingRental",
    routeOptionId: "website-booking-rental",
  },
  {
    icon: Cpu,
    title: "Smart Systems",
    label: "Portale & Automatisierung",
    text: "Für Kundenportale, Mitarbeiterbereiche, Dashboards, Tools, Ticket-Systeme und die Engine hinter dem Auftritt.",
    tone: "Dashboard · Login · Engine",
    routeStep: "webSmartSystems",
    routeOptionId: "website-smart-systems",
  },
];

// =====================================================
// HERO-/SHOWCASE-KNOTEN
// Diese Daten beschreiben die inhaltlichen Core-Themen,
// die um den Hero-/Showcase-Gedanken liegen.
// Je nach aktuellem Stand werden sie als visuelle
// Begleitinformationen/Showcase-Knoten verwendet.
//
// Wenn spätere Hero-/CoreCube-Elemente erweitert werden,
// ist das einer der ersten Datenbereiche zum Prüfen.
// =====================================================
const orbitNodes = [
  {
    icon: Globe2,
    title: "Websites",
    text: "sichtbarer Auftritt",
    color: "green",
    orbit: "orbit-a",
  },
  {
    icon: Layers,
    title: "Systems",
    text: "Dashboards & Daten",
    color: "cyan",
    orbit: "orbit-b",
  },
  {
    icon: PanelTop,
    title: "Portals",
    text: "Login & Bereiche",
    color: "violet",
    orbit: "orbit-c",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Flows & Status",
    color: "orange",
    orbit: "orbit-d",
  },
  {
    icon: Wrench,
    title: "Tools",
    text: "Rechner & Generatoren",
    color: "silver",
    orbit: "orbit-e",
  },
  {
    icon: Palette,
    title: "Design",
    text: "Look & Marke",
    color: "red",
    orbit: "orbit-f",
  },
];

// =====================================================
// COREHUB / ROUTE TERMINAL
// Der CoreHub funktioniert als geführtes Beratungs-/Routing-System.
// Die sechs Panels bleiben als Antwortflächen bestehen, wechseln aber
// je nach Schritt ihre Inhalte. Der horizontale Terminalpfad zeigt,
// welchen Weg der Besucher bisher gewählt hat.
//
// CES-BUILD-058:
// - CoreHub://Route ersetzt die alte CoreHub-Kreisanimation
// - Startfrage: Was brauchst du?
// - Auswahl eines Hauptbereichs zeigt sechs passende Unteroptionen
// - Tools enthält bewusst das Rechnungstool / Angebots-Tool
// =====================================================
const coreHubSteps = {
  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 01
  // Startfrage: Der Besucher wählt zuerst den groben Bedarf.
  // Diese sechs Optionen sind die Haupt-Einstiege in den CoreHub.
  // -----------------------------------------------------
  start: {
    id: "start",
    routeLabel: "Start",
    routeDepth: 0,
    previousStep: null,
    eyebrow: "CoreHub Routing",
    question: "Was brauchst du?",
    description: "Wähle einen Bereich. Danach tauscht der CoreHub die sechs Panels gegen passende nächste Antworten aus.",
    note: "Der CoreHub führt Schritt für Schritt zur passenden Richtung. Die Showcase-Welten werden danach gezielt ausgebaut.",
    options: [
      {
        id: "websites",
        icon: Globe2,
        title: "Webseiten",
        text: "Für Auftritte, Landingpages, Showcases und digitale Präsenz.",
        detail: "WebCube aktiv",
        badge: "Start",
        nextStep: "websites",
        hubIndex: 0,
      },
      {
        id: "systems",
        icon: Database,
        title: "Systeme",
        text: "Für Dashboards, Daten, Verwaltungslogiken und interne Abläufe.",
        detail: "System-Cube",
        badge: "Route",
        nextStep: "systems",
        hubIndex: 1,
      },
      {
        id: "portals",
        icon: PanelTop,
        title: "Portale",
        text: "Für Kundenbereiche, Mitarbeiterbereiche und geschützte Zugänge.",
        detail: "Portal-Flow",
        badge: "Route",
        nextStep: "portals",
        hubIndex: 2,
      },
      {
        id: "tools",
        icon: Code2,
        title: "Tools",
        text: "Für Rechner, Generatoren, Rechnungstools und kleine Business-Helfer.",
        detail: "Tool-Cube",
        badge: "Route",
        nextStep: "tools",
        hubIndex: 3,
      },
      {
        id: "automation",
        icon: Workflow,
        title: "Automation",
        text: "Für Statusmails, Anfrageprozesse und weniger Handarbeit.",
        detail: "Flow-Engine",
        badge: "Route",
        nextStep: "automation",
        hubIndex: 4,
      },
      {
        id: "design",
        icon: Palette,
        title: "Design",
        text: "Für Logo, Marke, Assets, Look und visuelle Richtung.",
        detail: "Look & Marke",
        badge: "Route",
        nextStep: "design",
        hubIndex: 5,
      },
    ],
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 02 / WEBSITES
  // Diese Ebene nutzt die sechs WebCube-Richtungen.
  // Jede Richtung führt in CES-BUILD-059 in eine dritte Ebene.
  // -----------------------------------------------------
  websites: {
    id: "websites",
    routeLabel: "Webseiten",
    routeDepth: 1,
    previousStep: "start",
    eyebrow: "WebCube Auswahl",
    question: "Welche Webseiten-Richtung passt?",
    description: "Wähle die Richtung, die optisch und funktional am besten zu deinem Projekt passt.",
    note: "Die Auswahl markiert die passende WebCube-Richtung. Danach fragt der CoreHub tiefer nach dem konkreten Zweck.",
    options: cubeThemes.map((theme, index) => ({
      id: theme.routeOptionId,
      icon: theme.icon,
      title: theme.title,
      text: theme.text,
      detail: theme.tone,
      badge: index === 0 ? "aktiv" : "Richtung",
      themeIndex: index,
      hubIndex: 0,
      nextStep: theme.routeStep,
    })),
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 03 / BUSINESS CLEAN
  // Tiefe Auswahl für klare Firmen-/Dienstleister-Websites.
  // -----------------------------------------------------
  webBusinessClean: {
    id: "webBusinessClean",
    routeLabel: "Business Clean",
    routeDepth: 2,
    previousStep: "websites",
    eyebrow: "Business Clean",
    question: "Welche Business-Website passt?",
    description: "Business Clean ist für klare, vertrauenswürdige und professionelle Auftritte gedacht.",
    note: "Wähle den konkreten Business-Fokus. Daraus entsteht eine passende Struktur für Inhalte, Anfrage und Vertrauen.",
    options: [
      { id: "business-company", icon: Briefcase, title: "Firmenwebsite", text: "Für klassische Unternehmensauftritte mit Leistungen, Vertrauen und Kontakt.", detail: "Firma & Leistungen", badge: "Business" },
      { id: "business-service", icon: Wrench, title: "Dienstleister-Seite", text: "Für Services mit klarer Leistungsstruktur, Kontaktwegen und seriösem Eindruck.", detail: "Service & Anfrage", badge: "Business" },
      { id: "business-self-employed", icon: Sparkles, title: "Selbstständigen-Auftritt", text: "Für Einzelunternehmer, Berater, Freelancer oder persönliche Marken.", detail: "Person & Marke", badge: "Business" },
      { id: "business-office", icon: PanelTop, title: "Praxis / Kanzlei / Büro", text: "Für ruhige, vertrauensstarke Auftritte mit Infos, Terminbezug und klarer Navigation.", detail: "Vertrauen", badge: "Business" },
      { id: "business-info", icon: Layers, title: "Info- & Leistungsseite", text: "Für Projekte, bei denen Leistungen verständlich erklärt und sauber gegliedert werden müssen.", detail: "Struktur", badge: "Business" },
      { id: "business-contact", icon: Mail, title: "Kontaktstarke Website", text: "Für Seiten, die Besucher schnell zur Anfrage oder Kontaktaufnahme führen sollen.", detail: "Anfragefokus", badge: "Business" },
    ],
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 03 / DARK PREMIUM
  // Tiefe Auswahl für hochwertige Dark-/Premium-Auftritte.
  // -----------------------------------------------------
  webDarkPremium: {
    id: "webDarkPremium",
    routeLabel: "Dark Premium",
    routeDepth: 2,
    previousStep: "websites",
    eyebrow: "Dark Premium",
    question: "Welche Premium-Wirkung brauchst du?",
    description: "Dark Premium ist für Projekte gedacht, die nicht nur informieren, sondern Eindruck hinterlassen sollen.",
    note: "Wähle den visuellen Fokus. Daraus entsteht eine Premium-Richtung mit starker Atmosphäre.",
    options: [
      { id: "premium-brand", icon: Sparkles, title: "Premium Brand", text: "Für Marken, die edel, hochwertig und besonders wirken sollen.", detail: "Marke & Wirkung", badge: "Premium" },
      { id: "premium-studio", icon: Palette, title: "Studio / Agentur", text: "Für kreative Studios, Dienstleister oder digitale Anbieter mit starkem Look.", detail: "Studio-Look", badge: "Premium" },
      { id: "premium-luxury", icon: CheckCircle, title: "Luxury Service", text: "Für Angebote, die exklusiv, ruhig und hochwertig präsentiert werden sollen.", detail: "Exklusiv", badge: "Premium" },
      { id: "premium-portfolio", icon: MonitorSmartphone, title: "Portfolio Premium", text: "Für Arbeiten, Projekte oder Referenzen mit starker visueller Wirkung.", detail: "Referenzen", badge: "Premium" },
      { id: "premium-landing", icon: Rocket, title: "Dark Landingpage", text: "Für kompakte, starke Verkaufs- oder Präsentationsseiten im dunklen Look.", detail: "Landingpage", badge: "Premium" },
      { id: "premium-showcase", icon: Cpu, title: "High-Impact Showcase", text: "Für Projekte, bei denen der erste Eindruck richtig knallen soll.", detail: "Wow-Effekt", badge: "Premium" },
    ],
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 03 / GAMING MATRIX
  // Tiefe Auswahl für Gaming-, RP- und Community-Websites.
  // -----------------------------------------------------
  webGamingMatrix: {
    id: "webGamingMatrix",
    routeLabel: "Gaming Matrix",
    routeDepth: 2,
    previousStep: "websites",
    eyebrow: "Gaming Matrix",
    question: "Welche Gaming-Welt brauchst du?",
    description: "Gaming Matrix ist für RP-Server, Communities, Discord-Projekte und digitale Erlebniswelten gedacht.",
    note: "Wähle den Gaming-Fokus. Passend dazu können Serverstatus, Discord, Regelwerk oder Bewerbungsbereich sichtbar werden.",
    options: [
      { id: "gaming-rp-server", icon: Gamepad2, title: "RP-Server Website", text: "Für GTA-, FiveM- oder Gaming-RP-Projekte mit Regeln, Team und Einstieg.", detail: "RP & Server", badge: "Gaming" },
      { id: "gaming-discord", icon: Bot, title: "Discord Community", text: "Für Communitys mit Discord-Bezug, Rollen, Infos und klaren Call-to-Actions.", detail: "Discord", badge: "Gaming" },
      { id: "gaming-server-hub", icon: Cpu, title: "Server Hub", text: "Für Serverstatus, Join-Infos, Changelogs und zentrale Projektübersicht.", detail: "Status & Join", badge: "Gaming" },
      { id: "gaming-wiki", icon: Layers, title: "Regelwerk / Wiki", text: "Für strukturierte Regeln, Guides, Fraktionen oder Hilfebereiche.", detail: "Regeln & Wissen", badge: "Gaming" },
      { id: "gaming-team", icon: Briefcase, title: "Gaming Clan / Team", text: "Für Teams, Clans, Crews oder Esport-/Community-Auftritte.", detail: "Team", badge: "Gaming" },
      { id: "gaming-event", icon: Rocket, title: "Event / Season Page", text: "Für Events, Seasons, Updates oder Kampagnen mit starkem Gaming-Look.", detail: "Event", badge: "Gaming" },
    ],
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 03 / SHOPFLOW
  // Tiefe Auswahl für Produkt-, Angebots- und Shop-Websites.
  // -----------------------------------------------------
  webShopflow: {
    id: "webShopflow",
    routeLabel: "Shopflow",
    routeDepth: 2,
    previousStep: "websites",
    eyebrow: "Shopflow",
    question: "Welche Verkaufsstruktur brauchst du?",
    description: "Shopflow ist für Produkte, Angebote, digitale Verkäufe und übersichtliche Verkaufsseiten gedacht.",
    note: "Wähle den Verkaufsfokus. Daraus kann ein Produktkatalog, Anfrage-Shop oder externer Checkout-Flow entstehen.",
    options: [
      { id: "shop-product", icon: ShoppingBag, title: "Produktseite", text: "Für einzelne Produkte, Pakete oder digitale Angebote mit starker Präsentation.", detail: "Ein Produkt", badge: "Shop" },
      { id: "shop-small", icon: Layers, title: "Kleiner Shop", text: "Für übersichtliche Produktbereiche mit klaren Karten und Kategorien.", detail: "Sortiment", badge: "Shop" },
      { id: "shop-tebex", icon: ExternalLink, title: "Tebex / Externer Checkout", text: "Für Shops, bei denen der Kauf über Tebex oder externe Anbieter läuft.", detail: "Checkout", badge: "Shop" },
      { id: "shop-request", icon: Mail, title: "Anfrage-Shop", text: "Für Produkte oder Leistungen, die erst angefragt statt direkt gekauft werden.", detail: "Anfrage", badge: "Shop" },
      { id: "shop-download", icon: Code2, title: "Digitale Downloads", text: "Für Scripts, Assets, Vorlagen oder digitale Dateien.", detail: "Download", badge: "Shop" },
      { id: "shop-catalog", icon: PanelTop, title: "Produktkatalog", text: "Für viele Angebote ohne klassischen Warenkorb, aber mit starker Übersicht.", detail: "Katalog", badge: "Shop" },
    ],
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 03 / BOOKING RENTAL
  // Tiefe Auswahl für Buchung, Vermietung und Kalenderlogik.
  // -----------------------------------------------------
  webBookingRental: {
    id: "webBookingRental",
    routeLabel: "Booking / Rental",
    routeDepth: 2,
    previousStep: "websites",
    eyebrow: "Booking / Rental",
    question: "Welche Anfrage- oder Buchungslogik brauchst du?",
    description: "Booking / Rental ist für Vermietung, Reservierung, Zeitraumwahl und strukturierte Anfragen gedacht.",
    note: "Wähle den Ablauf. Daraus kann ein Wizard mit Kalender, Preislogik oder Verfügbarkeitsprüfung entstehen.",
    options: [
      { id: "booking-rental", icon: Calendar, title: "Mietanfrage", text: "Für Anhänger, Geräte, Fahrzeuge oder andere Mietobjekte.", detail: "Mieten", badge: "Booking" },
      { id: "booking-appointment", icon: CheckCircle, title: "Terminbuchung", text: "Für Termine, Beratungen, Besichtigungen oder Dienstleistungen.", detail: "Termin", badge: "Booking" },
      { id: "booking-calendar", icon: Calendar, title: "Kalender-Check", text: "Für Verfügbarkeit, Zeitraumwahl und Anfrage nach Datum.", detail: "Kalender", badge: "Booking" },
      { id: "booking-price", icon: Cpu, title: "Preisrechner", text: "Für automatische Preislogik nach Tagen, Menge oder Auswahl.", detail: "Preislogik", badge: "Booking" },
      { id: "booking-service", icon: Workflow, title: "Service-Anfrage", text: "Für Dienstleistungen mit Schritt-für-Schritt-Abfrage.", detail: "Serviceflow", badge: "Booking" },
      { id: "booking-reservation", icon: PanelTop, title: "Reservierungssystem", text: "Für Anfragen mit Bestätigung, Status und Verwaltung.", detail: "Reservierung", badge: "Booking" },
    ],
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 03 / SMART SYSTEMS
  // Tiefe Auswahl für Websites mit echter Engine dahinter.
  // -----------------------------------------------------
  webSmartSystems: {
    id: "webSmartSystems",
    routeLabel: "Smart Systems",
    routeDepth: 2,
    previousStep: "websites",
    eyebrow: "Smart Systems",
    question: "Welche smarte Website-Funktion brauchst du?",
    description: "Smart Systems verbindet Website, Formular, Daten, Status und Automatisierung.",
    note: "Wähle die Engine-Funktion. Daraus entsteht ein passender Ansatz mit Formular, Portal, Datenbank oder Statuslogik.",
    options: [
      { id: "smart-form-plus", icon: Workflow, title: "Anfrageformular Plus", text: "Für Formulare, die mehr können als nur eine einfache E-Mail senden.", detail: "Formular", badge: "Smart" },
      { id: "smart-status", icon: CheckCircle, title: "Statussystem", text: "Für Kunden, die den Stand ihrer Anfrage oder ihres Projekts verfolgen sollen.", detail: "Status", badge: "Smart" },
      { id: "smart-client", icon: PanelTop, title: "Kundenportal", text: "Für Login, Dokumente, Nachrichten oder Projektübersichten.", detail: "Portal", badge: "Smart" },
      { id: "smart-staff", icon: Briefcase, title: "Mitarbeiterbereich", text: "Für interne Verwaltung, Aufgaben, Anfragen oder Datenpflege.", detail: "Intern", badge: "Smart" },
      { id: "smart-database", icon: Database, title: "Datenbank-Website", text: "Für Seiten, die Inhalte, Produkte oder Anfragen strukturiert speichern.", detail: "Datenbank", badge: "Smart" },
      { id: "smart-auto", icon: Settings, title: "Automatisierter Ablauf", text: "Für E-Mail-Logik, Statusmails, Berechnungen oder eigene Workflows.", detail: "Automation", badge: "Smart" },
    ],
  },

  // -----------------------------------------------------
  // COREHUB ROUTING DATA / EBENE 02 / WEITERE HAUPTBEREICHE
  // Diese Bereiche bleiben vorerst eine Ebene tief, sind aber schon
  // realistisch strukturiert und können später ebenfalls vertieft werden.
  // -----------------------------------------------------
  systems: {
    id: "systems",
    routeLabel: "Systeme",
    routeDepth: 1,
    previousStep: "start",
    eyebrow: "Systeme Auswahl",
    question: "Welche Systemlogik brauchst du?",
    description: "Hier geht es um digitale Abläufe hinter der Oberfläche: Daten, Verwaltung, Status und Steuerung.",
    note: "Systeme bündeln digitale Abläufe hinter der Oberfläche: Dashboards, Daten, Verwaltung und Status.",
    options: [
      { id: "system-dashboard", icon: MonitorSmartphone, title: "Dashboard", text: "Für Übersichten, Kennzahlen, Statusanzeigen und zentrale Steuerung.", detail: "Übersicht & Steuerung", badge: "System" },
      { id: "system-data", icon: Database, title: "Datenverwaltung", text: "Für Kunden, Produkte, Aufträge, Listen oder strukturierte interne Datensätze.", detail: "Daten & Struktur", badge: "System" },
      { id: "system-request", icon: Mail, title: "Anfrage-System", text: "Für eingehende Anfragen, Ticketnummern, Statusverlauf und klare Bearbeitung.", detail: "Anfrage & Status", badge: "System" },
      { id: "system-staff", icon: Briefcase, title: "Mitarbeiterbereich", text: "Für interne Abläufe, Rollen, Zugriff und Arbeitsübersichten.", detail: "Intern & Rollen", badge: "System" },
      { id: "system-client", icon: PanelTop, title: "Kundenportal", text: "Für Kundenstatus, Nachrichten, Dokumente und geschützte Projektbereiche.", detail: "Kunde & Login", badge: "System" },
      { id: "system-custom", icon: Cpu, title: "Custom Logic", text: "Für individuelle Sonderlogiken, Rechner, Generatoren oder eigene Workflows.", detail: "Sonderlogik", badge: "System" },
    ],
  },
  portals: {
    id: "portals",
    routeLabel: "Portale",
    routeDepth: 1,
    previousStep: "start",
    eyebrow: "Portal Auswahl",
    question: "Welcher Portalbereich passt?",
    description: "Portale schaffen geschützte Bereiche für Kunden, Teams, Support oder Verwaltung.",
    note: "Portal-Flows verbinden Login, Rollen, Daten und geschützte Bereiche zu einem klaren Zugang.",
    options: [
      { id: "portal-client", icon: PanelTop, title: "Kundenportal", text: "Status, Nachrichten, Dokumente und geschützter Login für Kunden.", detail: "Kundenbereich", badge: "Portal" },
      { id: "portal-staff", icon: Briefcase, title: "Mitarbeiterportal", text: "Interne Aufgaben, Übersichten, Rollen und Verwaltung für Teams.", detail: "Team intern", badge: "Portal" },
      { id: "portal-support", icon: Bot, title: "Supportportal", text: "Anfragen, Tickets, Antworten und Übergabe an E-Mail oder Discord.", detail: "Support & Tickets", badge: "Portal" },
      { id: "portal-community", icon: Gamepad2, title: "Community-Portal", text: "Profile, Rollen, Mitgliederbereiche und Projektinformationen.", detail: "Community", badge: "Portal" },
      { id: "portal-project", icon: Layers, title: "Projektportal", text: "Projektstand, Dateien, Feedback und Kommunikation an einem Ort.", detail: "Projektfluss", badge: "Portal" },
      { id: "portal-admin", icon: Settings, title: "Adminbereich", text: "Verwaltung, Rechte, Inhalte, Produkte oder Datenpflege.", detail: "Admin & Rechte", badge: "Portal" },
    ],
  },
  tools: {
    id: "tools",
    routeLabel: "Tools",
    routeDepth: 1,
    previousStep: "start",
    eyebrow: "Tool Auswahl",
    question: "Welches Tool hilft deinem Ablauf?",
    description: "Kleine digitale Werkzeuge können Arbeit sparen, Eingaben strukturieren und Ergebnisse sauber ausgeben.",
    note: "Tools eignen sich besonders gut als kleine Business-Helfer oder als interne Erweiterung einer Website.",
    options: [
      { id: "tool-calculator", icon: Cpu, title: "Preisrechner", text: "Automatische Berechnung nach Auswahl, Menge, Umfang oder Zeitraum.", detail: "Rechnen & Logik", badge: "Tool" },
      { id: "tool-generator", icon: Code2, title: "Generator", text: "PDFs, Angebote, Texte, Codes oder strukturierte Ausgaben erzeugen.", detail: "Erzeugen", badge: "Tool" },
      { id: "tool-form", icon: Workflow, title: "Formular-Assistent", text: "Schritt-für-Schritt-Abfragen statt langer Standardformulare.", detail: "Geführte Eingabe", badge: "Tool" },
      { id: "tool-planner", icon: Calendar, title: "Planer", text: "Termine, Reservierungen, Mietzeiträume oder Projektphasen vorbereiten.", detail: "Planung", badge: "Tool" },
      { id: "tool-status", icon: CheckCircle, title: "Status-Tool", text: "Statusanzeigen, Verlauf, Fortschritt und Benachrichtigungen sichtbar machen.", detail: "Fortschritt", badge: "Tool" },
      { id: "tool-invoice", icon: Briefcase, title: "Rechnungstool", text: "Angebote, Rechnungen, Abschläge, Schlussrechnungen und klare PDF-Ausgaben.", detail: "Angebot & Rechnung", badge: "Tool" },
    ],
  },
  automation: {
    id: "automation",
    routeLabel: "Automation",
    routeDepth: 1,
    previousStep: "start",
    eyebrow: "Automation Auswahl",
    question: "Was soll automatisch laufen?",
    description: "Automation verbindet Eingaben, Status, Nachrichten und wiederkehrende Abläufe.",
    note: "Automation verbindet wiederkehrende Aufgaben mit E-Mail, Status und Prozesslogik.",
    options: [
      { id: "auto-mail", icon: Mail, title: "Statusmails", text: "Automatische E-Mails bei neuen Anfragen oder Statusänderungen.", detail: "E-Mail-Flow", badge: "Flow" },
      { id: "auto-request", icon: Workflow, title: "Anfrageflow", text: "Anfragen sauber erfassen, sortieren und an die richtigen Stellen weiterleiten.", detail: "Anfrage", badge: "Flow" },
      { id: "auto-alert", icon: Bot, title: "Benachrichtigung", text: "E-Mail, Discord oder interne Hinweise bei neuen Vorgängen.", detail: "Hinweis", badge: "Flow" },
      { id: "auto-doc", icon: Layers, title: "Dokument-Flow", text: "Zusammenfassungen, PDFs oder strukturierte Ausgaben erzeugen.", detail: "Dokumente", badge: "Flow" },
      { id: "auto-check", icon: CheckCircle, title: "Prüflogik", text: "Eingaben validieren, berechnen oder automatisch einordnen.", detail: "Validierung", badge: "Flow" },
      { id: "auto-follow", icon: Rocket, title: "Follow-up", text: "Erinnerungen, Rückfragen oder Folgeaktionen klar strukturieren.", detail: "Rückfrage", badge: "Flow" },
    ],
  },
  design: {
    id: "design",
    routeLabel: "Design",
    routeDepth: 1,
    previousStep: "start",
    eyebrow: "Design Auswahl",
    question: "Welche visuelle Richtung brauchst du?",
    description: "Design macht die technische Lösung verständlich, wiedererkennbar und hochwertig.",
    note: "Design ergänzt Webseiten, Tools und Systeme als klare visuelle Richtung.",
    options: [
      { id: "design-logo", icon: Sparkles, title: "Logo / Marke", text: "Grundlook, Logo-Idee, Farbwelt und Wiedererkennung entwickeln.", detail: "Marke", badge: "Design" },
      { id: "design-website", icon: MonitorSmartphone, title: "Website-Look", text: "Designrichtung, Layout, Atmosphäre und visuelle Sprache für Webseiten.", detail: "Weblook", badge: "Design" },
      { id: "design-social", icon: Palette, title: "Social Assets", text: "Banner, Profilbilder, Beitragsgrafiken oder Präsentationsbilder.", detail: "Social", badge: "Design" },
      { id: "design-product", icon: ShoppingBag, title: "Produktbilder", text: "Shopbilder, Vorschaubilder und Angebotsgrafiken für Produkte.", detail: "Produkt", badge: "Design" },
      { id: "design-ui", icon: PanelTop, title: "UI-Design", text: "Oberflächen für Dashboards, Portale und Tools planen und gestalten.", detail: "Interface", badge: "Design" },
      { id: "design-brandkit", icon: Layers, title: "Brand Kit", text: "Farben, Schriften, Stilregeln und wiederverwendbare Elemente sammeln.", detail: "Styleguide", badge: "Design" },
    ],
  },
};

// =====================================================
// REFERENZEN / CASECUBE / CASE VIEWER
// Hier werden Portfolio-Referenzen gepflegt.
//
// Ändern hier wirkt auf:
// - CaseCube-Flächen
// - Referenz-Auswahlbuttons
// - Detailkarte rechts
// - Großansicht / Case Viewer
//
// Bilder liegen unter:
// src/assets/references/
//
// Felder:
// - title: Projektname
// - short: Kurzlabel auf der Cube-Fläche
// - type/status: Anzeige in Detailkarte und Großansicht
// - image: Hauptbild
// - gallery: Bilder für die Großansicht
// - url: optionaler Live-Link
// - meta: kleine Tag-Pills
// =====================================================
// =====================================================
// COREHUB / CUBE LAUNCH TARGETS
// Diese Hilfsfunktion übersetzt eine gewählte Route in eine
// Zielklasse für den Launch-Cube. So kann der CoreCube später
// je nach Auswahl zur passenden Seite/Demo-Richtung drehen.
//
// Typische Route:
// CoreHub://Route / Webseiten / Business Clean / Dienstleister-Seite
// =====================================================
// =====================================================
// COREHUB / SHOWCASE CASE SELECTOR META
// CES-BUILD-096:
// Kleine sichtbare Hinweise auf Karten, die bereits zu echten
// Showroom-/Showcase-Zielen führen. Ab diesem Stand wird nach außen
// bewusst nur noch das einheitliche Label "Showcase" angezeigt.
// =====================================================
const getCoreHubDemoCaseMeta = (option, stepId) => {
  if (!option?.id) return null;

  if (stepId === "websites" && option.id === "website-business-clean") {
    return {
      label: "Showcase",
      title: "All4You",
      detail: "Dienstleisterseite",
    };
  }

  if (stepId === "websites" && option.id === "website-dark-premium") {
    return {
      label: "Showcase",
      title: "Dark Premium",
      detail: "Markenbühne",
    };
  }

  if (stepId === "websites" && option.id === "website-gaming-matrix") {
    return {
      label: "Showcase",
      title: "Inselleben",
      detail: "RP-Server",
    };
  }

  if (stepId === "webBusinessClean" && option.id === "business-service") {
    return {
      label: "Showcase",
      title: "All4You",
      detail: "Business Clean",
    };
  }

  if (stepId === "webDarkPremium" && ["premium-brand", "premium-studio", "premium-luxury", "premium-portfolio", "premium-landing", "premium-showcase"].includes(option.id)) {
    return {
      label: "Showcase",
      title: "Dark Premium",
      detail: "Premium / Studio",
    };
  }

  if (stepId === "webGamingMatrix" && option.id === "gaming-rp-server") {
    return {
      label: "Showcase",
      title: "Inselleben",
      detail: "Gaming Matrix",
    };
  }

  if (stepId === "websites" && option.id === "website-shopflow") {
    return {
      label: "Showcase",
      title: "Hammer Modding",
      detail: "Shopflow",
    };
  }

  if (stepId === "webShopflow" && ["shop-tebex", "shop-download", "shop-small"].includes(option.id)) {
    return {
      label: "Showcase",
      title: "Hammer Modding",
      detail: "Shopflow",
    };
  }

  if (stepId === "websites" && option.id === "website-booking-rental") {
    return {
      label: "Showcase",
      title: "RentalOps",
      detail: "Booking / Rental",
    };
  }

  if (stepId === "webBookingRental" && ["booking-rental", "booking-calendar", "booking-appointment"].includes(option.id)) {
    return {
      label: "Showcase",
      title: "RentalOps",
      detail: "Kalender / Anfrage",
    };
  }

  if (stepId === "websites" && option.id === "website-smart-systems") {
    return {
      label: "Showcase",
      title: "CoreOps",
      detail: "Dashboard",
    };
  }

  if (stepId === "webSmartSystems" && ["smart-form-plus", "smart-status", "smart-client", "smart-staff", "smart-database", "smart-auto", "smart-dashboard", "smart-ticket", "smart-admin"].includes(option.id)) {
    return {
      label: "Showcase",
      title: "CoreOps",
      detail: "Smart Systems",
    };
  }

  return null;
};

const getCoreHubLaunchTargetClass = (routeSegments = []) => {
  const routeText = routeSegments.join(" ").toLowerCase();

  if (routeText.includes("business clean")) return "target-business-clean";
  if (routeText.includes("dark premium")) return "target-dark-premium";
  if (routeText.includes("gaming matrix")) return "target-gaming-matrix";
  if (routeText.includes("shopflow")) return "target-shopflow";
  if (routeText.includes("booking") || routeText.includes("rental")) return "target-booking-rental";
  if (routeText.includes("smart systems")) return "target-smart-systems";

  return "target-default";
};

// =====================================================
// COREHUB / LAUNCH PARTICLE SETTINGS
// Zentrale Stellschraube für die CoreCube-Materialisierung.
// Die passenden CSS-Regeln liegen in App.css unter:
// SECTION: CES-BUILD-065 / COREHUB PARTICLE MERGE ASSEMBLY
//
// Wichtig:
// Wenn diese Zahl geändert wird, müssen in App.css auch die
// .assembly-particle.particle-X Regeln entsprechend gepflegt werden.
// =====================================================
const COREHUB_ASSEMBLY_PARTICLE_COUNT = 34;

// =====================================================
// COREHUB / DEMO WORLD MAP
// CES-BUILD-089:
// Aktuelle Showroom-Welten und geplante Slots.
//
// LIVE / VORHANDEN:
// 01 Business Clean  -> Dienstleister-Seite       -> All4You
// 02 Dark Premium    -> Premium-/Studio-/Markenwelt -> Dark Premium
// 03 Gaming Matrix   -> RP-Server Website         -> Inselleben
// 04 Shopflow        -> Tebex / Externer Checkout -> Hammer Modding
// 05 Booking/Rental  -> Vermietungs-/Booking-Demo -> RentalOps
// 06 Smart Systems   -> CoreOps Dashboard / Portal / Systemwelt
//
// Wichtig:
// - Diese Karte ist bewusst nur Dokumentation.
// - Alle sechs Haupt-Webseitenrichtungen haben jetzt einen Showcase-/Devlink-Pfad.
// - Neue Demo-Welten werden weiter über getCoreHubDemoTarget() + Galerie/Cube-Faces gepflegt.
// - Die sichtbaren kleinen Badges bleiben einheitlich bei "Showcase".
// =====================================================

// =====================================================
// COREHUB / ALL4YOU DEMO GALLERY
// CES-BUILD-070:
// Lokale Bilder/Story-Slides für die interne All4You-Demo.
// Keine externe Seite und kein iframe: die Galerie arbeitet mit
// optimierten, lokal eingebundenen Vorschau-Bildern.
//
// Pflege:
// - Neue Screenshots: assets/demos/all4you/ ergänzen
// - Danach hier einen neuen Slide mit image, label, title, text anlegen
// - Story-Slides nutzen type: "story" und bleiben reine UI-Karten
// =====================================================
const all4YouDemoGallery = [
  {
    type: "image",
    label: "Startseite",
    title: "Klarer erster Eindruck",
    text: "Hero, Leistungen, Vertrauensleiste und Kontaktführung zeigen direkt: mehrere Services, ein Ansprechpartner.",
    image: all4YouDemoHome,
    alt: "All4You Startseite mit Hero-Bereich, Leistungsübersicht und Service-Karten",
  },
  {
    type: "image",
    label: "Navigation",
    title: "Leistungen sauber geführt",
    text: "Die Navigation führt Besucher schnell zu Transport, Anhängervermietung, Entrümpelung und Reinigung.",
    image: all4YouDemoNavigation,
    alt: "All4You Navigation mit geöffnetem Leistungsmenü",
  },
  {
    type: "image",
    label: "Anfrage-Assistent",
    title: "Transport Schritt für Schritt",
    text: "Der Wizard fragt Adressen, Distanz, Fahrzeugzustand, Zugang und Kontakt strukturiert ab.",
    image: all4YouDemoTransport,
    alt: "All4You Motorrad- und Rollertransport Assistent mit Distanzberechnung",
  },
  {
    type: "image",
    label: "Anhängervermietung",
    title: "Preise und Infos verständlich",
    text: "Anhänger-Daten, Hinweise, Mietpreise und Wochenendtarife sind klar gegliedert statt in Fließtext versteckt.",
    image: all4YouDemoTrailer,
    alt: "All4You Anhängervermietung mit technischen Daten und Mietpreisen",
  },
  {
    type: "image",
    label: "Mietzeitraum",
    title: "Kalender statt Chaos",
    text: "Kunden wählen den Zeitraum im Kalender; Preis und Mietdauer erscheinen sauber und verständlich.",
    image: all4YouDemoCalendar,
    alt: "All4You Mietzeitraum und Preis Assistent mit Kalenderauswahl",
  },
  {
    type: "image",
    label: "Über uns",
    title: "Konzept und Vertrauen",
    text: "Die Über-uns-Seite erklärt Werte, Leistungen, Ziel und Ablauf ohne unnötige Fachsprache.",
    image: all4YouDemoAbout,
    alt: "All4You Über-uns-Seite mit Konzept, Leistungen und Anfrageziel",
  },
  {
    type: "image",
    label: "Mitarbeiterportal",
    title: "Anfragen zentral verwalten",
    text: "Mitarbeiterportal für Tickets, Nachrichten, Anhänge, Statusänderungen und offene Rückfragen.",
    image: all4YouDemoDashboard,
    alt: "All4You Mitarbeiterportal mit Ticketübersicht und Verwaltungsbereich",
  },
  {
    type: "image",
    label: "Team-Kalender",
    title: "Anhänger-Verfügbarkeit steuern",
    text: "Das Team verwaltet Belegung im Hintergrund; Kunden senden vorne eine unverbindliche Mietanfrage.",
    image: all4YouDemoInternalCalendar,
    alt: "All4You Anhänger-Kalender im Mitarbeiterportal",
  },
  {
    type: "story",
    label: "Projektstory",
    title: "",
    text: "All4You kam mit Logo und grober Service-Idee. CoreEngineStudio hat daraus einen kompletten Business-Clean-Auftritt mit Website vorne und smarter Verwaltung dahinter entwickelt.",
    bullets: [
      "Konzept, Seitenstruktur, Designrichtung und Texte vollständig aufgebaut",
      "Helle Business-Clean-Oberfläche mit eigenen Icons und sauberer Leistungsführung",
      "Leistungsbereiche: Motorrad-/Rollertransport, Anhängervermietung, Entrümpelung und Reinigung",
      "Anfrage-Assistenten, Kontaktformular, E-Mail/Postfach und geführte Kundenwege",
      "Datenbank-Anfragen mit Ticketnummern, Statuslogik und Statusverlauf",
      "Mitarbeiterportal mit Tickets, Archiv, Nachrichten, Anhängen und Teamverwaltung",
      "Team-Kalender für Verfügbarkeit, Reservierung und Belegung",
      "FAQ-Bereich, Cookie-Banner, SEO Basic und Google Search Console sauber eingebunden",
    ],
  },
];


// =====================================================
// COREHUB / SHARED DEMO CUBE FACES
// CES-BUILD-078:
// Eine gemeinsame Face-Datenquelle für:
// - Hero-CoreCube oben
// - CoreHub-/Showroom-Cube unten
//
// Keine iframes, keine externe Website im Cube.
// Es werden nur lokale, optimierte All4You-Preview-Bilder genutzt.
// =====================================================
const all4YouSharedCubeFaces = [
  {
    key: "front",
    eyebrow: "Startseite",
    label: "All4You",
    hint: "Hero · Leistungen · Vertrauen",
    previewImage: all4YouDemoHome,
    previewAlt: "All4You Startseite als CoreCube-Fläche",
  },
  {
    key: "right",
    eyebrow: "Navigation",
    label: "Services",
    hint: "Transport · Anhänger · Reinigung",
    previewImage: all4YouDemoNavigation,
    previewAlt: "All4You Leistungsnavigation als CoreCube-Fläche",
  },
  {
    key: "back",
    eyebrow: "Assistent",
    label: "Anfrage",
    hint: "Wizard · Strecke · Kontakt",
    previewImage: all4YouDemoTransport,
    previewAlt: "All4You Anfrage-Assistent als CoreCube-Fläche",
  },
  {
    key: "left",
    eyebrow: "Rental",
    label: "Kalender",
    hint: "Zeitraum · Preis · Anfrage",
    previewImage: all4YouDemoCalendar,
    previewAlt: "All4You Mietzeitraum-Kalender als CoreCube-Fläche",
  },
  {
    key: "top",
    eyebrow: "Portal",
    label: "Dashboard",
    hint: "Tickets · Status · Verwaltung",
    previewImage: all4YouDemoDashboard,
    previewAlt: "All4You Mitarbeiterportal als CoreCube-Fläche",
  },
  {
    key: "bottom",
    eyebrow: "Planung",
    label: "Planung",
    hint: "Anhänger · Belegung · Team",
    previewImage: all4YouDemoInternalCalendar,
    previewAlt: "All4You Anhänger-Kalender als CoreCube-Fläche",
  },
];


// =====================================================
// COREHUB / INSELLEBEN DEMO GALLERY
// CES-BUILD-083:
// Lokale Bilder/Story-Slides für die Gaming-Matrix-Demo.
// Grundlage: bereitgestelltes Inselleben-RP-Material.
// Keine externe Seite und kein iframe: die Galerie arbeitet mit
// lokal eingebundenen Vorschau-Bildern.
// =====================================================
const insellebenDemoGallery = [
  {
    type: "image",
    label: "Startseite",
    title: "Atmosphäre direkt im Einstieg",
    text: "Hero, Logo, Serverstatus, TikTok, Discord und Join-Buttons setzen sofort die Gaming-/RP-Stimmung.",
    image: insellebenDemoHome,
    alt: "Inselleben RP Startseite mit Logo, Serverstatus und Discord-Button",
  },
  {
    type: "image",
    label: "Philosophie",
    title: "RP-Welt mit klarer Haltung",
    text: "Die Philosophie erklärt, wofür der Server steht: Immersion, Respekt, Charaktertiefe und langfristige Vision.",
    image: insellebenDemoPhilosophy,
    alt: "Inselleben RP Philosophie-Seite mit Texten und Bildbereich",
  },
  {
    type: "image",
    label: "Geschichte",
    title: "Entwicklung statt Stillstand",
    text: "Die Timeline zeigt Entwicklung, Beta und Community-Aufbau als Story statt trockener Info.",
    image: insellebenDemoHistory,
    alt: "Inselleben RP Geschichte-Seite mit Timeline-Karten",
  },
  {
    type: "image",
    label: "Regelwerk",
    title: "Regeln als geführtes System",
    text: "Kategorien, Suche, Schnellstart und ausklappbare Regelbereiche machen ein großes Regelwerk nutzbar.",
    image: insellebenDemoRules,
    alt: "Inselleben RP Regelwerk mit Kategorien, Suche und Regelkarten",
  },
  {
    type: "image",
    label: "Team",
    title: "Struktur sichtbar machen",
    text: "Team- und Rollenbereiche zeigen Zuständigkeiten, Projektleitung und erweiterbare Struktur.",
    image: insellebenDemoTeam,
    alt: "Inselleben RP Team-Seite mit Rollen- und Strukturkarten",
  },
  {
    type: "image",
    label: "Status",
    title: "Community- und Serverdaten",
    text: "Statuskarten, Community-Zahlen und kurze Projektvorstellung zeigen, dass der Auftritt mehr als nur Deko ist.",
    image: insellebenDemoStatus,
    alt: "Inselleben RP Startseite mit Serverstatus, Community-Zahlen und Kurzvorstellung",
  },
  {
    type: "image",
    label: "Community",
    title: "Echte Eindrücke statt leere Fläche",
    text: "Community-Bilder, Fraktionsmomente und RP-Szenen geben der Welt direkt visuelle Substanz.",
    image: insellebenDemoGalleryImage,
    alt: "Inselleben RP Community-Bilder-Galerie mit mehreren Szenen",
  },
  {
    type: "story",
    label: "Gaming Matrix Story",
    title: "",
    text: "Inselleben zeigt als Gaming-Matrix-Showcase, wie aus einem RP-Server ein starker Community-Auftritt mit Atmosphäre, Join-Flow, Serverstatus, Regelwerk, Teamstruktur und echten Eindrücken werden kann.",
    bullets: [
      "Dunkle Gaming-Oberfläche mit lila/orange Akzenten und starkem Hero-Fokus",
      "Servergefühl über Statusanzeige, Discord, TikTok und klare Join-Buttons",
      "Inhaltsseiten für Philosophie, Geschichte, Regelwerk, Team und Impressum",
      "Regelwerk mit Kategorien, Suche, Schnellstart und strukturierter Leseführung",
      "Community-Bilder als visuelle Welt statt leerer Platzhalter",
      "Geeignet für RP-Server, Gaming-Communities und Discord-Projekte",
      "Erweiterbar um Bewerbungen, Fraktionen, Changelog, News oder Portalbereiche",
      "Showcase-Case wird als visuelles Beispiel für Community-Auftritte geführt",
    ],
  },
];

// =====================================================
// COREHUB / INSELLEBEN SHARED DEMO CUBE FACES
// CES-BUILD-083:
// Gemeinsame Face-Datenquelle für den Gaming-Matrix-Case.
// =====================================================
const insellebenSharedCubeFaces = [
  {
    key: "front",
    eyebrow: "RP Server",
    label: "Inselleben",
    hint: "Hero · Status · Discord",
    previewImage: insellebenDemoHome,
    previewAlt: "Inselleben Startseite als CoreCube-Fläche",
  },
  {
    key: "right",
    eyebrow: "Werte",
    label: "Philosophie",
    hint: "Atmosphäre · Charakter",
    previewImage: insellebenDemoPhilosophy,
    previewAlt: "Inselleben Philosophie als CoreCube-Fläche",
  },
  {
    key: "back",
    eyebrow: "Regeln",
    label: "Regelwerk",
    hint: "Suche · Kategorien",
    previewImage: insellebenDemoRules,
    previewAlt: "Inselleben Regelwerk als CoreCube-Fläche",
  },
  {
    key: "left",
    eyebrow: "Story",
    label: "Geschichte",
    hint: "Timeline · Entwicklung",
    previewImage: insellebenDemoHistory,
    previewAlt: "Inselleben Geschichte als CoreCube-Fläche",
  },
  {
    key: "top",
    eyebrow: "Team",
    label: "Struktur",
    hint: "Rollen · Leitung",
    previewImage: insellebenDemoTeam,
    previewAlt: "Inselleben Teamseite als CoreCube-Fläche",
  },
  {
    key: "bottom",
    eyebrow: "Community",
    label: "Bilder",
    hint: "Momente · Welt",
    previewImage: insellebenDemoGalleryImage,
    previewAlt: "Inselleben Community-Galerie als CoreCube-Fläche",
  },
];


// =====================================================
// COREHUB / HAMMER MODDING DEMO GALLERY
// CES-BUILD-086:
// Lokale Bilder/Story-Slides für die Shopflow-Demo.
// Grundlage: bereitgestellte Hammer-Modding-Screenshots.
// Keine externe Seite und kein iframe: die Galerie arbeitet mit
// lokal eingebundenen Vorschau-Bildern.
// =====================================================
const hammerDemoGallery = [
  {
    type: "image",
    label: "Startseite",
    title: "Shop-Intro mit Produktlogik",
    text: "Hero, Kategorien, Produktkarten, Warenkorb und Store-Infos führen direkt in den digitalen Verkaufsfluss.",
    image: hammerDemoHome,
    alt: "Hammer Modding Startseite mit Produktkarten, Warenkorb und Store-Infos",
  },
  {
    type: "image",
    label: "Scripts",
    title: "Premium Scripts klar präsentiert",
    text: "Script-Produkte werden mit Bild, Preis, Kurzbeschreibung und direktem Produktzugang übersichtlich geführt.",
    image: hammerDemoScripts,
    alt: "Hammer Modding Script-Bereich mit Produktkarten",
  },
  {
    type: "image",
    label: "Kleidung",
    title: "Kleidungs-Packs als Shopbereich",
    text: "Kleidungssets, Uniformen und Packs sind als eigener Produktbereich mit Preis und Produkt-CTA aufgebaut.",
    image: hammerDemoClothing,
    alt: "Hammer Modding Kleidungsbereich mit Produktkarten",
  },
  {
    type: "image",
    label: "Detailseite",
    title: "Produktdetail mit Warenkorb",
    text: "Detailseiten zeigen Produktbild, Preis, enthaltene Bestandteile, Nutzen, Look und den Warenkorb als Kaufstrecke.",
    image: hammerDemoProductDetail,
    alt: "Hammer Modding Produktdetailseite mit SEK-Pack und Warenkorb",
  },
  {
    type: "image",
    label: "Free Scripts",
    title: "Kostenlose Einstiegsprodukte",
    text: "Free Scripts geben Besuchern einen schnellen Einstieg und stärken Community, Vertrauen und Wiederkehr.",
    image: hammerDemoFreeScripts,
    alt: "Hammer Modding Free-Scripts-Bereich mit kostenlosen Produkten",
  },
  {
    type: "image",
    label: "Registrierung",
    title: "Account-Flow mit Discord",
    text: "Registrierung und Discord-Anmeldung sind sichtbar in den Shopflow eingebunden, bevor der Kaufprozess sinnvoll weiterläuft.",
    image: hammerDemoRegister,
    alt: "Hammer Modding Registrierung mit Discord-Anmeldung",
  },
  {
    type: "image",
    label: "Login",
    title: "Login als Kaufvoraussetzung",
    text: "Der Login-Dialog zeigt, wie Konto, Discord und Zugriff Teil der Kaufstrecke werden.",
    image: hammerDemoLogin,
    alt: "Hammer Modding Login-Modal mit Discord-Anmeldung",
  },
  {
    type: "image",
    label: "Profil",
    title: "Konto, Aktivität und Verbindung",
    text: "Das Profil bündelt Accountdaten, Discord-Verbindung, Aktivität und Kundeninformationen.",
    image: hammerDemoProfile,
    alt: "Hammer Modding Profilseite mit Accountdaten und Discord-Verbindung",
  },
  {
    type: "image",
    label: "Admin",
    title: "Produktpflege hinter dem Shop",
    text: "Der geschützte Verwaltungsbereich zeigt, wie Produkte, Rollen, Daten und Uploads im Hintergrund gepflegt werden können.",
    image: hammerDemoAdmin,
    alt: "Hammer Modding Produktverwaltung im geschützten Adminbereich",
  },
  {
    type: "story",
    label: "Shopflow Story",
    title: "",
    text: "Hammer Modding zeigt als Shopflow-Showcase, wie digitale FiveM-Produkte als klare Verkaufsstrecke funktionieren: Produktkarten, Detailseiten, Warenkorb, Konto, Discord-Verknüpfung und Produktpflege greifen ineinander.",
    bullets: [
      "Dark-Shop-Design für Scripts, Kleidung und digitale FiveM-Produkte",
      "Produktübersicht mit Kategorien, Bildern, Preisen und klaren Produkt-CTAs",
      "Detailseiten mit Bildern, Preis, Bestandteilen, Einsatz, Look und Nutzen",
      "Warenkorb und Kaufvorbereitung als sichtbare Verkaufsstrecke",
      "Account- und Discord-Verknüpfung als logischer Pflichtschritt vor dem Kauf",
      "Free-Scripts-Bereich als Community- und Vertrauenseinstieg",
      "Admin-/Produktpflege für laufende Shopverwaltung und neue Produkte",
      "Geeignet für digitale Produkte, Modding-Shops, Asset-Stores und externe Checkout-Flows",
    ],
  },
];

// =====================================================
// COREHUB / HAMMER SHARED DEMO CUBE FACES
// CES-BUILD-086:
// Gemeinsame Face-Datenquelle für den Shopflow-Case.
// =====================================================
const hammerSharedCubeFaces = [
  {
    key: "front",
    eyebrow: "Shopflow",
    label: "Hammer",
    hint: "produkte · checkout",
    previewImage: hammerDemoHome,
    previewAlt: "Hammer Modding Startseite als CoreCube-Fläche",
  },
  {
    key: "right",
    eyebrow: "Scripts",
    label: "Produkte",
    hint: "karten · preise",
    previewImage: hammerDemoScripts,
    previewAlt: "Hammer Modding Script-Produkte als CoreCube-Fläche",
  },
  {
    key: "back",
    eyebrow: "Kleidung",
    label: "Packs",
    hint: "sets · details",
    previewImage: hammerDemoClothing,
    previewAlt: "Hammer Modding Kleidung als CoreCube-Fläche",
  },
  {
    key: "left",
    eyebrow: "Detail",
    label: "Warenkorb",
    hint: "preis · kauf",
    previewImage: hammerDemoProductDetail,
    previewAlt: "Hammer Modding Produktdetail als CoreCube-Fläche",
  },
  {
    key: "top",
    eyebrow: "Account",
    label: "Discord",
    hint: "login · profil",
    previewImage: hammerDemoProfile,
    previewAlt: "Hammer Modding Profil als CoreCube-Fläche",
  },
  {
    key: "bottom",
    eyebrow: "Admin",
    label: "Engine",
    hint: "pflege · daten",
    previewImage: hammerDemoAdmin,
    previewAlt: "Hammer Modding Produktverwaltung als CoreCube-Fläche",
  },
];



// =====================================================
// COREHUB / DARK PREMIUM DEMO GALLERY
// CES-BUILD-097:
// Dark Premium ist jetzt nicht mehr nur ein Konzept-Ziel,
// sondern folgt dem gleichen Showroom-Prinzip wie All4You,
// Inselleben, Hammer, RentalOps und CoreOps.
//
// Wichtig:
// - Die Hauptseite bleibt Showroom/Preview-Einstieg.
// - Die klickbare Dark-Premium-Demo liegt extern auf dem Devlink.
// - Galerie und Cube-Faces nutzen lokale Vorschau-Bilder.
// - Der sichtbare Badge bleibt einheitlich "Showcase".
// =====================================================
const darkPremiumDemoGallery = [
  {
    type: "image",
    label: "Statement",
    title: "Premium-Einstieg mit ruhiger Wirkung",
    text: "Dark Premium startet mit einer starken dunklen Markenbühne, klarer Headline, edler Kartenoptik und direkter Anfrageführung.",
    image: darkPremiumDemoStatement,
    alt: "Dark Premium Startbereich mit Markenstatement und Premium-Karten",
  },
  {
    type: "image",
    label: "Signature",
    title: "Designsystem statt Standardseite",
    text: "Abstände, Typografie, Karten und Micro-Animationen wirken wie eine geschlossene visuelle Markenlogik.",
    image: darkPremiumDemoSignature,
    alt: "Dark Premium Signature System mit drei Premium-Strukturkarten",
  },
  {
    type: "image",
    label: "Experience",
    title: "Besucherführung mit Dramaturgie",
    text: "Der Aufbau führt vom Markenstatement über Showcase und Interaktion bis zur Anfrage, ohne überladen zu wirken.",
    image: darkPremiumDemoExperience,
    alt: "Dark Premium Experience Flow mit Visitor Journey und Premium Touchpoints",
  },
  {
    type: "image",
    label: "Studio Pulse",
    title: "Social- und Launch-Gefühl",
    text: "Content-Wall, Favoriten, Launch-Updates oder Kampagnen können die Premium-Seite lebendiger und markanter machen.",
    image: darkPremiumDemoPulse,
    alt: "Dark Premium Studio Pulse mit Social Layer und Content-Karten",
  },
  {
    type: "image",
    label: "Module",
    title: "Premium vorne, Engine dahinter",
    text: "Anfrageflow, Kundenbereich, Social Studio und Automationen zeigen, dass Dark Premium mehr sein kann als nur Optik.",
    image: darkPremiumDemoModules,
    alt: "Dark Premium Modulübersicht mit Anfrageflow, Kundenbereich und Automationen",
  },
  {
    type: "image",
    label: "Kontakt",
    title: "Anfrage passend zur Markenwelt",
    text: "Der Abschluss führt Besucher nicht in ein generisches Formular, sondern in eine hochwertige, geführte Projektanfrage.",
    image: darkPremiumDemoContact,
    alt: "Dark Premium Kontaktbereich mit Premium-Projektanfrage",
  },
  {
    type: "story",
    label: "Premium Story",
    title: "Dark Premium als eigene Showcase-Welt",
    text: "Dark Premium zeigt, wie eine dunkle, edle Website für Marken, Studios, Creator oder hochwertige Dienstleistungen wirken kann.",
    bullets: [
      "Dunkle Markenbühne mit starkem ersten Eindruck",
      "Ruhige Premium-Typografie, Kartenoptik und Glow-Akzente",
      "Geführte Dramaturgie statt überladener Standardseite",
      "Social-, Launch- oder Content-Layer als mögliche Erlebnisfläche",
      "Anfrageflow, Kundenbereich und Automationen als smarte Engine",
      "Geeignet für Studios, Agenturen, Creator, Marken und Premium-Angebote",
      "Live-Showcase ist extern verlinkt",
    ],
  },
];

// =====================================================
// COREHUB / DARK PREMIUM SHARED DEMO CUBE FACES
// CES-BUILD-097:
// Gemeinsame Face-Datenquelle für Dark Premium. Diese Bilder
// erscheinen auf den Cube-Flächen und in der Galerie.
// =====================================================
const darkPremiumSharedCubeFaces = [
  {
    key: "front",
    eyebrow: "Dark Premium",
    label: "Statement",
    hint: "hero · brand",
    previewImage: darkPremiumDemoStatement,
    previewAlt: "Dark Premium Statement als CoreCube-Fläche",
  },
  {
    key: "right",
    eyebrow: "Signature",
    label: "System",
    hint: "look · typografie",
    previewImage: darkPremiumDemoSignature,
    previewAlt: "Dark Premium Signature System als CoreCube-Fläche",
  },
  {
    key: "back",
    eyebrow: "Journey",
    label: "Experience",
    hint: "flow · vertrauen",
    previewImage: darkPremiumDemoExperience,
    previewAlt: "Dark Premium Experience Flow als CoreCube-Fläche",
  },
  {
    key: "left",
    eyebrow: "Social",
    label: "Pulse",
    hint: "content · launch",
    previewImage: darkPremiumDemoPulse,
    previewAlt: "Dark Premium Studio Pulse als CoreCube-Fläche",
  },
  {
    key: "top",
    eyebrow: "Modules",
    label: "Engine",
    hint: "portal · automation",
    previewImage: darkPremiumDemoModules,
    previewAlt: "Dark Premium Module als CoreCube-Fläche",
  },
  {
    key: "bottom",
    eyebrow: "CTA",
    label: "Showcase",
    hint: "live · klickbar",
    previewImage: darkPremiumDemoContact,
    previewAlt: "Dark Premium Kontaktbereich als CoreCube-Fläche",
  },
];

// =====================================================
// COREHUB / BOOKING RENTAL DEMO GALLERY
// CES-BUILD-095:
// RentalOps folgt jetzt dem gleichen Showroom-Prinzip wie
// CoreOps: Der CoreCube zeigt lokale Vorschau-/Mockup-Bilder,
// die klickbare Live-Demo liegt extern auf dem Cloudflare-Devlink.
//
// Wichtig:
// - Booking/Rental nutzt ab diesem Stand eigene RentalOps-Bilder.
// - All4You bleibt weiterhin Business-Clean-Case und wird hier nicht
//   mehr als Booking/Rental-Scaffold zweckentfremdet.
// - Die echte klickbare Demo öffnet über https://corerental.pages.dev/.
// =====================================================
const bookingRentalDemoGallery = [
  {
    type: "image",
    label: "Startseite",
    title: "RentalOps als eigene Erlebniswelt",
    text: "Die Vermietungsseite wirkt bewusst anders als ein Dashboard: hell, produktnah und auf Mietobjekte, Zeitraum und Anfrageführung ausgerichtet.",
    image: rentalOpsDemoHome,
    alt: "RentalOps Startseite mit moderner Vermietungs- und Booking-Präsentation",
  },
  {
    type: "image",
    label: "Mietflotte",
    title: "Mietobjekte sauber vergleichbar",
    text: "Fahrzeuge, Anhänger, E-Bikes oder Geräte werden über Karten, Kategorien, Preise und kurze Einsatzzwecke direkt verständlich dargestellt.",
    image: rentalOpsDemoFleet,
    alt: "RentalOps Mietflotte mit filterbaren Mietobjekt-Karten",
  },
  {
    type: "image",
    label: "Preis & Zeitraum",
    title: "Preislogik verständlich geführt",
    text: "Der Kunde wählt nicht nur frei Text, sondern wird durch Mietobjekt, Startdatum, Enddatum und Preisvorschau geführt.",
    image: rentalOpsDemoBooking,
    alt: "RentalOps Buchungswidget mit Zeitraumwahl und Preisvorschau",
  },
  {
    type: "image",
    label: "Ablauf",
    title: "Anfrage Schritt für Schritt",
    text: "Die Customer Journey zeigt klar, wie aus Entdecken, Auswählen, Zeitraum prüfen und Bestätigen eine saubere Anfrage entsteht.",
    image: rentalOpsDemoFlow,
    alt: "RentalOps Ablaufsektion mit geführter Customer Journey",
  },
  {
    type: "image",
    label: "Portal",
    title: "Verwaltung hinter der Buchung",
    text: "Im Hintergrund werden Status, Verfügbarkeit, Reservierungen und Teamvorgänge als klare Systemlogik sichtbar.",
    image: rentalOpsDemoPortal,
    alt: "RentalOps Portal-Vorschau mit Flottenstatus, Kalender und Reservierungen",
  },
  {
    type: "image",
    label: "Engine",
    title: "Website vorne, System dahinter",
    text: "RentalOps zeigt das CoreEngineStudio-Prinzip: vorne eine schöne öffentliche Seite, dahinter eine strukturierte Booking-Engine.",
    image: rentalOpsDemoEngine,
    alt: "RentalOps Engine-Vergleich zwischen öffentlicher Website und Booking-System",
  },
  {
    type: "story",
    label: "Booking Story",
    title: "Booking/Rental als eigenständige Showcase-Welt",
    text: "RentalOps ist eine eigene Showcase-Richtung für Vermietung, Reservierung und buchbare Objekte.",
    bullets: [
      "Eigene helle Designrichtung statt Dark-Tech oder Business-Clean",
      "Mietobjekte als moderne Angebots- und Produktkarten",
      "Zeitraumwahl und Preislogik als geführter Flow",
      "Anfrage statt Blindbuchung, damit das Team final bestätigen kann",
      "Status, Verfügbarkeit und Belegung als Systemebene",
      "Geeignet für Fahrzeuge, Anhänger, Geräte, Räume oder buchbare Leistungen",
      "Live-Showcase ist extern verlinkt",
    ],
  },
];

// =====================================================
// COREHUB / BOOKING RENTAL SHARED DEMO CUBE FACES
// CES-BUILD-095:
// Gemeinsame Face-Datenquelle für RentalOps. Diese Bilder
// erscheinen auf den Cube-Flächen und in der Galerie.
// =====================================================
const bookingRentalSharedCubeFaces = [
  {
    key: "front",
    eyebrow: "RentalOps",
    label: "Start",
    hint: "public · booking",
    previewImage: rentalOpsDemoHome,
    previewAlt: "RentalOps Startseite als CoreCube-Fläche",
  },
  {
    key: "right",
    eyebrow: "Fleet",
    label: "Mietobjekte",
    hint: "karten · filter",
    previewImage: rentalOpsDemoFleet,
    previewAlt: "RentalOps Mietflotte als CoreCube-Fläche",
  },
  {
    key: "back",
    eyebrow: "Booking",
    label: "Zeitraum",
    hint: "preis · datum",
    previewImage: rentalOpsDemoBooking,
    previewAlt: "RentalOps Buchungswidget als CoreCube-Fläche",
  },
  {
    key: "left",
    eyebrow: "Flow",
    label: "Ablauf",
    hint: "kunde · anfrage",
    previewImage: rentalOpsDemoFlow,
    previewAlt: "RentalOps Customer Journey als CoreCube-Fläche",
  },
  {
    key: "top",
    eyebrow: "Portal",
    label: "Status",
    hint: "team · kalender",
    previewImage: rentalOpsDemoPortal,
    previewAlt: "RentalOps Portalansicht als CoreCube-Fläche",
  },
  {
    key: "bottom",
    eyebrow: "Engine",
    label: "System",
    hint: "website + engine",
    previewImage: rentalOpsDemoEngine,
    previewAlt: "RentalOps Engine-Schicht als CoreCube-Fläche",
  },
];


// =====================================================
// COREHUB / SMART SYSTEMS COREOPS PREVIEW GALLERY
// CES-BUILD-092:
// CoreOps folgt jetzt dem gleichen Showroom-Prinzip wie die
// anderen Demo-Welten: Der CoreCube zeigt erst Screenshot-/
// Mockup-Flächen. Die echte klickbare Demo liegt separat unter
// extern auf dem CoreOps-Devlink und wird über den Demo-Link geöffnet.
//
// Wichtig:
// - Hauptseite wird dadurch nicht zur CoreOps-App umgebaut.
// - CoreOps bleibt eine eigene externe Live-Demo-/Devlink-Welt.
// - Neue Screenshots werden hier als Galerie-Slides gepflegt.
// =====================================================
const smartSystemsDemoGallery = [
  {
    type: "image",
    label: "Dashboard",
    title: "Zentrale Übersicht",
    text: "Kennzahlen, offene Anfragen, Tickets, Statusmails und Systemaktivität laufen in einer klaren Arbeitszentrale zusammen.",
    image: coreOpsDemoDashboard,
    alt: "CoreOps Dashboard mit Kennzahlen, Aktivitätsdiagramm, Timeline und Anfrageübersicht",
  },
  {
    type: "image",
    label: "Kunden & Anfragen",
    title: "Anfragen strukturiert verwalten",
    text: "Kunden, Kontaktwege, Anfragearten und Projektbezug werden sauber sortiert, statt in E-Mails oder Chats zu verschwinden.",
    image: coreOpsDemoClients,
    alt: "CoreOps Kunden und Anfragen mit CRM-Liste und Quick View",
  },
  {
    type: "image",
    label: "Tickets",
    title: "Vorgänge sauber geführt",
    text: "Tickets zeigen Status, Priorität und Bearbeitungsschritte, damit Teamabläufe nachvollziehbar bleiben.",
    image: coreOpsDemoTickets,
    alt: "CoreOps Ticket Workflow mit Kanban-Board",
  },
  {
    type: "image",
    label: "Automationen",
    title: "Abläufe automatisieren",
    text: "Statusmails, Follow-ups, Hinweise und wiederkehrende Prozesse werden als smarte Ablauf-Engine dargestellt.",
    image: coreOpsDemoAutomation,
    alt: "CoreOps Automationen mit Regel-Engine und Statusmail-Flow",
  },
  {
    type: "image",
    label: "Admin",
    title: "Rollen und Zugriff steuern",
    text: "Rollen, Rechte, Teams, Einstellungen und Systemstatus bilden die Verwaltungsebene hinter dem Portal.",
    image: coreOpsDemoAdmin,
    alt: "CoreOps Adminbereich mit Rollenmatrix, Sicherheit und Systemstatus",
  },
];

// =====================================================
// COREHUB / SMART SYSTEMS SHARED DEMO CUBE FACES
// CES-BUILD-092:
// Die CoreOps-Cube-Flächen nutzen jetzt echte Vorschau-Bilder,
// damit Smart Systems denselben Ablauf hat wie All4You,
// Inselleben und Hammer Modding: Cube öffnet sich -> Bildflächen
// werden sichtbar -> Galerie/Live-Demo kann geöffnet werden.
// =====================================================
const smartSystemsSharedCubeFaces = [
  {
    key: "front",
    eyebrow: "CoreOps",
    label: "Dashboard",
    hint: "status · tickets",
    previewImage: coreOpsDemoDashboard,
    previewAlt: "CoreOps Dashboard als CoreCube-Fläche",
  },
  {
    key: "right",
    eyebrow: "CRM",
    label: "Kunden",
    hint: "anfragen · projekte",
    previewImage: coreOpsDemoClients,
    previewAlt: "CoreOps Kunden- und Anfragebereich als CoreCube-Fläche",
  },
  {
    key: "back",
    eyebrow: "Tickets",
    label: "Workflow",
    hint: "status · verlauf",
    previewImage: coreOpsDemoTickets,
    previewAlt: "CoreOps Ticket-Workflow als CoreCube-Fläche",
  },
  {
    key: "left",
    eyebrow: "Logic",
    label: "Automation",
    hint: "mails · followups",
    previewImage: coreOpsDemoAutomation,
    previewAlt: "CoreOps Automationsbereich als CoreCube-Fläche",
  },
  {
    key: "top",
    eyebrow: "Admin",
    label: "Rollen",
    hint: "rechte · teams",
    previewImage: coreOpsDemoAdmin,
    previewAlt: "CoreOps Adminbereich als CoreCube-Fläche",
  },
  {
    key: "bottom",
    eyebrow: "Engine",
    label: "Showcase",
    hint: "live · klickbar",
    previewImage: coreOpsDemoDashboard,
    previewAlt: "CoreOps Live-Showcase Einstieg als CoreCube-Fläche",
  },
];

// =====================================================
// COREHUB / DEMO TARGET SYSTEM
// CES-BUILD-089-NOTE:
// Diese Funktion ist die zentrale Umschaltstelle für finale Demo-Ziele.
// Wenn neue Demo-Welten ergänzt werden, zuerst hier den passenden
// routeText-Zweig anlegen und danach Galerie + Cube-Faces oberhalb pflegen.
// Aktive echte Cases: All4You, Inselleben, Hammer Modding.

// CES-BUILD-061:
// Diese Funktion übersetzt die Route in ein klares Demo-Ziel.
// Der CoreCube kann dadurch nicht nur starten, sondern direkt sagen,
// welche spätere Demo-Welt vorbereitet wird.
//
// Ändern hier wirkt auf:
// - Text im Launch-Fenster nach finaler CoreHub-Auswahl
// - Demo-Ziel / Vorschauversprechen
// - kleine Baustein-Pills unter dem Launch-Ergebnis
// =====================================================
const getCoreHubDemoTarget = (routeSegments = []) => {
  const routeText = routeSegments.join(" ").toLowerCase();
  const isBusinessServiceRoute =
    routeText.includes("business clean") &&
    (routeText.includes("dienstleister") || routeText.includes("service"));

  if (isBusinessServiceRoute) {
    return {
      id: "business-clean-all4you-demo",
      kicker: "Showcase Ziel",
      title: "All4You Service München",
      caseTitle: "Business Clean · Dienstleisterseite",
      previewLabel: "Showcase",
      previewImage: all4YouDemoHome,
      previewAlt: "Screenshot der All4You Service München Webseite",
      liveUrl: "https://all4you-muenchen.de/",
      text: "All4You zeigt Business Clean in echt: Website vorne, klare Leistungsführung, Anfrage-Assistenten, Ticketnummern, Statuslogik und Mitarbeiterportal dahinter.",
      status: "SHOWCASE BEREIT",
      next: "Showcase-Galerie bereit: Website vorne, smarte Engine dahinter.",
      modules: ["Website", "Anfrage-Assistent", "Datenbank", "Mitarbeiterportal", "SEO Basic"],
      gallery: all4YouDemoGallery,
      cubeFaces: all4YouSharedCubeFaces,
    };
  }

  if (routeText.includes("business clean")) {
    return {
      id: "business-clean-demo",
      kicker: "Showcase Ziel",
      title: "Business Clean",
      caseTitle: "Business Clean · Konzept",
      previewLabel: "Showcase",
      text: "Eine klare Business-Webseite mit starker Leistungsstruktur, Vertrauen, Kontaktführung und sauberem Anfrage-Einstieg.",
      status: "SHOWCASE AUSWAHL",
      next: "Showcase wird passend zur Auswahl aufgebaut.",
      modules: ["Hero", "Leistungen", "Vertrauen", "Anfrage"],
      cubeFaces: [
        { key: "front", eyebrow: "Business", label: "Clean", hint: "klar · hell · seriös" },
        { key: "right", eyebrow: "Service", label: "Leistungen", hint: "struktur · kontakt" },
        { key: "back", eyebrow: "Trust", label: "Vertrauen", hint: "seriös · ruhig" },
        { key: "left", eyebrow: "Flow", label: "Anfrage", hint: "kontakt · lead" },
        { key: "top", eyebrow: "Layout", label: "Sektionen", hint: "hero · cards · cta" },
        { key: "bottom", eyebrow: "Engine", label: "System", hint: "website + ablauf" },
      ],
    };
  }

  if (routeText.includes("dark premium")) {
    return {
      id: "dark-premium-darkpremium-demo",
      kicker: "Showcase Ziel",
      title: "Dark Premium",
      caseTitle: "Dark Premium · Markenbühne / Studio-Auftritt",
      previewLabel: "Showcase",
      previewImage: darkPremiumDemoStatement,
      previewAlt: "Dark Premium Showcase Vorschau",
      liveUrl: "https://darkpremium.pages.dev/",
      liveLabel: "Live-Demo öffnen",
      text: "Dark Premium zeigt hochwertige Markenwirkung: dunkle Bühne vorne, klare Dramaturgie und smarte Anfrage-Engine dahinter.",
      status: "SHOWCASE BEREIT",
      next: "Showcase bereit: Galerie, Vorschau und Live-Ansicht sind verbunden.",
      modules: ["Hero", "Brand", "Experience", "Social", "Module", "Kontakt"],
      gallery: darkPremiumDemoGallery,
      cubeFaces: darkPremiumSharedCubeFaces,
    };
  }

  const isGamingRpServerRoute =
    routeText.includes("gaming matrix") &&
    (routeText.includes("rp-server") ||
      routeText.includes("rp server") ||
      routeText.includes("server website") ||
      routeText.includes("server webseite"));

  if (isGamingRpServerRoute) {
    return {
      id: "gaming-matrix-inselleben-demo",
      kicker: "Showcase Ziel",
      title: "Inselleben RP",
      caseTitle: "Gaming Matrix · RP-Server-Webseite",
      previewLabel: "Showcase",
      previewImage: insellebenDemoHome,
      previewAlt: "Screenshot der Inselleben RP Startseite",
      liveUrl: "https://insellebenv2.pages.dev/",
      text: "Inselleben zeigt Gaming Matrix als Community-Auftritt: starke Hero-Bühne, Serverstatus, Discord-Bezug, Regelwerk, Teamstruktur und RP-Atmosphäre.",
      status: "SHOWCASE BEREIT",
      next: "Showcase-Galerie bereit: Atmosphäre, Charakter und Community.",
      modules: ["RP-Server", "Discord", "Regelwerk", "Team", "Community"],
      gallery: insellebenDemoGallery,
      cubeFaces: insellebenSharedCubeFaces,
    };
  }

  if (routeText.includes("gaming matrix")) {
    return {
      id: "gaming-matrix-demo",
      kicker: "Showcase Ziel",
      title: "Gaming Matrix",
      caseTitle: "Gaming Matrix · Konzept",
      previewLabel: "Showcase",
      text: "Eine Gaming-/Community-Welt mit Servergefühl, Discord-Bezug, Regeln, Teamflächen und starkem Matrix-Look.",
      status: "SHOWCASE AUSWAHL",
      next: "Showcase wird passend zur Auswahl aufgebaut.",
      modules: ["Discord", "Server", "Regeln", "Team"],
      cubeFaces: [
        { key: "front", eyebrow: "Gaming", label: "Matrix", hint: "server · team · live" },
        { key: "right", eyebrow: "RP", label: "Server", hint: "join · status" },
        { key: "back", eyebrow: "Community", label: "Discord", hint: "rollen · cta" },
        { key: "left", eyebrow: "Wissen", label: "Regeln", hint: "wiki · guides" },
        { key: "top", eyebrow: "Team", label: "Fraktionen", hint: "crew · staff" },
        { key: "bottom", eyebrow: "Event", label: "Updates", hint: "news · seasons" },
      ],
    };
  }

  if (routeText.includes("shopflow")) {
    return {
      id: "shopflow-hammermodding-demo",
      kicker: "Showcase Ziel",
      title: "Hammer Modding",
      caseTitle: "Shopflow · FiveM Store",
      previewLabel: "Showcase",
      previewImage: hammerDemoHome,
      previewAlt: "Screenshot der Hammer Modding Startseite",
      liveUrl: "https://hammer-modding.de/",
      text: "Hammer Modding zeigt einen Shopflow für digitale Produkte: Kategorien, Detailseiten, Warenkorb, Account-/Discord-Verknüpfung und interne Produktpflege.",
      status: "SHOWCASE BEREIT",
      next: "Showcase-Galerie bereit: Produkte, Account, Discord und Verwaltung.",
      modules: ["Shop", "Scripts", "Kleidung", "Discord", "Admin"],
      gallery: hammerDemoGallery,
      cubeFaces: hammerSharedCubeFaces,
    };
  }

  if (routeText.includes("booking") || routeText.includes("rental")) {
    return {
      id: "booking-rental-rentalops-demo",
      kicker: "Showcase Ziel",
      title: "RentalOps Booking",
      caseTitle: "Booking / Rental · Vermietungs- & Reservierungsseite",
      previewLabel: "Showcase",
      previewImage: rentalOpsDemoHome,
      previewAlt: "RentalOps Booking-Showcase Vorschau",
      liveUrl: "https://corerental.pages.dev/",
      liveLabel: "Live-Demo öffnen",
      text: "RentalOps zeigt Vermietung und Reservierung als eigene Erlebniswelt: Produktwelt vorne, geführte Anfrage und steuerbare Booking-Engine dahinter.",
      status: "SHOWCASE BEREIT",
      next: "Showcase bereit: Galerie, Vorschau und Live-Ansicht sind verbunden.",
      modules: ["Mietflotte", "Kalender", "Preislogik", "Anfrage", "Portal", "Engine"],
      gallery: bookingRentalDemoGallery,
      cubeFaces: bookingRentalSharedCubeFaces,
    };
  }

  if (routeText.includes("smart systems")) {
    return {
      id: "smart-systems-coreops-demo",
      kicker: "Showcase Ziel",
      title: "CoreOps Dashboard",
      caseTitle: "Smart Systems · Dashboard / Portal",
      previewLabel: "Showcase",
      previewImage: coreOpsDemoDashboard,
      previewAlt: "CoreOps Dashboard Vorschau",
      liveUrl: "https://coreops-60f.pages.dev/",
      liveLabel: "Live-Demo öffnen",
      text: "CoreOps zeigt Smart Systems als echte Arbeitsoberfläche: Anfragen, Kunden, Tickets, Aufgaben, Statuslogik und Automationen laufen zentral zusammen.",
      status: "SHOWCASE BEREIT",
      next: "Showcase bereit: Galerie, Vorschau und Live-Ansicht sind verbunden.",
      modules: ["Dashboard", "Tickets", "Kunden", "Automation", "Admin"],
      gallery: smartSystemsDemoGallery,
      cubeFaces: smartSystemsSharedCubeFaces,
    };
  }

  return {
    id: "corehub-demo",
    kicker: "CoreHub Ziel",
    title: "Showcase-Auswahl",
    caseTitle: "CoreHub · Route",
    previewLabel: "Showcase",
    text: "Der CoreHub hat eine Route erkannt und öffnet die passende Showcase-Welt für die gewählte Richtung.",
    status: "ROUTE ERKANNT",
    next: "Showcase-Welt bereit.",
    modules: ["Route", "Cube", "Preview", "Showcase"],
    cubeFaces: [
      { key: "front", eyebrow: "CoreHub", label: "Showcase", hint: "route · showcase" },
      { key: "right", eyebrow: "Cube", label: "Target", hint: "auswahl · ziel" },
      { key: "back", eyebrow: "Engine", label: "Flow", hint: "schritt · logic" },
      { key: "left", eyebrow: "Preview", label: "Showcase", hint: "vorschau · welt" },
      { key: "top", eyebrow: "Route", label: "Path", hint: "bedarf · richtung" },
      { key: "bottom", eyebrow: "Start", label: "Projekt", hint: "richtung · anfrage" },
    ],
  };
};

const referenceCases = [
  {
    title: "Hammer Modding",
    short: "HM",
    type: "Storefront / Modding-Shop",
    status: "Live",
    image: refHammer,
    gallery: [refHammer],
    url: "https://hammer-modding.de/",
    text: "Dark Storefront mit Produktkatalog, Warenkorb-Logik, Admin-/Discord-Konzept und starker Gaming-Markenwirkung.",
    meta: ["Shop / Katalog", "Dark UI", "Discord / Tebex-Konzept"],
  },
  {
    title: "All4You Service München",
    short: "A4Y",
    type: "Service-Website / Anfrage-System",
    status: "Live",
    image: refAll4You,
    gallery: [refAll4You],
    url: "https://all4you-muenchen.de/",
    text: "Helle Dienstleister-Website mit Leistungsstruktur, Anfrage-Wizards, YouBot-Konzept und Portal-/Statuslogik.",
    meta: ["Anfrageflows", "Service-Seiten", "Portal-Konzept"],
  },
  {
    title: "Hammer Modding CopLink",
    short: "CL",
    type: "UnityLink / Systemoberfläche",
    status: "Showcase",
    image: refCopLink,
    gallery: [refCopLink],
    text: "Desktop-artiges RP-System mit Modulen, Akten, Registern, Strafanzeigen und dunkler Behörden-/Terminal-Oberfläche.",
    meta: ["Dashboard", "Module", "RP-System"],
  },
  {
    title: "Inselleben RP",
    short: "IRP",
    type: "Community-/Server-Website",
    status: "Showcase",
    image: refInselleben,
    gallery: [refInselleben, refInselleben2, refInselleben3, refInselleben4],
    text: "Atmosphärische Community-Website mit Serverstatus, Discord-Fokus, Storytelling und tropischem Glassmorphism-Look.",
    meta: ["Community", "Serverstatus", "Branding"],
  },
];

// =====================================================
// ABLAUF / PROJEKT-STEPS
// Hier werden die sechs Schritte im Bereich
// "Vom ersten Gespräch bis zur fertigen Engine" gepflegt.
//
// Ändern hier wirkt auf die linken Ablaufkarten.
//
// Felder:
// - tag: kleine Akzentzeile
// - title: große Überschrift
// - text: Beschreibung im Step
// =====================================================
const steps = [
  {
    title: "Kostenloser Erstkontakt",
    text: "Kurze Nachricht, grobe Idee, erste Einschätzung. Ohne Druck und ohne Kosten.",
    tag: "Start",
  },
  {
    title: "Ziel & Richtung klären",
    text: "Was soll die Seite oder das System wirklich leisten? Design, Funktion und Zielgruppe werden sortiert.",
    tag: "Klarheit",
  },
  {
    title: "Konzept & Designbasis",
    text: "Aus der Idee entsteht eine konkrete Richtung mit Struktur, Look, Bereichen und sinnvoller Nutzerführung.",
    tag: "Konzept",
  },
  {
    title: "Umsetzung mit Struktur",
    text: "Die Oberfläche wird sauber aufgebaut und mit der passenden Technik im Hintergrund verbunden.",
    tag: "Build",
  },
  {
    title: "Test & Feinschliff",
    text: "Ansicht, Texte, responsive Verhalten, kleine Details und Abläufe werden geprüft und poliert.",
    tag: "Polish",
  },
  {
    title: "Onlinegang & Betreuung",
    text: "Nach dem Start können Erweiterungen, Pflege, neue Funktionen oder weitere Systeme folgen.",
    tag: "Weiter",
  },
];



// =====================================================
// PROJEKTSTART-SEITE / ANFRAGE-SCAFFOLD
// CES-BUILD-102:
// Eigenständige Unterseite /projekt-starten.
// Aktuell bewusst Frontend-only: Der Button bereitet eine E-Mail vor.
// Später kann dieser Bereich an Supabase, Resend oder ein Kundenportal
// angebunden werden, ohne den CoreCube erneut umzubauen.
// =====================================================
// CES-BUILD-108:
// Zentrale öffentliche Basisdaten für Kontakt, Footer, Impressum und Datenschutz.
// Wichtig: Die normale Steuernummer wird bewusst NICHT veröffentlicht.
// Nur die Kleinunternehmer-Info nach § 19 UStG wird sichtbar verwendet.
const PROJECT_START_PATH = "/projekt-starten";
const LEGAL_IMPRESSUM_PATH = "/impressum";
const LEGAL_PRIVACY_PATH = "/datenschutz";

const PUBLIC_CONTACT_EMAIL = "info@coreenginestudio.de";
const PUBLIC_SITE_DOMAIN = "coreenginestudio.de";
const PUBLIC_PHONE_DISPLAY = "+49 1577 4370887";
const PUBLIC_PHONE_HREF = "tel:+4915774370887";
const PUBLIC_WHATSAPP_URL = "https://wa.me/4915774370887";

const legalProvider = {
  name: "CoreEngineStudio inh. Fabian Honacker",
  owner: "Fabian Honacker",
  legalForm: "Einzelunternehmen",
  street: "Haskens Land 62",
  city: "45355 Essen",
  country: "Deutschland",
  vatNote: "Gemäß § 19 UStG wird keine Umsatzsteuer ausgewiesen.",
};

const publicSocialLinks = [
  { label: "Instagram", icon: socialInstagram, href: "https://www.instagram.com/coreenginestudio/" },
  { label: "Discord", icon: socialDiscord, href: "https://discord.gg/ff8UkU7Hyk" },
  { label: "TikTok", icon: socialTikTok, href: "https://www.tiktok.com/@coreenginestudio" },
];

const publicTrustFooterItems = [
  { icon: CheckCircle, label: "Erstkontakt kostenlos" },
  { icon: MonitorSmartphone, label: "Showcases live prüfbar" },
  { icon: Globe2, label: "Deutschlandweit anfragbar" },
  { icon: Workflow, label: "Website + Engine" },
];

function SiteFooter({ currentPath = PUBLIC_SITE_DOMAIN }) {
  return (
    <footer className="site-footer final-site-footer public-trust-footer full-bleed-section">
      <div className="final-footer-brand">
        <span>CoreEngineStudio</span>
        <p>Digitale Auftritte. Smarte Systeme. Klare Engine.</p>
        <nav className="final-footer-links" aria-label="CoreEngineStudio Footer Navigation">
          <a href={PROJECT_START_PATH}>Projekt starten</a>
          <a href="/#showroom">Showroom</a>
          <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>E-Mail</a>
          <a href={PUBLIC_WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={LEGAL_IMPRESSUM_PATH}>Impressum</a>
          <a href={LEGAL_PRIVACY_PATH}>Datenschutz</a>
        </nav>
        <div className="final-footer-socials" aria-label="CoreEngineStudio Social Links">
          {publicSocialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
              <img src={link.icon} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </div>

      <div className="final-footer-trust" aria-label="CoreEngineStudio Vertrauen und Orientierung">
        {publicTrustFooterItems.map((item) => {
          const Icon = item.icon;
          return (
            <span key={item.label}>
              <Icon size={13} />
              {item.label}
            </span>
          );
        })}
      </div>

      <div className="final-footer-build">
        <span>{BUILD_ID}</span>
        <p>{currentPath}</p>
      </div>
    </footer>
  );
}

// =====================================================
// RECHTLICHE UNTERSEITEN / IMPRESSUM + DATENSCHUTZ
// CES-BUILD-108:
// Dezente Pflichtseiten für den Footer. Die Inhalte bilden den aktuellen
// statischen Stand ab: Cloudflare Pages, externe Links, Mailto/Kopier-Fallback
// und temporäre SessionStorage-Nutzung für den Projektstart-Kontext.
// Spätere Tools wie Analytics, Supabase, Resend oder echte Formulare müssen
// vor Aktivierung hier nachgetragen werden.
// =====================================================
function LegalPageShell({ title, eyebrow, intro, currentPath, children }) {
  return (
    <main className="app-shell legal-page tone-green">
      <MatrixRain tone="green" />
      <div className="engine-grid" />
      <div className="soft-scanlines" />
      <div className="ambient ambient-green" />
      <div className="ambient ambient-red" />
      <div className="ambient ambient-cyan" />

      <header className="site-header legal-header">
        <a className="brand" href="/" aria-label="Zur CoreEngineStudio Startseite">
          <img src={logoIcon} alt="" />
          <span className="brand-text">
            <strong>CoreEngineStudio</strong>
            <small>{eyebrow}</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Rechtliche Navigation">
          <a href="/">Startseite</a>
          <a href={LEGAL_IMPRESSUM_PATH}>Impressum</a>
          <a href={LEGAL_PRIVACY_PATH}>Datenschutz</a>
          <a href={PROJECT_START_PATH}>Projekt starten</a>
        </nav>
      </header>

      <section className="legal-hero full-bleed-section">
        <span className="legal-kicker">
          <CheckCircle size={15} />
          CoreEngineStudio · Rechtliche Informationen
        </span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>

      <section className="legal-content-section full-bleed-section" aria-label={title}>
        <div className="legal-content-card">
          {children}
        </div>
      </section>

      <SiteFooter currentPath={currentPath} />
    </main>
  );
}

function LegalSection({ title, children }) {
  return (
    <section className="legal-section-block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ImpressumPage() {
  return (
    <LegalPageShell
      title="Impressum"
      eyebrow="Impressum"
      currentPath={LEGAL_IMPRESSUM_PATH}
      intro="Die wichtigsten Anbieter- und Kontaktangaben zu CoreEngineStudio auf einen Blick."
    >
      <LegalSection title="Angaben gemäß § 5 DDG">
        <address className="legal-address">
          <strong>{legalProvider.name}</strong>
          <span>{legalProvider.legalForm}</span>
          <span>{legalProvider.street}</span>
          <span>{legalProvider.city}</span>
          <span>{legalProvider.country}</span>
        </address>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          E-Mail: <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>{PUBLIC_CONTACT_EMAIL}</a>
        </p>
        <p>
          Telefon: <a href={PUBLIC_PHONE_HREF}>{PUBLIC_PHONE_DISPLAY}</a>
        </p>
        <p>
          WhatsApp: <a href={PUBLIC_WHATSAPP_URL} target="_blank" rel="noreferrer">Nachricht über WhatsApp starten</a>
        </p>
      </LegalSection>

      <LegalSection title="Umsatzsteuer">
        <p>{legalProvider.vatNote}</p>
        <p>Eine Umsatzsteuer-Identifikationsnummer ist derzeit nicht angegeben.</p>
      </LegalSection>

      <LegalSection title="Registereintrag">
        <p>Es besteht kein Handelsregistereintrag.</p>
      </LegalSection>

      <LegalSection title="Verantwortlich für Inhalte">
        <p>
          {legalProvider.owner}, Anschrift wie oben.
        </p>
      </LegalSection>

      <LegalSection title="Social Media">
        <ul className="legal-link-list">
          {publicSocialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}

function DatenschutzPage() {
  return (
    <LegalPageShell
      title="Datenschutzerklärung"
      eyebrow="Datenschutz"
      currentPath={LEGAL_PRIVACY_PATH}
      intro="Diese Datenschutzerklärung beschreibt den aktuellen Stand der Website: statischer Showroom, Projektstart per E-Mail und externe Showcase-/Social-Links."
    >
      <LegalSection title="1. Verantwortlicher">
        <address className="legal-address">
          <strong>{legalProvider.name}</strong>
          <span>{legalProvider.street}</span>
          <span>{legalProvider.city}</span>
          <span>{legalProvider.country}</span>
          <span>E-Mail: <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>{PUBLIC_CONTACT_EMAIL}</a></span>
          <span>Telefon: <a href={PUBLIC_PHONE_HREF}>{PUBLIC_PHONE_DISPLAY}</a></span>
        </address>
      </LegalSection>

      <LegalSection title="2. Hosting und technische Zugriffsdaten">
        <p>
          Diese Website wird über Cloudflare Pages bereitgestellt. Beim Aufruf der Website können technisch notwendige Zugriffsdaten verarbeitet werden, zum Beispiel IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Datei, übertragene Datenmenge, Browser-/Geräteinformationen und Referrer-Informationen.
        </p>
        <p>
          Die Verarbeitung erfolgt, um die Website sicher, stabil und abrufbar bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="3. Kontaktaufnahme per E-Mail, Telefon oder WhatsApp">
        <p>
          Wenn du per E-Mail, Telefon oder WhatsApp Kontakt aufnimmst, werden die von dir übermittelten Angaben verarbeitet, damit die Anfrage beantwortet werden kann. Dazu können Name, Kontaktdaten, Nachrichtentext und Projektinformationen gehören.
        </p>
        <p>
          Rechtsgrundlage ist je nach Anliegen Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen oder Art. 6 Abs. 1 lit. f DSGVO für die Bearbeitung allgemeiner Anfragen.
        </p>
      </LegalSection>

      <LegalSection title="4. Projektstart-Assistent und E-Mail-Vorbereitung">
        <p>
          Der Projektstart-Assistent übermittelt im aktuellen Stand keine Formulardaten an einen eigenen Server. Die eingegebenen Angaben werden verwendet, um eine E-Mail-Vorlage zu erzeugen oder eine kopierbare Zusammenfassung anzuzeigen.
        </p>
        <p>
          Wenn du diese E-Mail absendest oder den Text manuell übermittelst, werden die enthaltenen Angaben zur Bearbeitung deiner Anfrage verarbeitet.
        </p>
      </LegalSection>

      <LegalSection title="5. SessionStorage und Cookies">
        <p>
          Die Website nutzt im aktuellen Stand keine eigenen Analyse-Cookies und kein aktives Marketing-Tracking. Für den Projektstart kann technisch ein temporärer Kontext im SessionStorage deines Browsers gespeichert werden, damit deine Auswahl aus dem Showroom in den Projektstart übernommen werden kann.
        </p>
        <p>
          Diese Information bleibt nur browserseitig gespeichert und kann durch Schließen des Tabs/Browsers oder durch Zurücksetzen im Projektstart wieder entfernt werden. Im aktuellen Stand werden darüber keine Analyse- oder Marketing-Trackingdienste eingesetzt.
        </p>
      </LegalSection>

      <LegalSection title="6. Externe Links, Showcases und Social Media">
        <p>
          Die Website enthält Links zu externen Showcase-Seiten sowie zu Social-Media-Angeboten wie Instagram, Discord und TikTok. Beim Anklicken dieser Links verlässt du die CoreEngineStudio-Website. Für die Verarbeitung personenbezogener Daten auf den Zielseiten sind die jeweiligen Anbieter verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="7. Speicherdauer">
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie es für die Bearbeitung der Anfrage, die Durchführung eines Projekts oder gesetzliche Aufbewahrungspflichten erforderlich ist.
        </p>
      </LegalSection>

      <LegalSection title="8. Deine Rechte">
        <p>
          Du hast nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.
        </p>
        <p>
          Außerdem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
        </p>
      </LegalSection>

      <LegalSection title="9. Stand dieser Erklärung">
        <p>Stand: Mai 2026</p>
      </LegalSection>
    </LegalPageShell>
  );
}

const projectStartTypes = [
  { id: "website", title: "Website", text: "Firmenauftritt, Onepager, Landingpage oder Relaunch.", icon: Globe2 },
  { id: "system", title: "System / Portal", text: "Dashboard, Kundenbereich, Mitarbeiterportal oder Verwaltung.", icon: Database },
  { id: "shop", title: "Shop / Produktseite", text: "Digitale Produkte, Katalog, Checkout-Flow oder Storefront.", icon: ShoppingBag },
  { id: "booking", title: "Buchung / Anfrage", text: "Kalender, Mietanfrage, Assistent, Preislogik oder Statusfluss.", icon: Calendar },
  { id: "automation", title: "Automatisierung", text: "Formulare, E-Mails, Datenbanklogik und wiederkehrende Abläufe.", icon: Workflow },
  { id: "unsure", title: "Noch unsicher", text: "Du hast eine Idee, aber die passende Richtung ist noch offen.", icon: Sparkles },
];

const projectStartDirections = [
  "Business Clean",
  "Gaming Matrix",
  "Shopflow",
  "Booking / Rental",
  "Smart Systems",
  "Dark Premium",
  "Noch offen",
];

const projectStartExisting = [
  "Logo vorhanden",
  "Texte vorhanden",
  "Bilder vorhanden",
  "bestehende Website vorhanden",
  "Domain / Hosting vorhanden",
  "nur Idee vorhanden",
];

const projectStartTimelines = [
  "Sobald möglich",
  "2–4 Wochen",
  "1–3 Monate",
  "Flexibel / noch offen",
];

const projectStartContactWays = [
  "E-Mail",
  "WhatsApp",
  "Telefon / kurzes Gespräch",
  "Noch offen",
];

const projectStartTrustItems = [
  {
    icon: CheckCircle,
    title: "Kostenloser Erstkontakt",
    text: "Du fragst erstmal nur an. Keine Buchung, kein Vertrag, kein Druck.",
  },
  {
    icon: Layers,
    title: "Saubere Ersteinschätzung",
    text: "Die Angaben helfen, Richtung, Umfang und Materialstand schneller einzuordnen.",
  },
  {
    icon: Mail,
    title: "Direkter Kontakt",
    text: "Die Anfrage kann per Mailprogramm geöffnet oder als Text kopiert werden, falls der Browser kein Mailprogramm startet.",
  },
];

function readProjectStartContext() {
  if (typeof window === "undefined") return null;

  try {
    const storedContext = window.sessionStorage?.getItem("cesProjectStartContext");
    return storedContext ? JSON.parse(storedContext) : null;
  } catch {
    return null;
  }
}

function buildProjectEmailContent(formState, context) {
  const subject = `Projektstart CoreEngineStudio: ${formState.typeTitle || "Neue Anfrage"}`;
  const body = [
    "Hallo Fabian,",
    "",
    "ich möchte ein Projekt mit CoreEngineStudio starten.",
    "Erstmal als kostenloser und unverbindlicher Erstkontakt.",
    "",
    `Projektart: ${formState.typeTitle}`,
    `Richtung / Stil: ${formState.direction}`,
    `Vorhanden: ${formState.existing.length ? formState.existing.join(", ") : "noch nicht angegeben"}`,
    `Zeitlicher Rahmen: ${formState.timeline}`,
    `Bevorzugter Kontaktweg: ${formState.contactWay}`,
    "",
    context?.title ? `Ausgangspunkt aus dem CoreCube: ${context.title}` : "Ausgangspunkt aus dem CoreCube: nicht angegeben",
    context?.type ? `Showcase / Case: ${context.type}` : "Showcase / Case: nicht angegeben",
    context?.route?.length ? `Route: ${context.route.join(" / ")}` : "Route: nicht angegeben",
    "",
    `Name: ${formState.name || ""}`,
    `E-Mail: ${formState.email || ""}`,
    `Telefon / WhatsApp: ${formState.phone || ""}`,
    "",
    "Kurz zur Idee:",
    formState.message || "",
    "",
    "Viele Grüße",
  ].join("\n");

  return { subject, body };
}

function buildProjectMailto(formState, context) {
  const { subject, body } = buildProjectEmailContent(formState, context);
  return `mailto:${PUBLIC_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ProjectStartPage() {
  const [toneIndex, setToneIndex] = useState(0);
  const [context, setContext] = useState(() => readProjectStartContext());
  const [copyFeedback, setCopyFeedback] = useState("");
  const [formState, setFormState] = useState(() => ({
    typeId: "website",
    typeTitle: "Website",
    direction: "Noch offen",
    existing: ["nur Idee vorhanden"],
    timeline: "Flexibel / noch offen",
    contactWay: "E-Mail",
    name: "",
    email: "",
    phone: "",
    message: "",
  }));

  const activeTone = colorPhases[toneIndex];
  const emailContent = buildProjectEmailContent(formState, context);
  const mailtoHref = buildProjectMailto(formState, context);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setToneIndex((current) => (current + 1) % colorPhases.length);
    }, 12000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!context) return;

    const routeDirection = context.route?.[1];
    const directionFromContext = projectStartDirections.includes(routeDirection)
      ? routeDirection
      : context.route?.find((segment) => projectStartDirections.includes(segment));

    if (!directionFromContext) return;

    setFormState((current) => ({
      ...current,
      direction: directionFromContext,
    }));
  }, [context]);

  const setProjectType = (option) => {
    setFormState((current) => ({
      ...current,
      typeId: option.id,
      typeTitle: option.title,
    }));
  };

  const toggleExisting = (item) => {
    setFormState((current) => {
      const alreadySelected = current.existing.includes(item);
      return {
        ...current,
        existing: alreadySelected
          ? current.existing.filter((entry) => entry !== item)
          : [...current.existing, item],
      };
    });
  };

  const copyProjectRequest = async () => {
    const copyText = [
      `An: ${PUBLIC_CONTACT_EMAIL}`,
      `Betreff: ${emailContent.subject}`,
      "",
      emailContent.body,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(copyText);
      setCopyFeedback("Anfrage kopiert.");
    } catch {
      setCopyFeedback("Kopieren nicht möglich. Bitte E-Mail-Adresse und Zusammenfassung manuell übernehmen.");
    }

    window.setTimeout(() => setCopyFeedback(""), 3800);
  };

  const clearContext = () => {
    try {
      window.sessionStorage?.removeItem("cesProjectStartContext");
    } catch {
      // SessionStorage kann in privaten Browsermodi blockiert sein.
    }

    setContext(null);
  };

  return (
    <main className={`app-shell project-start-page tone-${activeTone}`}>
      <MatrixRain tone={activeTone} />
      <div className="engine-grid" />
      <div className="soft-scanlines" />
      <div className="ambient ambient-green" />
      <div className="ambient ambient-red" />
      <div className="ambient ambient-cyan" />

      <header className="site-header project-start-header">
        <a className="brand" href="/" aria-label="Zur CoreEngineStudio Startseite">
          <img src={logoIcon} alt="" />
          <span className="brand-text">
            <strong>CoreEngineStudio</strong>
            <small>Projektstart</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Projektstart Navigation">
          <a href="/#showroom">Showroom</a>
          <a href="/#leistungen">Leistungen</a>
          <a href="#projekt-assistent">Assistent</a>
        </nav>
      </header>

      <section className="project-start-hero full-bleed-section">
        <div className="project-start-copy">
          <span className="project-start-kicker">
            <Rocket size={16} />
            CoreEngineStudio · Projektstart
          </span>
          <h1>Aus deiner Idee wird ein klarer digitaler Startpunkt.</h1>
          <p>
            Diese Seite sammelt die wichtigsten Eckdaten für einen klaren Erstkontakt. Der Erstkontakt bleibt kostenlos.
            Es geht noch nicht um eine feste Buchung, sondern um Richtung, Ziel, Materialstand und einen passenden Einstieg.
          </p>

          <div className="project-start-hero-actions">
            <a href="#projekt-assistent" className="primary-action">
              Assistent starten
              <ArrowRight size={18} />
            </a>
            <a href="/" className="secondary-action">
              Zurück zur Startseite
            </a>
          </div>
        </div>

        <aside className="project-start-status-card" aria-label="Projektstart Status">
          <span>PROJECT ROUTE</span>
          <strong>{context?.title || "Neues CoreEngineStudio Projekt"}</strong>
          <p>{context?.type || "Website, System, Portal oder Automatisierung"}</p>
          {context?.route?.length ? (
            <small>{context.route.join(" / ")}</small>
          ) : (
            <small>Ohne CoreCube-Kontext gestartet</small>
          )}
        </aside>
      </section>

      <section className="project-start-confidence full-bleed-section" aria-label="Projektstart Hinweise">
        {projectStartTrustItems.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="project-start-confidence-card">
              <Icon size={18} />
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section id="projekt-assistent" className="project-start-flow full-bleed-section">
        <div className="section-heading wide-heading">
          <span>Projektstart-Assistent</span>
          <h2>Ein paar Antworten reichen für eine saubere erste Einschätzung.</h2>
          <p>
            Noch keine endgültige Buchung, kein Vertrag, kein Druck. Die Angaben bereiten nur eine saubere Anfrage mit genug Kontext vor.
          </p>
        </div>

        <div className="project-start-layout">
          <div className="project-start-panel project-start-type-panel">
            <span className="project-start-step">01 · Was möchtest du starten?</span>
            <div className="project-start-option-grid">
              {projectStartTypes.map((option) => {
                const Icon = option.icon;
                const isActive = formState.typeId === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`project-start-option ${isActive ? "is-active" : ""}`}
                    onClick={() => setProjectType(option)}
                  >
                    <Icon size={18} />
                    <strong>{option.title}</strong>
                    <small>{option.text}</small>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="project-start-panel">
            <span className="project-start-step">02 · Welche Richtung passt?</span>
            <div className="project-start-pill-grid">
              {projectStartDirections.map((direction) => (
                <button
                  key={direction}
                  type="button"
                  className={formState.direction === direction ? "is-active" : ""}
                  onClick={() => setFormState((current) => ({ ...current, direction }))}
                >
                  {direction}
                </button>
              ))}
            </div>
          </div>

          <div className="project-start-panel">
            <span className="project-start-step">03 · Was gibt es schon?</span>
            <div className="project-start-check-grid">
              {projectStartExisting.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={formState.existing.includes(item) ? "is-active" : ""}
                  onClick={() => toggleExisting(item)}
                >
                  <CheckCircle size={15} />
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="project-start-panel project-start-route-panel">
            <span className="project-start-step">04 · Zeitrahmen & Kontaktweg</span>
            <div className="project-start-split-grid">
              <div>
                <strong>Wann soll es ungefähr starten?</strong>
                <div className="project-start-pill-grid compact">
                  {projectStartTimelines.map((timeline) => (
                    <button
                      key={timeline}
                      type="button"
                      className={formState.timeline === timeline ? "is-active" : ""}
                      onClick={() => setFormState((current) => ({ ...current, timeline }))}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <strong>Wie möchtest du am liebsten antworten?</strong>
                <div className="project-start-pill-grid compact">
                  {projectStartContactWays.map((contactWay) => (
                    <button
                      key={contactWay}
                      type="button"
                      className={formState.contactWay === contactWay ? "is-active" : ""}
                      onClick={() => setFormState((current) => ({ ...current, contactWay }))}
                    >
                      {contactWay}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form
            className="project-start-panel project-start-contact-panel"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = mailtoHref;
            }}
          >
            <span className="project-start-step">05 · Kontakt & kurze Idee</span>
            <div className="project-start-form-grid">
              <label>
                Name
                <input
                  value={formState.name}
                  onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Dein Name"
                  required
                />
              </label>
              <label>
                E-Mail
                <input
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                  placeholder="name@beispiel.de"
                  type="email"
                  required
                />
              </label>
              <label>
                Telefon / WhatsApp optional
                <input
                  value={formState.phone}
                  onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="optional"
                />
              </label>
              <label className="project-start-message-field">
                Kurz zur Idee
                <textarea
                  value={formState.message}
                  onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Worum geht es grob? Was soll entstehen?"
                  rows={5}
                />
              </label>
            </div>

            <div className="project-start-submit-row">
              <button type="submit" className="primary-action">
                E-Mail im Mailprogramm öffnen
                <ArrowRight size={18} />
              </button>
              {context && (
                <button type="button" className="project-start-clear" onClick={clearContext}>
                  CoreCube-Kontext entfernen
                </button>
              )}
            </div>
          </form>

          <aside className="project-start-summary-card">
            <span>Zusammenfassung</span>
            <strong>{formState.typeTitle}</strong>
            <p>{formState.direction}</p>
            <ul>
              <li>Zeit: {formState.timeline}</li>
              <li>Kontakt: {formState.contactWay}</li>
              {context?.title && <li>Aus CoreCube: {context.title}</li>}
              {formState.existing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <small>
              Der Button öffnet dein E-Mail-Programm mit einer fertigen Nachricht. Falls das Gerät kein Mailprogramm startet, nutzt du einfach den Kopier-Block darunter.
            </small>
            <div className="project-start-fallback">
              <strong>Falls kein Mailprogramm aufgeht:</strong>
              <p>
                Kopiere die Anfrage und sende sie direkt an <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>{PUBLIC_CONTACT_EMAIL}</a>.
              </p>
              <button type="button" onClick={copyProjectRequest}>
                Anfrage kopieren
              </button>
              {copyFeedback && <em>{copyFeedback}</em>}
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter currentPath="/projekt-starten" />
    </main>
  );
}

// =====================================================
// HAUPTKOMPONENTE
// Hier werden State, Farblogik, CaseViewer-Steuerung
// und alle sichtbaren Seitenbereiche zusammengesetzt.
// =====================================================
function LandingPage() {
  // -----------------------------------------------------
  // STATE / INTERAKTION
  // toneIndex: aktive Website-Akzentfarbe
  // activeCaseIndex: aktive Referenz im CaseCube
  // previewCaseIndex/previewImageIndex: Großansicht + Galerie
  // -----------------------------------------------------
  const [toneIndex, setToneIndex] = useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [previewCaseIndex, setPreviewCaseIndex] = useState(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const [coreCubeStarted, setCoreCubeStarted] = useState(false);
  const [activeHubIndex, setActiveHubIndex] = useState(0);
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [coreHubStep, setCoreHubStep] = useState("start");
  const [coreHubRoute, setCoreHubRoute] = useState([]);
  const [activeCoreHubOptionId, setActiveCoreHubOptionId] = useState(null);
  const [coreHubTransitionKey, setCoreHubTransitionKey] = useState(0);
  const [coreHubLaunch, setCoreHubLaunch] = useState(null);
  const [coreHubDemoZoom, setCoreHubDemoZoom] = useState(false);
  const [coreHubDemoView, setCoreHubDemoView] = useState(null);
  const [coreHubDemoGalleryIndex, setCoreHubDemoGalleryIndex] = useState(0);
  const [projectRequestContext, setProjectRequestContext] = useState(null);
  const [runtimePerformanceGuard, setRuntimePerformanceGuard] = useState(false);
  const activeTone = colorPhases[toneIndex];
  const currentCoreHubStep = coreHubSteps[coreHubStep] || coreHubSteps.start;
  const currentCoreHubOptions = currentCoreHubStep.options || coreHubSteps.start.options;
  const coreHubRouteSegments = coreHubRoute.length ? coreHubRoute : ["Start"];
  const isCoreHubLaunching = Boolean(coreHubLaunch);
  const isRuntimeGuardActive = isCoreHubLaunching || runtimePerformanceGuard;
  const coreHubLaunchTargetClass = getCoreHubLaunchTargetClass(coreHubLaunch?.route || coreHubRouteSegments);
  const coreHubDemoTarget = getCoreHubDemoTarget(coreHubLaunch?.route || coreHubRouteSegments);
  // CES-BUILD-079-HERO-CUBE-SYNC-POLISH:
  // Hero-Cube und Showroom-Cube bleiben bei All4You auf derselben Face-Datenquelle.
  const sharedDemoCubeFaces =
    coreHubDemoTarget?.cubeFaces &&
    ["business-clean-all4you-demo", "dark-premium-darkpremium-demo", "gaming-matrix-inselleben-demo", "shopflow-hammermodding-demo", "booking-rental-rentalops-demo", "smart-systems-coreops-demo"].includes(coreHubDemoTarget.id)
      ? coreHubDemoTarget.cubeFaces
      : null;
  const isHeroDemoCubeSynced = Boolean(sharedDemoCubeFaces);
  const isCoreHubDemoZooming = Boolean(coreHubDemoZoom);
  const isCoreHubDemoViewActive = Boolean(coreHubDemoView);
  const activeDemoGallery = coreHubDemoView?.target?.gallery?.length
    ? coreHubDemoView.target.gallery
    : coreHubDemoView?.target
      ? [
          {
            type: "image",
            label: coreHubDemoView.target.previewLabel,
            title: coreHubDemoView.target.title,
            text: coreHubDemoView.target.text,
            image: coreHubDemoView.target.previewImage,
            alt: coreHubDemoView.target.previewAlt || coreHubDemoView.target.title,
          },
        ]
      : [];
  const activeDemoSlide = activeDemoGallery[coreHubDemoGalleryIndex] || activeDemoGallery[0] || null;
  const activeDemoGalleryTotal = activeDemoGallery.length;
  const activeCubeTheme = cubeThemes[activeThemeIndex] || cubeThemes[0];
  const activeReference = referenceCases[activeCaseIndex];
  const previewReference = previewCaseIndex !== null ? referenceCases[previewCaseIndex] : null;
  const previewImages = previewReference?.gallery?.length ? previewReference.gallery : previewReference ? [previewReference.image] : [];
  const previewImage = previewImages[previewImageIndex] ?? previewReference?.image;

  // -----------------------------------------------------
  // CASE VIEWER FUNKTIONEN
  // Diese Funktionen öffnen/schließen die Referenz-Großansicht
  // und steuern die Bildergalerie per Pfeilnavigation.
  // -----------------------------------------------------
  const openCasePreview = (index) => {
    setPreviewCaseIndex(index);
    setPreviewImageIndex(0);
  };

  const closeCasePreview = () => {
    setPreviewCaseIndex(null);
    setPreviewImageIndex(0);
  };

  const showPreviousPreviewImage = () => {
    if (!previewImages.length) return;
    setPreviewImageIndex((current) =>
      current === 0 ? previewImages.length - 1 : current - 1
    );
  };

  const showNextPreviewImage = () => {
    if (!previewImages.length) return;
    setPreviewImageIndex((current) =>
      current === previewImages.length - 1 ? 0 : current + 1
    );
  };

  // -----------------------------------------------------
  // CORECUBE START FLOW / COREHUB ROUTE TERMINAL / LAUNCH SEQUENCE
  // CES-BUILD-064/065/069:
  // - Der CoreHub arbeitet als echte Routing-Engine.
  // - 065 bereinigt nur Launch-/Particle-Reste, ohne den Flow zu verändern.
  // - Optionen mit nextStep wechseln weiterhin zur nächsten Frage.
  // - Finale Optionen ohne nextStep starten die Cube-Launch-Sequenz.
  // - Die sechs Panels verschwinden, der Route-Pfad bleibt sichtbar.
  // - Die Launch-Sequenz materialisiert den CoreCube jetzt über einen Particle-Merge:
  //   Partikel kreisen zur Mitte, verdichten sich dort, verblassen in den Ghost-Cube
  //   und der Cube wächst danach kontrolliert in den Vordergrund.
  // - Das Demo Target System zeigt, welche Demo-Welt aus der Route entstehen soll.
  // - 069 ergänzt den ersten Zoom-Übergang in eine interne Demo-/Case-Shell.
  // -----------------------------------------------------
  const selectCoreHubOption = (option) => {
    setCoreCubeStarted(true);
    setCoreHubDemoZoom(false);
    setCoreHubDemoView(null);
    setCoreHubDemoGalleryIndex(0);
    setActiveCoreHubOptionId(option.id);

    if (Number.isInteger(option.hubIndex)) {
      setActiveHubIndex(option.hubIndex);
    }

    if (Number.isInteger(option.themeIndex)) {
      setActiveHubIndex(0);
      setActiveThemeIndex(option.themeIndex);
    }

    // COREHUB ROUTING STATE:
    // Der Pfad wächst horizontal von links nach rechts:
    // CoreHub://Route / Webseiten / Gaming Matrix / RP-Server Website
    // Optionen mit nextStep öffnen die nächste Frageebene.
    // Optionen ohne nextStep sind finale Fokus-Auswahlen und starten
    // ab Build 060 die Launch-Sequenz mit eigenem CoreHub-Cube.
    const expectedRouteDepth = currentCoreHubStep.routeDepth ?? 0;
    const baseRoute = coreHubRoute.length > expectedRouteDepth
      ? coreHubRoute.slice(0, expectedRouteDepth)
      : coreHubRoute;
    const nextRoute = [...baseRoute, option.title];

    setCoreHubRoute(nextRoute);

    if (option.nextStep) {
      setCoreHubLaunch(null);
      setCoreHubStep(option.nextStep);
    } else {
      setCoreHubLaunch({
        id: option.id,
        title: option.title,
        route: nextRoute,
        stepLabel: currentCoreHubStep.routeLabel,
        badge: option.badge,
        detail: option.detail,
      });
    }

    setCoreHubTransitionKey((current) => current + 1);
  };

  const resetCoreHubRoute = () => {
    setCoreHubLaunch(null);
    setCoreHubDemoZoom(false);
    setCoreHubDemoView(null);
    setCoreHubDemoGalleryIndex(0);
    setCoreHubStep("start");
    setCoreHubRoute([]);
    setActiveCoreHubOptionId(null);
    setActiveHubIndex(0);
    setCoreHubTransitionKey((current) => current + 1);
  };

  const goBackCoreHubRoute = () => {
    if (coreHubDemoView) {
      setCoreHubDemoView(null);
      setCoreHubDemoZoom(false);
      setCoreHubDemoGalleryIndex(0);
      setCoreHubTransitionKey((current) => current + 1);
      return;
    }

    if (coreHubDemoZoom) {
      setCoreHubDemoZoom(false);
      setCoreHubTransitionKey((current) => current + 1);
      return;
    }

    if (coreHubLaunch) {
      setCoreHubDemoView(null);
      setCoreHubDemoZoom(false);
      setCoreHubDemoGalleryIndex(0);
      setCoreHubLaunch(null);
      setCoreHubRoute((currentRoute) => currentRoute.slice(0, -1));
      setActiveCoreHubOptionId(null);
      setCoreHubTransitionKey((current) => current + 1);
      return;
    }

    const expectedDepth = currentCoreHubStep.routeDepth ?? 0;

    // Wenn bereits eine finale Antwort in der aktuellen Ebene gewählt wurde,
    // entfernen wir zuerst nur diese letzte Antwort und bleiben in der Ebene.
    if (coreHubRoute.length > expectedDepth) {
      setCoreHubRoute((currentRoute) => currentRoute.slice(0, -1));
      setActiveCoreHubOptionId(null);
      setCoreHubTransitionKey((current) => current + 1);
      return;
    }

    const previousStep = currentCoreHubStep.previousStep || "start";
    const previousStepConfig = coreHubSteps[previousStep] || coreHubSteps.start;

    setCoreHubStep(previousStep);
    setCoreHubRoute((currentRoute) => currentRoute.slice(0, previousStepConfig.routeDepth ?? 0));
    setActiveCoreHubOptionId(null);

    if (previousStep === "start") {
      setActiveHubIndex(0);
    }

    setCoreHubTransitionKey((current) => current + 1);
  };

  const getScrollSettings = () => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const isMobileViewport = window.matchMedia?.("(max-width: 760px)")?.matches;
    const isTabletViewport = window.matchMedia?.("(max-width: 1100px)")?.matches;

    return {
      behavior: prefersReducedMotion ? "auto" : "smooth",
      isMobileViewport,
      isTabletViewport,
    };
  };

  const scrollToShowroom = () => {
    const { behavior, isMobileViewport, isTabletViewport } = getScrollSettings();

    window.requestAnimationFrame(() => {
      if (!showroomRef.current) return;

      const targetOffset = isMobileViewport ? -64 : isTabletViewport ? -76 : -92;
      const targetTop = showroomRef.current.getBoundingClientRect().top + window.scrollY + targetOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior,
      });
    });
  };

  const scrollToWebCube = () => {
    const { behavior, isMobileViewport, isTabletViewport } = getScrollSettings();

    window.requestAnimationFrame(() => {
      if (!webCubeRef.current) return;

      const targetOffset = isMobileViewport ? -18 : isTabletViewport ? -28 : -38;
      const targetTop = webCubeRef.current.getBoundingClientRect().top + window.scrollY + targetOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior,
      });
    });
  };

  const startCoreCubeFlow = (event) => {
    event?.preventDefault();
    setCoreCubeStarted(true);
    resetCoreHubRoute();
    scrollToShowroom();
  };

  const selectWebsiteDirection = (index) => {
    const selectedTheme = cubeThemes[index] || cubeThemes[0];
    setCoreCubeStarted(true);
    setCoreHubLaunch(null);
    setCoreHubDemoZoom(false);
    setCoreHubDemoView(null);
    setCoreHubDemoGalleryIndex(0);
    setActiveHubIndex(0);
    setCoreHubStep(selectedTheme.routeStep || "websites");
    setCoreHubRoute(["Webseiten", selectedTheme.title]);
    setActiveCoreHubOptionId(selectedTheme.routeOptionId || `website-${index}`);
    setActiveThemeIndex(index);
    setCoreHubTransitionKey((current) => current + 1);
  };

  // -----------------------------------------------------
  // COREHUB / DEMO ZOOM TRANSITION
  // CES-BUILD-069:
  // Startet nach dem Cube-Launch einen ersten Zoom-in Übergang
  // in eine interne Demo-/Case-Shell. Kein iframe, keine externe
  // Website im Cube, sondern optimierte Preview + Live-Link.
  // -----------------------------------------------------
  const openCoreHubDemoView = () => {
    if (!coreHubLaunch || coreHubDemoZoom) return;

    const target = getCoreHubDemoTarget(coreHubLaunch.route);
    const route = coreHubLaunch.route || coreHubRouteSegments;

    setCoreHubDemoZoom(true);

    window.setTimeout(() => {
      setCoreHubDemoGalleryIndex(0);
      setCoreHubDemoView({
        id: `${target.id}-view`,
        route,
        target,
      });
      setCoreHubDemoZoom(false);
      setCoreHubTransitionKey((current) => current + 1);
    }, 1150);
  };

  // -----------------------------------------------------
  // DEMO AUTO TRANSITION
  // CES-BUILD-077 CLEAN MANUAL:
  // Nach finaler CoreHub-Auswahl startet die Demo automatisch.
  // Der alte Button bleibt im Launch-Zustand nur als Fallback vorhanden.
  // -----------------------------------------------------
  useEffect(() => {
    if (!coreHubLaunch || coreHubDemoView || coreHubDemoZoom) return undefined;

    const autoDemoTimer = window.setTimeout(() => {
      openCoreHubDemoView();
    }, 5200);

    return () => window.clearTimeout(autoDemoTimer);
  }, [coreHubLaunch, coreHubDemoView, coreHubDemoZoom]);

  // -----------------------------------------------------
  // DEMO VIEWPORT FIT
  // CES-BUILD-077 CLEAN MANUAL:
  // Richtet nach dem Demo-Start gezielt die echte Demo-Shell aus.
  // Dadurch bleibt der untere Rahmen sichtbar und der Bereich läuft
  // nicht nach unten aus dem Viewport.
  // -----------------------------------------------------
  useEffect(() => {
    if (!coreHubDemoView) return undefined;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const fitDemoIntoViewport = () => {
      const shell = document.querySelector(".corehub-demo-shell");
      if (!shell) return;

      const rect = shell.getBoundingClientRect();
      const currentScrollY = window.scrollY || window.pageYOffset || 0;

      const topSafety = window.innerHeight >= 820 ? 92 : 68;
      const bottomSafety = 38;
      const desiredCenter = currentScrollY + rect.top + rect.height / 2 - window.innerHeight / 2;

      let targetScrollY = desiredCenter;

      const shellTopAfterCenter = rect.top - (targetScrollY - currentScrollY);
      if (shellTopAfterCenter < topSafety) {
        targetScrollY -= topSafety - shellTopAfterCenter;
      }

      const shellBottomAfterTarget = rect.bottom - (targetScrollY - currentScrollY);
      const allowedBottom = window.innerHeight - bottomSafety;
      if (shellBottomAfterTarget > allowedBottom) {
        targetScrollY += shellBottomAfterTarget - allowedBottom;
      }

      window.scrollTo({
        top: Math.max(0, targetScrollY),
        behavior: reducedMotion ? "auto" : "smooth",
      });
    };

    const timers = [180, 460, 820].map((delay) => window.setTimeout(fitDemoIntoViewport, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [coreHubDemoView, coreHubTransitionKey, coreHubDemoGalleryIndex]);

  // -----------------------------------------------------
  // PROJEKT ANFANGEN CTA FLOW
  // CES-BUILD-080:
  // Der Demo-CTA springt zum Kontaktbereich und übergibt sichtbar
  // den Kontext der aktuellen Demo.
  // -----------------------------------------------------
  const startProjectRequestFromDemo = (event) => {
    event?.preventDefault?.();

    const route = coreHubDemoView?.route?.length
      ? coreHubDemoView.route
      : coreHubLaunch?.route || coreHubRouteSegments;

    const target = coreHubDemoView?.target || coreHubDemoTarget;

    const requestContext = {
      source: "CoreCube",
      title: target?.title || "CoreEngineStudio Projekt",
      route,
      type: target?.caseTitle || "Business Clean · Dienstleisterseite",
      note: "Ähnliche Website / ähnliches System anfragen",
      subject: `Projektanfrage: ${target?.title || "CoreEngineStudio Projekt"}`,
    };

    setProjectRequestContext(requestContext);

    try {
      window.sessionStorage?.setItem("cesProjectStartContext", JSON.stringify(requestContext));
    } catch {
      // SessionStorage ist nur Komfort für die Unterseite.
    }

    const params = new URLSearchParams();
    if (target?.title) params.set("showcase", target.title);
    if (route?.length) params.set("route", route.join(" / "));

    window.location.href = `${PROJECT_START_PATH}?${params.toString()}`;
  };

  const closeCoreHubDemoView = () => {
    setCoreHubDemoView(null);
    setCoreHubDemoZoom(false);
    setCoreHubDemoGalleryIndex(0);
    setCoreHubTransitionKey((current) => current + 1);
  };

  const showPreviousCoreHubDemoSlide = () => {
    if (!activeDemoGalleryTotal) return;
    setCoreHubDemoGalleryIndex((current) =>
      current === 0 ? activeDemoGalleryTotal - 1 : current - 1
    );
  };

  const showNextCoreHubDemoSlide = () => {
    if (!activeDemoGalleryTotal) return;
    setCoreHubDemoGalleryIndex((current) =>
      current >= activeDemoGalleryTotal - 1 ? 0 : current + 1
    );
  };
  const shellRef = useRef(null);
  const showroomRef = useRef(null);
  const webCubeRef = useRef(null);
  const activeToneRef = useRef(activeTone);

  // -----------------------------------------------------
  // AKTIVE FARBE IM REF HALTEN
  // Wird benötigt, damit der requestAnimationFrame-Loop immer
  // mit der aktuellen Farbphase arbeitet.
  // -----------------------------------------------------
  useEffect(() => {
    activeToneRef.current = activeTone;
  }, [activeTone]);

  // -----------------------------------------------------
  // AUTOMATISCHER FARBWECHSEL
  // Alle 12 Sekunden wird zur nächsten Akzentfarbe gewechselt.
  // Der eigentliche smooth Verlauf passiert im nächsten Effect.
  // -----------------------------------------------------
  useEffect(() => {
    const timer = window.setInterval(() => {
      setToneIndex((current) => (current + 1) % colorPhases.length);
    }, 12000);

    return () => window.clearInterval(timer);
  }, []);

  // -----------------------------------------------------
  // SMOOTH PULSE / CSS-VARIABLEN
  // Hier werden aktuelle und kommende Akzentfarbe weich
  // interpoliert und als CSS-Variablen auf .app-shell gesetzt.
  // Diese Variablen steuern Header, Karten, Verläufe und Glows.
  //
  // CES-BUILD-050:
  // Desktop bleibt bei der vollen Premium-Experience.
  // Touch-/Mobile-Geräte bekommen einen gedrosselten CSS-Variablen-Loop,
  // damit beim Scrollen weniger Repaints/GPU-Layer entstehen.
  // -----------------------------------------------------
  useEffect(() => {
    const element = shellRef.current;
    if (!element) return undefined;

    const isTouchDevice = window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches;
    const isSmallViewport = window.matchMedia?.("(max-width: 900px)")?.matches;
    const mobileLiteMode = Boolean(isTouchDevice || isSmallViewport);

    let animationFrame = 0;
    let lastPaint = 0;
    let scrollPauseUntil = 0;
    let currentMain = [...colorValues.green.main];
    let currentSoft = [...colorValues.green.soft];
    let currentNextMain = [...colorValues.cyan.main];
    let currentNextSoft = [...colorValues.cyan.soft];

    const frameInterval = mobileLiteMode ? 150 : 72;
    const mixStrength = mobileLiteMode ? 0.09 : 0.055;

    const handleScroll = () => {
      if (!mobileLiteMode) return;
      scrollPauseUntil = performance.now() + 140;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const applyColors = (time = 0) => {
      animationFrame = window.requestAnimationFrame(applyColors);

      if (mobileLiteMode) {
        if (time < scrollPauseUntil) return;
        if (time - lastPaint < frameInterval) return;
        lastPaint = time;
      }

      const activeToneName = activeToneRef.current;
      const activeIndex = Math.max(0, colorPhases.indexOf(activeToneName));
      const nextToneName = colorPhases[(activeIndex + 1) % colorPhases.length];

      const target = colorValues[activeToneName] || colorValues.green;
      const nextTarget = colorValues[nextToneName] || colorValues.cyan;

      currentMain = mixColor(currentMain, target.main, mixStrength);
      currentSoft = mixColor(currentSoft, target.soft, mixStrength);
      currentNextMain = mixColor(currentNextMain, nextTarget.main, mixStrength);
      currentNextSoft = mixColor(currentNextSoft, nextTarget.soft, mixStrength);

      const mainRgb = colorToRgb(currentMain);
      const softRgb = colorToRgb(currentSoft);
      const nextMainRgb = colorToRgb(currentNextMain);
      const nextSoftRgb = colorToRgb(currentNextSoft);

      element.style.setProperty("--pulse-rgb", mainRgb);
      element.style.setProperty("--pulse-main", `rgb(${mainRgb})`);
      element.style.setProperty("--pulse-soft", `rgb(${softRgb})`);
      element.style.setProperty("--pulse-next-rgb", nextMainRgb);
      element.style.setProperty("--pulse-next-main", `rgb(${nextMainRgb})`);
      element.style.setProperty("--pulse-next-soft", `rgb(${nextSoftRgb})`);
      element.style.setProperty("--pulse-glow", `rgba(${mainRgb}, ${mobileLiteMode ? "0.16" : "0.28"})`);
      element.style.setProperty("--pulse-next-glow", `rgba(${nextMainRgb}, ${mobileLiteMode ? "0.14" : "0.28"})`);
      element.style.setProperty("--green", `rgb(${mainRgb})`);
      element.style.setProperty("--green-soft", `rgb(${softRgb})`);
    };

    applyColors();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main ref={shellRef} className={`app-shell ${coreCubeStarted ? "corecube-flow-active" : ""} ${isRuntimeGuardActive ? "runtime-performance-guard" : ""} ${isCoreHubLaunching ? "corehub-launch-runtime" : ""} ${isCoreHubDemoZooming ? "corehub-demo-zoom-runtime" : ""}`}>
      {/* =====================================================
          GLOBALER HINTERGRUND
          MatrixRain, Grid, Scanlines und Ambient-Glows.
          Styling: App.css -> "GLOBAL / BACKGROUND"
      ===================================================== */}
      {!isRuntimeGuardActive && <MatrixRain tone={activeTone} />}
      <div className="engine-grid" />
      <div className="soft-scanlines" />
      <div className="ambient ambient-green" />
      <div className="ambient ambient-red" />
      <div className="ambient ambient-cyan" />

      {/* =====================================================
          HEADER / NAVIGATION
          Logo links, Navigation rechts.
          Styling: App.css -> "HEADER / NAVIGATION"
      ===================================================== */}
      <header className="site-header">
        <a className="brand" href="#start" aria-label="CoreEngineStudio Start">
          <img src={logoIcon} alt="" />
          <span className="brand-text">
            <strong>CoreEngineStudio</strong>
            <small>Digital Studio</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#showroom">Showroom</a>
          <a href="#referenzen">Referenzen</a>
          <a href="#ablauf">Ablauf</a>
          <a href={PROJECT_START_PATH}>Projekt starten</a>
        </nav>
      </header>

      {/* =====================================================
          START / HERO
          Hauptheadline, CTA-Buttons, Modulstreifen und CoreCube.
          Inhalte: direkt in diesem Abschnitt.
          Styling: App.css -> "HERO / CORE CUBE"
      ===================================================== */}
      <section id="start" className="hero-section full-bleed-section">
        <motion.div
          className="hero-copy premium-hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <Sparkles size={16} />
            CoreCube Showcase · Digital Studio
          </div>

          <div className="hero-brandline">
            <span>CoreEngineStudio</span>
            <strong>Digital Studio für Webseiten, Systeme & Automatisierung</strong>
          </div>

          <h1 className="hero-gradient-title">
            <span className="gradient-title-line">Digitale Auftritte</span>
            <span className="gradient-title-line">mit smarter Engine.</span>
          </h1>

          <p className="hero-lead">
            CoreEngineStudio verbindet hochwertige Gestaltung mit klarer Technik:
            Webseiten, Portale, Anfrageflows, Datenbanken und Automatisierung
            aus einer starken digitalen Basis.
          </p>

          <div className="hero-actions">
            <a
              className={`primary-action ${coreCubeStarted ? "is-flow-active" : ""}`}
              href="#showroom"
              onClick={startCoreCubeFlow}
              aria-label="CoreCube Showroom starten"
            >
              CoreCube starten
              <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href="#leistungen">
              Leistungen ansehen
            </a>
            <a className="ghost-action" href={PROJECT_START_PATH}>
              Projekt starten
            </a>
          </div>

          <div className="hero-module-strip" aria-label="CoreEngineStudio Schwerpunkte">
            <article>
              <span>01</span>
              <strong>Webseiten</strong>
              <small>Auftritt, Landingpage, Firmenwebsite</small>
            </article>
            <article>
              <span>02</span>
              <strong>Systeme</strong>
              <small>Portale, Dashboards, Datenbanken</small>
            </article>
            <article>
              <span>03</span>
              <strong>Automation</strong>
              <small>Anfragen, Statusmails, Abläufe</small>
            </article>
          </div>
        </motion.div>

<motion.div
          className="hero-engine-stage"
          initial={{ opacity: 0, x: 24, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          aria-label="CoreEngineStudio Engine Visual"
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <ShowcaseCube
            size={360}
            faces={sharedDemoCubeFaces || undefined}
            rotationMode="tour"
            className={`hero-showcase-cube ${isHeroDemoCubeSynced ? "is-demo-synced" : ""}`}
          />
        </motion.div>
      </section>

      {/* =====================================================
          LEISTUNGEN / CORE ENGINE
          Linke Lead-Karte mit Service Engine Flow.
          Rechte Karten kommen aus der Datenliste "services".
          Styling: App.css -> "LEISTUNGEN / SERVICE CARDS"
      ===================================================== */}
      <section id="leistungen" className="section-block services-section full-bleed-section">
        <div className="section-heading wide-heading services-heading">
          <span>Leistungen & Angebote</span>
          <h2>Digitale Auftritte, die vorne wirken und hinten mitdenken.</h2>
          <p>
            Von der sichtbaren Website bis zur smarten Engine dahinter: Auftritt,
            Shop, Portal, Anfrageflow oder Automation werden so geplant, dass
            Besucher, Kontaktwege und Abläufe sauber geführt werden.
          </p>
        </div>

        <div className="services-layout">
          <motion.article
            className="service-lead-card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
          >
            <div className="service-lead-topline">
              <span>CoreEngine</span>
              <strong>Digitale Auftritte vorne. Smarte Engine dahinter.</strong>
            </div>
            <h3>Aus einer Idee wird ein nutzbarer digitaler Auftritt.</h3>
            <p>
              Du bekommst nicht einfach nur eine hübsche Seite. Die Struktur,
              Kontaktwege und möglichen Systeme dahinter werden direkt mitgedacht.
            </p>

            <div className="service-lead-flow" aria-label="CoreEngineStudio Leistungsfluss">
              <span>Design</span>
              <ArrowRight size={15} />
              <span>Website</span>
              <ArrowRight size={15} />
              <span>System</span>
              <ArrowRight size={15} />
              <span>Automation</span>
            </div>

            <div className="service-engine-visual" aria-label="Animierter Service Engine Flow">
              <div className="flow-grid-bg" />
              <div className="flow-core refined-flow-core">
                <span>CORE</span>
                <strong>FLOW</strong>
                <small>ENGINE</small>
              </div>

              <div className="flow-node flow-node-design">
                <span>01</span>
                <strong>Design</strong>
              </div>
              <div className="flow-node flow-node-web">
                <span>02</span>
                <strong>Website</strong>
              </div>
              <div className="flow-node flow-node-system">
                <span>03</span>
                <strong>System</strong>
              </div>
              <div className="flow-node flow-node-auto">
                <span>04</span>
                <strong>Automation</strong>
              </div>

              <div className="flow-path flow-path-a" />
              <div className="flow-path flow-path-b" />
              <div className="flow-path flow-path-c" />
              <div className="flow-path flow-path-d" />

              <span className="data-pulse pulse-one" />
              <span className="data-pulse pulse-two" />
              <span className="data-pulse pulse-three" />
              <span className="data-pulse pulse-four" />
            </div>
          </motion.article>

          <div className="service-grid premium-service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className="service-card premium-service-card"
                  key={service.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.38, delay: index * 0.035 }}
                >
                  <div className="service-card-header">
                    <div className="card-icon">
                      <Icon size={22} />
                    </div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <small>{service.kicker}</small>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <ul>
                    {service.points?.map((point) => (
                      <li key={point}>
                        <CheckCircle size={14} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="service-offer-strip" aria-label="CoreEngineStudio Angebotsklarheit">
          {serviceOfferNotes.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="services-cta-row" aria-label="CoreEngineStudio Leistungsaktionen">
          <a className="primary-action" href="/projekt-starten">
            Projekt starten
            <ArrowRight size={17} />
          </a>
          <a className="secondary-action" href="#showroom">
            Showcases ansehen
          </a>
        </div>
      </section>

      {/* =====================================================
          SHOWROOM / COREHUB
          CoreHub-Erklärung, Route-Terminal und sechs Antwort-Panels.
          Inhalte kommen aus der Datenstruktur "coreHubSteps".
          Styling: App.css -> "COREHUB / SHOWROOM"
      ===================================================== */}
      <section
        id="showroom"
        ref={showroomRef}
        className={`showroom-section showroom-upgrade full-bleed-section ${coreCubeStarted ? "corecube-started" : ""}`}
      >
        <div className="showroom-copy showroom-copy-upgrade">
          <span>CoreHub Vision</span>
          <h2>Der Showroom wird zur Beratung.</h2>
          <p>
            Besucher sollen nicht nur lesen, was möglich ist. Sie sollen digitale
            Richtungen erleben, vergleichen und Schritt für Schritt zur passenden
            Lösung geführt werden.
          </p>

          <div className="showroom-proof-list" aria-label="Showroom Prinzipien">
            <article>
              <strong>Geführte Auswahl</strong>
              <p>Der Besucher startet über Fragen statt über Fachbegriffe.</p>
            </article>
            <article>
              <strong>Showcase-Welten</strong>
              <p>Jede Richtung zeigt Look, Aufbau und mögliche Funktionen mit eigener Vorschau.</p>
            </article>
            <article>
              <strong>Individuell anpassbar</strong>
              <p>Farben, Inhalte und Features werden projektbezogen abgestimmt.</p>
            </article>
          </div>
        </div>

        <div
          className={`corehub-panel ${coreCubeStarted ? "is-flow-started" : ""} ${coreHubStep !== "start" ? "is-route-deep" : ""} ${isCoreHubLaunching ? "is-launching" : ""} ${isCoreHubDemoZooming ? "is-demo-zooming" : ""} ${isCoreHubDemoViewActive ? "is-demo-view-active" : ""}`}
          aria-label="CoreHub Route Terminal"
        >
          <div className="corehub-panel-head">
            <div>
              <span>{currentCoreHubStep.eyebrow}</span>
              <strong>{currentCoreHubStep.question}</strong>
            </div>
            <p>{currentCoreHubStep.description}</p>
          </div>

          <div className={`corehub-route-terminal ${isCoreHubLaunching ? "is-launching" : ""}`} aria-label="CoreHub Route Pfad">
            <div className="corehub-terminal-head">
              <span>CoreHub://Route</span>
              <i aria-hidden="true" />
            </div>

            <div className="corehub-route-line" aria-live="polite">
              {coreHubRouteSegments.map((segment, index) => (
                <span
                  className={`corehub-route-segment ${index === coreHubRouteSegments.length - 1 ? "is-current" : ""}`}
                  key={`${segment}-${index}`}
                >
                  {segment}
                </span>
              ))}
            </div>


            {isCoreHubLaunching && (
              <div className="corehub-launch-loader" aria-label="Demo-Initialisierung läuft">
                <span>ENGINE INIT</span>
                <strong aria-hidden="true">
                  <i>01</i>
                  <i>02</i>
                  <i>03</i>
                  <i>04</i>
                </strong>
              </div>
            )}
            <div className="corehub-route-actions">
              {coreHubStep !== "start" && (
                <button type="button" onClick={goBackCoreHubRoute}>
                  Zurück
                </button>
              )}
              {coreHubRoute.length > 0 && (
                <button type="button" onClick={resetCoreHubRoute}>
                  Neu starten
                </button>
              )}
            </div>
          </div>

          {isCoreHubLaunching ? (
            coreHubDemoView ? (
              <>
                <div
                  className={`corehub-demo-shell ${coreHubLaunchTargetClass}`}
                key={`demo-shell-${coreHubDemoView.id}-${coreHubTransitionKey}`}
                aria-label="CoreHub Demo Vorschau"
              >
                <div className="corehub-demo-gallery-wrap">
                  <div className={`corehub-demo-shell-preview ${activeDemoSlide?.type === "story" ? "is-story-slide" : ""}`}>
                    {activeDemoSlide?.type === "story" ? (
                      <div className="corehub-demo-story-panel">
                        <span>{activeDemoSlide.label}</span>
                        {activeDemoSlide.title && <strong>{activeDemoSlide.title}</strong>}
                        <p>{activeDemoSlide.text}</p>
                        <ul>
                          {activeDemoSlide.bullets?.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ) : activeDemoSlide?.image ? (
                      <img src={activeDemoSlide.image} alt={activeDemoSlide.alt || activeDemoSlide.title || coreHubDemoView.target.title} />
                    ) : (
                      <div className="corehub-demo-shell-placeholder">
                        <span>{coreHubDemoView.target.previewLabel}</span>
                        <strong>{coreHubDemoView.target.title}</strong>
                      </div>
                    )}

                    {activeDemoGalleryTotal > 1 && (
                      <div className="corehub-demo-gallery-controls" aria-label="Showcase-Galerie Navigation">
                        <button type="button" onClick={showPreviousCoreHubDemoSlide}>‹</button>
                        <span>{String(coreHubDemoGalleryIndex + 1).padStart(2, "0")} / {String(activeDemoGalleryTotal).padStart(2, "0")}</span>
                        <button type="button" onClick={showNextCoreHubDemoSlide}>›</button>
                      </div>
                    )}
                  </div>

                  {activeDemoGalleryTotal > 1 && (
                    <div className="corehub-demo-gallery-dock" aria-label={`${coreHubDemoView.target.title} Showcase-Bilder`}>
                      {activeDemoGallery.map((slide, slideIndex) => (
                        <button
                          type="button"
                          key={`${slide.label}-${slideIndex}`}
                          className={slideIndex === coreHubDemoGalleryIndex ? "active" : ""}
                          onClick={() => setCoreHubDemoGalleryIndex(slideIndex)}
                          aria-label={`${slide.label} anzeigen`}
                        >
                          <span>{String(slideIndex + 1).padStart(2, "0")}</span>
                          <strong>{slide.label}</strong>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="corehub-demo-shell-content">
                  <span>Showcase Galerie</span>
                  <strong>{activeDemoSlide?.title || coreHubDemoView.target.title}</strong>
                  <small>{coreHubDemoView.route.join(" / ")}</small>
                  <p>{activeDemoSlide?.text || coreHubDemoView.target.text}</p>

                  <div className="corehub-demo-shell-modules">
                    {coreHubDemoView.target.modules.map((moduleName) => (
                      <em key={moduleName}>{moduleName}</em>
                    ))}
                  </div>

                  <div className="corehub-demo-shell-actions">
                    <button type="button" onClick={closeCoreHubDemoView}>
                      Zurück zum Cube
                    </button>
                    {coreHubDemoView.target.liveUrl && (
                      <a href={coreHubDemoView.target.liveUrl} target="_blank" rel="noreferrer">
                        {coreHubDemoView.target.liveLabel || "Live-Projekt öffnen"}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
                <a className="corehub-demo-project-start" href={PROJECT_START_PATH} aria-label="Projektanfrage starten" onClick={startProjectRequestFromDemo}>
                  Projekt anfangen
                  <ArrowRight size={14} />
                </a>
              </>
            ) : (
            <div
              className={`corehub-launch-stage ${coreHubLaunchTargetClass} ${isCoreHubDemoZooming ? "is-demo-zooming" : ""}`}
              key={`launch-${coreHubLaunch?.id}-${coreHubTransitionKey}`}
              aria-label="CoreHub Cube Launch Sequenz"
            >
              <div className="corehub-launch-copy">
                <span>{coreHubDemoTarget.kicker}</span>
                <strong>{coreHubLaunch?.title}</strong>
                <p>
                  Der CoreCube richtet die Route aus und koppelt sie an eine konkrete Showcase-Welt.
                </p>
              </div>

              <div
                className={`corehub-assembly-cube-wrap ${coreHubLaunchTargetClass}`}
                aria-label="CoreCube Assembly Animation"
              >
                <div className="corehub-assembly-field corehub-particle-field" aria-hidden="true">
                  {Array.from({ length: COREHUB_ASSEMBLY_PARTICLE_COUNT }, (_, particleIndex) => (
                    <span
                      className={`assembly-particle particle-${particleIndex + 1}`}
                      key={`corecube-particle-${particleIndex}`}
                    />
                  ))}
                </div>

                <div className="corehub-assembly-status" aria-hidden="true">
                  <span>PARTICLES</span>
                  <strong>CORE MERGE</strong>
                </div>

                <ShowcaseCube
                  size={250}
                  faces={coreHubDemoTarget.cubeFaces}
                  autoRotate={false}
                  rotationMode="tour"
                  className={`corehub-launch-cube corehub-assembled-cube ${coreHubLaunchTargetClass} ${coreHubDemoTarget.previewImage ? "has-demo-preview-face" : ""}`}
                />
              </div>

              <div className="corehub-launch-result">
                <span>{coreHubDemoTarget.status}</span>
                <strong>{coreHubDemoTarget.title}</strong>
                <small>{coreHubDemoTarget.caseTitle}</small>
                <p>{coreHubDemoTarget.text}</p>

                <div className="corehub-demo-target-meta" aria-label="Showcase-Bausteine">
                  {coreHubDemoTarget.modules.map((moduleName) => (
                    <em key={moduleName}>{moduleName}</em>
                  ))}
                </div>

                <b className="corehub-demo-target-next">{coreHubDemoTarget.next}</b>

                <div className="corehub-demo-target-actions">
                  <button
                    type="button"
                    onClick={openCoreHubDemoView}
                    disabled={isCoreHubDemoZooming}
                  >
                    {isCoreHubDemoZooming ? "Showcase wird geöffnet" : "Showcase ansehen"}
                  </button>
                  {coreHubDemoTarget.liveUrl && (
                    <a href={coreHubDemoTarget.liveUrl} target="_blank" rel="noreferrer">
                      {coreHubDemoTarget.liveLabel || "Live-Projekt öffnen"}
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <span>{coreHubDemoTarget.previewLabel}</span>
                </div>
              </div>
            </div>
            )
          ) : (
            <div
              className={`hub-preview hub-preview-upgrade corehub-option-grid ${coreHubStep !== "start" ? "is-step-mode" : ""}`}
              key={`${coreHubStep}-${coreHubTransitionKey}`}
            >
              {currentCoreHubOptions.map((option, index) => {
                const Icon = option.icon;
                const isActiveOption = option.id === activeCoreHubOptionId;
                const demoCaseMeta = getCoreHubDemoCaseMeta(option, currentCoreHubStep.id);
                return (
                  <button
                    className={`hub-card ${isActiveOption ? "active" : ""} ${option.nextStep ? "is-live" : "is-planned"} ${demoCaseMeta ? "has-demo-case" : ""}`}
                    key={option.id}
                    type="button"
                    onClick={() => selectCoreHubOption(option)}
                    aria-pressed={isActiveOption}
                    aria-label={`${option.title} im CoreHub auswählen`}
                    data-badge={option.badge}
                  >
                    <div className="hub-card-top">
                      <div className="hub-card-icon">
                        <Icon size={18} />
                      </div>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{option.title}</h3>
                    {demoCaseMeta && (
                      <div className="hub-card-demo-badge" aria-label={`${demoCaseMeta.label} verfügbar für ${option.title}`}>
                        <span>{demoCaseMeta.label}</span>
                      </div>
                    )}
                    <p>{option.text}</p>
                    <small>{option.detail}</small>
                  </button>
                );
              })}
            </div>
          )}

          <div className="showroom-note showroom-note-upgrade corehub-route-note">
            <p>{isCoreHubLaunching ? `Launch-Sequenz aktiv: ${coreHubLaunch?.route?.join(" / ")}. Der Showcase-Pfad ist bereit.` : coreHubRoute.length > 1 ? `Route erkannt: ${coreHubRoute.join(" / ")}. Daraus entsteht eine passende Showcase-Welt oder Projektanfrage.` : currentCoreHubStep.note}</p>
            {coreHubStep === "websites" && !isCoreHubLaunching && (
              <button
                className="corehub-next-action"
                type="button"
                onClick={scrollToWebCube}
                aria-label="Zur Auswahl der Webseiten-Richtungen springen"
              >
                Webseiten-Cube ansehen
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          WEBCUBE / SECHS RICHTUNGEN
          Die sechs Website-Richtungen kommen aus "cubeThemes".
          Kleine Zeile oben = theme.label.
          Große Zeile darunter = theme.title.
          Styling: App.css -> "WEBCUBE / THEME CARDS"
      ===================================================== */}
      <section ref={webCubeRef} className="section-block webcube-section full-bleed-section">
        <div className="section-heading wide-heading">
          <span>Webseiten-Cube · Version 1</span>
          <h2>Sechs Richtungen. Ein klarer Einstieg.</h2>
          <p>
            Der Webseiten-Cube führt Besucher nicht über Fachbegriffe, sondern
            über Nutzen: seriös auftreten, hochwertig wirken, verkaufen,
            buchen, Community aufbauen oder Abläufe digitalisieren.
          </p>
        </div>

        <div className="webcube-selection-banner" aria-live="polite">
          <span>Aktive Richtung</span>
          <strong>{activeCubeTheme.title}</strong>
          <p>{activeCubeTheme.label} · {activeCubeTheme.tone}</p>
        </div>

        <div className="theme-grid" role="list" aria-label="Webseiten-Cube Richtungen auswählen">
          {cubeThemes.map((theme, index) => {
            const Icon = theme.icon;
            const isSelectedTheme = index === activeThemeIndex;
            return (
              <motion.button
                className={`theme-card theme-card-button ${isSelectedTheme ? "is-selected" : ""}`}
                key={theme.title}
                type="button"
                onClick={() => selectWebsiteDirection(index)}
                aria-pressed={isSelectedTheme}
                aria-label={`${theme.title} als Website-Richtung auswählen`}
                data-state={isSelectedTheme ? "AKTIV" : "CUBE FACE"}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.38, delay: index * 0.035 }}
              >
                <div className="theme-head">
                  <div className="theme-icon">
                    <Icon size={20} />
                  </div>
                  <span>{theme.tone}</span>
                </div>
                <div className="theme-title-stack">
                  <strong className="theme-title-label">{theme.label}</strong>
                  <h3 className="theme-title-main">{theme.title}</h3>
                </div>
                <p>{theme.text}</p>
              </motion.button>
            );
          })}
        </div>

        <aside className="webcube-active-panel" aria-label="Ausgewählte Webseiten-Richtung">
          <div>
            <span>Showcase-Welt</span>
            <strong>{activeCubeTheme.title}</strong>
          </div>
          <p>{activeCubeTheme.text}</p>
          <small>Diese Richtung wird als passende Showcase-Welt dargestellt.</small>
        </aside>
      </section>

      {/* =====================================================
          REFERENZEN / CASECUBE
          Auswahlbuttons, drehender CaseCube und Detailkarte.
          Inhalte/Bilder kommen aus "referenceCases".
          Styling: App.css -> "REFERENZEN / CASECUBE"
      ===================================================== */}
      <section id="referenzen" className="reference-section reference-case-section full-bleed-section">
        <div className="reference-copy">
          <span>Referenzen</span>
          <h2>CaseCube: echte Projektbasis statt leere Versprechen.</h2>
          <p>
            Der Referenzbereich zeigt nicht nur Namen, sondern echte Oberflächen:
            Websites, Systeme und Projektstände, die als sichtbare Case-Flächen
            im Portfolio-Cube funktionieren.
          </p>

          <div className="reference-case-tabs" aria-label="Referenz auswählen">
            {referenceCases.map((item, index) => (
              <button
                type="button"
                className={index === activeCaseIndex ? "active" : ""}
                key={item.title}
                onClick={() => setActiveCaseIndex(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
        </div>

        <div className="reference-showcase-panel">
          <div className="reference-cube-stage" aria-label="Animierter Referenz CaseCube">
            <div
              className="reference-case-cube"
              style={{ "--case-rotation": `rotateY(${-activeCaseIndex * 90}deg)` }}
            >
              {referenceCases.map((item, index) => (
                <figure className={`case-face case-face-${index}`} key={item.title}>
                  <img src={item.image} alt={`${item.title} Vorschau`} />
                  <figcaption>
                    <span>{item.short}</span>
                    <strong>{item.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <article className="reference-detail-card">
            <div className="reference-detail-kicker">
              <MonitorSmartphone size={17} />
              <span>{activeReference.type}</span>
            </div>
            <h3>{activeReference.title}</h3>
            <p>{activeReference.text}</p>

            <div className="reference-meta-row">
              {activeReference.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="reference-actions">
              <button type="button" onClick={() => openCasePreview(activeCaseIndex)}>
                Großansicht öffnen
              </button>
              {activeReference.url ? (
                <a href={activeReference.url} target="_blank" rel="noreferrer">
                  Live öffnen
                  <ExternalLink size={16} />
                </a>
              ) : (
                <button type="button" onClick={() => openCasePreview(activeCaseIndex)}>
                  Preview ansehen
                </button>
              )}
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          CASE VIEWER / GROSSANSICHT
          Overlay für Referenzbilder und Galerie-Pfeile.
          Bilder kommen aus referenceCases.gallery.
          Styling: App.css -> "CASE VIEWER / MODAL"
      ===================================================== */}
      {previewReference && (
        <div className="case-preview-overlay" role="dialog" aria-modal="true" aria-label={`${previewReference.title} Großansicht`}>
          <button
            className="case-preview-backdrop"
            type="button"
            aria-label="Vorschau schließen"
            onClick={closeCasePreview}
          />
          <article className="case-preview-modal">
            <div className="case-preview-head">
              <div>
                <span>{previewReference.status}</span>
                <h3>{previewReference.title}</h3>
                <p>{previewReference.type}</p>
              </div>
              <button
                className="case-preview-close"
                type="button"
                aria-label="Vorschau schließen"
                onClick={closeCasePreview}
              >
                ×
              </button>
            </div>

            <div className="case-preview-image-wrap">
              <img src={previewImage} alt={`${previewReference.title} große Vorschau`} />

              {previewImages.length > 1 && (
                <>
                  <button
                    className="case-preview-arrow case-preview-arrow-left"
                    type="button"
                    aria-label="Vorheriges Bild anzeigen"
                    onClick={showPreviousPreviewImage}
                  >
                    ‹
                  </button>
                  <button
                    className="case-preview-arrow case-preview-arrow-right"
                    type="button"
                    aria-label="Nächstes Bild anzeigen"
                    onClick={showNextPreviewImage}
                  >
                    ›
                  </button>

                  <div className="case-preview-counter">
                    {String(previewImageIndex + 1).padStart(2, "0")} / {String(previewImages.length).padStart(2, "0")}
                  </div>

                  

                </>
              )}
            </div>

            <div className="case-preview-footer">
              <p>{previewReference.text}</p>
              <div className="reference-meta-row">
                {previewReference.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="reference-actions">
                {previewReference.url ? (
                  <a href={previewReference.url} target="_blank" rel="noreferrer">
                    Live öffnen
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button type="button" disabled>
                    Kein Live-Link verfügbar
                  </button>
                )}
              </div>
            </div>
          </article>
        </div>
      )}

      {/* =====================================================
          ABLAUF / BUILDER VISUAL
          Linke Step-Karten kommen aus "steps".
          Rechtes Builder-Visual zeigt Idee -> Projekt -> Engine.
          Styling: App.css -> "ABLAUF / BUILDER VISUAL"
      ===================================================== */}
      <section id="ablauf" className="section-block compact flow-section final-flow-section full-bleed-section">
        <div className="section-heading wide-heading flow-heading">
          <span>Ablauf</span>
          <h2>Vom ersten Gespräch bis zur fertigen Engine.</h2>
          <p>
            Der Erstkontakt ist kostenlos. Danach wird Schritt für Schritt
            geklärt, was gebraucht wird und welche Lösung wirklich Sinn macht.
          </p>
        </div>

        <div className="final-flow-layout">
          <div className="final-flow-rail" aria-label="Projektablauf">
            {steps.map((step, index) => (
              <motion.article
                className="step-item final-step-card"
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.34, delay: index * 0.035 }}
              >
                <div className="final-step-number">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <small>{step.tag}</small>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="flow-summary-card" aria-label="CoreEngineStudio Ablauf-Zusammenfassung">
            <div className="builder-visual chaos-builder-visual" aria-hidden="true">
              <div className="chaos-stack">
                <div className="builder-chip chip-idea">
                  <small>01</small>
                  <span>Idee</span>
                </div>
                <div className="builder-chip chip-goal">
                  <small>02</small>
                  <span>Ziel</span>
                </div>
                <div className="builder-chip chip-design">
                  <small>03</small>
                  <span>Design</span>
                </div>
                <div className="builder-chip chip-data">
                  <small>04</small>
                  <span>Daten</span>
                </div>
              </div>

              <div className="builder-merge-lines">
                <i className="merge-line merge-top" />
                <i className="merge-line merge-mid" />
                <i className="merge-line merge-bottom" />
                <i className="merge-line merge-out" />
              </div>

              <div className="builder-chip chip-project merge-project-chip">
                <small>05</small>
                <span>Projekt</span>
              </div>

              <div className="builder-sort-beam">
                <span>Sortierung</span>
              </div>

              <div className="builder-output chaos-output">
                <div className="builder-output-top">
                  <span />
                  <span />
                  <span />
                </div>
                <strong>Engine</strong>
                <p>Struktur · Oberfläche · Ablauf</p>
                <div className="builder-output-bars">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="builder-status">
                <span>Analyse</span>
                <strong>Aus losen Ideen wird ein klarer Ablauf</strong>
              </div>
            </div>

            <div className="flow-summary-content">
              <span>Keine starre Baukastenlösung</span>
              <h3>Erst verstehen, dann bauen.</h3>
              <p>
                Jedes Projekt bekommt eine passende Richtung: vom einfachen
                Auftritt bis zur smarten Engine mit Formularen, Datenbank,
                Statuslogik oder Portal.
              </p>

              <div className="flow-summary-points">
                <span>
                  <CheckCircle size={14} />
                  kostenloser Erstkontakt
                </span>
                <span>
                  <CheckCircle size={14} />
                  klarer Ablauf
                </span>
                <span>
                  <CheckCircle size={14} />
                  erweiterbar nach Bedarf
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          KONTAKT / PROJEKTANFRAGE
          Abschluss-CTA, E-Mail-Link und Kontakt-Hinweise.
          Styling: App.css -> "KONTAKT / PROJEKTANFRAGE"
      ===================================================== */}
      <section id="kontakt" className="contact-section final-contact-section full-bleed-section">
                  {projectRequestContext && (
            <div className="project-request-context-card" role="status" aria-live="polite">
              <span>Projektstart übernommen</span>
              <strong>{projectRequestContext.note}</strong>
              <p>
                Ausgangspunkt: <b>{projectRequestContext.title}</b>
                {projectRequestContext.type ? ` · ${projectRequestContext.type}` : ""}
              </p>
              <small>{projectRequestContext.route?.join(" / ")}</small>
              <div className="project-request-context-actions">
                <a
                  href={`mailto:${PUBLIC_CONTACT_EMAIL}?subject=${encodeURIComponent(projectRequestContext.subject || "Projektanfrage CoreEngineStudio")}&body=${encodeURIComponent(projectRequestContext.body || "")}`}
                >
                  Anfrage per E-Mail starten
                  <ArrowRight size={14} />
                </a>
                <button type="button" onClick={() => setProjectRequestContext(null)}>
                  Zurücksetzen
                </button>
              </div>
            </div>
          )}

<div className="contact-copy">
          <span>Projektstart</span>
          <h2>Lass uns dein Projekt sauber einordnen.</h2>
          <p>
            Der Projektstart-Assistent sammelt die wichtigsten Eckpunkte und
            bereitet daraus eine klare Anfrage vor. Der Erstkontakt bleibt
            kostenlos und unverbindlich.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-card-head">
            <div className="contact-mail-icon">
              <Mail size={21} />
            </div>
            <div>
              <small>Projektstart & Kontakt</small>
              <strong>CoreEngineStudio</strong>
            </div>
          </div>

          <a className="contact-mail-link" href={PROJECT_START_PATH}>
            Kostenfreien Projektstart öffnen
            <ArrowRight size={17} />
          </a>

          <a className="contact-mail-link contact-mail-link-secondary" href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>
            {PUBLIC_CONTACT_EMAIL}
            <ArrowRight size={17} />
          </a>

          <div className="contact-card-grid contact-card-grid-polished">
            <span>
              <Calendar size={14} />
              Erstkontakt kostenlos
            </span>
            <span>
              <Rocket size={14} />
              Projektstart nach Absprache
            </span>
            <span>
              <Workflow size={14} />
              Website + System denkbar
            </span>
            <span>
              <CheckCircle size={14} />
              klarer Ablauf
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          Branding, Claim und sichtbare Build-Kennung.
          Styling: App.css -> "FOOTER"
      ===================================================== */}
      <SiteFooter currentPath={PUBLIC_SITE_DOMAIN} />
    </main>
  );
}

function App() {
  const normalizedPath = typeof window !== "undefined"
    ? window.location.pathname.replace(/\/$/, "") || "/"
    : "/";

  if (normalizedPath === PROJECT_START_PATH) {
    return <ProjectStartPage />;
  }

  if (normalizedPath === LEGAL_IMPRESSUM_PATH) {
    return <ImpressumPage />;
  }

  if (normalizedPath === LEGAL_PRIVACY_PATH) {
    return <DatenschutzPage />;
  }

  return <LandingPage />;
}

export default App;
