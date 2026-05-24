import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-sm font-semibold">Jakarta Mengabdi</span>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Membangun komunitas, membagi cerita.
          </span>
        </div>
        <Link
          to="/admin/login"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Admin Login →
        </Link>
      </div>
    </footer>
  );
}
