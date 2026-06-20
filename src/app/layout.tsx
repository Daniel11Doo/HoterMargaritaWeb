import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Margarita | Ocosingo Chiapas",
  description: "Tradición, comodidad y hospitalidad en el corazón de Ocosingo. Con más de 46 años de historia, permítanos atenderle como si estuviera en casa.",
  keywords: ["hotel margarita", "ocosingo chiapas", "tonina", "hospedaje ocosingo", "ruta del queso bola", "hoteles en ocosingo", "chiapas turismo"],
  authors: [{ name: "Hotel Margarita" }],
  openGraph: {
    title: "Hotel Margarita | Tradición y hospitalidad en Ocosingo",
    description: "Tradición, comodidad y hospitalidad en el corazón de Ocosingo. Con más de 46 años de historia, permítanos atenderle como si estuviera en casa.",
    url: "https://hotelmargaritaocosingo.com",
    siteName: "Hotel Margarita",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Hotel Margarita Ocosingo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Margarita | Tradición y hospitalidad en Ocosingo",
    description: "Tradición, comodidad y hospitalidad en el corazón de Ocosingo.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-brand-text-dark bg-brand-bg">
        {children}
      </body>
    </html>
  );
}
