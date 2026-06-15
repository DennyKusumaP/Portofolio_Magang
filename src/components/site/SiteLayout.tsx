import { Link, Outlet, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import Foto_Profil from "@/assets/Foto-Profil.jpeg";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/projects", label: "Proyek" },
  { to: "/contact", label: "Kontak" },
] as const;

export function SiteLayout({ children }: { children?: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container-base flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2 font-display text-sm font-semibold">
            <span className="overflow-hidden rounded-lg bg-primary shadow-[0_0_20px_-2px_var(--color-primary)] transition group-hover:scale-105">
              <img src={Foto_Profil} alt="Foto Denny Kusuma Putra" className="h-8 w-8 object-cover" />
            </span>
            <span className="hidden sm:inline">Denny Kusuma Putra</span>
          </Link>
          <nav className="flex items-center gap-1 rounded-full border border-border bg-[var(--color-surface)] p-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-primary text-primary-foreground shadow-sm" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="rounded-full px-4 py-1.5 font-medium transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main
        key={location.pathname}
        className="animate-page-enter"
      >
        {children ?? <Outlet />}
      </main>

      <footer className="mt-24 border-t border-border/60 py-10">
        <div className="container-base flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Denny Kusuma Putra.</p>
          <p className="font-mono">Surabaya · Indonesia</p>
        </div>
      </footer>
    </div>
  );
}
