import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation, Link, Outlet } from "@tanstack/react-router";
import { F as Foto_Profil } from "./router-tTfQkKUT.js";
const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/projects", label: "Proyek" },
  { to: "/contact", label: "Kontak" }
];
function SiteLayout({ children }) {
  const location = useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "container-base flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-2 font-display text-sm font-semibold", children: [
        /* @__PURE__ */ jsx("span", { className: "overflow-hidden rounded-lg bg-primary shadow-[0_0_20px_-2px_var(--color-primary)] transition group-hover:scale-105", children: /* @__PURE__ */ jsx("img", { src: Foto_Profil, alt: "Foto Denny Kusuma Putra", className: "h-8 w-8 object-cover" }) }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Denny Kusuma Putra" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "flex items-center gap-1 rounded-full border border-border bg-[var(--color-surface)] p-1 text-sm", children: navItems.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          activeOptions: { exact: true },
          activeProps: { className: "bg-primary text-primary-foreground shadow-sm" },
          inactiveProps: { className: "text-muted-foreground hover:text-foreground" },
          className: "rounded-full px-4 py-1.5 font-medium transition",
          children: item.label
        },
        item.to
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(
      "main",
      {
        className: "animate-page-enter",
        children: children ?? /* @__PURE__ */ jsx(Outlet, {})
      },
      location.pathname
    ),
    /* @__PURE__ */ jsx("footer", { className: "mt-24 border-t border-border/60 py-10", children: /* @__PURE__ */ jsxs("div", { className: "container-base flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Denny Kusuma Putra."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-mono", children: "Surabaya · Indonesia" })
    ] }) })
  ] });
}
export {
  SiteLayout as S
};
