import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "../components/motion/Reveal";
import { DragStrip } from "../components/motion/DragStrip";
import { StickyNav } from "../components/motion/StickyNav";
import { TiltPortrait } from "../components/motion/TiltPortrait";
import { TimelineTrack } from "../components/motion/TimelineTrack";
import { CadCursor } from "../components/motion/CadCursor";
import { SheetLoader } from "../components/motion/SheetLoader";
import { CharFlip, WordWipe } from "../components/motion/Text";
import { Mail, MessageCircle, Linkedin, Instagram, Music2 } from "lucide-react";
import cvFile from "../assets/cv.pdf.asset.json";
import portraitCutout from "../assets/indra-cutout.png.asset.json";
import puli1 from "../assets/proyek/puli-1.jpg.asset.json";
import puli2 from "../assets/proyek/puli-2.png.asset.json";
import he1 from "../assets/proyek/he-1.png.asset.json";
import tppi1 from "../assets/tppi/tppi-1.jpg.asset.json";
import tppi2 from "../assets/tppi/tppi-2.jpg.asset.json";
import tppi3 from "../assets/tppi/tppi-3.jpg.asset.json";
import tppi6 from "../assets/tppi/tppi-6.jpg.asset.json";
import tppi8 from "../assets/tppi/tppi-8.jpg.asset.json";
import tppi9 from "../assets/tppi/tppi-9.jpg.asset.json";
import tppi10 from "../assets/tppi/tppi-10.jpg.asset.json";
import ppsdm2 from "../assets/ppsdm/ppsdm-2.jpg.asset.json";
import ppsdm4 from "../assets/ppsdm/ppsdm-4.jpg.asset.json";
import ppsdm5 from "../assets/ppsdm/ppsdm-5.jpg.asset.json";
import ppsdm7 from "../assets/ppsdm/ppsdm-7.jpg.asset.json";
import ppsdm8 from "../assets/ppsdm/ppsdm-8.png.asset.json";
import ppsdm9 from "../assets/ppsdm/ppsdm-9.jpg.asset.json";
import robutech1 from "../assets/robutech/robutech-1.jpg.asset.json";
import robutech2 from "../assets/robutech/robutech-2.jpg.asset.json";
import robutech3 from "../assets/robutech/robutech-3.jpg.asset.json";
import robutech4 from "../assets/robutech/robutech-4.jpg.asset.json";
import robutech5 from "../assets/robutech/robutech-5.jpg.asset.json";
import robutech6 from "../assets/robutech/robutech-6.jpg.asset.json";
import robutech7 from "../assets/robutech/robutech-7.jpg.asset.json";
import robutech8 from "../assets/robutech/robutech-8.jpg.asset.json";
import robutech9 from "../assets/robutech/robutech-9.jpg.asset.json";
import kedaireka1 from "../assets/kedaireka/kedaireka-1.mp4.asset.json";
import kedairekaPoster1 from "../assets/kedaireka/kedaireka-1-poster.jpg.asset.json";
import kedairekaPoster2 from "../assets/kedaireka/kedaireka-2-poster.jpg.asset.json";
import kedairekaPoster3 from "../assets/kedaireka/kedaireka-3-poster.jpg.asset.json";
import kedaireka2 from "../assets/kedaireka/kedaireka-2.mp4.asset.json";
import kedaireka3 from "../assets/kedaireka/kedaireka-3.mp4.asset.json";
import kedaireka4 from "../assets/kedaireka/kedaireka-4.jpg.asset.json";
import kedaireka5 from "../assets/kedaireka/kedaireka-5.jpg.asset.json";
import kedaireka6 from "../assets/kedaireka/kedaireka-6.jpg.asset.json";
import kedaireka7 from "../assets/kedaireka/kedaireka-7.png.asset.json";
import kedaireka8 from "../assets/kedaireka/kedaireka-8.jpg.asset.json";
import cadfem1 from "../assets/cadfem/cadfem-1.png.asset.json";
import cadfem2 from "../assets/cadfem/cadfem-2.png.asset.json";
import cadfem3 from "../assets/cadfem/cadfem-3.png.asset.json";
import cadfem4 from "../assets/cadfem/cadfem-4.png.asset.json";
import cadfem5 from "../assets/cadfem/cadfem-5.png.asset.json";
import cadfem6 from "../assets/cadfem/cadfem-6.png.asset.json";
import cadfem7 from "../assets/cadfem/cadfem-7.png.asset.json";
import cadfem8 from "../assets/cadfem/cadfem-8.png.asset.json";
import briketVideo from "../assets/briket/briket.mp4.asset.json";
import briketPoster from "../assets/briket/briket-poster.jpg.asset.json";
import cert1 from "../assets/sertifikat/cert-1.jpg.asset.json";
import cert2 from "../assets/sertifikat/cert-2.jpg.asset.json";
import cert4 from "../assets/sertifikat/cert-4.jpg.asset.json";
import cert5 from "../assets/sertifikat/cert-5.jpg.asset.json";
import cert6 from "../assets/sertifikat/cert-6.jpg.asset.json";
import cert7 from "../assets/sertifikat/cert-7.jpg.asset.json";
import cert8 from "../assets/sertifikat/cert-8.jpg.asset.json";
import cert9 from "../assets/sertifikat/cert-9.jpg.asset.json";
import certTep from "../assets/sertifikat/cert-tep.png.asset.json";
import certMekanik from "../assets/sertifikat/cert-mekanik.png.asset.json";
import certPengmas from "../assets/sertifikat/cert-pengmas.png.asset.json";
import certBonding from "../assets/sertifikat/cert-bonding.png.asset.json";
import certLeadership from "../assets/sertifikat/cert-leadership.png.asset.json";
import certSeminar from "../assets/sertifikat/cert-seminar.png.asset.json";
import certWelcome from "../assets/sertifikat/cert-welcome.png.asset.json";
import act1 from "../assets/aktivitas/act-1.jpg.asset.json";
import act2 from "../assets/aktivitas/act-2.jpg.asset.json";
import act3 from "../assets/aktivitas/act-3.jpg.asset.json";
import act4 from "../assets/aktivitas/act-4.jpg.asset.json";
import act5 from "../assets/aktivitas/act-5.jpg.asset.json";
import act6 from "../assets/aktivitas/act-6.jpg.asset.json";
import act7 from "../assets/aktivitas/act-7.jpg.asset.json";
import act8 from "../assets/aktivitas/act-8.jpg.asset.json";
import act9 from "../assets/aktivitas/act-9.jpg.asset.json";
import act10 from "../assets/aktivitas/act-10.jpg.asset.json";
import act11 from "../assets/aktivitas/act-11.jpg.asset.json";
import act12 from "../assets/aktivitas/act-12.jpg.asset.json";
import act13 from "../assets/aktivitas/act-13.jpg.asset.json";
import act14 from "../assets/aktivitas/act-14.jpg.asset.json";
import act15 from "../assets/aktivitas/act-15.jpg.asset.json";
import act16 from "../assets/aktivitas/act-16.jpg.asset.json";
import act17 from "../assets/aktivitas/act-17.jpg.asset.json";
import act18 from "../assets/aktivitas/act-18.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Indra Naufal Adani — Mechanical Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Indra Naufal Adani, mechanical engineer specializing in energy conversion, FEA simulation, and industrial inspection.",
      },
      { property: "og:title", content: "Indra Naufal Adani — Mechanical Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, experience, and certifications in energy conversion, FEA simulation, and industrial inspection.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://indranaufaladaniportfolio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://indranaufaladaniportfolio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Indra Naufal Adani",
          jobTitle: "Mechanical Engineer",
          url: "https://indranaufaladaniportfolio.lovable.app/",
          email: "mailto:indraadani654@gmail.com",
          alumniOf: "Surabaya State University",
          sameAs: [
            "https://www.linkedin.com/in/indranaufaladani/",
            "https://instagram.com/indraadani_",
            "https://www.tiktok.com/@indraadani_",
          ],
        }),
      },
    ],
  }),
});


