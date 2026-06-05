import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { Story } from "@/components/site/Story";
import { Stats } from "@/components/site/Stats";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/o-nama")({
  head: () => ({
    meta: [
      { title: "O nama — Kvaliteta d.o.o." },
      { name: "description", content: "Više od 25 godina iskustva u industrijskim rješenjima — naša priča, vrijednosti i certifikati." },
      { property: "og:title", content: "O nama — Kvaliteta d.o.o." },
      { property: "og:description", content: "Diversificirana industrijska grupacija. Naša priča, vrijednosti, certifikati." },
      { property: "og:url", content: "/o-nama" },
    ],
    links: [{ rel: "canonical", href: "/o-nama" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-40 pb-16 bg-hero">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">O nama</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
            Industrija s <span className="text-gradient">ljudskim licem.</span>
          </h1>
          <p className="mt-6 text-ink-soft max-w-2xl mx-auto">
            Već četvrt stoljeća radimo s istom predanošću s kojom smo počeli — bez kompromisa po pitanju kvalitete.
          </p>
        </div>
      </section>
      <Stats />
      <Story />
      <CTASection />
      <Footer />
    </main>
  );
}
