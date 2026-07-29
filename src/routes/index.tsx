import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "../assets/indra-portrait.png.asset.json";
import tppi1 from "../assets/tppi/tppi-1.jpg.asset.json";
import tppi2 from "../assets/tppi/tppi-2.jpg.asset.json";
import tppi3 from "../assets/tppi/tppi-3.jpg.asset.json";
import tppi4 from "../assets/tppi/tppi-4.jpg.asset.json";
import tppi5 from "../assets/tppi/tppi-5.jpg.asset.json";
import tppi6 from "../assets/tppi/tppi-6.jpg.asset.json";
import tppi7 from "../assets/tppi/tppi-7.jpg.asset.json";
import tppi8 from "../assets/tppi/tppi-8.jpg.asset.json";
import tppi9 from "../assets/tppi/tppi-9.jpg.asset.json";
import tppi10 from "../assets/tppi/tppi-10.jpg.asset.json";
import ppsdm1 from "../assets/ppsdm/ppsdm-1.jpg.asset.json";
import ppsdm2 from "../assets/ppsdm/ppsdm-2.jpg.asset.json";
import ppsdm3 from "../assets/ppsdm/ppsdm-3.jpg.asset.json";
import ppsdm4 from "../assets/ppsdm/ppsdm-4.jpg.asset.json";
import ppsdm5 from "../assets/ppsdm/ppsdm-5.jpg.asset.json";
import ppsdm6 from "../assets/ppsdm/ppsdm-6.jpg.asset.json";
import ppsdm7 from "../assets/ppsdm/ppsdm-7.jpg.asset.json";
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
import kedaireka2 from "../assets/kedaireka/kedaireka-2.mp4.asset.json";
import kedaireka3 from "../assets/kedaireka/kedaireka-3.mp4.asset.json";
import cadfem1 from "../assets/cadfem/cadfem-1.png.asset.json";
import cadfem2 from "../assets/cadfem/cadfem-2.png.asset.json";
import cadfem3 from "../assets/cadfem/cadfem-3.png.asset.json";
import cadfem4 from "../assets/cadfem/cadfem-4.png.asset.json";
import cadfem5 from "../assets/cadfem/cadfem-5.png.asset.json";
import cadfem6 from "../assets/cadfem/cadfem-6.png.asset.json";
import cadfem7 from "../assets/cadfem/cadfem-7.png.asset.json";
import cadfem8 from "../assets/cadfem/cadfem-8.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const TPPI_PHOTOS = [
  { src: tppi1.url, caption: "TPPI — Refinery Column & Pipeline" },
  { src: tppi2.url, caption: "TPPI — Benzene Line Inspection" },
  { src: tppi3.url, caption: "TPPI — Heat Exchanger Tube Bundle" },
  { src: tppi4.url, caption: "TPPI — Structural Field Check" },
  { src: tppi5.url, caption: "TPPI — Visual Inspection on Structure" },
  { src: tppi6.url, caption: "TPPI — Rotating Equipment Maintenance" },
  { src: tppi7.url, caption: "TPPI — Vessel Manway Access" },
  { src: tppi8.url, caption: "TPPI — Crane Lifting Operation" },
  { src: tppi9.url, caption: "TPPI — Storage Tank Farm 6.580 m³" },
  { src: tppi10.url, caption: "TPPI — Preventive Maintenance Tools" },
];

const PPSDM_PHOTOS = [
  { src: ppsdm1.url, caption: "PPSDM Migas — Sesi Kerja Tim Workshop" },
  { src: ppsdm2.url, caption: "PPSDM Migas — Gedung PPSDM Migas Cepu" },
  { src: ppsdm3.url, caption: "PPSDM Migas — Tim Praktik Kerja Lapangan" },
  { src: ppsdm4.url, caption: "PPSDM Migas — Pencatatan Data Operasi Kilang" },
  { src: ppsdm5.url, caption: "PPSDM Migas — Area Kilang PPSDM Migas" },
  { src: ppsdm6.url, caption: "PPSDM Migas — Briefing Keselamatan Kerja" },
  { src: ppsdm7.url, caption: "PPSDM Migas — Kolom Distilasi Unit Pengolahan" },
];

