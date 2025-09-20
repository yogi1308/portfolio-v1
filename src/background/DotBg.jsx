import { useRef, useEffect } from "react";

export default function DotBackground({
  spacing = 20,
  dotSize = 2,
  dotColor = "#333333",
  influenceRadius = 160,
  strength = 0.18,
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const container = canvas.parentElement;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;

      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildPoints();
    };

    const buildPoints = () => {
      pointsRef.current = [];
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let y = 0; y <= rows; y++) {
  for (let x = 0; x <= cols; x++) {
    const px = x * spacing;
    const py = y * spacing;
    if (px <= width && py <= height) {
      pointsRef.current.push({
        x: px,
        y: py,
        ox: px,
        oy: py,
        vx: 0,
        vy: 0,
        jitter: (Math.random() - 0.5) * 0.6,
      });
    }
  }
}

    };

    const dsq = (ax, ay, bx, by) => {
      const dx = ax - bx;
      const dy = ay - by;
      return dx * dx + dy * dy;
    };

    const tick = () => {
      const pts = pointsRef.current;
      if (!pts.length) return;

      ctx.clearRect(0, 0, width, height);

      const ir2 = influenceRadius * influenceRadius;
      for (let k = 0; k < pts.length; k++) {
        const p = pts[k];

        // spring back
        const ax = (p.ox - p.x) * 0.02;
        const ay = (p.oy - p.y) * 0.02;

        // sink into cursor
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        // Only apply cursor attraction when the pointer is actually inside the canvas bounds.
        if (mx >= 0 && mx <= width && my >= 0 && my <= height) {
          const dist2 = dsq(p.x, p.y, mx, my);
          if (dist2 < ir2) {
            const dist = Math.sqrt(dist2) || 0.0001;
            const nx = (mx - p.x) / dist;
            const ny = (my - p.y) / dist;
            const falloff = 1 - dist / influenceRadius;
            const force = strength * falloff;
            p.vx += nx * force * (1 + p.jitter);
            p.vy += ny * force * (1 + p.jitter);
          }
        }

        // random jitter
        const rnd = (Math.random() - 0.5) * 0.05;
        p.vx += ax + rnd;
        p.vy += ay + rnd;

        // damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;
      }

      // draw dotsa
      ctx.fillStyle = dotColor;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        if (p.x < 0 || p.y < 0 || p.x > width || p.y > height) continue;

        // Normalize coordinates to a [0, 1] range.
        const nx = p.x / width;
        const ny = p.y / height;

        // Use a sine curve for a smooth fade from the horizontal edges.
        const fadeX = Math.sin(nx * Math.PI);

        // Apply a power to `ny` to make the fade stronger at the bottom,
        // shifting the "brightest" area upwards.
        const fadeY = Math.sin(Math.pow(ny, 0.7) * Math.PI);

        // Multiply the fades. If a point is at any edge, the result is 0.
        const fade = fadeX * fadeY;
        
        // Apply a final easing power curve for a more dramatic falloff.
        ctx.globalAlpha = Math.pow(fade, 1.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // reset alpha
      ctx.globalAlpha = 1;

      animRef.current = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const rawX = (e.clientX ?? e.touches?.[0]?.clientX ?? -9999);
      const rawY = (e.clientY ?? e.touches?.[0]?.clientY ?? -9999);
      const x = rawX - rect.left;
      const y = rawY - rect.top;

      // If the pointer is outside the canvas bounds, ignore it.
      // This prevents distant/offscreen points from being pulled into view.
      if (x < 0 || x > width || y < 0 || y > height) {
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
      } else {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      }
    };

    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    init();
    window.addEventListener("resize", init);
    container.addEventListener("mousemove", onMove, { passive: true });
    container.addEventListener("touchmove", onMove, { passive: true });
    container.addEventListener("mouseleave", onLeave);

    animRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", init);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("touchmove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [spacing, dotSize, dotColor, influenceRadius, strength]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      aria-hidden
    />
  );
}
