import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFinePointer, useReducedMotion } from "./Reveal";

/**
 * 3D pointer tilt (max 8deg, spring-eased) with dimension lines revealed on hover.
 * Touch devices get a slow 6s float instead.
 */
export function TiltPortrait({ children }: { children: ReactNode }) {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const target = useRef({ rx: 0, ry: 0 });
  const cur = useRef({ rx: 0, ry: 0, vx: 0, vy: 0 });

  const tilt = fine && !reduced;

  useEffect(() => {
    if (!tilt) return;
    let raf = 0;
    const stiffness = 150;
    const damping = 20;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const c = cur.current;
      const t = target.current;
      (["x", "y"] as const).forEach((axis) => {
        const key = axis === "x" ? "rx" : "ry";
        const vkey = axis === "x" ? "vx" : "vy";
        const a = stiffness * (t[key] - c[key]) - damping * c[vkey];
        c[vkey] += a * dt;
        c[key] += c[vkey] * dt;
      });
      if (inner.current) {
        inner.current.style.transform = `perspective(1000px) rotateX(${c.rx.toFixed(3)}deg) rotateY(${c.ry.toFixed(3)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [tilt]);

  return (
    <div
      ref={ref}
      className={`mo-tilt${tilt ? "" : " mo-float"}${hover ? " is-hover" : ""}`}
      onPointerMove={(e) => {
        if (!tilt || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        target.current = { rx: -py * 16, ry: px * 16 };
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => {
        setHover(false);
        target.current = { rx: 0, ry: 0 };
      }}
    >
      <div ref={inner} className="mo-tilt-inner">
        {children}
        <svg className="mo-dims" viewBox="0 0 100 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M4 6 L4 114 M1 6 L7 6 M1 114 L7 114" />
          <path d="M6 117 L96 117 M6 114 L6 120 M96 114 L96 120" />
        </svg>
        <span className="mo-dims-label mo-dims-label-y" aria-hidden="true">H — 1:1</span>
        <span className="mo-dims-label mo-dims-label-x" aria-hidden="true">W — SCALE 1:1</span>
      </div>
    </div>
  );
}