const ROBUTECH_PHOTOS = [
  { src: robutech1.url, caption: "Robutech — Turbine Hall Pembangkit Listrik" },
  { src: robutech2.url, caption: "Robutech — Inspeksi Ketinggian dengan Full Body Harness" },
  { src: robutech3.url, caption: "Robutech — Inspeksi Confined Space Area Boiler" },
  { src: robutech4.url, caption: "Robutech — Inspeksi di Jetty Conveyor" },
  { src: robutech5.url, caption: "Robutech — Radiography Testing Crawler & Survey Meter" },
  { src: robutech6.url, caption: "Robutech — Radiography Testing Persiapan Sumber" },
  { src: robutech7.url, caption: "Robutech — Ultrasonic Thickness Measurement" },
  { src: robutech8.url, caption: "Robutech — Penetrant Testing pada Sambungan Las" },
  { src: robutech9.url, caption: "Robutech — Area Coal Conveyor & Jetty" },
];

const KEDAIREKA_VIDEOS = [
  { src: kedaireka1.url, type: "video" as const, caption: "Kedaireka — Proses Pembuatan Alat Produksi" },
  { src: kedaireka2.url, type: "video" as const, caption: "Kedaireka — Uji Coba Kendaraan Listrik" },
  { src: kedaireka3.url, type: "video" as const, caption: "Kedaireka — Riset Perancangan Kendaraan Listrik" },
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
const IconPump = () => (
  <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.5" className="pid-icon">
    <circle cx="32" cy="32" r="18" />
    <path d="M14 32 L50 32 M32 14 L32 50" />
    <path d="M22 22 L42 42 M42 22 L22 42" opacity="0.4" />
  </svg>
);
const IconValve = () => (
  <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.5" className="pid-icon">
    <path d="M8 32 L28 32 M36 32 L56 32" />
    <path d="M28 20 L36 44 L28 44 L36 20 Z" />
    <path d="M32 20 L32 8 M26 8 L38 8" />
  </svg>
);
const IconInstrument = () => (
  <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.5" className="pid-icon">
    <circle cx="32" cy="32" r="16" />
    <path d="M16 32 L48 32" />
    <text x="32" y="28" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="currentColor" stroke="none">FEA</text>
  </svg>
);

const HeatExchanger = () => (
  <svg viewBox="0 0 600 260" fill="none" stroke="currentColor" strokeWidth="1.2" className="pointer-events-none">
    <rect x="60" y="60" width="480" height="140" rx="70" />
    <path d="M60 130 L540 130" opacity="0.4" />
    <path d="M60 95 L540 95 M60 165 L540 165" opacity="0.3" />
    <path d="M20 100 L60 100 L60 160 L20 160" />
    <path d="M580 100 L540 100 L540 160 L580 160" />
    <path d="M180 60 L180 30 L200 30" />
    <path d="M420 200 L420 230 L400 230" />
    <circle cx="200" cy="30" r="8" />
    <circle cx="400" cy="230" r="8" />
    <text x="300" y="245" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="currentColor" stroke="none" opacity="0.6">
      SHELL &amp; TUBE HEAT EXCHANGER — TYP.
    </text>
  </svg>
);

const DimensionDivider = ({ label = "SECTION BREAK" }: { label?: string }) => (
  <div className="my-16 flex items-center gap-3 text-[color:var(--concrete)]">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M13 7 L1 7 M1 7 L5 3 M1 7 L5 11" />
    </svg>
    <div className="h-px flex-1 bg-[color:var(--concrete)] opacity-40" />
    <span className="font-mono text-[10px] tracking-[0.3em]">{label}</span>
    <div className="h-px flex-1 bg-[color:var(--concrete)] opacity-40" />
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M1 7 L13 7 M13 7 L9 3 M13 7 L9 11" />
    </svg>
  </div>
);

const SectionHead = ({ code, title, sub }: { code: string; title: string; sub?: string }) => (
  <div className="mb-10">
    <div className="font-mono text-xs tracking-[0.3em] text-[color:var(--amber-brand)]">{code}</div>
    <h2 className="mt-2 font-[Barlow_Condensed] text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {sub && <p className="mt-3 max-w-2xl text-sm text-[color:var(--concrete)]">{sub}</p>}
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

const TOTAL_SHEETS = 8;
const SheetTag = ({ n, total = TOTAL_SHEETS }: { n: number; total?: number }) => (
  <div className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)] sm:bottom-4 sm:right-6">
    SHEET {String(n).padStart(2, "0")} OF {String(total).padStart(2, "0")}
  </div>
);

