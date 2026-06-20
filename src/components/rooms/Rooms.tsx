"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rooms = [
  {
    title: "Estándar Doble",
    desc: "Ideal para viajes de negocios o parejas que buscan confort esencial.",
    image: "/images/room.png",
    tags: ["WIFI", "A/C", "TV CABLE"]
  },
  {
    title: "Superior Familiar",
    desc: "Espacios amplios para toda la familia, con vistas y acabados refinados.",
    image: "/images/room.png",
    tags: ["WIFI", "A/C", "VISTAS"]
  },
  {
    title: "Suite Ejecutiva",
    desc: "Máxima privacidad y confort para estancias prolongadas en Ocosingo.",
    image: "/images/room.png",
    tags: ["ESCRITORIO", "SERVICIO VIP", "RESTAURANTE"]
  }
];

export default function Rooms() {
  return (
    <section id="habitaciones" className="py-24 bg-brand-sand text-brand-green select-none w-full">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header Block (Split left-text, right-link) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            {/* Gold label */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3 block">
              Habitaciones
            </span>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-green mb-4 leading-tight">
              Descansa con comodidad
            </h2>
            {/* Paragraph */}
            <p className="text-sm text-brand-text-muted leading-relaxed font-sans">
              Cada espacio cuenta con las comodidades necesarias para garantizar tu descanso durante viajes de trabajo o placer.
            </p>
          </div>

          {/* Underlined WhatsApp link */}
          <div className="shrink-0">
            <a
              href="https://wa.me/529191000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-green transition-colors duration-300 border-b-2 border-brand-gold pb-1.5"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col h-full group"
            >
              {/* Image Container with rounded-[24px] */}
              <div className="relative h-64 md:h-72 w-full rounded-[24px] overflow-hidden shadow-sm mb-6 border border-neutral-100/50">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-serif font-medium text-brand-green mb-2.5">
                {room.title}
              </h3>
              <p className="text-sm text-brand-text-muted mb-4 leading-relaxed font-sans flex-grow">
                {room.desc}
              </p>

              {/* Amenity Tags */}
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                {room.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[9px] font-bold uppercase tracking-widest text-brand-text-muted/80 bg-neutral-100 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
