import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "../assets/indra-portrait.png.asset.json";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Indra Naufal Adani" },
      {
        name: "description",
        content:
          "About Indra Naufal Adani — Mechanical Engineering graduate from Surabaya State University, focused on inspection, maintenance, and simulation.",
      },
      { property: "og:title", content: "About — Indra Naufal Adani" },
      {
        property: "og:description",
        content:
          "Mechanical Engineering graduate with experience in NDT, refinery maintenance, and finite element analysis.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://indranaufaladaniportfolio.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://indranaufaladaniportfolio.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: "https://indranaufaladaniportfolio.lovable.app/about",
          name: "About Indra Naufal Adani",
          mainEntity: {
            "@type": "Person",
            name: "Indra Naufal Adani",
            jobTitle: "Mechanical Engineer",
            alumniOf: "Surabaya State University",
            knowsAbout: [
              "Non-destructive testing",
              "Refinery maintenance",
              "Finite element analysis",
              "Heat exchanger performance",
            ],
            sameAs: [
              "https://www.linkedin.com/in/indranaufaladani/",
              "https://instagram.com/indraadani_",
              "https://www.tiktok.com/@indraadani_",
            ],
          },
        }),
      },
    ],
  }),

});

function About() {
  return (
    <main className="bp-grid relative min-h-screen bg-[color:var(--graphite)] text-[color:var(--paper)]">
      <section className="relative mx-auto max-w-[1440px] px-6 lg:px-12 py-16 sm:py-24">
        <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-[color:var(--concrete)]">
          <Link to="/" className="hover:text-[color:var(--amber-brand)]">← BACK</Link>
          <span className="opacity-40">·</span>
          <span className="text-[color:var(--amber-brand)]">■</span>
          <span>SHEET A / ABOUT</span>
        </div>

        <div className="font-mono text-xs tracking-[0.3em] text-[color:var(--amber-brand)]">
          A / ABOUT
        </div>
        <h1 className="mt-2 font-[Barlow_Condensed] text-5xl font-bold uppercase tracking-[0.04em] sm:text-6xl md:text-7xl">
          About
        </h1>
        <div className="mt-4 h-px w-24 bg-[color:var(--amber-brand)]" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-start">
          {/* Portrait — LEFT */}
          <div className="reveal brackets relative border border-[color:var(--concrete)]/40 bg-[color:var(--steel)] p-2">
            <img
              src={portrait.url}
              alt="Indra Naufal Adani on-site at industrial facility"
              className="block h-auto w-full object-cover"
              loading="eager"
            />
            <div className="mt-2 flex items-center justify-between px-1 pb-1 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
              <span>INDRA N. ADANI</span>
              <span>FIELD — 2025</span>
            </div>
          </div>

          {/* Text — RIGHT */}
          <div className="reveal space-y-5 text-[15px] leading-relaxed text-[color:var(--paper)]/90">
            <p>
              Hello, I&rsquo;m <strong className="text-[color:var(--paper)]">Indra Naufal Adani</strong>, a Mechanical
              Engineering graduate from Surabaya State University (GPA 3.72/4.00). Four internships at a
              petrochemical refinery, an oil and gas workshop, a simulation consulting firm, and a technical
              inspection contractor have taught me one thing: the numbers on the drawings and the numbers in
              the field almost never match&mdash;and the interesting part is explaining why. My experience
              includes NDT inspections and radiography at <strong>PT Robutech</strong>, industrial machinery
              overhauls at <strong>PPSDM Migas Cepu</strong>, preventive maintenance at a refinery at{" "}
              <strong>PT Trans-Pacific Petrochemical Indotama</strong>, and finite element analysis at{" "}
              <strong>PT CADFEM Simulation Technology Indonesia</strong>.
            </p>
            <p>
              My capstone project evaluated the thermohydraulic performance of a shell-and-tube heat
              exchanger using a CuO&ndash;SiO&#8322; hybrid nanofluid at varying helical baffle angles, and
              measured the trade-off between increased heat transfer and pressure drop. I am proficient in{" "}
              <strong>SolidWorks</strong>, <strong>Autodesk Inventor</strong>, and{" "}
              <strong>ANSYS Mechanical</strong>, and hold the{" "}
              <strong>ANSYS Associate Certification in Stress Analysis</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/" hash="proyek" className="btn-tech primary">View Projects →</Link>
              <Link to="/" hash="kontak" className="btn-tech">Contact</Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-4 right-6 font-mono text-[10px] tracking-[0.25em] text-[color:var(--concrete)]">
          SHEET A OF 07
        </div>
      </section>
    </main>
  );
}
