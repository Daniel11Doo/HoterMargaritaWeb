"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section id="historia" className="py-24 bg-brand-sand text-brand-green select-none w-full">
      <div className="container mx-auto px-6 max-w-4xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Gold Subtitle Label */}
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            Nuestra Historia
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif font-medium text-brand-green mb-8 leading-tight max-w-2xl">
            Una tradición que forma parte de Ocosingo
          </h2>

          {/* Body description */}
          <p className="text-sm md:text-base text-brand-text-muted mb-10 max-w-2xl leading-relaxed font-sans">
            Hotel Margarita ha acompañado el crecimiento de Ocosingo durante más de cuatro décadas. Como el primer hotel de la ciudad, hemos recibido a generaciones de viajeros, empresarios y familias que buscan comodidad, seguridad y una atención cercana.
          </p>

          {/* Gold Blockquote */}
          <p className="text-lg md:text-xl lg:text-2xl font-serif text-brand-gold italic font-medium max-w-xl leading-relaxed">
            "Permitir que cada huésped se sienta como en casa."
          </p>

        </motion.div>

      </div>
    </section>
  );
}
