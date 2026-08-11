import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "draw" | "none";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  /** delay in ms — cap staggers at 6 siblings, then batch */
  delay?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "p" | "article" | "tr";
  style?: CSSProperties;
};

/**
 * Scroll reveal primitive. Animates transform + opacity only.
 * Respects prefers-reduced-motion via CSS (see styles.css).
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  once = true,
  as = "div",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.willChange = "transform, opacity";
            setInView(true);
            window.setTimeout(() => {
              el.style.willChange = "";
            }, 1200);
            if (once) io.unobserve(el);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const Tag = as as ElementType;

  return (
    <Tag

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`mo mo-${variant}${inView ? " is-in" : ""} ${className}`}
      style={{ ["--mo-delay" as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/** Reveal that also exposes the in-view state to children via a class hook. */
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return { ref, inView };
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    const on = () => setFine(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return fine;
}
