import { useEffect, useRef, useState, type ReactNode } from "react";

/** Vertical connector drawn progressively (stroke-dashoffset) with scroll progress. */
export function TimelineTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = r.height + vh * 0.4;
        const done = vh * 0.8 - r.top;
        setP(Math.min(1, Math.max(0, done / total)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <svg
        className="mo-timeline-svg"
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset={1 - p}
        />
      </svg>
      {children}
    </div>
  );
}
