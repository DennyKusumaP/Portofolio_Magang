import { createFileRoute, Link } from "@tanstack/react-router";
import Foto_Profil from "@/assets/Foto-Profil.jpeg";
import Background_Profil from "@/assets/Background-Profil.jpg";
import DewoRoboticLogo from "@/assets/Logo-Dewo.png";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denny Kusuma Putra — Web Developer & Robotics Enthusiast" },
      {
        name: "description",
        content:
          "Portofolio Denny Kusuma Putra, mahasiswa S1 Teknik Informatika Universitas Negeri Surabaya dengan minat Web Development dan Robotika.",
      },
      { property: "og:title", content: "Denny Kusuma Putra — Portofolio" },
      {
        property: "og:description",
        content: "Web Developer & Ketua Divisi Robot Sepak Bola Humanoid Dewo Robotic UNESA.",
      },
      { property: "og:image", content: Foto_Profil },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={Background_Profil}
        alt=""
        aria-hidden
        width={1600}
        height={600}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="container-base relative grid gap-8 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
        <div>
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Mahasiswa · Web Dev · Robotika
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Halo, saya <span className="text-gradient">Denny Kusuma Putra</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Mahasiswa S1 Teknik Informatika Universitas Negeri Surabaya. Tertarik di bidang
            <span className="text-foreground"> Desain </span> dan 
            <span className="text-foreground"> Web Development</span> dan aktif memimpin tim
            <span className="text-foreground"> Robot Sepak Bola Humanoid</span> di Dewo Robotic UNESA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow-ring"
            >
              Lihat Proyek →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60"
            >
              Hubungi Saya
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["HTML", "JavaScript", "Python", "C++", "Figma", "UI/UX"].map((t) => (
              <span key={t} className="chip font-mono">{t}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-r from-primary/30 to-secondary/20 blur-3xl" />
          <div className="surface-card overflow-hidden rounded-3xl p-2">
            <img
              src={Foto_Profil}
              alt="Foto Denny Kusuma Putra"
              width={768}
              height={768}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
          <div className="surface-card absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 max-w-max whitespace-nowrap">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary/20 text-secondary overflow-hidden">
              <img src={DewoRoboticLogo} alt="Dewo Robotic" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="text-sm font-semibold">Ketua Divisi</p>
              <p className="text-xs text-muted-foreground">Robot Sepak Bola Humanoid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container-base py-8">
      <div className="mb-8 max-w-2xl">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Profile() {
  return (
    <Section id="profil" eyebrow="01 · Profil" title="Tentang Saya">
      <div className="surface-card p-6 text-lg leading-relaxed text-muted-foreground">
        Mahasiswa Semester 4 di Universitas Negeri Surabaya yang menempuh Program Studi
        <span className="text-foreground"> S1 Teknik Informatika</span>. Memiliki minat di bidang
        <span className="text-foreground"> Web Development serta Desain 3D</span> dan menguasai bahasa pemrograman
        <span className="text-foreground"> HTML, JavaScript, dan Python</span>. Aktif menjabat sebagai
        ketua divisi dalam organisasi Dewo Robotic UNESA. Siap berkontribusi dan bekerja sama dalam
        tim maupun bekerja secara mandiri.
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section eyebrow="02 · Pendidikan" title="Latar Belakang Pendidikan">
      <div className="surface-card flex flex-col gap-2 p-6">
        <div className="flex flex-col gap-4">
          <div className="md:flex md:items-center md:justify-between md:gap-4">
            <div>
              <h3 className="text-xl font-semibold">Universitas Negeri Surabaya</h3>
              <p className="text-muted-foreground">S1 Teknik Informatika</p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-medium">Surabaya, Indonesia</p>
              <p className="font-mono text-sm text-muted-foreground">Juli 2024 — Sekarang</p>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-between md:gap-4">
            <div>
              <h3 className="text-xl font-semibold">SMAN 1 Waru</h3>
              <p className="text-muted-foreground">IPA</p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-medium">Sidoarjo, Indonesia</p>
              <p className="font-mono text-sm text-muted-foreground">Juli 2021 — Juli 2024</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const experiences = [
  {
    role: "Ketua Divisi Kontes Robot Sepak Bola Humanoid",
    org: "Dewo Robotic UNESA",
    place: "Surabaya, Indonesia",
    date: "Januari 2026 — Sekarang",
    points: [
      "Memimpin dan mengkoordinasikan hasil riset tim Robot Sepak Bola Humanoid dalam persiapan dan pelaksanaan kompetisi robotika.",
      "Melatih dan membimbing anggota divisi dalam pemahaman teknis robotika, mulai dari SOP hingga kalibrasi pergerakan robot.",
    ],
  },
  {
    role: "Anggota Divisi Kontes Robot Sepak Bola Humanoid",
    org: "Dewo Robotic UNESA",
    place: "Surabaya, Indonesia",
    date: "Januari 2025 — Januari 2026",
    points: [
      "Merancang dan memfabrikasi komponen mekanik robot humanoid menggunakan perangkat desain teknik untuk memenuhi spesifikasi kompetisi.",
      "Melakukan pemahaman pada kode program kendali robot humanoid menggunakan bahasa pemrograman C++/Python dalam lingkungan pengembangan robotik.",
    ],
  },
];

function Experience() {
  return (
    <Section eyebrow="03 · Pengalaman" title="Pengalaman Organisasi">
      <div className="relative space-y-4 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-6">
        {experiences.map((exp) => (
          <div key={exp.role} className="surface-card relative ml-10 p-4 md:ml-14">
            <div className="md:flex md:items-center md:justify-between md:gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-primary">{exp.org}</p>
                <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
              </div>
              <div className="text-left md:text-right">
                <p className="font-medium">{exp.place}</p>
                <p className="font-mono text-sm text-muted-foreground">{exp.date}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

const skills = [
  { title: "Tools", items: ["Figma", "VS Code", "CAD", "Microsoft Office", "Canva"] },
  { title: "Bahasa Pemrograman", items: ["Python", "C++", "JavaScript", "HTML"] },
  { title: "Soft Skills", items: ["Koordinasi Tim", "UI/UX Design", "Desain 3D", "Kolaborasi"] },
];

function Skills() {
  return (
    <Section eyebrow="04 · Kemampuan" title="Kemampuan & Tools">
      <div className="grid gap-3 md:grid-cols-3">
        {skills.map((g) => (
          <div key={g.title} className="surface-card p-6">
            <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className="chip">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section eyebrow="05 · Sertifikasi" title="Pelatihan & Sertifikasi">
      <div className="surface-card flex items-start gap-2 p-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary/20 text-secondary">
          ✓
        </span>
        <div>
          <h3 className="font-semibold">Red Hat Training — Getting Started with Linux Fundamentals</h3>
          <p className="text-sm text-muted-foreground">RH104 — RHA · Ver. 9.1</p>
        </div>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section className="container-base py-14">
      <div className="surface-card relative overflow-hidden p-10 text-center md:p-16">
        <div className="hero-bg absolute inset-0" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Mari berkolaborasi <span className="text-gradient">bersama.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tertarik mendiskusikan proyek, kolaborasi, atau peluang magang? Saya selalu terbuka untuk berbincang.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-ring"
          >
            Hubungi Saya →
          </Link>
        </div>
      </div>
    </section>
  );
}
