"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  src: string;
  label: string;
  isLarge?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/hero.png",
    label: "Hotel",
    isLarge: true,
  },
  {
    src: "/images/room.png",
    label: "Habitaciones",
  },
  {
    src: "/images/restaurant.png",
    label: "Restaurante",
  },
  {
    src: "/images/events.png",
    label: "Eventos",
  },
  {
    src: "/images/tonina.png",
    label: "Toniná",
  },
  {
    src: "/images/queso-bola.png",
    label: "Queso Bola",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 bg-brand-sand">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">
            Galería
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-green font-medium tracking-tight">
            Una mirada a Hotel Margarita
          </h2>
        </div>

        {/* Grid Collage */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group aspect-square ${item.isLarge ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes={
                  item.isLarge
                    ? "(max-w-768px) 100vw, 66vw"
                    : "(max-w-768px) 50vw, 33vw"
                }
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-brand-sand text-xs font-bold uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
