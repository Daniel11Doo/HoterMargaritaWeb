"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-brand-sand/80 py-12 px-6 select-none w-full border-t border-brand-green-dark/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-sm">
        {/* Left block */}
        <div className="flex flex-col">
          <p className="font-serif text-2xl text-brand-sand mb-2 font-medium">
            Hotel Margarita
          </p>
          <p className="opacity-70 font-sans">
            Ocosingo, Chiapas · México
          </p>
        </div>

        {/* Right block */}
        <div className="flex flex-col opacity-70 font-sans md:text-right gap-1 justify-center">
          <p>© {currentYear} Hotel Margarita.</p>
          <p>Tradición familiar desde 1978.</p>
        </div>
      </div>
    </footer>
  );
}
