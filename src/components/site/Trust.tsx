import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { q: "Završili su industrijski objekt tri tjedna prije roka. Komunikacija je bila besprijekorna.", a: "M. Knežević", r: "Direktor proizvodnje, Adria Industries" },
  { q: "Jedini izvođač u regiji kojem bismo povjerili kompletan ciklus — od projekta do primopredaje.", a: "I. Tomić", r: "Vlasnik, Tomić Group" },
  { q: "Profesionalizam i razina kvalitete na koju smo navikli sa zapadnoeuropskim partnerima.", a: "S. Babić", r: "Operativni direktor, BabićTrans" },
];

export function Trust() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Riječi klijenata</div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
              Najbolji dokaz su zadovoljni klijenti.
            </h2>
          </div>
          <div className="text-sm text-ink-soft">98% klijenata nam se vraća</div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft"
            >
              <Quote className="text-primary" size={22} />
              <blockquote className="mt-4 text-foreground leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold text-foreground">{t.a}</div>
                <div className="text-ink-soft">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
