"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full bg-brand-sand text-brand-green flex items-center pt-32 pb-24 select-none overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-brand-cream/70 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-gold/5 -translate-x-1/2 translate-y-1/3 pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #23462d 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/60 bg-brand-gold/8 text-brand-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  46 Años de Tradición
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl md:text-5xl lg:text-[62px] font-serif font-medium text-brand-green leading-[1.1] mb-6 tracking-tight"
            >
              Tradición y{" "}
              <br className="hidden lg:block" />
              <span className="text-brand-gold italic">hospitalidad</span>
              <br className="hidden lg:block" />
              en el corazón de{" "}
              <br className="hidden lg:block" />
              <span className="relative inline-block">
                Ocosingo
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-brand-gold/50 w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.95, duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-sm md:text-base text-brand-text-muted mb-10 max-w-md leading-relaxed"
            >
              Permítanos atenderle como si estuviera en casa. Un refugio de descanso
              para descubrir la grandeza maya de Toniná y los sabores de Chiapas.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/529191000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-green hover:bg-brand-gold text-brand-sand font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.124 1.535 5.856L.057 23.625a.5.5 0 0 0 .612.612l5.769-1.478A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.193-1.453l-.371-.22-3.853.987.987-3.853-.22-.371A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Reservar por WhatsApp
              </a>

              <a
                href="#ubicacion"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-brand-green/30 text-brand-green hover:bg-brand-green hover:text-brand-sand font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                Cómo llegar
              </a>
            </motion.div>

            {/* Quote */}
            <motion.div {...fadeUp(0.5)} className="border-l-2 border-brand-gold/50 pl-5 py-1">
              <p className="text-sm italic font-serif text-brand-green/80">
                &ldquo;El primer hotel de la ciudad, un legado que continúa hoy.&rdquo;
              </p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold mt-1.5 block">
                — Desde 1978
              </span>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6 relative h-[380px] md:h-[520px] lg:h-[640px] w-full">

            {/* Offset decorative frame */}
            <div className="absolute inset-0 rounded-[32px] bg-brand-gold/12 translate-x-3 translate-y-3" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl border border-brand-cream"
            >
              <Image
                src="/images/hero.png"
                alt="Hotel Margarita"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-green/40 to-transparent" />
            </motion.div>

            {/* Floating card: Habitaciones */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -left-5 top-1/4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-neutral-100"
            >
              <p className="text-2xl font-serif font-bold text-brand-green leading-none">30+</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-text-muted mt-0.5">Habitaciones</p>
            </motion.div>

            {/* Floating card: Años */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -right-5 bottom-1/4 bg-brand-green rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-2xl font-serif font-bold text-brand-gold leading-none">46</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-sand/75 mt-0.5">Años</p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-brand-text-muted">Explorar</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-brand-gold to-transparent"
        />
      </motion.div>

    </section>
  );
}
