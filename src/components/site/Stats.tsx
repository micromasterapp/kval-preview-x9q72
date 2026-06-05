import { motion } from "framer-motion";

const stats = [
  { v: "25+", l: "godina iskustva" },
  { v: "60+", l: "registriranih djelatnosti" },
  { v: "400+", l: "realiziranih projekata" },
  { v: "12", l: "industrijskih sektora" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient">{s.v}</div>
            <div className="mt-1 text-sm text-ink-soft">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
