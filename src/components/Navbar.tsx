import { Link, useRouterState } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (p: string) => pathname === p;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-[#493725] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--gradient-warm)] text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <Newspaper className="h-4 w-4" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight">Jakarta Mengabdi</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Berita & Kegiatan</span>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground/70"
            }`}
          >
            News
            {isActive("/") && (
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
