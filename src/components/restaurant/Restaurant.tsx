"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Coffee, Utensils, GlassWater, X } from "lucide-react";

export default function Restaurant() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = {
    desayunos: [
      { name: "Café de Olla Chiapaneco", price: "$35 MXN", desc: "Elaborado tradicionalmente con piloncillo y canela." },
      { name: "Huevos Ocosingo", price: "$110 MXN", desc: "Estrellados sobre tortilla, bañados en salsa ranchera y queso local." },
      { name: "Enchiladas Chiapanecas", price: "$135 MXN", desc: "Rellenas de pollo deshebrado, bañadas en mole tradicional y espolvoreadas con Queso Bola." },
      { name: "Chilaquiles Tradicionales", price: "$125 MXN", desc: "Verdes o rojos, servidos con crema, queso fresco y frijoles refritos." }
    ],
    comidas: [
      { name: "Sopa de Chipilín con Bolitas", price: "$95 MXN", desc: "Sopa tradicional con masa de maíz y queso local cocida en caldo de chipilín." },
      { name: "Asado de Cerdo Chiapaneco", price: "$165 MXN", desc: "Carne de cerdo marinada en adobo de chiles secos y especias de la región." },
      { name: "Cecina de Ocosingo", price: "$180 MXN", desc: "Corte de res local asado, acompañado de plátanos machos fritos y frijoles." }
    ],
    bebidas: [
      { name: "Pozol de Cacao Frío", price: "$45 MXN", desc: "Bebida ancestral de maíz y cacao molido muy refrescante." },
      { name: "Tascalate Tradicional", price: "$45 MXN", desc: "Bebida a base de maíz, cacao, achiote, piñón y canela con leche o agua." },
      { name: "Aguas Frescas Naturales", price: "$35 MXN", desc: "Horchata de la casa, Jamaica o limón con chía." }
    ]
  };

  return (
    <section id="restaurante" className="py-24 bg-brand-sand text-brand-green select-none w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Gold label */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              Restaurante
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-medium text-brand-green leading-[1.2] mb-6 tracking-tight">
              Un espacio para disfrutar
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-brand-text-muted mb-8 leading-relaxed font-sans max-w-lg">
              Contamos con servicio de restaurante para huéspedes y visitantes, ofreciendo una experiencia agradable durante tu estancia.
            </p>

            {/* Inline bullets (DESAYUNOS · COMIDAS · BEBIDAS) */}
            <div className="flex items-center gap-2 mb-10 text-[10px] font-extrabold tracking-widest text-brand-green font-sans">
              <span>DESAYUNOS</span>
              <span className="text-brand-gold font-bold">•</span>
              <span>COMIDAS</span>
              <span className="text-brand-gold font-bold">•</span>
              <span>BEBIDAS</span>
            </div>

            {/* Dark green pill button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-green hover:bg-brand-gold text-brand-sand font-bold text-xs uppercase tracking-widest transition-colors duration-300 shadow-sm"
            >
              Ver menú
            </button>
          </motion.div>

          {/* Right Column: Restaurant Image with rounded-[32px] */}
          <div className="lg:col-span-6 relative h-[380px] md:h-[480px] lg:h-[500px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-[32px] overflow-hidden shadow-md border border-neutral-100/50"
            >
              <Image
                src="/images/restaurant.png"
                alt="Restaurante Hotel Margarita"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Menu Lightbox/Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 p-6 md:p-10 border border-neutral-200 text-brand-text-dark"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors text-brand-text-muted hover:text-brand-text-dark"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-gold">Nuestra Carta</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green mt-1">Sabores de Ocosingo</h3>
                <div className="w-8 h-0.5 bg-brand-gold mx-auto mt-2.5" />
              </div>

              {/* Menu Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Desayunos Column */}
                <div>
                  <h4 className="text-lg font-serif font-bold text-brand-green border-b border-neutral-100 pb-2 mb-4 flex items-center gap-2">
                    <Coffee className="w-4.5 h-4.5 text-brand-gold" /> Desayunos
                  </h4>
                  <ul className="space-y-4">
                    {menu.desayunos.map((item, i) => (
                      <li key={i} className="group">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="font-bold text-sm text-brand-green hover:text-brand-gold transition-colors">{item.name}</span>
                          <span className="font-mono text-xs font-bold text-brand-gold shrink-0 ml-2">{item.price}</span>
                        </div>
                        <p className="text-xs text-brand-text-muted">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Comidas Column */}
                <div>
                  <h4 className="text-lg font-serif font-bold text-brand-green border-b border-neutral-100 pb-2 mb-4 flex items-center gap-2">
                    <Utensils className="w-4.5 h-4.5 text-brand-gold" /> Comidas
                  </h4>
                  <ul className="space-y-4">
                    {menu.comidas.map((item, i) => (
                      <li key={i} className="group">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="font-bold text-sm text-brand-green hover:text-brand-gold transition-colors">{item.name}</span>
                          <span className="font-mono text-xs font-bold text-brand-gold shrink-0 ml-2">{item.price}</span>
                        </div>
                        <p className="text-xs text-brand-text-muted">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bebidas Column */}
                <div>
                  <h4 className="text-lg font-serif font-bold text-brand-green border-b border-neutral-100 pb-2 mb-4 flex items-center gap-2">
                    <GlassWater className="w-4.5 h-4.5 text-brand-gold" /> Bebidas
                  </h4>
                  <ul className="space-y-4">
                    {menu.bebidas.map((item, i) => (
                      <li key={i} className="group">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="font-bold text-sm text-brand-green hover:text-brand-gold transition-colors">{item.name}</span>
                          <span className="font-mono text-xs font-bold text-brand-gold shrink-0 ml-2">{item.price}</span>
                        </div>
                        <p className="text-xs text-brand-text-muted">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
