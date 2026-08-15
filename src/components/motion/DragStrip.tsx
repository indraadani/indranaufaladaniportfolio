import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

/**
 * Horizontal strip with drag-to-scroll + inertia and a dimension-line
 * progress indicator (two end ticks + filled segment).
 */
export function DragStrip({
  children,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0, lastX: 0, lastT: 0, v: 0 });
  const raf = useRef<number | null>(null);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [update]);

  const glide = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const step = () => {
      drag.current.v *= 0.94;
      el.scrollLeft -= drag.current.v;
      if (Math.abs(drag.current.v) > 0.4) {
        raf.current = requestAnimationFrame(step);
      }
    };
    raf.current = requestAnimationFrame(step);
  }, []);

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.pointerType === "touch") return; // native touch scrolling already has momentum
    const el = ref.current;
    if (!el) return;
    if (raf.current) cancelAnimationFrame(raf.current);
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
    };

  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved) {
      if (Math.abs(dx) < 5) return; // let clicks through for small movements
      drag.current.moved = true;
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
      el.classList.add("is-dragging");
    }
    el.scrollLeft = drag.current.startScroll - dx;
    const now = performance.now();
    const dt = now - drag.current.lastT || 16;
    drag.current.v = ((e.clientX - drag.current.lastX) / dt) * 16;
    drag.current.lastX = e.clientX;
    drag.current.lastT = now;
  };

  const endDrag = (e: ReactPointerEvent) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    drag.current.active = false;
    el.classList.remove("is-dragging");
    if (!drag.current.moved) {
      drag.current.v = 0;
    }
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    if (drag.current.moved && Math.abs(drag.current.v) > 1) glide();
  };

  return (
    <div className={className}>
      <div
        ref={ref}
        className={`mo-strip ${innerClassName}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {children}
      </div>
      <div className="mo-dimline" aria-hidden="true">
        <span className="mo-dimline-tick" />
        <span className="mo-dimline-track">
          <span className="mo-dimline-fill" style={{ transform: `scaleX(${Math.max(progress, 0.06)})` }} />
        </span>
        <span className="mo-dimline-tick" />
      </div>
    </div>
  );
}
