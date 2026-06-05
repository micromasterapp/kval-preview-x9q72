import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 sm:p-16 shadow-elegant"
        >
          <div aria-hidden className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-accent-gradient opacity-30 blur-3xl" />
          <div aria-hidden className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative grid lg:grid-cols-[1.4fr,1fr] gap-10 items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-70">Spremni za suradnju?</div>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                Pošaljite zahtjev — <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                  odgovaramo u roku od 24h.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-base opacity-80">
                Bez obzira planirate li izgradnju, prijevoz, čišćenje objekta ili kompleksan industrijski projekt —
                naš tim će vam pripremiti detaljnu ponudu, besplatno i bez obveze.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-background px-6 py-4 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                Pošaljite zahtjev za ponudu
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+38598165 2010"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-4 text-sm font-semibold text-background hover:bg-white/10"
              >
                <Phone size={16} /> +385 98 165 2010
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
