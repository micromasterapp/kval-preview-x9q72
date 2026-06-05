import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Footer } from "@/components/site/Footer";
import { Trust } from "@/components/site/Trust";
import { CTASection } from "@/components/site/CTASection";
import sectorsImg from "@/assets/sectors-architecture.jpg";
import heroImg from "@/assets/hero-industrial.jpg";
import storyImg from "@/assets/story-precision.jpg";
import { motion } from "framer-motion";

const projects = [
  { t: "Industrijski kompleks Zagreb-Istok", c: "Građevina · 12.000 m²", y: "2024", img: heroImg },
  { t: "Modernizacija poslovnog centra", c: "Fasada · HVAC · Nadzor", y: "2023", img: sectorsImg },
  { t: "Proizvodna linija — obrada metala", c: "Metalurgija · CNC", y: "2023", img: storyImg },
];

export const Route = createFileRoute("/projekti")({
  head: () => ({
    meta: [
      { title: "Projekti — Kvaliteta d.o.o." },
      { name: "description", content: "Realizirani projekti — industrijski objekti, poslovni prostori, infrastruktura i specijalizirane intervencije." },
      { property: "og:title", content: "Projekti — Kvaliteta d.o.o." },
      { property: "og:description", content: "Odabrani projekti iz portfolija." },
      { property: "og:url", content: "/projekti" },
    ],
    links: [{ rel: "canonical", href: "/projekti" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="pt-40 pb-12 bg-hero">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Portfolio</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-semibold tracking-tight">
            Odabrani <span className="text-gradient">projekti.</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft hover:shadow-elegant transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-ink-soft">{p.y}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{p.t}</h3>
                <div className="mt-1 text-sm text-ink-soft">{p.c}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Trust />
      <CTASection />
      <Footer />
    </main>
  );
}
