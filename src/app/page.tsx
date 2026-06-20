import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Benefits from "@/components/benefits/Benefits";
import History from "@/components/history/History";
import Rooms from "@/components/rooms/Rooms";
import Tonina from "@/components/tonina/Tonina";
import QuesoBola from "@/components/queso-bola/QuesoBola";
import Restaurant from "@/components/restaurant/Restaurant";
import Events from "@/components/events/Events";
import Gallery from "@/components/gallery/Gallery";
import Location from "@/components/location/Location";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Smooth Scroll via Lenis */}
      <SmoothScroll />

      {/* Main Sections */}
      <main className="flex-grow w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Barra de Beneficios */}
        <Benefits />

        {/* 3. Nuestra Historia */}
        <History />

        {/* 4. Habitaciones */}
        <Rooms />

        {/* 5. Descubre Toniná */}
        <Tonina />

        {/* 6. Ruta del Queso Bola */}
        <QuesoBola />

        {/* 7. Restaurante */}
        <Restaurant />

        {/* 8. Eventos */}
        <Events />

        {/* 9. Galería */}
        <Gallery />

        {/* 10. Ubicación y CTA Final */}
        <Location />
      </main>

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
