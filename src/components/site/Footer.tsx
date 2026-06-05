import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-gradient text-primary-foreground font-display font-bold">K</span>
            <span className="font-display text-lg font-semibold">Kvaliteta d.o.o.</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-ink-soft">
            Diversificirana industrijska grupacija sa sjedištem u Hrvatskoj.
            Više od 25 godina pružamo integrirana rješenja u građevinarstvu, metalurgiji, prijevozu i specijaliziranim uslugama.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink-soft">Stranice</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/o-nama" className="hover:text-foreground text-ink-soft">O nama</Link></li>
            <li><Link to="/delatnosti" className="hover:text-foreground text-ink-soft">Djelatnosti</Link></li>
            <li><Link to="/projekti" className="hover:text-foreground text-ink-soft">Projekti</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground text-ink-soft">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink-soft">Kontakt</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>info@kvaliteta.hr</li>
            <li>+385 98 165 2010</li>
            <li>OIB: 93441573210</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-soft">
          <div>© {new Date().getFullYear()} Kvaliteta d.o.o. — Sva prava pridržana.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privatnost</a>
            <a href="#" className="hover:text-foreground">Uvjeti korištenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
