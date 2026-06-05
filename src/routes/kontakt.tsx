import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Kvaliteta d.o.o." },
      { name: "description", content: "Kontaktirajte nas za besplatnu ponudu. E-mail, telefon i obrazac za upit — odgovor u roku od 24 sata." },
      { property: "og:title", content: "Kontakt — Kvaliteta d.o.o." },
      { property: "og:description", content: "Pošaljite upit — odgovaramo u 24 sata." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-40 pb-12 bg-hero">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Kontakt</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
            Pošaljite nam <span className="text-gradient">upit.</span>
          </h1>
          <p className="mt-5 text-ink-soft">Odgovaramo u roku od 24 sata, radnim danima.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1fr,1.4fr] gap-10">
          <aside className="space-y-5">
            {[
              { i: Mail, t: "E-mail", v: "info@kvaliteta.hr" },
              { i: Phone, t: "Telefon", v: "+385 98 165 2010" },
              { i: MapPin, t: "Adresa", v: "OIB: 93441573210 · Hrvatska" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary shrink-0">
                  <c.i size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink-soft">{c.t}</div>
                  <div className="mt-1 font-medium">{c.v}</div>
                </div>
              </div>
            ))}
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-surface-elevated p-6 sm:p-8 shadow-soft space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Ime i prezime" name="name" required />
              <Field label="Tvrtka" name="company" />
              <Field label="E-mail" name="email" type="email" required />
              <Field label="Telefon" name="phone" type="tel" />
            </div>
            <div>
              <label className="text-sm font-medium">Opišite vaš projekt</label>
              <textarea
                required
                rows={5}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Vrsta projekta, lokacija, okvirni rok…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:scale-[1.02] transition-transform"
            >
              <Send size={16} /> Pošalji upit
            </button>
            {sent && (
              <div className="rounded-xl bg-accent px-4 py-3 text-sm text-foreground">
                Hvala! Javljamo se u najkraćem mogućem roku.
              </div>
            )}
            <p className="text-xs text-ink-soft">
              Vaši podaci se šalju putem zaštićene SSL veze i obrađuju u skladu s GDPR-om.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}{required && " *"}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
