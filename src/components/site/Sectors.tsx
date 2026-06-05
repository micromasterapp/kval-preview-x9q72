import { motion } from "framer-motion";
import {
  Building2, Wrench, Truck, Trees, Recycle, Ruler,
  Hammer, Sparkles, Warehouse, Home,
} from "lucide-react";

const sectors = [
  { icon: Building2, title: "Građevina i nadzor", desc: "Projektiranje, izvođenje i stručni nadzor visoke i niske gradnje." },
  { icon: Hammer, title: "Metalurgija", desc: "Obrada metala, zavarivanje, proizvodnja konstrukcija i karoserija." },
  { icon: Truck, title: "Transport i logistika", desc: "Domaći i međunarodni prijevoz, otpremništvo, skladištenje." },
  { icon: Trees, title: "Hortikultura", desc: "Uređenje i održavanje krajolika, ekološka proizvodnja." },
  { icon: Recycle, title: "Upravljanje otpadom", desc: "Sakupljanje, prerada, oporaba i zbrinjavanje svih vrsta otpada." },
  { icon: Ruler, title: "Geodezija", desc: "Katastarski elaborati, geodetski projekti i praćenje gradnje." },
  { icon: Wrench, title: "Servis i održavanje", desc: "HVAC, vodovod, plin, grijanje i industrijska postrojenja." },
  { icon: Home, title: "Nekretnine", desc: "Posredovanje, upravljanje i održavanje nekretnina." },
  { icon: Warehouse, title: "Proizvodnja", desc: "Namještaj, beton, drvo, tekstil i tehnička oprema." },
  { icon: Sparkles, title: "Čišćenje objekata", desc: "Profesionalno održavanje svih vrsta poslovnih i stambenih objekata." },
];

export function Sectors() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Što radimo</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Deset glavnih sektora.<br />
            <span className="text-gradient">Jedan standard kvalitete.</span>
          </h2>
          <p className="mt-5 text-ink-soft">
            Kombiniramo industrijsko iskustvo, specijalizirane timove i suvremenu opremu u
            kompletna rješenja prilagođena vašem projektu.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 5) * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)" }}
              />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <s.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
