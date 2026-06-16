import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useLocation, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { F as Foto_Profil } from "./router-tTfQkKUT.mjs";
const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/projects", label: "Proyek" },
  { to: "/contact", label: "Kontak" }
];
function SiteLayout({ children }) {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-base flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex items-center gap-2 font-display text-sm font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "overflow-hidden rounded-lg bg-primary shadow-[0_0_20px_-2px_var(--color-primary)] transition group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: Foto_Profil, alt: "Foto Denny Kusuma Putra", className: "h-8 w-8 object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Denny Kusuma Putra" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-1 rounded-full border border-border bg-[var(--color-surface)] p-1 text-sm", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        className: "animate-page-enter",
        children: children ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
      },
      location.pathname
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-24 border-t border-border/60 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-base flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Denny Kusuma Putra."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono", children: "Surabaya · Indonesia" })
    ] }) })
  ] });
}
export {
  SiteLayout as S
};