/* Section shortcuts — reordered per user spec */
const SECTIONS: { id: string; label: string; n: number }[] = [
  { id: "fokus", label: "Focus", n: 1 },
  { id: "about", label: "About", n: 2 },
  { id: "pengalaman", label: "Experience", n: 3 },
  { id: "skills", label: "Skills", n: 4 },
  { id: "organisasi", label: "Organizations", n: 5 },
  { id: "proyek", label: "Projects", n: 6 },
  { id: "sertifikat", label: "Certificates", n: 7 },
  { id: "kontak", label: "Contact", n: 8 },
];

function useDeviceScale() {
  const [scale, setScale] = useState("1 : 1");
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 640) setScale("1 : 1 MOBILE");
      else if (w < 1024) setScale("1 : 1 TABLET");
      else setScale("1 : 1 DESKTOP");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return scale;
}

/* Horizontal-scrolling documentation gallery */
const DocScroller = ({
  items,
  emptyLabel,
  emptyCount = 4,
}: {
  items?: { src: string; caption?: string; type?: "image" | "video" }[];
  emptyLabel?: string;
  emptyCount?: number;
}) => {
  const hasItems = items && items.length > 0;
  return (
    <div className="relative -mx-6 mt-4 sm:mx-0">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-0 [scrollbar-color:var(--amber-brand)_transparent]">
        {hasItems
          ? items!.map((it, i) => (
              <figure
                key={i}
                className="snap-start shrink-0 border border-[color:var(--concrete)]/40 bg-[color:var(--steel)] p-2"
                style={{ width: "min(78vw, 340px)" }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  {it.type === "video" ? (
                    <video
                      src={it.src}
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={it.src}
                      alt={it.caption ?? "Documentation"}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
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
                style={{ width: "min(78vw, 340px)" }}
              >
                <ImagePH w={800} h={1000} label={emptyLabel ?? "UPLOAD SOON"} />
              </div>
            ))}
      </div>
      <div className="mt-1 flex items-center gap-2 px-6 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)] sm:px-0">
        <span>◄ SCROLL →</span>
        <div className="h-px flex-1 bg-[color:var(--concrete)]/40" />
      </div>
    </div>
  );
};

function Index() {
  const deviceScale = useDeviceScale();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bp-grid relative min-h-screen bg-[color:var(--graphite)] text-[color:var(--paper)]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.3em] text-[color:var(--concrete)]">
            <span className="text-[color:var(--amber-brand)]">■</span>
            <span>SHEET 00 / COVER</span>
            <span className="opacity-40">·</span>
            <span>2026</span>
          </div>

          <nav aria-label="Section shortcuts" className="mb-10 border-y border-[color:var(--concrete)]/30 py-3">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group inline-flex items-center gap-2 hover:text-[color:var(--amber-brand)]"
                  >
                    <span className="text-[color:var(--amber-brand)]">{String(s.n).padStart(2, "0")}</span>
                    <span className="uppercase">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div className="reveal">
              <h1 className="font-[Barlow_Condensed] text-5xl font-bold uppercase leading-[0.95] tracking-[0.02em] sm:text-6xl md:text-7xl lg:text-8xl">
                Indra Naufal
                <br />
                <span className="text-[color:var(--paper)]">Adani</span>
              </h1>
              <div className="mt-5 h-px w-24 bg-[color:var(--amber-brand)]" />
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--concrete)]">
                Mechanical Engineering — Energy Conversion &amp; Industrial Inspection
              </p>
              <p className="mt-6 max-w-xl text-base text-[color:var(--paper)]/90 sm:text-lg">
                Bachelor of Mechanical Engineering | NDT &amp; Radiographic Testing · Rotating
                Equipment Maintenance · Automotive · Computational Fluid Dynamics and Finite
                Element Analysis
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-y border-[color:var(--concrete)]/30 py-3 font-mono text-[11px] tracking-[0.12em] text-[color:var(--concrete)]">
                <span><span className="text-[color:var(--amber-brand)]">GPA</span> 3.74/4.00</span>
                <span>UNIVERSITAS NEGERI SURABAYA</span>
                <span>EXP. GRADUATION 2026</span>
                <span>SOLIDWORKS / ANSYS / AUTOCAD / INVENTOR</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#kontak" className="btn-tech primary">Contact →</a>
                <a href="#proyek" className="btn-tech">View Projects</a>
              </div>
            </div>

            <div className="reveal hidden md:block text-[color:var(--concrete)] opacity-70">
              <HeatExchanger />
            </div>
          </div>
        </div>
        <div className="hazard" />
      </section>

      {/* ================= 01 FOKUS ================= */}
      <section id="fokus" className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          code="01 / FOKUS KEAHLIAN"
          title="Focus Areas"
          sub="Tiga bidang inti yang membentuk arah karier — dari analisis termal, integritas peralatan, hingga simulasi rekayasa."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <IconValve />,
              tag: "THERMAL",
              title: "Konversi Energi & Sistem Termal",
              body: "Heat exchanger, perpindahan panas, efisiensi termohidrolik, dan optimasi sistem fluida.",
            },
            {
              icon: <IconPump />,
              tag: "INSPECTION",
              title: "Inspeksi & Integritas Peralatan",
              body: "NDT, Radiographic Testing, visual inspection, dan thermography untuk keandalan aset.",
            },
            {
              icon: <IconInstrument />,
              tag: "SIMULATION",
              title: "Desain & Simulasi Rekayasa",
              body: "FEA, analisis tegangan & safety factor, serta perancangan mesin dengan tools CAD.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="reveal group brackets relative border border-[color:var(--concrete)]/30 bg-[color:var(--steel)] p-6"
            >
              <div className="flex items-start justify-between">
                {c.icon}
                <span className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--rust)]">
                  [{c.tag}]
                </span>
              </div>
              <h3 className="mt-5 font-[Barlow_Condensed] text-xl font-semibold uppercase tracking-[0.06em]">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--concrete)]">{c.body}</p>
            </div>
          ))}
        </div>
        <SheetTag n={1} />
      </section>

      <div className="mx-auto max-w-6xl px-6"><DimensionDivider label="A — A" /></div>

      {/* ================= 02 ABOUT ================= */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-10">
        <SectionHead
          code="02 / ABOUT"
          title="About Me"
          sub="Ringkasan singkat — halaman lengkap tersedia di sheet A / About."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-start">
          <div className="reveal brackets border border-[color:var(--concrete)]/40 bg-[color:var(--steel)] p-2">
            <img
              src={portrait.url}
              alt="Indra Naufal Adani on site"
              className="block h-auto w-full object-cover"
              loading="lazy"
            />
            <div className="mt-2 flex items-center justify-between px-1 pb-1 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
              <span>INDRA N. ADANI</span>
              <span>FIELD — 2025</span>
            </div>
          </div>
          <div className="reveal space-y-4 text-[15px] leading-relaxed text-[color:var(--paper)]/90">
            <p>
              Mechanical Engineering graduate from Surabaya State University (GPA 3.74/4.00) with
              four internships across petrochemical refining, oil &amp; gas workshop, engineering
              simulation, and technical inspection.
            </p>
            <p>
              Focus areas: <strong>NDT &amp; Radiographic Testing</strong>, <strong>rotating
              equipment maintenance</strong>, <strong>CFD &amp; FEA</strong>, and mechanical
              design. Proficient with SolidWorks, Autodesk Inventor, ANSYS Mechanical, and
              AutoCAD. ANSYS Associate Certified in Stress Analysis.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/about" className="btn-tech primary">Read Full About →</Link>
              <a href="#pengalaman" className="btn-tech">See Experience</a>
            </div>
          </div>
        </div>
        <SheetTag n={2} />
      </section>

      <div className="mx-auto max-w-6xl px-6"><DimensionDivider label="B — B" /></div>

      {/* ================= 03 EXPERIENCE ================= */}
      <section id="pengalaman" className="relative mx-auto max-w-6xl px-6 py-10">
        <SectionHead
          code="03 / PENGALAMAN INDUSTRI"
          title="Industry Experience"
          sub="Timeline pipa-vertikal — node aktif menandai pengalaman terkini."
        />
        <ol className="relative ml-3 border-l border-[color:var(--concrete)]/40">
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
            <li key={i} className="reveal relative mb-10 pl-8">
              <span
                className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${
                  e.active
                    ? "border-[color:var(--amber-brand)] bg-[color:var(--amber-brand)]"
                    : "border-[color:var(--concrete)] bg-[color:var(--graphite)]"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--amber-brand)]">
                  {e.date}
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
                  {e.org.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-1 font-[Barlow_Condensed] text-xl font-semibold uppercase tracking-[0.05em]">
                {e.role}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-[color:var(--paper)]/85">{e.body}</p>
              {e.gallery && <DocScroller items={e.gallery} />}
            </li>
          ))}
        </ol>
        <SheetTag n={3} />
      </section>

      <div className="mx-auto max-w-6xl px-6"><DimensionDivider label="C — C" /></div>

      {/* ================= 04 SKILLS ================= */}
      <section id="skills" className="relative mx-auto max-w-6xl px-6 py-10">
        <SectionHead code="04 / KEAHLIAN TEKNIS" title="Technical Skills" />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal overflow-x-auto border border-[color:var(--concrete)]/30 bg-[color:var(--steel)]">
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
                  ["SolidWorks", "CAD / 3D Modeling", "Advanced"],
                  ["Autodesk Inventor", "CAD / 3D Modeling", "Advanced"],
                  ["Ansys", "FEA / Simulation", "Intermediate"],
                  ["AutoCAD", "Drafting 2D", "Advanced"],
                  ["Microsoft Office", "Documentation", "Advanced"],
                  ["Photoshop", "Graphics", "Intermediate"],
                  ["Canva", "Graphics", "Advanced"],
                  ["CapCut", "Video", "Familiar"],
                ].map(([tool, cat, lvl]) => (
                  <tr key={tool} className="border-b border-[color:var(--concrete)]/20">
                    <td className="p-3">{tool}</td>
                    <td className="p-3 text-[color:var(--concrete)]">{cat}</td>
                    <td className="p-3">
                      <span
                        className={
                          lvl === "Advanced"
                            ? "text-[color:var(--amber-brand)]"
                            : lvl === "Intermediate"
                              ? "text-[color:var(--paper)]"
                              : "text-[color:var(--concrete)]"
                        }
                      >
                        {lvl}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="reveal border border-[color:var(--concrete)]/30 bg-[color:var(--steel)] p-6">
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
              ].map((m) => (
                <li key={m} className="flex items-center gap-3">
                  <span className="h-px w-4 bg-[color:var(--amber-brand)]" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SheetTag n={4} />
      </section>

      {/* ================= 05 ORGANISASI ================= */}
      <section id="organisasi" className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHead
          code="05 / ORGANISASI & KOMPETISI"
          title="Organizations & Competitions"
          sub="Slot dokumentasi tersedia — geser ke kanan untuk foto/video kegiatan (akan diisi menyusul)."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              org: "Garnesa Racing Team",
              role: "Divisi Electrical · 2023—2025",
              body:
                "Kendaraan hemat bahan bakar. Peringkat 5 Urban Concept ICE — Shell Eco-Marathon Asia-Pacific & Middle East 2023. Peringkat 5 Urban Diesel — KMHE 2023.",
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
          ].map((o) => (
            <div key={o.org} className="reveal brackets border border-[color:var(--concrete)]/30 bg-[color:var(--steel)] p-6">
              <div className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--amber-brand)]">
                {o.role}
              </div>
              <h3 className="mt-2 font-[Barlow_Condensed] text-lg font-semibold uppercase tracking-[0.05em]">
                {o.org}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--concrete)]">{o.body}</p>
            </div>
          ))}
        </div>

        {/* Documentation slot — placeholders siap diganti dengan foto/video */}
        <div className="mt-10">
          <div className="mb-3 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-[color:var(--concrete)]">
            <span className="text-[color:var(--amber-brand)]">■</span>
            <span>DOCUMENTATION SLOT — RACING · HIMA · FORMAT R</span>
            <div className="h-px flex-1 bg-[color:var(--concrete)]/30" />
          </div>
          <DocScroller emptyLabel="UPLOAD DOKUMENTASI" emptyCount={5} />
        </div>

        <SheetTag n={5} />
      </section>

      <div className="mx-auto max-w-6xl px-6"><DimensionDivider label="D — D" /></div>

      {/* ================= 06 PROYEK ================= */}
      <section id="proyek" className="relative mx-auto max-w-6xl px-6 py-10">
        <SectionHead
          code="06 / PROYEK PILIHAN"
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
              title:
                "Analisis Performa Termohidrolik Shell-and-Tube HE dengan Nanofluida Hibrida CuO–SiO₂ & Helical Baffle",
              problem:
                "Efisiensi perpindahan panas HE konvensional terbatas pada variasi sudut baffle dan konsentrasi fluida kerja.",
              method:
                "Uji variasi sudut helical baffle dan konsentrasi nanofluida hibrida CuO–SiO₂; simulasi CFD & analitik termohidrolik.",
              result:
                "Karakterisasi trade-off pressure drop vs. heat transfer coefficient untuk rekomendasi konfigurasi optimal.",
            },
            {
              tag: "MACHINE DESIGN",
              code: "P.02",
              year: "2025—2026",
              title: "Desain & Pengembangan Mesin Pemotong Kue Kering Puli",
              problem: "Kebutuhan mekanisasi pemotongan kue untuk UMKM dengan output konsisten.",
              method: "Perancangan kinematika, pemilihan material, prototyping SolidWorks & fabrikasi.",
              result: "Prototipe fungsional dengan siklus pemotongan stabil dan aman dioperasikan.",
            },
            {
              tag: "MACHINE DESIGN",
              code: "P.03",
              year: "2024",
              title: "Perencanaan & Pembuatan Mesin Es Rotari",
              problem: "Kapasitas produksi es batu skala kecil dengan konsumsi energi rendah.",
              method: "Desain sistem rotari, seleksi motor & bearing, uji beban dan siklus operasi.",
              result: "Mesin rotari beroperasi kontinu dengan pemakaian daya sesuai target.",
            },
            {
              tag: "FEA",
              code: "P.04",
              year: "2023",
              title: "Prototipe Alat Cetak Briket — FEA",
              problem: "Validasi struktur cetakan briket terhadap beban tekan siklik.",
              method: "Analisis tegangan, regangan, safety factor, dan displacement menggunakan Ansys.",
              result: "Struktur memenuhi safety factor > 1.5 pada kondisi beban desain.",
            },
          ].map((p) => (
            <article
              key={p.code}
              className={`reveal brackets relative border ${
                p.featured ? "border-[color:var(--amber-brand)]/60" : "border-[color:var(--concrete)]/30"
              } bg-[color:var(--steel)]`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-6 bg-[color:var(--amber-brand)] px-2 py-0.5 font-mono text-[10px] tracking-[0.25em] text-[color:var(--graphite)]">
                  FEATURED
                </div>
              )}
              <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
                    <span className="text-[color:var(--rust)]">[{p.tag}]</span>
                    <span>{p.code}</span>
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
                    ].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[92px_1fr] gap-4 border-t border-[color:var(--concrete)]/20 pt-3">
                        <dt className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--amber-brand)]">{k}</dt>
                        <dd className="text-[color:var(--paper)]/90">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="p-6 sm:p-8 lg:pl-0">
                  <ImagePH w={1600} h={900} label={`PROJECT ${p.code}`} />
                </div>
              </div>
            </article>
          ))}
        </div>
        <SheetTag n={6} />
      </section>

      {/* ================= 07 CERTS ================= */}
      <section id="sertifikat" className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHead code="07 / SERTIFIKAT & PELATIHAN" title="Certificates & Training" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["AWS Cloud Essentials", "2024"],
            ["Seminar Nasional Perencanaan Mesin — Autodesk", "2024"],
            ["Mekanik Academy Free Course", "2024"],
            ["Pengabdian Masyarakat — Desa Ngimbang", "2024"],
          ].map(([name, year]) => (
            <div key={name} className="reveal brackets border border-[color:var(--concrete)]/30 bg-[color:var(--steel)] p-5">
              <div className="font-mono text-[10px] tracking-[0.25em] text-[color:var(--amber-brand)]">{year}</div>
              <div className="mt-2 font-[Barlow_Condensed] text-base font-semibold uppercase leading-tight tracking-[0.05em]">
                {name}
              </div>
            </div>
          ))}
        </div>
        <SheetTag n={7} />
      </section>

      {/* ================= 08 CONTACT ================= */}
      <section id="kontak" className="relative border-y border-[color:var(--concrete)]/30 bg-[color:var(--graphite)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            code="08 / KONTAK"
            title="Get in Touch"
            sub="Terbuka untuk peluang fresh graduate di berbagai sektor rekayasa dan industri — mulai dari desain, analisis, manufaktur, hingga inspeksi dan pemeliharaan."
          />
          <a
            href="mailto:indraadani654@gmail.com"
            className="reveal block break-words font-[Barlow_Condensed] text-3xl font-bold uppercase tracking-[0.02em] text-[color:var(--amber-brand)] hover:underline sm:text-5xl md:text-6xl"
          >
            indraadani654@gmail.com
          </a>
          <div className="mt-6 grid gap-3 font-mono text-xs tracking-[0.15em] text-[color:var(--concrete)] sm:grid-cols-2">
            <div>PHONE — <span className="text-[color:var(--paper)]">085546381640</span></div>
            <div>LOCATION — <span className="text-[color:var(--paper)]">TUBAN, ID</span></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/indranaufaladani/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech primary"
            >
              LinkedIn ↗
            </a>
            <a href="#" className="btn-tech">Download CV ↓</a>
          </div>
        </div>
        <SheetTag n={8} />
      </section>

      {/* ================= FOOTER TITLE BLOCK ================= */}
      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="border border-[color:var(--concrete)]/50 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--paper)]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              ["CREATED BY", "INDRA NAUFAL ADANI"],
              ["PROJECT", "PERSONAL PORTFOLIO"],
              ["SCALE", deviceScale],
              ["BIRTHDAY DATE", "13 JANUARI 2004"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`border-[color:var(--concrete)]/50 p-3 ${
                  i < 3 ? "border-b lg:border-r lg:border-b-0" : ""
                } ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                  i % 2 === 0 ? "border-r lg:border-r" : ""
                }`}
              >
                <div className="text-[color:var(--concrete)]">{k}</div>
                <div className="mt-1 text-[color:var(--amber-brand)]">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[10px] tracking-[0.2em] text-[color:var(--concrete)]">
          © 2026 INDRA NAUFAL ADANI — ALL DRAWINGS ARE INDICATIVE
        </p>
      </footer>
    </main>
  );
}
