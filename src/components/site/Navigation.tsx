import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/delatnosti", label: "Djelatnosti" },
  { href: "/projekti", label: "Projekti" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
          aria-label="Glavna navigacija"
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-soft">
              <span className="font-display text-lg font-bold leading-none">K</span>
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-tight">Kvaliteta</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">d.o.o.</div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-accent" }}
                  activeOptions={{ exact: l.href === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Zatražite ponudu
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass border border-border p-3 shadow-soft animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-accent hover:text-foreground"
                    activeProps={{ className: "text-foreground bg-accent" }}
                    activeOptions={{ exact: l.href === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/kontakt"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-foreground px-3 py-2.5 text-center text-sm font-semibold text-background"
                >
                  Zatražite ponudu →
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
