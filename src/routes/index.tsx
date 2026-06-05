import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/site/Navigation";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Story } from "@/components/site/Story";
import { Sectors } from "@/components/site/Sectors";
import { Process } from "@/components/site/Process";
import { Trust } from "@/components/site/Trust";
import { CTASection } from "@/components/site/CTASection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kvaliteta d.o.o. — Industrijska grupacija | Građevina, metalurgija, prijevoz" },
      { name: "description", content: "Diversificirana industrijska grupacija s 25+ godina iskustva. Građevina, metalurgija, prijevoz, hortikultura i još 60+ djelatnosti pod jednim krovom." },
      { property: "og:title", content: "Kvaliteta d.o.o. — Jedna tvrtka, beskrajno mnogo rješenja" },
      { property: "og:description", content: "Integrirana industrijska rješenja: građevina, metalurgija, prijevoz, geodezija i specijalizirane usluge." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Stats />
      <Story />
      <Sectors />
      <Process />
      <Trust />
      <CTASection />
      <Footer />
    </main>
  );
}
