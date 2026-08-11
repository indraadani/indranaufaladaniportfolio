import { useEffect, useRef, useState } from "react";
import { useFinePointer, useReducedMotion } from "./Reveal";

/**
 * CAD-style crosshair cursor: full-width/height thin rules + reticle + XY readout.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function CadCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  const wrap = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [big, setBig] = useState(false);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const readout = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cad-cursor");

    const onMove = (e: globalThis.MouseEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
      setVisible(true);
      const t = (e.target as HTMLElement)?.closest("a,button,[role='button']") as HTMLElement | null;
      if (t) {
        setBig(true);
        setLabel((t.getAttribute("aria-label") || t.innerText || "").trim().slice(0, 28).toUpperCase() || null);
      } else {
        setBig(false);
        setLabel(null);
      }
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.12;
      p.y += (p.ty - p.y) * 0.12;
      const el = wrap.current;
      if (el) el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      if (readout.current) {
        readout.current.textContent = label ?? `X ${Math.round(p.tx)}  Y ${Math.round(p.ty)}`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-cad-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled, label]);

  if (!enabled) return null;

  return (
    <div className={`cad-cursor${visible ? " is-on" : ""}`} aria-hidden="true">
      <div ref={wrap} className="cad-cursor-follow">
        <span className="cad-rule-h" />
        <span className="cad-rule-v" />
        <span className={`cad-reticle${big ? " is-big" : ""}`} />
        <span ref={readout} className="cad-readout" />
      </div>
    </div>
  );
}