const CERT_DOCS = [
  { src: cert7.url, caption: "Sertifikat PT CADFEM Indonesia" },
  { src: cert9.url, caption: "Sertifikat PT TPPI" },
  { src: cert8.url, caption: "Sertifikat Studi Independen Kedaireka" },
  { src: cert1.url, caption: "AWS Course Completion Certificate" },
  { src: cert5.url, caption: "Sertifikat Indra Naufal Adani" },
  { src: cert2.url, caption: "Sertifikat Indra Naufal Adani" },
  { src: cert4.url, caption: "SK HMRTM 2023" },
  { src: cert6.url, caption: "Sertifikat PKKMB 2022" },
  { src: certTep.url, caption: "Test of English Proficiency (TEP) — Pusat Bahasa UNESA" },
  { src: certMekanik.url, caption: "Seleksi MSIB dr. Mekanik Academy 2024" },
  { src: certPengmas.url, caption: "Panitia Pengabdian Masyarakat FORMAT R 2024" },
  { src: certBonding.url, caption: "Panitia Bonding Camp FORMAT R 2023" },
  { src: certLeadership.url, caption: "Peserta Leadership Camp FORMAT R 2022" },
  { src: certSeminar.url, caption: "Seminar Nasional Perencanaan Mesin — Dentech Corporation 2024" },
  { src: certWelcome.url, caption: "Peserta Welcome Party FORMAT R 2022" },
];


const TPPI_PHOTOS = [
  { src: tppi1.url, caption: "TPPI — Refinery Column & Pipeline" },
  { src: tppi2.url, caption: "TPPI — Benzene Line Inspection" },
  { src: tppi3.url, caption: "TPPI — Heat Exchanger Tube Bundle" },
  { src: tppi6.url, caption: "TPPI — Rotating Equipment Maintenance" },
  { src: tppi8.url, caption: "TPPI — Crane Lifting Operation" },
  { src: tppi9.url, caption: "TPPI — Storage Tank Farm 6.580 m³" },
  { src: tppi10.url, caption: "TPPI — Preventive Maintenance Tools" },
];

const PPSDM_PHOTOS = [
  { src: ppsdm2.url, caption: "PPSDM Migas — Gedung PPSDM Migas Cepu" },
  { src: ppsdm4.url, caption: "PPSDM Migas — Pencatatan Data Operasi Kilang" },
  { src: ppsdm5.url, caption: "PPSDM Migas — Area Kilang PPSDM Migas" },
  { src: ppsdm7.url, caption: "PPSDM Migas — Kolom Distilasi Unit Pengolahan" },
  { src: ppsdm8.url, caption: "PPSDM Migas — Proses Pembelajaran Drilling Rig" },
  { src: ppsdm9.url, caption: "PPSDM Migas — Pengambilan Sampel untuk Pengecekan Harian" },
];

const ROBUTECH_PHOTOS = [
  { src: robutech5.url, caption: "Robutech — Radiography Testing Crawler & Survey Meter" },
  { src: robutech6.url, caption: "Robutech — Radiography Testing Persiapan Sumber" },
  { src: robutech7.url, caption: "Robutech — Ultrasonic Thickness Measurement" },
  { src: robutech1.url, caption: "Robutech — Turbine Hall Pembangkit Listrik" },
  { src: robutech2.url, caption: "Robutech — Inspeksi Ketinggian dengan Full Body Harness" },
  { src: robutech3.url, caption: "Robutech — Inspeksi Confined Space Area Boiler" },
  { src: robutech4.url, caption: "Robutech — Inspeksi di Jetty Conveyor" },
  { src: robutech8.url, caption: "Robutech — Penetrant Testing pada Sambungan Las" },
  { src: robutech9.url, caption: "Robutech — Area Coal Conveyor & Jetty" },
];

