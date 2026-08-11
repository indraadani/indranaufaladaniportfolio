import { useInView } from "./Reveal";

/** Date range with a per-character flip-in. */
export function CharFlip({ text, className = "" }: { text: string; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  return (
    <span ref={ref} className={`mo-flip${inView ? " is-in" : ""} ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="mo-flip-ch"
          style={{ ["--mo-delay" as string]: `${Math.min(i, 14) * 30}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/** Heading revealed word by word with a clip-path wipe. */
export function WordWipe({
  text,
  className = "",
  stagger = 80,
  auto = false,
}: {
  text: string;
  className?: string;
  stagger?: number;
  auto?: boolean;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const on = auto || inView;
  return (
    <span ref={ref} className={`mo-words${on ? " is-in" : ""} ${className}`}>
      <span className="sr-only">{text}</span>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden="true" className="mo-word">
          <span className="mo-word-in" style={{ ["--mo-delay" as string]: `${i * stagger}ms` }}>
            {w}
          </span>{" "}
        </span>
      ))}
    </span>
  );
}
