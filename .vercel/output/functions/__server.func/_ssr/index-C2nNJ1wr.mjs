import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { F as Foto_Profil } from "./router-tTfQkKUT.mjs";
import { S as SiteLayout } from "./SiteLayout-CqjZ4L2Z.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const Background_Profil = "/assets/Background-Profil-Cw7H008t.jpg";
const DewoRoboticLogo = "/assets/Logo-Dewo-ChyNKATp.png";
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Profile, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Background_Profil, alt: "", "aria-hidden": true, width: 1600, height: 600, className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-base relative grid gap-8 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "section-eyebrow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          "Mahasiswa · Web Dev · Robotika"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl", children: [
          "Halo, saya ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Denny Kusuma Putra" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: [
          "Mahasiswa S1 Teknik Informatika Universitas Negeri Surabaya. Tertarik di bidang",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Desain " }),
          " dan",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Web Development" }),
          " dan aktif memimpin tim",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Robot Sepak Bola Humanoid" }),
          " di Dewo Robotic UNESA."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow-ring", children: "Lihat Proyek →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-border bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60", children: "Hubungi Saya" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap gap-2", children: ["HTML", "JavaScript", "Python", "C++", "Figma", "UI/UX"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip font-mono", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 -z-10 rounded-full bg-gradient-to-r from-primary/30 to-secondary/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card overflow-hidden rounded-3xl p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Foto_Profil, alt: "Foto Denny Kusuma Putra", width: 768, height: 768, className: "aspect-square w-full rounded-2xl object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 max-w-max whitespace-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-full bg-secondary/20 text-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: DewoRoboticLogo, alt: "Dewo Robotic", className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Ketua Divisi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Robot Sepak Bola Humanoid" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Section({
  id,
  eyebrow,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "container-base py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-bold md:text-4xl", children: title })
    ] }),
    children
  ] });
}
function Profile() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "profil", eyebrow: "01 · Profil", title: "Tentang Saya", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6 text-lg leading-relaxed text-muted-foreground", children: [
    "Mahasiswa Semester 4 di Universitas Negeri Surabaya yang menempuh Program Studi",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " S1 Teknik Informatika" }),
    ". Memiliki minat di bidang",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Web Development serta Desain 3D" }),
    " dan menguasai bahasa pemrograman",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " HTML, JavaScript, dan Python" }),
    ". Aktif menjabat sebagai ketua divisi dalam organisasi Dewo Robotic UNESA. Siap berkontribusi dan bekerja sama dalam tim maupun bekerja secara mandiri."
  ] }) });
}
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "02 · Pendidikan", title: "Latar Belakang Pendidikan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-card flex flex-col gap-2 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:flex md:items-center md:justify-between md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Universitas Negeri Surabaya" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "S1 Teknik Informatika" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left md:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Surabaya, Indonesia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground", children: "Juli 2024 — Sekarang" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:flex md:items-center md:justify-between md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "SMAN 1 Waru" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "IPA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left md:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Sidoarjo, Indonesia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground", children: "Juli 2021 — Juli 2024" })
      ] })
    ] })
  ] }) }) });
}
const experiences = [{
  role: "Ketua Divisi Kontes Robot Sepak Bola Humanoid",
  org: "Dewo Robotic UNESA",
  place: "Surabaya, Indonesia",
  date: "Januari 2026 — Sekarang",
  points: ["Memimpin dan mengkoordinasikan hasil riset tim Robot Sepak Bola Humanoid dalam persiapan dan pelaksanaan kompetisi robotika.", "Melatih dan membimbing anggota divisi dalam pemahaman teknis robotika, mulai dari SOP hingga kalibrasi pergerakan robot."]
}, {
  role: "Anggota Divisi Kontes Robot Sepak Bola Humanoid",
  org: "Dewo Robotic UNESA",
  place: "Surabaya, Indonesia",
  date: "Januari 2025 — Januari 2026",
  points: ["Merancang dan memfabrikasi komponen mekanik robot humanoid menggunakan perangkat desain teknik untuk memenuhi spesifikasi kompetisi.", "Melakukan pemahaman pada kode program kendali robot humanoid menggunakan bahasa pemrograman C++/Python dalam lingkungan pengembangan robotik."]
}];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "03 · Pengalaman", title: "Pengalaman Organisasi", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative space-y-4 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-6", children: experiences.map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card relative ml-10 p-4 md:ml-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:flex md:items-center md:justify-between md:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-primary", children: exp.org }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold", children: exp.role })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left md:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: exp.place }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground", children: exp.date })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-sm text-muted-foreground", children: exp.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
    ] }, p)) })
  ] }, exp.role)) }) });
}
const skills = [{
  title: "Tools",
  items: ["Figma", "VS Code", "CAD", "Microsoft Office", "Canva"]
}, {
  title: "Bahasa Pemrograman",
  items: ["Python", "C++", "JavaScript", "HTML"]
}, {
  title: "Soft Skills",
  items: ["Koordinasi Tim", "UI/UX Design", "Desain 3D", "Kolaborasi"]
}];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "04 · Kemampuan", title: "Kemampuan & Tools", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-3", children: skills.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: g.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: g.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: i }, i)) })
  ] }, g.title)) }) });
}
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: "05 · Sertifikasi", title: "Pelatihan & Sertifikasi", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card flex items-start gap-2 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary/20 text-secondary", children: "✓" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Red Hat Training — Getting Started with Linux Fundamentals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "RH104 — RHA · Ver. 9.1" })
    ] })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-base py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card relative overflow-hidden p-10 text-center md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-bg absolute inset-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold md:text-5xl", children: [
        "Mari berkolaborasi ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "bersama." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Tertarik mendiskusikan proyek, kolaborasi, atau peluang magang? Saya selalu terbuka untuk berbincang." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-ring", children: "Hubungi Saya →" })
    ] })
  ] }) });
}
export {
  HomePage as component
};
