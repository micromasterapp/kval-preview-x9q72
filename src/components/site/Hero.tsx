import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-industrial.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // 3D tilt on the card
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rxs = useSpring(rx, { stiffness: 120, damping: 14 });
  const rys = useSpring(ry, { stiffness: 120, damping: 14 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-hero pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <motion.div
        aria-hidden
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-gradient opacity-20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-ink-soft shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Diversificirana industrijska grupacija · od 1998.
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Jedna tvrtka.<br />
            <span className="text-gradient">Beskrajno mnogo rješenja.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-ink-soft sm:text-lg">
            Od građevine i metalurgije do prijevoza, hortikulture i upravljanja nekretninama —
            Kvaliteta d.o.o. spaja preko 60 djelatnosti pod jednim standardom: <strong className="text-foreground">apsolutna kvaliteta</strong>.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 rounded-2xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background shadow-elegant transition-all hover:scale-[1.03]"
            >
              Zatražite besplatnu ponudu
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/delatnosti"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface-elevated px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-accent"
            >
              Pogledajte naše djelatnosti
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-soft">
            <ShieldCheck size={14} className="text-primary" />
            SSL zaštita · ISO standardi · GDPR usklađenost
          </div>
        </motion.div>

        {/* 3D parallax visual card */}
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ perspective: 1400 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <motion.div
            style={{ rotateX: rxs, rotateY: rys, y, scale, opacity }}
            className="preserve-3d relative aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-elegant"
          >
            <img
              src={heroImg}
              alt="Industrijska gradnja u izlasku sunca — projekt Kvaliteta d.o.o."
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 text-background">
              <div>
                <div className="text-xs font-medium uppercase tracking-widest opacity-80">U tijeku</div>
                <div className="font-display text-xl font-semibold">Industrijski kompleks · 12.000 m²</div>
              </div>
              <div className="rounded-xl glass border border-white/20 px-3 py-2 text-xs text-foreground">
                Završetak: Q3 2026
              </div>
            </div>
          </motion.div>

          {/* floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -left-4 top-12 hidden lg:block rounded-2xl bg-surface-elevated border border-border px-4 py-3 shadow-soft animate-float-slow"
          >
            <div className="text-[10px] uppercase tracking-widest text-ink-soft">Aktivni projekti</div>
            <div className="font-display text-2xl font-semibold">27</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="absolute -right-4 bottom-12 hidden lg:block rounded-2xl bg-surface-elevated border border-border px-4 py-3 shadow-soft animate-float-slow"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="text-[10px] uppercase tracking-widest text-ink-soft">Zadovoljnih klijenata</div>
            <div className="font-display text-2xl font-semibold">98%</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