const KEDAIREKA_VIDEOS = [
  { src: kedaireka1.url, poster: kedairekaPoster1.url, type: "video" as const, caption: "Kedaireka — Proses Pembuatan Alat Produksi" },
  { src: kedaireka2.url, poster: kedairekaPoster2.url, type: "video" as const, caption: "Kedaireka — Uji Coba Kendaraan Listrik" },
  { src: kedaireka3.url, poster: kedairekaPoster3.url, type: "video" as const, caption: "Kedaireka — Riset Perancangan Kendaraan Listrik" },
  { src: kedaireka4.url, caption: "Kedaireka — Perakitan Wiring & Controller Kendaraan Listrik" },
  { src: kedaireka5.url, caption: "Kedaireka — Prototipe Mesin Produksi dengan Panel Kontrol" },
  { src: kedaireka6.url, caption: "Kedaireka — Desain Assembly Rangka Mesin Pencuci Empon-Empon (SolidWorks)" },
  { src: kedaireka7.url, caption: "Kedaireka — Pemodelan 3D Komponen Pipa Flanged (SolidWorks)" },
  { src: kedaireka8.url, caption: "Kedaireka — Pameran Multifunctional Electric Vehicle (MEV)" },
];

const CADFEM_IMAGES = [
  { src: cadfem1.url, caption: "CADFEM — Static Structural Setup Flanged Tee Valve" },
  { src: cadfem2.url, caption: "CADFEM — Directional Deformation & Tabular Data" },
  { src: cadfem3.url, caption: "CADFEM — Equivalent (von-Mises) Stress Propeller" },
  { src: cadfem4.url, caption: "CADFEM — Eigenvalue Buckling Analysis Beam" },
  { src: cadfem5.url, caption: "CADFEM — Large Deflection Static Structural" },
  { src: cadfem6.url, caption: "CADFEM — Modal Analysis 6 Mode Frekuensi" },
  { src: cadfem7.url, caption: "CADFEM — Analysis Routine Workflow Simulasi" },
  { src: cadfem8.url, caption: "CADFEM — Robust Meshing Impeller Housing" },
];

/* ============================================================
   P&ID line-art icons
   ============================================================ */
const Gear = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="32" cy="32" r="10" />
    <circle cx="32" cy="32" r="20" strokeDasharray="6 6" />
    <path d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M52 12l-6 6M18 46l-6 6" />
  </svg>
);




const SectionHead = ({ code, title, sub }: { code: string; title: string; sub?: string }) => (
  <div className="mb-5">
    <h2 className="font-[Barlow_Condensed] text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl md:text-5xl">
      {title}
    </h2>
    <div className="mt-1 font-mono text-xs tracking-[0.3em] text-[color:var(--amber-brand)]">{code}</div>
    {sub && <p className="mt-2 max-w-2xl text-sm text-[color:var(--concrete)]">{sub}</p>}
  </div>
);

const ImagePH = ({ w = 1600, h = 900, label = "IMAGE PLACEHOLDER" }: { w?: number; h?: number; label?: string }) => (
  <div
    className="img-ph relative flex w-full items-center justify-center overflow-hidden border border-[color:var(--concrete)]/40"
    style={{ aspectRatio: `${w}/${h}` }}
  >
    <div className="absolute inset-2 border border-dashed border-[color:var(--concrete)]/50" />
    <div className="relative text-center font-mono text-xs tracking-[0.25em] text-[color:var(--concrete)]">
      <div>{label}</div>
      <div className="mt-1 text-[10px] opacity-70">{w} × {h}</div>
    </div>
  </div>
);

/* Section shortcuts — reordered per user spec */
const SECTIONS: { id: string; label: string; n: number }[] = [
  { id: "about", label: "About", n: 1 },
  { id: "pengalaman", label: "Experience", n: 2 },
  { id: "skills", label: "Skills", n: 3 },
  { id: "organisasi", label: "Organizations", n: 4 },
  { id: "aktivitas", label: "Activities", n: 5 },
  { id: "proyek", label: "Projects", n: 6 },
  { id: "sertifikat", label: "Certificates", n: 7 },
  { id: "kontak", label: "Contact", n: 8 },
];


