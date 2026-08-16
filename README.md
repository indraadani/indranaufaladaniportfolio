# Remix of Remix of Indra's Blueprint

Buatkan personal portfolio website satu halaman (single-page, responsive) untuk 
seorang fresh graduate Teknik Mesin yang memposisikan diri di bidang KONVERSI ENERGI, 
INSPEKSI TEKNIK, dan MAINTENANCE INDUSTRI PROSES (kilang, pembangkit, pabrik).

=== IDENTITAS ===
Nama: Indra Naufal Adani
Headline: Mechanical Engineering — Energy Conversion & Industrial Inspection
Kontak: indraadani654@gmail.com | 085546381640 | linkedin.com/in/indranaufaladani | Surabaya, ID

=== ARAH VISUAL ===
Tema: "industrial process plant" bertemu "lembar gambar teknik". 
Bukan steampunk, BUKAN ornamen gear/mur-baut kartun. Rujukannya adalah 
engineering drawing sheet, ruang kontrol kilang, dan arsitektur industrial 
(beton ekspos, baja, garis bersih).

Palet (pakai persis ini sebagai CSS variables):
  --graphite:    #16191C   (background utama, gelap)
  --steel:       #23282D   (surface / card)
  --concrete:    #8B9196   (teks sekunder, garis)
  --paper:       #EDEBE6   (teks utama di background gelap)
  --amber:       #F0A500   (aksen utama — warna safety helmet, dipakai HEMAT: 
                            angka, garis aktif, hover, highlight)
  --rust:        #A8482A   (aksen sekunder, untuk tag/kategori)
  --blueprint:   #4A6E8A   (khusus garis grid & elemen teknis)
Rasio: ~70% netral gelap, 20% paper, 10% aksen. Amber tidak boleh jadi 
background blok besar.

Tipografi:
  Heading: sans-serif condensed, uppercase, letter-spacing lebar 
           (Archivo / Barlow Condensed / Oswald)
  Label & data: monospace (JetBrains Mono / IBM Plex Mono) — untuk nomor, 
           tanggal, kode seksi, satuan
  Body: Inter, ukuran nyaman dibaca, line-height 1.6

=== ORNAMEN TEKNIK (ini yang membangun tema, bukan gear) ===
1. Background grid blueprint tipis (1px, --blueprint, opacity 6-8%), 
   grid besar 80px dengan sub-grid 20px.
2. Setiap seksi diberi kode monospace di kiri atas: "01 / PROFIL", 
   "02 / FOKUS KEAHLIAN", dst. — seperti penomoran sheet.
3. Garis dimensi ala drawing (garis dengan panah di kedua ujung + angka) 
   sebagai pembatas antar seksi. Sesekali saja, jangan di setiap divider.
4. Simbol P&ID sederhana berbentuk SVG line-art (segitiga pompa, silang valve, 
   lingkaran instrumen, silinder vessel/heat exchanger) sebagai ikon kategori. 
   Gaya: stroke 1.5px, tanpa fill, warna --concrete, jadi --amber saat hover.
5. TITLE BLOCK di footer — tabel bergaris ala kop gambar teknik berisi:
   DRAWN BY: INDRA N. ADANI | PROJECT: PERSONAL PORTFOLIO | 
   SCALE: 1:1 | DATE: 2026 | SHEET: 01 OF 01 | REV: 01
6. Garis hazard-stripe (diagonal amber/graphite 45°) hanya SATU kali, 
   sebagai aksen tipis 4px di bawah hero.
7. Corner brackets [ ] di sudut card project, seperti crop mark.
Semua ornamen dibuat dengan CSS/SVG inline — jangan pakai gambar eksternal.

=== STRUKTUR HALAMAN ===
HERO
  Nama besar (condensed uppercase), headline, satu kalimat positioning:
  "Mechanical engineering student focused on thermal systems, rotating 
  equipment, and non-destructive inspection in oil & gas and process industries."
  Sertakan strip data monospace: GPA 3.72/4.00 · Universitas Negeri Surabaya · 
  Expected graduation 2026 · SolidWorks / Ansys / AutoCAD / Inventor
  Latar: grid blueprint + SVG line-art outline penampang shell-and-tube heat 
  exchanger di sisi kanan, opacity rendah, tidak mengganggu teks.

01 / FOKUS KEAHLIAN — tiga kolom card dengan ikon P&ID:
  · Konversi Energi & Sistem Termal (heat exchanger, perpindahan panas, 
    efisiensi termohidrolik)
  · Inspeksi & Integritas Peralatan (NDT, Radiographic Testing, visual 
    inspection, thermography)
  · Desain & Simulasi Rekayasa (FEA, analisis tegangan & safety factor, 
    perancangan mesin)

