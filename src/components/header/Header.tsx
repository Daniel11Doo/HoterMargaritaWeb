"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Habitaciones", href: "#habitaciones" },
    { label: "Toniná", href: "#tonina" },
    { label: "Queso Bola", href: "#queso" },
    { label: "Ubicación", href: "#ubicacion" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? "bg-brand-sand/90 shadow-sm backdrop-blur-md py-4"
        : "bg-brand-sand/50 backdrop-blur-xs py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">

        {/* Left: Branding */}
        <a href="#" className="flex flex-col items-start select-none">
          <span className="text-xl font-serif font-bold text-brand-green leading-none">
            Hotel Margarita
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-gold mt-1.5 leading-none">
            Ocosingo · Chiapas
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-xs font-bold text-brand-green/80 hover:text-brand-gold uppercase tracking-widest transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Pill Reservar Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/529191000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-brand-green hover:bg-brand-gold text-brand-sand font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-brand-gold/10"
          >
            Reservar
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-green hover:text-brand-gold focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] z-30 bg-brand-sand/98 backdrop-blur-md flex flex-col p-6 animate-fade-in-up">
          <nav className="flex flex-col gap-6 text-center mt-8">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-brand-green hover:text-brand-gold tracking-widest py-3 border-b border-brand-green/5 uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/529191000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3.5 mt-8 rounded-full bg-brand-green hover:bg-brand-gold text-brand-sand font-bold text-xs uppercase tracking-widest transition-all"
            >
              Reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
