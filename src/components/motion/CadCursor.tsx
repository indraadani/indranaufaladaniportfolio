import { useEffect, useRef, useState } from "react";

/**
 * Minimal CAD reticle cursor.
 * - No React state for position, no smoothing, no full-viewport rules.
 * - Single passive mousemove -> ref, one rAF loop writing transform only.
 * - Coordinate origin is bottom-left (CAD convention).
 */
export function CadCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const check = () =>
      setEnabled(
        window.matchMedia("(pointer: fine)").matches &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
          window.innerWidth >= 1280,
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const el = useRef<HTMLDivElement | null>(null);
  const readout = useRef<HTMLSpanElement | null>(null);
  const pos = useRef({ x: -100, y: -100 });
  const last = useRef({ x: NaN, y: NaN });
  const vh = useRef(0);
  const vw = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cad-cursor");
    vh.current = window.innerHeight;
    vw.current = window.innerWidth;

    let raf = 0;
    let lastText = 0;

    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      const { x, y } = pos.current;
      if (x === last.current.x && y === last.current.y) return;
      last.current.x = x;
      last.current.y = y;
      const node = el.current;
      if (node) {
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        node.classList.toggle("is-flip", x > vw.current - 120);
      }
      if (readout.current && t - lastText >= 100) {
        lastText = t;
        readout.current.textContent = `X ${Math.round(x)}  Y ${Math.round(vh.current - y)}`;
      }
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      el.current?.classList.remove("is-on");
    };

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      el.current?.classList.add("is-on");
      start();
    };
    const onResize = () => {
      vh.current = window.innerHeight;
      vw.current = window.innerWidth;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", stop);
    window.addEventListener("resize", onResize);
    start();

    return () => {
      document.documentElement.classList.remove("has-cad-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", stop);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={el} className="cad-cursor" aria-hidden="true">
      <span className="cad-box" />
      <span className="cad-plus-h" />
      <span className="cad-plus-v" />
      <span ref={readout} className="cad-readout" />
    </div>
  );
}
