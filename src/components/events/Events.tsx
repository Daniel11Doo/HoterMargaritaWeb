"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "Capacitación",
    guests: "20",
    date: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Hotel Margarita, me interesa cotizar un evento:
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}
- Tipo de Evento: ${formData.type}
- Cantidad de Personas: ${formData.guests}
- Fecha Estimada: ${formData.date || "Por definir"}`;

    window.open(`https://wa.me/529191000000?text=${encodeURIComponent(text)}`, "_blank");
    setIsOpen(false);
  };

  return (
    <section id="eventos" className="py-24 bg-brand-sand text-brand-green select-none w-full">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Events Room Image with rounded-[32px] */}
          <div className="lg:col-span-6 relative h-[380px] md:h-[480px] lg:h-[500px] w-full order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-[32px] overflow-hidden shadow-md border border-neutral-100/50"
            >
              <Image
                src="/images/events.png"
                alt="Salón de eventos en Hotel Margarita"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Content & Aforo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Gold label */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              Eventos y Reuniones
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-medium text-brand-green leading-[1.2] mb-6 tracking-tight">
              Espacios para reuniones y eventos
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-brand-text-muted mb-8 leading-relaxed font-sans max-w-lg">
              Disponemos de instalaciones adecuadas para reuniones, capacitaciones, coffee breaks y eventos privados.
            </p>

            {/* Large Gold indicator: 40 PERSONAS MÁX. */}
            <div className="flex items-baseline gap-3 mb-10 select-none">
              <span className="text-[52px] font-serif font-medium text-brand-gold leading-none">
                40
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green font-sans">
                Personas Máx.
              </span>
            </div>

            {/* Outline grey button */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-neutral-300 hover:bg-neutral-100/50 text-brand-green font-bold text-xs uppercase tracking-widest transition-colors duration-300"
            >
              Solicitar información
            </button>
          </motion.div>

        </div>
      </div>

      {/* Pop-up request form */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-10 p-6 md:p-8 border border-neutral-200 text-brand-text-dark"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors text-brand-text-muted hover:text-brand-text-dark"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-xl font-serif font-bold text-brand-green mb-2">Solicitar Información</h3>
              <p className="text-xs text-brand-text-muted mb-6">Cotiza tu capacitación, taller o coffee break para hasta 40 personas.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-green text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1">WhatsApp / Tel</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 9191234567"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-green text-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1">Tipo de Evento</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-green text-sm bg-white"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      <option value="Capacitación">Capacitación</option>
                      <option value="Reunión de Negocios">Reunión de Negocios</option>
                      <option value="Taller / Curso">Taller / Curso</option>
                      <option value="Evento Privado">Evento Social Privado</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1">Personas (Max 40)</label>
                    <input
                      type="number"
                      max="40"
                      min="1"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-green text-sm"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-text-muted mb-1">Fecha Tentativa</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-green text-sm text-brand-text-muted"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-green hover:bg-brand-green-soft text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 group mt-4 text-xs uppercase tracking-wider"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
