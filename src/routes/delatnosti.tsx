import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { Sectors } from "@/components/site/Sectors";
import { Process } from "@/components/site/Process";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/delatnosti")({
  head: () => ({
    meta: [
      { title: "Djelatnosti — Kvaliteta d.o.o." },
      { name: "description", content: "Preko 60 registriranih djelatnosti: građevina, metalurgija, prijevoz, hortikultura, upravljanje otpadom, geodezija i više." },
      { property: "og:title", content: "Djelatnosti — Kvaliteta d.o.o." },
      { property: "og:description", content: "Deset glavnih industrijskih sektora pod jednim krovom." },
      { property: "og:url", content: "/delatnosti" },
    ],
    links: [{ rel: "canonical", href: "/delatnosti" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-40 pb-8 bg-hero">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Djelatnosti</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
            Što sve <span className="text-gradient">radimo.</span>
          </h1>
        </div>
      </section>
      <Sectors />
      <Process />
      <CTASection />
      <Footer />
    </main>
  );
}
