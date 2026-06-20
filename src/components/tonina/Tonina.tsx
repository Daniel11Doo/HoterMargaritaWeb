"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Tonina() {
  const highlights = [
    "Historia milenaria",
    "Arquitectura monumental",
    "Miradores panorámicos",
    "Experiencia cultural única"
  ];

  return (
    <section id="tonina" className="py-24 bg-brand-sand text-brand-green select-none w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Ruin Image with rounded-[32px] */}
          <div className="lg:col-span-6 relative h-[380px] md:h-[480px] lg:h-[520px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-[32px] overflow-hidden shadow-md border border-neutral-100/50"
            >
              <Image
                src="/images/tonina.png"
                alt="Zona Arqueológica de Toniná"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Gold Label */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              Descubre Toniná
            </span>

            {/* Title: A las puertas de la grandeza maya */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-medium text-brand-green leading-[1.2] mb-6 tracking-tight">
              A las puertas de la <br />
              grandeza <span className="text-brand-gold italic font-serif">maya</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-brand-text-muted mb-8 leading-relaxed font-sans max-w-lg">
              Hospedarte en Hotel Margarita significa encontrarte muy cerca de una de las joyas arqueológicas más impresionantes de México. Admira sus monumentales estructuras y descubre siglos de historia maya.
            </p>

            {/* Bullet Checklist */}
            <ul className="space-y-4 mb-10 w-full">
              {highlights.map((hl, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-green/95">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {hl}
                </li>
              ))}
            </ul>

            {/* Gold Button */}
            <a
              href="https://www.inah.gob.mx/zonas/107-zona-arqueologica-tonina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-gold hover:bg-brand-green text-white hover:text-brand-sand font-bold text-xs uppercase tracking-widest shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explorar Toniná
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
