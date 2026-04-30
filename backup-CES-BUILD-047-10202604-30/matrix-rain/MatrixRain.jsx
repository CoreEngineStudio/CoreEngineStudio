import { useEffect, useRef } from "react";
import "./MatrixRain.css";

const SYMBOLS = "011010110101COREENGINESTUDIO<>/{}[]#$%&";

const TONE_COLORS = {
  green: [118, 255, 22],
  cyan: [65, 217, 255],
  purple: [176, 92, 255],
  red: [255, 69, 58],
};

function lerpColor(current, target, strength) {
  return [
    current[0] + (target[0] - current[0]) * strength,
    current[1] + (target[1] - current[1]) * strength,
    current[2] + (target[2] - current[2]) * strength,
  ];
}

function MatrixRain({ tone = "green" }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const targetColorRef = useRef(TONE_COLORS[tone] || TONE_COLORS.green);
  const currentColorRef = useRef(TONE_COLORS[tone] || TONE_COLORS.green);

  useEffect(() => {
    targetColorRef.current = TONE_COLORS[tone] || TONE_COLORS.green;
  }, [tone]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reducedMotion) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops = [];
    let lastFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = width < 760 ? 17 : 19;
      const nextColumns = Math.ceil(width / fontSize);

      // Preserve existing drop positions where possible so resizing also feels less abrupt.
      drops = Array.from({ length: nextColumns }, (_, index) => {
        return drops[index] ?? Math.random() * -height;
      });

      columns = nextColumns;
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
    };

    const draw = (time) => {
      animationRef.current = requestAnimationFrame(draw);

      // Premium, ruhig und leichter: ca. 30 FPS.
      if (time - lastFrame < 33) return;
      lastFrame = time;

      currentColorRef.current = lerpColor(
        currentColorRef.current,
        targetColorRef.current,
        0.035
      );

      const [r, g, b] = currentColorRef.current;

      // Kein kompletter Reset beim Farbwechsel. Der bestehende Regen läuft weiter
      // und wird nur sanft überblendet.
      ctx.fillStyle = "rgba(2, 4, 2, 0.145)";
      ctx.fillRect(0, 0, width, height);

      const fontSize = width < 760 ? 17 : 19;
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;

      for (let i = 0; i < columns; i += 1) {
        const char = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const heroBias = x > width * 0.52 ? 0.72 : 0.32;
        ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${heroBias})`;
        ctx.fillText(char, x, y);

        if (y > height + Math.random() * 10000) {
          drops[i] = Math.random() * -30;
        }

        drops[i] += width < 760 ? 0.72 : 0.58;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas className="matrix-rain-canvas" ref={canvasRef} aria-hidden="true" />;
}

export default MatrixRain;
