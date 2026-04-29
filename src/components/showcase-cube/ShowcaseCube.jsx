import React from 'react';
import './ShowcaseCube.css';

const defaultFaces = [
  { key: 'front', label: 'Business Clean', eyebrow: 'Website', hint: 'klar · hell · seriös' },
  { key: 'right', label: 'Dark Premium', eyebrow: 'Brand', hint: 'edel · stark · modern' },
  { key: 'back', label: 'Shopflow', eyebrow: 'Commerce', hint: 'produkte · checkout · conversion' },
  { key: 'left', label: 'Booking / Rental', eyebrow: 'System', hint: 'kalender · anfragen · status' },
  { key: 'top', label: 'Smart Systems', eyebrow: 'Automation', hint: 'portale · daten · workflows' },
  { key: 'bottom', label: 'Gaming Matrix', eyebrow: 'Community', hint: 'server · team · live' },
];

export default function ShowcaseCube({
  size = 320,
  faces = defaultFaces,
  autoRotate = true,
  rotationMode = 'tour',
  className = '',
}) {
  const normalizedFaces = defaultFaces.map((fallback, index) => ({
    ...fallback,
    ...(faces[index] || {}),
  }));

  const modeClass = rotationMode === 'orbit' ? 'is-orbiting' : 'is-touring';

  return (
    <section className={`showcase-cube-stage ${className}`} style={{ '--cube-size': `${size}px` }}>
      <div className="showcase-cube-glow" aria-hidden="true" />
      <div className="showcase-cube-shadow" aria-hidden="true" />

      <div className={`showcase-cube ${autoRotate ? modeClass : ''}`} aria-label="CoreCube Showcase Würfel mit sechs sichtbaren Seiten">
        {normalizedFaces.map((face) => (
          <article className={`showcase-cube-face showcase-cube-face--${face.key}`} key={face.key}>
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
          </article>
        ))}
      </div>
    </section>
  );
}