02 / PROYEK PILIHAN — card besar, format studi kasus (Masalah → Metode → Hasil).
  Sediakan slot untuk gambar/render 16:9 di setiap card (placeholder abu-abu 
  bergaris silang ala "IMAGE PLACEHOLDER" gambar teknik).
  a) Tugas Akhir — Analisis performa termohidrolik shell-and-tube heat 
     exchanger dengan nanofluida hibrida CuO–SiO2 dan helical baffle pada 
     variasi sudut dan konsentrasi. Tandai sebagai proyek unggulan.
  b) Desain & Pengembangan Mesin Pemotong Kue Kering Puli (2025–2026)
  c) Perencanaan & Pembuatan Mesin Es Rotari (2024)
  d) Prototipe Alat Cetak Briket — analisis tegangan, regangan, safety 
     factor, displacement (2023)
  Tiap card punya tag kecil berwarna --rust: [THERMAL] [MACHINE DESIGN] [FEA]

03 / PENGALAMAN INDUSTRI — timeline vertikal bergaya diagram pipa: 
  garis vertikal dengan node bulat (node aktif berwarna amber).
  · PT Robutech — Inspection Engineer Intern (Apr–Agu 2025): NDT, RT, visual 
    inspection, sertifikasi peralatan di pembangkit listrik & pabrik
  · PPSDM Migas Cepu — Workshop Mechanic (Mar–Apr 2025): prime mover, pompa, 
    lifting system, permesinan, thermography, analisis komposisi kimia
  · PT Trans Pacific Petrochemical Indotama — Maintenance Execute 
    (Jan–Feb 2025): pemeliharaan mesin industri migas, pengumpulan & 
    analisis data proses
  · PT CADFEM Simulation Technology Indonesia — FEA (Sep–Des 2024)
  · Magang Kedaireka — Riset kendaraan listrik multifungsi (Agu–Des 2024)
  CATATAN: JANGAN masukkan pengalaman kerja F&B ke halaman utama.

04 / ORGANISASI & KOMPETISI
  · Garnesa Racing Team — Divisi Electrical (2023–2025): kendaraan hemat 
    bahan bakar. Peringkat 5 Urban Concept ICE, Shell Eco-Marathon 
    Asia-Pacific & Middle East 2023. Peringkat 5 Urban Diesel, KMHE 2023.
  · HIMA Teknik Mesin UNESA — Kominfo (2023–2024)
  · FORMAT R UNESA — Kominfo (2023–2025)

05 / KEAHLIAN TEKNIS
  Jangan pakai progress bar persentase (tidak bermakna). Gunakan tabel 
  monospace bergaris ala spec sheet: kolom TOOL | KATEGORI | LEVEL 
  (Advanced / Intermediate / Familiar).
  SolidWorks, Autodesk Inventor, Ansys, AutoCAD, Microsoft Office, 
  Photoshop, Canva, CapCut.
  Di samping tabel: daftar kompetensi metode — NDT, Radiographic Testing, 
  Visual Inspection, Thermography, Finite Element Analysis, Machining 
  (turning, milling, shaping).

06 / SERTIFIKAT & PELATIHAN
  Grid card kecil: AWS Cloud Essentials (2024), Seminar Nasional Perencanaan 
  Mesin Autodesk (2024), Mekanik Academy Free Course (2024), Pengabdian 
  Masyarakat Desa Ngimbang (2024).

07 / KONTAK — blok gelap, email besar sebagai link amber, tombol LinkedIn 
  dan "Download CV" bergaya tombol teknis (border 1px, sudut siku, 
  monospace uppercase).

FOOTER: title block seperti dijelaskan di atas.

=== PERSYARATAN TEKNIS ===
- Satu file HTML dengan CSS dan JS inline. Tanpa localStorage/sessionStorage.
- Responsive: mobile 1 kolom, tablet 2, desktop 3. Uji di lebar 375px.
- Scroll-reveal halus (fade + translateY 16px). Tanpa animasi berlebihan.
- Semua teks konten diletakkan dalam struktur yang mudah diganti — beri 
  komentar HTML <!-- EDIT: ... --> di setiap blok konten agar saya bisa 
  menambah proyek dan mengganti gambar nanti.
- Sediakan minimal 6 slot placeholder gambar dengan rasio & ukuran tertera 
  di dalamnya (misal "1600 x 900").
- Kontras teks minimal WCAG AA.
- Bahasa konten: Indonesia, dengan istilah teknis dibiarkan dalam bahasa Inggris.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://indranaufaladaniportfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fed32025-a539-4713-962b-47a1ef82fb1a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
