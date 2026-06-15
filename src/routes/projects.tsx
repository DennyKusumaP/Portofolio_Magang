import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Proyek — Denny Kusuma Putra" },
      {
        name: "description",
        content:
          "Kumpulan proyek Web Development dan Robotika oleh Denny Kusuma Putra, termasuk Robot Sepak Bola Humanoid dan UI/UX Design.",
      },
      { property: "og:title", content: "Proyek — Denny Kusuma Putra" },
      { property: "og:description", content: "Web, Robotika, dan UI/UX projects." },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  accent: "primary" | "secondary";
  url?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    title: "Sistem Kasir Kas-Flow UMKM",
    category: "Web Development",
    description:
      "Sistem kasir terintegrasi untuk UMKM dengan fitur pencatatan transaksi, manajemen stok, dan laporan keuangan otomatis.",
    tags: ["React", "JavaScript", "Database"],
    year: "2026",
    accent: "primary",
    url: "https://github.com/DennyKusumaP/KAS-FLOW-UMKM.git",
  },
  {
    title: "Keuangan Pribadi",
    category: "Web Development",
    description:
      "Aplikasi manajemen keuangan pribadi untuk pencatatan pemasukan, pengeluaran, dan visualisasi laporan keuangan harian/bulanan.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    year: "2025",
    accent: "primary",
    url: "https://github.com/DennyKusumaP/keuangan_pribadi.git",
  },
  {
    title: "Robot Sepak Bola Humanoid",
    category: "Robotika",
    description:
      "Memimpin tim riset & pengembangan robot humanoid pemain sepak bola: Mulai dari desain mekanik 3D serta mempelajari kendali berbasis C++/Python untuk Kontes Robot Indonesia.",
    tags: ["C++", "Python", "CAD", "Team Lead"],
    year: "2025-Sekarang",
    accent: "primary",
    url: "https://drive.google.com/drive/folders/1xPxg7mtwNtXzAQHChk_J1PuYf-6GH11F",
  },
  {
    title: "EasyWorkout",
    category: "UI/UX Design",
    description:
      "Desain aplikasi fitness dengan prototype interaktif di Figma, mencakup alur latihan, tracking progres, dan panduan gerakan olahraga.",
    tags: ["Figma", "Prototype", "Mobile App"],
    year: "2025",
    accent: "secondary",
    url: "https://www.figma.com/proto/bR7QwO188l4TfFtakuXFzp/EasyWorkout?node-id=0-1&t=IKbyDiPRvAGfCzgT-1",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="container-base pt-20">
        <span className="section-eyebrow">Portofolio</span>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">
          Proyek <span className="text-gradient">terkurasi</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Selalu mencari cara baru untuk menggabungkan kode, desain, dan robotika menjadi sesuatu yang berguna.
        </p>
      </section>

      <section className="container-base mt-12 grid gap-6 pb-10 md:grid-cols-2">
        {projects.map((p) => {
          const isFigma = p.url?.includes("figma.com");
          const isGoogleDrive = p.url?.includes("drive.google.com");
          const linkLabel = p.url
            ? p.linkLabel ?? (isFigma ? "Lihat di Figma" : isGoogleDrive ? "Lihat di Google Drive" : "Lihat di GitHub")
            : "Segera hadir";
          const CardWrapper = p.url ? "a" : "div";
          const cardProps = p.url
            ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <CardWrapper
              key={p.title}
              {...cardProps}
              className="surface-card group block relative overflow-hidden p-7 transition hover:-translate-y-1 hover:border-primary/40 no-underline"
            >
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition group-hover:scale-125 ${
                  p.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"
                }`}
              />
              <div className="relative flex items-center justify-between">
                <span className="chip font-mono">{p.category}</span>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
              </div>
              <h2 className="relative mt-6 font-display text-2xl font-semibold group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="relative mt-3 text-sm text-muted-foreground">{p.description}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="relative mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary">
                {linkLabel}
                {p.url && <span className="transition group-hover:translate-x-1">→</span>}
              </div>
            </CardWrapper>
          );
        })}
      </section>

      <section className="container-base py-16 text-center">
        <p className="text-muted-foreground">Tertarik dengan salah satu proyek?</p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow-ring"
        >
          Diskusikan dengan saya →
        </Link>
      </section>
    </SiteLayout>
  );
}
