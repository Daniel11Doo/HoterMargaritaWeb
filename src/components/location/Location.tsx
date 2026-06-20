"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const landmarks = [
  "Parque Central",
  "Zona Arqueológica de Toniná",
  "Ruta del Queso Bola",
  "Comercios locales",
  "Servicios y oficinas",
];

export default function Location() {
  return (
    <>
      {/* 1. Location Map Section */}
      <section id="ubicacion" className="py-24 px-6 bg-brand-sand text-brand-green">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Location details */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Ubicación
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-green mb-6 leading-tight tracking-tight font-medium">
              Donde comienza tu experiencia en Ocosingo
            </h2>
            <p className="text-lg text-brand-text-muted mb-8 leading-relaxed font-sans max-w-xl">
              Ubicados a pocos metros del Parque Central, con acceso rápido a los principales servicios, atractivos turísticos y zonas comerciales de la ciudad.
            </p>

            <ul className="space-y-3 mb-8 w-full">
              {landmarks.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-green">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] w-full border border-neutral-100/50"
          >
            <iframe
              title="Ubicación Hotel Margarita"
              src="https://www.google.com/maps?q=16.9088472,-92.0955194&z=19&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </section>

      {/* 2. Final CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/tonina.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
            priority
          />
          <div className="absolute inset-0 bg-brand-green/90" />
        </div>

        <div className="max-w-4xl mx-auto text-center text-brand-sand relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight font-medium tracking-tight">
              Tu próxima estancia te espera
            </h2>
            <p className="text-xl mb-4 opacity-85 max-w-2xl font-sans font-light">
              Ya sea por negocios, descanso o turismo, encontrarás atención cálida, instalaciones confortables y la mejor ubicación en Ocosingo.
            </p>
            <p className="font-serif text-2xl italic text-brand-gold mb-12">
              "Permítanos atenderle como si estuviera en casa."
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://wa.me/529191000000?text=Hola,%20me%20gustar%C3%ADa%20reservar%20habitaci%C3%B3n%20en%20Hotel%20Margarita."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-brand-green px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-md hover:bg-brand-gold-light"
              >
                Reservar por WhatsApp
              </a>
              <a
                href="tel:+529191000000"
                className="border-2 border-brand-sand px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-sand hover:text-brand-green transition-all duration-300"
              >
                Llamar ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