/* Horizontal-scrolling documentation gallery */
const DocScroller = ({
  items,
  emptyLabel,
  emptyCount = 4,
}: {
  items?: { src: string; caption?: string; type?: "image" | "video"; poster?: string }[];
  emptyLabel?: string;
  emptyCount?: number;
}) => {
  const hasItems = items && items.length > 0;
  const [zoom, setZoom] = useState<number | null>(null);
  const zoomed = zoom !== null && items ? items[zoom] : null;

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  return (
    <div className="relative -mx-6 mt-4 sm:mx-0">
      <DragStrip innerClassName="px-6 sm:px-0">
        {hasItems
          ? items!.map((it, i) => (
              <figure
                key={i}
                className="snap-start shrink-0 border border-[color:var(--concrete)]/40 bg-[color:var(--steel)] p-2"
                style={{ width: "min(58vw, 216px)" }}
              >
                <div className="mo-scan aspect-[4/5] overflow-hidden">
                  {it.type === "video" ? (
                    <video
                      src={it.src}
                      poster={it.poster}
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />

                  ) : (
                    <button
                      type="button"
                      onClick={() => setZoom(i)}
                      aria-label={`Enlarge photo: ${it.caption ?? "documentation"}`}
                      className="group relative block h-full w-full cursor-zoom-in overflow-hidden"
                    >
                      <img
                        src={it.src}
                        alt={it.caption ?? "Documentation"}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute right-2 bottom-2 border border-[color:var(--amber-brand)] bg-[color:var(--graphite)]/80 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-[color:var(--amber-brand)] opacity-0 transition-opacity group-hover:opacity-100">
                        ⤢ ZOOM
                      </span>
                    </button>
                  )}
                </div>
                <figcaption className="mt-2 flex items-center justify-between px-1 pb-1 font-mono text-[10px] tracking-[0.2em] text-[color:var(--concrete)]">
                  <span className="truncate">{it.caption}</span>
                  <span className="text-[color:var(--amber-brand)]">{String(i + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            ))
          : Array.from({ length: emptyCount }).map((_, i) => (
              <div
                key={i}
                className="snap-start shrink-0"
                style={{ width: "min(72vw, 288px)" }}
              >
                <ImagePH w={800} h={1000} label={emptyLabel ?? "UPLOAD SOON"} />
              </div>
            ))}
      </DragStrip>

      {zoomed && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[color:var(--graphite)]/95 p-4"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setZoom(null)}
            aria-label="Close"
            className="absolute top-4 right-4 border border-[color:var(--concrete)]/60 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-[color:var(--paper)] hover:border-[color:var(--amber-brand)] hover:text-[color:var(--amber-brand)]"
          >
            ✕ ESC
          </button>
          <img
            src={zoomed.src}
            alt={zoomed.caption ?? "Documentation"}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full border border-[color:var(--concrete)]/40 object-contain"
          />
          {zoomed.caption && (
            <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-[color:var(--concrete)]">
              {zoomed.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const CertGrid = ({ items }: { items: { src: string; caption?: string }[] }) => {
  const [zoom, setZoom] = useState<number | null>(null);
  const zoomed = zoom !== null ? items[zoom] : null;

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  const stripRef = useRef<HTMLDivElement | null>(null);
  const [metrics, setMetrics] = useState({ left: 0, width: 0, card: 244 });

  const measure = useCallback(() => {
    const el = stripRef.current?.querySelector<HTMLElement>(".mo-strip");
    if (!el) return;
    const first = el.querySelector<HTMLElement>(".mo-card");
    setMetrics({ left: el.scrollLeft, width: el.clientWidth, card: (first?.offsetWidth ?? 232) + 12 });
  }, []);

  useEffect(() => {
    const el = stripRef.current?.querySelector<HTMLElement>(".mo-strip");
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        measure();
      });
    };
    measure();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [measure]);

  const centerIndex = metrics.card ? (metrics.left + metrics.width / 2) / metrics.card - 0.5 : 0;

  return (
    <div className="mt-4" ref={stripRef}>
      <DragStrip className="-mx-6 sm:mx-0 mo-coverflow" innerClassName="px-6 sm:px-0">
        {items.map((it, i) => {
          const d = i - centerIndex;
          const ad = Math.abs(d);
          const near = ad < 3.2;
          const scale = near ? Math.max(0.88, 1 - ad * 0.12) : 0.88;
          const opacity = near ? Math.max(0.5, 1 - ad * 0.5) : 0.5;
          const rotate = Math.max(-12, Math.min(12, -d * 12));
          if (ad > 4)
            return (
              <div key={i} className="mo-card shrink-0 snap-start" style={{ width: "min(70vw, 232px)" }} aria-hidden="true" />
            );
          return (
          <figure
            key={i}
            className="mo-card brackets shrink-0 snap-start border border-[color:var(--concrete)]/30 bg-[color:var(--steel)] p-2.5"
            style={{
              width: "min(70vw, 232px)",
              transform: `scale(${scale.toFixed(3)}) rotateY(${rotate.toFixed(2)}deg)`,
              opacity,
            }}
          >
            <figcaption className="mb-2 flex items-start justify-between gap-2">
              <span className="font-[Barlow_Condensed] text-[13px] font-semibold uppercase leading-tight tracking-[0.05em] text-[color:var(--paper)]">
                {it.caption}
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[color:var(--amber-brand)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </figcaption>
            <button
              type="button"
              onClick={() => setZoom(i)}
              aria-label={`Enlarge certificate: ${it.caption ?? "document"}`}
              className="mo-scan group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden border border-[color:var(--concrete)]/30 bg-[color:var(--graphite)]"
            >
              <img
                src={it.src}
                alt={it.caption ?? "Sertifikat"}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute right-2 bottom-2 border border-[color:var(--amber-brand)] bg-[color:var(--graphite)]/80 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-[color:var(--amber-brand)] opacity-0 transition-opacity group-hover:opacity-100">
                ⤢ ZOOM
              </span>
            </button>
          </figure>
          );
        })}
      </DragStrip>


      {zoomed && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[color:var(--graphite)]/95 p-4"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setZoom(null)}
            aria-label="Close"
            className="absolute top-4 right-4 border border-[color:var(--concrete)]/60 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-[color:var(--paper)] hover:border-[color:var(--amber-brand)] hover:text-[color:var(--amber-brand)]"
          >
            ✕ ESC
          </button>
          <img
            src={zoomed.src}
            alt={zoomed.caption ?? "Sertifikat"}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full border border-[color:var(--concrete)]/40 object-contain"
          />
          {zoomed.caption && (
            <p className="mt-3 font-mono text-[11px] tracking-[0.2em] text-[color:var(--concrete)]">
              {zoomed.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};



function Index() {
  /** bump a section's key on nav click so its entrance animation replays */
  const [replay, setReplay] = useState<Record<string, number>>({});
  const lastNav = useRef(0);

  const goToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    const now = Date.now();
    if (now - lastNav.current < 400) return; // debounce rapid clicks
    lastNav.current = now;
    window.setTimeout(() => {
      setReplay((r) => ({ ...r, [id]: (r[id] ?? 0) + 1 }));
    }, 260);
  }, []);

  const rk = (id: string) => `${id}-${replay[id] ?? 0}`;

  return (
    <main className="bp-grid relative min-h-screen bg-[color:var(--graphite)] text-[color:var(--paper)]">
      <SheetLoader />
      <CadCursor />

      <StickyNav items={SECTIONS} onNavigate={goToSection} />

      {/* ================= HERO ================= */}
      <section className="hero-boot relative overflow-hidden">
        <span className="hero-scan" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12 pt-10 pb-10 sm:pt-16 sm:pb-16">
          <svg className="hero-brackets pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M2 12 L2 2 L14 2" vectorEffect="non-scaling-stroke" />
            <path d="M98 88 L98 98 L86 98" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="relative flex flex-col items-center text-center">
            <h1 className="whitespace-nowrap font-[Barlow_Condensed] text-[8vw] font-bold uppercase leading-[1] tracking-[0.02em] sm:text-[7vw] lg:text-7xl">
              <WordWipe text="Indra Naufal Adani" auto />
              <span className="sr-only"> — Mechanical Engineer</span>
            </h1>

            <div className="boot-item mt-5 h-px w-24 bg-[color:var(--amber-brand)]" style={{ ["--boot-delay" as string]: "560ms" }} />
            <p className="boot-item mt-5 font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--concrete)]" style={{ ["--boot-delay" as string]: "620ms" }}>
              Mechanical Engineering — Energy Conversion &amp; Industrial Inspection
            </p>
            <p className="boot-item mt-6 max-w-xl text-base text-[color:var(--paper)]/90 sm:text-lg">
              Graduate with a Bachelor&rsquo;s degree in Mechanical Engineering from Surabaya
              State University | Enthusiast of renewable energy, energy conversion, materials
              and engineering analysis
            </p>

            <div className="boot-item mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-y border-[color:var(--concrete)]/30 py-3 font-mono text-[11px] tracking-[0.12em] text-[color:var(--concrete)]">
              <span><span className="text-[color:var(--amber-brand)]">GPA</span> 3.75/4.00</span>
              <span>UNIVERSITAS NEGERI SURABAYA</span>
              <span>EXP. GRADUATION 2026</span>
            </div>

            <div className="boot-item mt-8 flex flex-wrap justify-center gap-3" style={{ ["--boot-delay" as string]: "760ms" }}>
              <a
                href="#kontak"
                className="btn-tech primary"
                onClick={(e) => { e.preventDefault(); goToSection("kontak"); }}
              >
                Contact <span className="btn-arrow">→</span>
              </a>
              <a
                href="#proyek"
                className="btn-tech"
                onClick={(e) => { e.preventDefault(); goToSection("proyek"); }}
              >
                View Projects <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hazard" />
      </section>

      {/* ================= 01 ABOUT ================= */}
      <section key={rk("about")} id="about" className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-10">
        <SectionHead
          code="ABOUT"
          title="About Me"
        />
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.6fr] md:items-center">
          <Reveal variant="left" className="relative mx-auto w-full max-w-[300px] md:mx-0">
           <TiltPortrait>
            {/* ambient mechanical stage — no hard frame */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-6 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--amber-brand)]/12 blur-3xl" />
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full text-[color:var(--concrete)]/35">
                <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 6" />
                <circle cx="100" cy="100" r="66" fill="none" stroke="currentColor" strokeWidth="0.4" />
                <line x1="100" y1="4" x2="100" y2="20" stroke="currentColor" strokeWidth="0.6" />
                <line x1="4" y1="100" x2="20" y2="100" stroke="currentColor" strokeWidth="0.6" />
                <line x1="180" y1="100" x2="196" y2="100" stroke="currentColor" strokeWidth="0.6" />
              </svg>
            </div>

            <Gear className="pointer-events-none absolute -left-5 top-2 h-12 w-12 text-[color:var(--amber-brand)]/50" />
            <Gear className="pointer-events-none absolute -right-3 bottom-16 h-8 w-8 text-[color:var(--concrete)]/45" />

            {/* free-floating cutout, grounded by a soft plate */}
            <div className="relative">
              <img
                src={portraitCutout.url}
                alt="Indra Naufal Adani — mechanical engineering portrait"
                className="relative block h-auto w-full select-none object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.45)] [mask-image:linear-gradient(to_bottom,#000_82%,transparent_100%)]"
                loading="lazy"
              />

            </div>

            <div className="hazard mt-3 opacity-80" />
           </TiltPortrait>
          </Reveal>

          <div className="space-y-4 text-[15px] leading-relaxed text-[color:var(--paper)]/90">
            <Reveal as="p" variant="none" className="mo-plot" delay={0}>
              <span className="mo-plot-in">
              Mechanical Engineering graduate from Surabaya State University (GPA 3.75/4.00) with
              four internships across petrochemical refining, oil &amp; gas workshop, engineering
              simulation, and technical inspection.
              </span>
            </Reveal>
            <Reveal as="p" variant="none" className="mo-plot" delay={40}>
              <span className="mo-plot-in">
              Focus areas: <strong className="mo-term">NDT &amp; Radiographic Testing</strong>,{" "}
              <strong className="mo-term">rotating equipment maintenance</strong>,{" "}
              <strong className="mo-term">CFD &amp; FEA</strong>, and mechanical
              design. Proficient with SolidWorks, Autodesk Inventor, and ANSYS Mechanical.
              ANSYS Associate Certified in Stress Analysis.
              </span>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ================= 03 EXPERIENCE ================= */}
      <section key={rk("pengalaman")} id="pengalaman" className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-10">
        <SectionHead
          code="PENGALAMAN"
          title="Experience"
        />
        <TimelineTrack>
        <ol className="relative ml-3">
          {[
            {
              active: true,
              role: "Inspection Engineer Intern",
              org: "PT Robutech",
              date: "APR — AGU 2025",
              body: "NDT, Radiographic Testing, visual inspection, dan sertifikasi peralatan di pembangkit listrik & pabrik proses.",
              gallery: ROBUTECH_PHOTOS,
            },
            {
              role: "Workshop Mechanic",
              org: "PPSDM Migas Cepu",
              date: "MAR — APR 2025",
              body: "Prime mover, pompa, lifting system, permesinan, thermography, dan analisis komposisi kimia.",
              gallery: PPSDM_PHOTOS,
            },
            {
              role: "Maintenance Execute",
              org: "PT Trans Pacific Petrochemical Indotama",
              date: "JAN — FEB 2025",
              body: "Pemeliharaan mesin industri migas, pengumpulan & analisis data proses.",
              gallery: TPPI_PHOTOS,
            },
            {
              role: "Finite Element Analysis",
              org: "PT CADFEM Simulation Technology Indonesia",
              date: "SEP — DES 2024",
              body: "Simulasi Finite Element Analysis untuk komponen struktural dan validasi desain.",
              gallery: CADFEM_IMAGES,
            },
            {
              role: "Research Intern — Kedaireka",
              org: "Magang Kedaireka",
              date: "AGU — DES 2024",
              body: "Kontribusi pada pembuatan alat produksi pabrik dan riset perancangan kendaraan listrik multifungsi.",
              gallery: KEDAIREKA_VIDEOS,
            },
          ].map((e, i) => (
            <Reveal as="li" key={i} variant="right" delay={Math.min(i, 5) * 60} className="relative mb-10 pl-8">
              <span
                className={`mo-marker absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${
                  e.active
                    ? "border-[color:var(--amber-brand)] bg-[color:var(--amber-brand)]"
                    : "border-[color:var(--concrete)] bg-[color:var(--graphite)]"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--amber-brand)]">
                  <CharFlip text={e.date} />
                </span>
                <span className="mo-track-in font-mono text-[10px] text-[color:var(--concrete)]">
                  {e.org.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-1 font-[Barlow_Condensed] text-xl font-semibold uppercase tracking-[0.05em]">
                {e.role}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-[color:var(--paper)]/85">{e.body}</p>
              {e.gallery && <DocScroller items={e.gallery} />}
            </Reveal>
          ))}
        </ol>
        </TimelineTrack>
      </section>


      {/* ================= 03 SKILLS ================= */}
      <section key={rk("skills")} id="skills" className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-6">
        <SectionHead code="KEAHLIAN TEKNIS" title="Technical Skills" />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="overflow-x-auto border border-[color:var(--concrete)]/30 bg-[color:var(--steel)]">
            <table className="w-full min-w-[520px] border-collapse font-mono text-xs">
              <thead>
                <tr className="border-b border-[color:var(--concrete)]/40 bg-[color:var(--graphite)] text-left tracking-[0.2em] text-[color:var(--amber-brand)]">
                  <th className="p-3">TOOL</th>
                  <th className="p-3">KATEGORI</th>
                  <th className="p-3">LEVEL</th>
                </tr>
              </thead>
              <tbody className="text-[color:var(--paper)]/90">
                {[
                  ["CapCut", "Video", "Familiar", 0.95],
                  ["Ansys", "FEA / Simulation", "Professional", 0.8],
                  ["Canva", "Technical Visualization", "Professional", 0.78],
                  ["Microsoft Word", "Technical Reporting", "Advanced", 0.74],
                  ["Microsoft Excel", "Engineering Data", "Advanced", 0.72],
                  ["SolidWorks", "CAD / 3D Modeling", "Advanced", 0.7],
                  ["Autodesk Inventor", "CAD / 3D Modeling", "Advanced", 0.7],
                  ["Photoshop", "Graphics", "Intermediate", 0.48],
                ].map(([tool, cat, lvl, pct], ri) => (
                  <tr
                    key={tool}
                    className="mo mo-up is-in border-b border-[color:var(--concrete)]/20"
                    style={{ ["--mo-delay" as string]: `${Math.min(ri, 5) * 50}ms` }}
                  >
                    <td className="p-3">{tool}</td>
                    <td className="p-3 text-[color:var(--concrete)]">{cat}</td>
                    <td className="p-3">
                      <span
                        className={
                          lvl === "Advanced" || lvl === "Professional" || lvl === "Familiar"
                            ? "text-[color:var(--amber-brand)]"
                            : lvl === "Intermediate"
                              ? "text-[color:var(--paper)]"
                              : "text-[color:var(--concrete)]"
                        }
                      >
                        {lvl} <span className="opacity-60">·</span> {Math.round((pct as number) * 100)}%
                      </span>
                      <span
                        className="mo-level"
                        aria-hidden="true"
                        style={{
                          ["--lvl" as string]: pct,
                          ["--mo-delay" as string]: `${Math.min(ri, 5) * 50}ms`,
                        }}
                      >
                        <span />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-[color:var(--concrete)]/20 p-3 font-mono text-[10px] tracking-[0.2em] text-[color:var(--paper)] opacity-55">
              SCALE: FAMILIAR — PROFESSIONAL — ADVANCED — INTERMEDIATE
            </p>
          </Reveal>

          <Reveal variant="right" className="border border-[color:var(--concrete)]/30 bg-[color:var(--steel)] p-6">
            <h3 className="font-[Barlow_Condensed] text-lg font-semibold uppercase tracking-[0.08em]">
              Methods & Techniques
            </h3>
            <ul className="mt-4 space-y-2 font-mono text-xs tracking-[0.08em] text-[color:var(--paper)]/90">
              {[
                "Non-Destructive Testing (NDT)",
                "Radiographic Testing",
                "Visual Inspection",
                "Thermography",
                "Finite Element Analysis",
                "Machining — Turning, Milling, Shaping",
              ].map((m, ci) => (
                <li
                  key={m}
                  className="mo-chip flex items-center gap-3"
                  style={{ ["--mo-delay" as string]: `${Math.min(ci, 5) * 60}ms` }}
                >
                  <span className="h-px w-4 bg-[color:var(--amber-brand)]" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ================= 04 ORGANISASI ================= */}
      <section key={rk("organisasi")} id="organisasi" className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-20">
        <SectionHead
          code="ORGANISASI"
          title="Organizations"
          sub="Pengalaman organisasi selama masa kuliah."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              org: "Garnesa Racing Team",
              role: "Divisi Electrical · 2023—2025",
              body:
                "Proyek tim riset untuk merancang kendaraan ramah lingkungan dan sangat hemat bahan bakar, yang bertujuan untuk menempuh jarak sejauh mungkin.",
            },
            {
              org: "HIMA Teknik Mesin UNESA",
              role: "Kominfo · 2023—2024",
              body: "Pengelolaan media & komunikasi himpunan mahasiswa Teknik Mesin UNESA.",
            },
            {
              org: "FORMAT R UNESA",
              role: "Kominfo · 2023—2025",
              body: "Publikasi dan dokumentasi kegiatan forum mahasiswa.",
            },
          ].map((o, oi) => (
            <Reveal key={o.org} delay={Math.min(oi, 5) * 60} className="brackets border border-[color:var(--concrete)]/30 bg-[color:var(--steel)] p-6">
              <div className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--amber-brand)]">
                {o.role}
              </div>
              <h3 className="mt-2 font-[Barlow_Condensed] text-lg font-semibold uppercase tracking-[0.05em]">
                {o.org}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--concrete)]">{o.body}</p>
            </Reveal>
          ))}
        </div>
      </section>


      {/* ================= 05 AKTIVITAS ================= */}
      <section key={rk("aktivitas")} id="aktivitas" className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-10">
        <SectionHead
          code="DOKUMENTASI AKTIVITAS"
          title="Activity Documentation"
          sub="Dokumentasi kegiatan yang saya ikuti."
        />
        <Reveal>
          <DocScroller
            items={[
              { src: act1.url, caption: "Proses pembuatan body mobil hemat energi" },
              { src: act2.url, caption: "Foto dengan mobil Garnesa III" },
              { src: act3.url, caption: "Rapat kerja Himpunan Mahasiswa Teknik Mesin" },
              { src: act4.url, caption: "Foto bersama seluruh anggota FORMAT-R" },
              { src: act5.url, caption: "Foto bersama setelah kegiatan PKKMB" },
              { src: act6.url, caption: "2nd Exhibition Innovation Product UNESA 2024" },
              { src: act7.url, caption: "FORMAT-R Futsal Championship" },
              { src: act8.url, caption: "Pelantikan dan Rapat Kerja FORMAT-R UNESA 2024/2025" },
              { src: act9.url, caption: "Industrial Festival 2024" },
              { src: act10.url, caption: "Upgrading Fungsionaris FORMAT-R UNESA" },
              { src: act11.url, caption: "Proses pengelasan rangka body mobil hemat energi" },
              { src: act12.url, caption: "Prototipe alat cetak briket hasil rancangan tim" },
              { src: act13.url, caption: "Perakitan panel kelistrikan mobil hemat energi" },
              { src: act14.url, caption: "Juara 1 Rawatungga Championship 2023" },
              { src: act15.url, caption: "Foto bersama tim proyek mesin pemotong kerupuk puli" },
              { src: act16.url, caption: "Kegiatan Pengabdian Masyarakat mahasiswa Tuban–Rongga" },
              { src: act17.url, caption: "Foto bersama seluruh anggota Garnesa Racing Team dengan mobil hemat energi di Fakultas Teknik UNESA" },
              { src: act18.url, caption: "Sebagai peserta kompetisi Kontes Mobil Hemat Energi (KMHE)" },
            ]}
          />
        </Reveal>

      </section>


      {/* ================= 06 PROYEK ================= */}
      <section key={rk("proyek")} id="proyek" className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-10">
        <SectionHead
          code="PROYEK PILIHAN"
          title="Selected Projects"

          sub="Studi kasus rekayasa — dirangkum dalam alur Masalah → Metode → Hasil."
        />
        <div className="space-y-6">
          {[
            {
              featured: true,
              tag: "THERMAL",
              code: "P.01",
              year: "2025—2026",
              images: [he1.url],
              title:
                "Analisis Performa Termohidrolik Shell and Tube Heat Exchanger dengan Nanofluida Hibrida CuO–SiO₂ & Helical Baffle",
              problem:
                "Efisiensi perpindahan panas HE konvensional terbatas pada variasi sudut baffle dan konsentrasi fluida kerja.",
              method:
                "Uji variasi sudut helical baffle dan konsentrasi nanofluida hibrida CuO–SiO₂.",
              result:
                "Analisis efektivitas termal, pressure drop, dan Performance Evaluation Criterion (PEC) untuk menentukan kondisi operasi yang memberikan kinerja termohidraulik terbaik.",
            },
            {
              tag: "MACHINE DESIGN",
              code: "P.02",
              year: "2025—2026",
              images: [puli1.url, puli2.url],
              title: "Desain & Pengembangan Mesin Pemotong Kerupuk Puli",
              problem: "Kebutuhan mekanisasi pemotongan kerupuk puli untuk UMKM dengan output konsisten.",
              method: "Perancangan kinematika, pemilihan material, prototyping SolidWorks & fabrikasi.",
              result: "Prototipe fungsional dengan siklus pemotongan stabil dan aman dioperasikan.",
            },
            {
              tag: "FEA",
              code: "P.03",
              video: briketVideo.url,
              poster: briketPoster.url,
              year: "2023",
              title: "Prototipe Alat Cetak Briket — FEA",
              problem: "Validasi struktur cetakan briket terhadap beban tekan siklik.",
              method: "Analisis tegangan, regangan, safety factor, dan displacement menggunakan Ansys.",
              result: "Struktur memenuhi safety factor > 1.5 pada kondisi beban desain.",
            },
          ].map((p: {
            featured?: boolean;
            tag: string;
            code: string;
            year: string;
            title: string;
            problem: string;
            method: string;
            result: string;
            video?: string;
            poster?: string;
            images?: string[];
          }) => (
            <Reveal
              as="article"
              key={p.code}
              className={`mo-project brackets relative overflow-hidden border ${
                p.featured ? "mo-featured border-[color:var(--amber-brand)]/60" : "border-[color:var(--concrete)]/30"
              } bg-[color:var(--steel)]`}
            >
              {p.featured && (
                <svg className="mo-helix pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2" aria-hidden="true" viewBox="0 0 200 200">
                  <g fill="none" stroke="currentColor" strokeWidth="0.8">
                    <ellipse cx="100" cy="100" rx="90" ry="34" />
                    <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(30 100 100)" />
                    <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(60 100 100)" />
                    <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(120 100 100)" />
                    <ellipse cx="100" cy="100" rx="90" ry="34" transform="rotate(150 100 100)" />
                  </g>
                </svg>
              )}
              {p.featured && (
                <div className="absolute -top-3 left-6 bg-[color:var(--amber-brand)] px-2 py-0.5 font-mono text-[10px] tracking-[0.25em] text-[color:var(--graphite)]">
                  FEATURED
                </div>
              )}
              <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
                    <span className="mo-tag text-[color:var(--rust)]">[{p.tag}]</span>
                    <span className="mo-code">{p.code}</span>
                    <span className="opacity-40">·</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-[Barlow_Condensed] text-2xl font-semibold uppercase leading-tight tracking-[0.04em] sm:text-3xl">
                    {p.title}
                  </h3>

                  <dl className="mt-6 space-y-4 text-sm">
                    {[
                      ["MASALAH", p.problem],
                      ["METODE", p.method],
                      ["HASIL", p.result],
                    ].map(([k, v], si) => (
                      <div
                        key={k}
                        className="mo-step grid grid-cols-[92px_1fr] gap-4 border-t border-[color:var(--concrete)]/20 pt-3"
                        style={{ ["--mo-delay" as string]: `${si * 280}ms` }}
                      >
                        <dt className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--amber-brand)]">{k}</dt>
                        <dd className="text-[color:var(--paper)]/90">{v}</dd>
                        <span className="mo-step-arrow" aria-hidden="true" />
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="p-6 sm:p-8 lg:pl-0">
                  {p.video ? (
                    <video
                      src={p.video}
                      poster={p.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full border border-[color:var(--concrete)]/40 bg-black"
                    />
                  ) : p.images?.length ? (
                    <div className={`grid gap-3 ${p.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {p.images.map((src) => (
                        <span key={src} className="block overflow-hidden border border-[color:var(--concrete)]/40 bg-black">
                          <img
                            src={src}
                            alt={p.title}
                            loading="lazy"
                            decoding="async"
                            className={`mo-proj-img aspect-[4/3] w-full object-cover${p.featured ? " mo-thermal" : ""}`}
                          />
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ImagePH w={1600} h={900} label={`PROJECT ${p.code}`} />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= 07 CERTS ================= */}
      <section key={rk("sertifikat")} id="sertifikat" className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-20">
        <SectionHead code="SERTIFIKAT" title="Certificates" />
        <Reveal className="mt-2">
          <CertGrid items={CERT_DOCS} />
        </Reveal>
      </section>

      {/* ================= 08 CONTACT ================= */}
      <section key={rk("kontak")} id="kontak" className="relative bg-[color:var(--graphite)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 pb-8">
          <SectionHead
            code="KONTAK"
            title="Get in Touch"
            sub="Saya selalu terbuka untuk berdiskusi, berkolaborasi, atau menjajaki peluang baru di bidang Mechanical Engineering. Jika Anda memiliki proyek, pertanyaan, atau kesempatan kerja, jangan ragu untuk menghubungi saya."
          />
          <div className="block break-words font-[Barlow_Condensed] text-4xl font-bold uppercase tracking-[0.02em] text-[color:var(--amber-brand)] sm:text-6xl md:text-7xl">
            <WordWipe text="Let's Work Together!" />
          </div>

          <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
            <span className="mo-status-dot" aria-hidden="true" />
            <span>STATUS: OPEN TO WORK</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "EMAIL",
                value: "indraadani654@gmail.com",
                href: "mailto:indraadani654@gmail.com",
                icon: <Mail className="h-5 w-5" strokeWidth={1.6} />,
              },
              {
                label: "WHATSAPP",
                value: "085546381640",
                href: "https://wa.me/6285546381640",
                icon: <MessageCircle className="h-5 w-5" strokeWidth={1.6} />,
              },
              {
                label: "LINKEDIN",
                value: "Indra Naufal Adani",
                href: "https://www.linkedin.com/in/indranaufaladani/",
                icon: <Linkedin className="h-5 w-5" strokeWidth={1.6} />,
              },
              {
                label: "INSTAGRAM",
                value: "indraadani_",
                href: "https://instagram.com/indraadani_",
                icon: <Instagram className="h-5 w-5" strokeWidth={1.6} />,
              },
              {
                label: "TIKTOK",
                value: "indraadani_",
                href: "https://www.tiktok.com/@indraadani_",
                icon: <Music2 className="h-5 w-5" strokeWidth={1.6} />,
              },
            ].map((c, ci) => (
              <Reveal key={c.label} as="span" delay={Math.min(ci, 5) * 60} className="block">
              <a
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 border border-[color:var(--concrete)]/40 bg-[color:var(--steel)] p-3 transition-colors hover:border-[color:var(--amber-brand)]"
              >
                <span className="mo-icon grid h-10 w-10 shrink-0 place-items-center border border-[color:var(--concrete)]/40 text-[color:var(--concrete)] transition-colors group-hover:border-[color:var(--amber-brand)] group-hover:text-[color:var(--amber-brand)]">
                  {c.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
                    {c.label}
                  </span>
                  <span className="mo-underline block truncate text-sm text-[color:var(--paper)]">{c.value}</span>
                </span>
              </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={cvFile.url} target="_blank" rel="noopener noreferrer" className="btn-tech btn-cv primary">
              Cek CV ku!{" "}
              <span className="btn-arrow-swap" aria-hidden="true">
                <span className="arrow-a">↗</span>
                <span className="arrow-b">↗</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-6 pt-2">
        <p className="text-center font-mono text-[10px] tracking-[0.2em] text-[color:var(--concrete)]">
          © 2026 INDRA NAUFAL ADANI — ALL DRAWINGS ARE INDICATIVE
        </p>
      </footer>
    </main>
  );
}
