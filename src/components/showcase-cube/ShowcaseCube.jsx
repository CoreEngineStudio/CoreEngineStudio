// =====================================================
// SHOWCASE CUBE COMPONENT
// Datei: src/components/showcase-cube/ShowcaseCube.jsx
//
// Zuständig für:
// - 3D-CoreCube im Hero-/Showcase-Bereich
// - Würfelflächen
// - Übergabe von Texten pro Fläche
// - optionale Preview-Bilder pro Cube-Fläche
// - CES-BUILD-079: Hero- und Showroom-Cube können dieselben Demo-Faces teilen
// - Auswahl der Animationsklasse
//
// Wird genutzt in:
// src/App.jsx -> <ShowcaseCube ... />
//
// Typische Änderungen:
// - defaultFaces: Standardtexte auf den Flächen
// - size-Prop: Größe des Cubes
// - rotationMode: Animationsmodus
// - ShowcaseCube.css: Optik und Rotation
// =====================================================

import React from 'react';
import './ShowcaseCube.css';

// Standardflächen des Würfels.
const defaultFaces = [
  { key: 'front', label: 'Business Clean', eyebrow: 'Website', hint: 'klar · hell · seriös' },
  { key: 'right', label: 'Dark Premium', eyebrow: 'Brand', hint: 'edel · stark · modern' },
  { key: 'back', label: 'Shopflow', eyebrow: 'Commerce', hint: 'produkte · checkout · conversion' },
  { key: 'left', label: 'Booking / Rental', eyebrow: 'System', hint: 'kalender · anfragen · status' },
  { key: 'top', label: 'Smart Systems', eyebrow: 'Automation', hint: 'portale · daten · workflows' },
  { key: 'bottom', label: 'Gaming Matrix', eyebrow: 'Community', hint: 'server · team · live' },
];

// Hauptkomponente:
 // size: steuert Würfelgröße über CSS-Variable --cube-size
 // faces: überschreibt optional defaultFaces und kann previewImage enthalten
 // autoRotate: aktiviert/deaktiviert automatische Rotation
 // rotationMode: wählt CSS-Animationsmodus
 // className: erlaubt zusätzliche Klassen von außen
export default function ShowcaseCube({
  size = 320,
  faces = defaultFaces,
  autoRotate = true,
  rotationMode = 'tour',
  className = '',
}) {
  // Mischt Standardflächen mit optional übergebenen Faces.
  const normalizedFaces = defaultFaces.map((fallback, index) => ({
    ...fallback,
    ...(faces[index] || {}),
  }));

  // Bestimmt, welche CSS-Animationsklasse aktiv ist.
  const modeClass = rotationMode === 'orbit' ? 'is-orbiting' : 'is-touring';

  // Render:
  // Stage -> Glow/Schatten -> 3D-Würfel -> sechs Flächen.
  return (
    <section className={`showcase-cube-stage ${className}`} style={{ '--cube-size': `${size}px` }}>
      <div className="showcase-cube-glow" aria-hidden="true" />
      <div className="showcase-cube-shadow" aria-hidden="true" />

      <div className={`showcase-cube ${autoRotate ? modeClass : ''}`} aria-label="CoreCube Showcase Würfel mit sechs sichtbaren Seiten">
        {normalizedFaces.map((face) => (
          <article
            className={`showcase-cube-face showcase-cube-face--${face.key} ${face.previewImage ? 'has-preview-image' : ''}`}
            key={face.key}
          >
            {face.previewImage ? (
              <div className="face-preview-screen">
                <img src={face.previewImage} alt={face.previewAlt || ''} loading="lazy" />
                <div className="face-preview-overlay">
                  <p>{face.eyebrow}</p>
                  <h3>{face.label}</h3>
                  <small>{face.hint}</small>
                </div>
              </div>
            ) : (
              <div className="face-screen">
                <div className="face-topbar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="face-hero">
                  <div className="face-orb" />
                  <div>
                    <p>{face.eyebrow}</p>
                    <h3>{face.label}</h3>
                  </div>
                </div>

                <div className="face-layout">
                  <span className="wide" />
                  <span />
                  <span />
                  <span className="wide" />
                </div>

                <small>{face.hint}</small>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
