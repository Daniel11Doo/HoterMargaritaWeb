"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const items = [
  { title: "FACHADA", src: "/images/hero.png" },
  { title: "HABITACIONES", src: "/images/room.png" },
  { title: "RESTAURANTE", src: "/images/restaurant.png" },
  { title: "EVENTOS", src: "/images/events.png" },
  { title: "TONINÁ", src: "/images/tonina.png" },
  { title: "RUTA DEL QUESO BOLA", src: "/images/queso-bola.png" }
];

export default function Carousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden select-none">
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* Title */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#1B3E1C] mb-2">
            Conoce Nuestras Instalaciones
          </h2>
          
          {/* Gold daisy symbol/separator */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-brand-yellow/60" />
            <svg className="w-5 h-5 fill-brand-yellow" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="15" className="fill-brand-yellow" />
              <path d="M50 15c-3 0-5 8-5 15s2 15 5 15 5-8 5-15-2-15-5-15z" />
              <path d="M50 55c-3 0-5 8-5 15s2 15 5 15 5-8 5-15-2-15-5-15z" />
              <path d="M15 50c0-3 8-5 15-5s15 2 15 5-2 5-15 5-15-2-15-5z" />
              <path d="M55 50c0-3 8-5 15-5s15 2 15 5-2 5-15 5-15-2-15-5z" />
            </svg>
            <div className="w-8 h-0.5 bg-brand-yellow/60" />
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full flex items-center px-4 md:px-8">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-brand-green hover:bg-[#32852a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5px]" />
          </button>

          {/* Scrolling Slides Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 w-full snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[240px] md:min-w-[280px] snap-start flex flex-col items-center group cursor-pointer"
              >
                {/* Photo frame */}
                <div className="relative h-44 w-full rounded-[24px] overflow-hidden shadow-md border-2 border-white/60 group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                {/* Caption below */}
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1B3E1C] mt-3 group-hover:text-brand-green transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-brand-green hover:bg-[#32852a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5px]" />
          </button>

        </div>

      </div>
    </section>
  );
}
