"use client";

import { motion } from "framer-motion";

const benefitsList = [
  { label: "Estacionamiento Privado", badge: "P" },
  { label: "Atención Continua", badge: "24h" },
  { label: "Alta Velocidad", badge: "WiFi" },
  { label: "Climatización", badge: "A/C" },
  { label: "Agua Caliente", badge: "H2O" },
  { label: "Cable HD", badge: "TV" },
  { label: "Cerca del Parque", badge: "◆" },
  { label: "46 Años de Experiencia", badge: "★" }
];

export default function Benefits() {
  return (
    <section className="bg-brand-green py-10 px-4 select-none w-full relative z-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4 items-start justify-center">
          
          {benefitsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center justify-center text-center group"
            >
              {/* Circular gold badge */}
              <div className="w-12 h-12 rounded-full border border-brand-gold bg-transparent flex items-center justify-center text-brand-gold font-serif text-xs font-semibold tracking-wider mb-3 group-hover:bg-brand-gold/10 group-hover:scale-105 transition-all duration-300">
                {item.badge}
              </div>
              
              {/* White uppercase label */}
              <span className="text-[9px] font-bold uppercase tracking-widest text-brand-sand/90 max-w-[110px] leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
