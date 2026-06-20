"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  { title: "Degustación", desc: "Productos regionales frescos" },
  { title: "Paisajes", desc: "Montañas de Chiapas" },
  { title: "Artesanía", desc: "Tradición familiar" },
  { title: "Cultura", desc: "Experiencias auténticas" }
];

export default function QuesoBola() {
  return (
    <section id="queso" className="py-12 bg-brand-sand select-none w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Large Rounded Dark Green Card */}
        <div className="bg-brand-green text-white rounded-[40px] p-8 md:p-16 shadow-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Gold label */}
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
                Tradición Gastronómica
              </span>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif font-medium text-white leading-tight mb-6 tracking-tight">
                Descubre la famosa Ruta <br />
                del Queso Bola
              </h2>

              {/* Description */}
              <p className="text-sm text-brand-sand/80 mb-10 leading-relaxed font-sans max-w-xl">
                Ocosingo es reconocido por una de sus tradiciones gastronómicas más emblemáticas. Conozca a los productores locales, disfrute sabores auténticos y recorra los paisajes de montaña que dan vida a este producto artesanal.
              </p>

              {/* Grid of 4 transparent cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                {highlights.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <h4 className="text-sm font-bold text-white font-serif mb-1">{item.title}</h4>
                    <p className="text-xs text-brand-sand/70 font-sans leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Gold Outline Button */}
              <a
                href="https://wa.me/529191000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green font-bold text-xs uppercase tracking-widest transition-colors duration-300 shadow-sm"
              >
                Descubrir la Ruta
              </a>
            </motion.div>

            {/* Right Column: Queso Bola Image */}
            <div className="lg:col-span-5 relative h-[320px] md:h-[420px] w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative w-full h-full rounded-[24px] overflow-hidden shadow-md border border-white/5"
              >
                <Image
                  src="/images/queso-bola.png"
                  alt="Queso Bola de Ocosingo"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
