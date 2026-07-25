import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";


export const Route = createFileRoute("/")({
  component: Index,
});

/* ============================================================
   P&ID line-art icons (stroke only, currentColor)
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

/* Shell-and-tube outline for hero backdrop */
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

/* Dimension divider */
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

/* Section header with sheet code */
const SectionHead = ({ code, title, sub }: { code: string; title: string; sub?: string }) => (
  <div className="mb-10">
    <div className="font-mono text-xs tracking-[0.3em] text-[color:var(--amber-brand)]">{code}</div>
    <h2 className="mt-2 font-[Barlow_Condensed] text-3xl font-bold uppercase tracking-[0.08em] sm:text-4xl md:text-5xl">
      {title}
    </h2>
    {sub && <p className="mt-3 max-w-2xl text-sm text-[color:var(--concrete)]">{sub}</p>}
  </div>
);

/* Image placeholder */
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

/* Sheet code marker — bottom-right corner of each section */
const SheetTag = ({ n, total = 7 }: { n: number; total?: number }) => (
  <div className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)] sm:bottom-4 sm:right-6">
    SHEET {String(n).padStart(2, "0")} OF {String(total).padStart(2, "0")}
  </div>
);

/* Section shortcuts for hero nav */
const SECTIONS: { id: string; label: string; n: number }[] = [
  { id: "fokus", label: "Focus", n: 1 },
  { id: "proyek", label: "Projects", n: 2 },
  { id: "pengalaman", label: "Experience", n: 3 },
  { id: "organisasi", label: "Organizations", n: 4 },
  { id: "skills", label: "Skills", n: 5 },
  { id: "sertifikat", label: "Certificates", n: 6 },
  { id: "kontak", label: "Contact", n: 7 },
];

/* Detect device class for footer SCALE */
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


function Index() {
  const deviceScale = useDeviceScale();
  // Scroll reveal
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
      {/* EDIT: Hero — nama, headline, positioning */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16">
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.3em] text-[color:var(--concrete)]">
            <span className="text-[color:var(--amber-brand)]">■</span>
            <span>SHEET 00 / COVER</span>
            <span className="opacity-40">·</span>
            <span>2026</span>
          </div>

          {/* Section shortcuts — jump to any sheet */}
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
              <li>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 uppercase text-[color:var(--paper)] hover:text-[color:var(--amber-brand)]"
                >
                  <span className="text-[color:var(--amber-brand)]">A</span>
                  <span>About</span>
                </Link>
              </li>
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
                Mechanical engineering student focused on thermal systems, rotating equipment, and
                non-destructive inspection in oil &amp; gas and process industries.
              </p>

              {/* Data strip */}
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

            {/* Hero drawing */}
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

      {/* ================= 02 PROYEK ================= */}
      <section id="proyek" className="relative mx-auto max-w-6xl px-6 py-10">
        <SectionHead
          code="02 / PROYEK PILIHAN"
          title="Selected Projects"
          sub="Studi kasus rekayasa — dirangkum dalam alur Masalah → Metode → Hasil."
        />

        {/* EDIT: proyek — tambah/kurangi item di array berikut */}
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
                  {/* EDIT: ganti dengan <img /> ketika sudah punya render/foto */}
                  <ImagePH w={1600} h={900} label={`PROJECT ${p.code}`} />
                </div>
              </div>
            </article>
          ))}
        </div>
        <SheetTag n={2} />
      </section>

      <div className="mx-auto max-w-6xl px-6"><DimensionDivider label="B — B" /></div>

      {/* ================= 03 PENGALAMAN ================= */}
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
            },
            {
              role: "Workshop Mechanic",
              org: "PPSDM Migas Cepu",
              date: "MAR — APR 2025",
              body: "Prime mover, pompa, lifting system, permesinan, thermography, dan analisis komposisi kimia.",
            },
            {
              role: "Maintenance Execute",
              org: "PT Trans Pacific Petrochemical Indotama",
              date: "JAN — FEB 2025",
              body: "Pemeliharaan mesin industri migas, pengumpulan & analisis data proses.",
            },
            {
              role: "FEA Engineer",
              org: "PT CADFEM Simulation Technology Indonesia",
              date: "SEP — DES 2024",
              body: "Simulasi Finite Element Analysis untuk komponen struktural dan validasi desain.",
            },
            {
              role: "Research Intern — Kedaireka",
              org: "Riset Kendaraan Listrik Multifungsi",
              date: "AGU — DES 2024",
              body: "Kontribusi pada riset perancangan kendaraan listrik multifungsi.",
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
            </li>
          ))}
        </ol>
        <SheetTag n={3} />
      </section>

      {/* ================= 04 ORGANISASI ================= */}
      <section id="organisasi" className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHead code="04 / ORGANISASI & KOMPETISI" title="Organizations & Competitions" />
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
        <SheetTag n={4} />
      </section>

      <div className="mx-auto max-w-6xl px-6"><DimensionDivider label="C — C" /></div>

      {/* ================= 05 SKILLS ================= */}
      <section id="skills" className="relative mx-auto max-w-6xl px-6 py-10">
        <SectionHead code="05 / KEAHLIAN TEKNIS" title="Technical Skills" />
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
        <SheetTag n={5} />
      </section>

      {/* ================= 06 CERTS ================= */}
      <section id="sertifikat" className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHead code="06 / SERTIFIKAT & PELATIHAN" title="Certificates & Training" />
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
        <SheetTag n={6} />
      </section>

      {/* ================= 07 CONTACT ================= */}
      <section id="kontak" className="relative border-y border-[color:var(--concrete)]/30 bg-[color:var(--graphite)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead code="07 / KONTAK" title="Get in Touch" sub="Terbuka untuk peluang fresh graduate — kilang, pembangkit, dan pabrik proses." />
          <a
            href="mailto:indraadani654@gmail.com"
            className="reveal block break-words font-[Barlow_Condensed] text-3xl font-bold uppercase tracking-[0.02em] text-[color:var(--amber-brand)] hover:underline sm:text-5xl md:text-6xl"
          >
            indraadani654@gmail.com
          </a>
          <div className="mt-6 grid gap-3 font-mono text-xs tracking-[0.15em] text-[color:var(--concrete)] sm:grid-cols-2">
            <div>PHONE — <span className="text-[color:var(--paper)]">085546381640</span></div>
            <div>LOCATION — <span className="text-[color:var(--paper)]">SURABAYA, ID</span></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/indranaufaladani"
              target="_blank"
              rel="noreferrer"
              className="btn-tech primary"
            >
              LinkedIn ↗
            </a>
            {/* EDIT: ganti href dengan link CV PDF Anda */}
            <a href="#" className="btn-tech">Download CV ↓</a>
          </div>
        </div>
        <SheetTag n={7} />
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
