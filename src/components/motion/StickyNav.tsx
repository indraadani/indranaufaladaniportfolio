import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type NavItem = { id: string; label: string };

/**
 * Sticky section nav: shrinks past 80px, gains blur + a bottom rule that draws
 * left-to-right, and a shared underline that slides between items.
 */
export function StickyNav({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement | null>(null);
  const [bar, setBar] = useState({ x: 0, w: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const move = () => {
      const el = list.querySelector<HTMLElement>(`[data-nav="${active}"]`);
      if (!el) return;
      setBar({ x: el.offsetLeft, w: el.offsetWidth });
    };
    move();
    window.addEventListener("resize", move);
    return () => window.removeEventListener("resize", move);
  }, [active, scrolled]);

  return (
    <div className={`mo-nav${scrolled ? " is-scrolled" : ""}`}>
      <nav aria-label="Section shortcuts" className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <ul
          ref={listRef}
          className="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]"
        >
          {items.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-nav={s.id}
                aria-current={active === s.id ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(s.id);
                  onNavigate(s.id);
                }}
                className={`mo-nav-link inline-flex items-center py-1 uppercase transition-colors duration-200 hover:text-[color:var(--amber-brand)] ${
                  active === s.id ? "text-[color:var(--amber-brand)]" : ""
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
          <span
            aria-hidden="true"
            className="mo-nav-underline"
            style={{ transform: `translateX(${bar.x}px) scaleX(${bar.w || 1})` }}
          />
        </ul>
      </nav>
      <span aria-hidden="true" className="mo-nav-rule" />
    </div>
  );
}
