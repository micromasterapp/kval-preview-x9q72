import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Konzultacija", d: "Razumijemo opseg, rokove i ciljeve projekta na licu mjesta ili online." },
  { n: "02", t: "Idejno rješenje", d: "Predlažemo tehničko rješenje s detaljnom procjenom troškova." },
  { n: "03", t: "Izvođenje", d: "Naši timovi i oprema realiziraju projekt u dogovorenim rokovima." },
  { n: "04", t: "Primopredaja i jamstvo", d: "Završna kontrola kvalitete, dokumentacija i dugoročna podrška." },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Kako surađujemo</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Predvidljiv proces.<br />
            <span className="text-gradient">Bez iznenađenja.</span>
          </h2>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft"
            >
              <div className="font-display text-5xl font-semibold text-gradient leading-none">{s.n}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
