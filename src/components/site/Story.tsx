import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import storyImg from "@/assets/story-precision.jpg";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y: y1 }} className="relative">
          <div className="absolute -inset-6 bg-accent-gradient opacity-10 blur-3xl rounded-full" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant aspect-[4/5]">
            <img
              src={storyImg}
              alt="Precizna obrada metala — detalj iz pogona Kvaliteta d.o.o."
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }}>
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Naša priča</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Počeli smo s jednim alatom.<br />
            <span className="text-gradient">Danas pokrećemo industriju.</span>
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Osnovana 1998. godine kao mala obiteljska radnja za obradu metala, Kvaliteta d.o.o. je
            kroz dva i pol desetljeća izrasla u jednu od najraznovrsnijih industrijskih grupacija u regiji.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Danas, pod jednim krovom objedinjujemo građevinu, metalurgiju, prijevoz, hortikulturu,
            upravljanje otpadom i još preko pedeset specijaliziranih djelatnosti — sve s istim
            principom s kojim smo počeli: <strong className="text-foreground">posao se radi jednom, i radi se dobro.</strong>
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Vertikalna integracija — od projekta do isporuke",
              "Vlastiti vozni park, oprema i stručni timovi",
              "Certifikati ISO 9001, 14001 i 45001",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
