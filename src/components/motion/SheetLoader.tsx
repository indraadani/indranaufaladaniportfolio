import { useEffect, useState } from "react";

let shown = false; // in-memory flag: never repeat during the session

/** Blueprint "sheet loading" screen — first visit only, max 1200ms. */
export function SheetLoader() {
  const [active, setActive] = useState(() => !shown);
  const [wipe, setWipe] = useState(false);

  useEffect(() => {
    if (!active) return;
    shown = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(false);
      return;
    }
    const t1 = window.setTimeout(() => setWipe(true), 950);
    const t2 = window.setTimeout(() => setActive(false), 1200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className={`sheet-loader${wipe ? " is-wipe" : ""}`} aria-hidden="true">
      <div className="sheet-loader-inner">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[color:var(--concrete)]">
          Loading Portofolio Indra Naufal Adani
        </div>
        <div className="sheet-loader-bar">
          <span className="sheet-loader-fill" />
          {Array.from({ length: 11 }).map((_, i) => (
            <span key={i} className="sheet-loader-tick" style={{ left: `${i * 10}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
