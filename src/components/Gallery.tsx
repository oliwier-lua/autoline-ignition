import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";

const images = [
  { src: g1, alt: "Autolaweta z załadowanym samochodem osobowym" },
  { src: g3, alt: "Pomoc drogowa nocą — światła ostrzegawcze" },
  { src: g2, alt: "Mechanizm załadunku autolawety" },
  { src: g5, alt: "Autolaweta na drodze ekspresowej" },
  { src: g4, alt: "Kierowca podpinający pojazd na lawetę" },
  { src: g6, alt: "Powypadkowy samochód na lawecie" },
  { src: g7, alt: "Skup aut — gotówka od ręki" },
];

export const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12 reveal">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Galeria
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-2">
            W akcji
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`reveal relative overflow-hidden rounded-2xl group ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground italic text-center">
          Zdjęcia poglądowe — zostaną zastąpione fotografiami floty.
        </p>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:text-accent"
            onClick={() => setOpen(null)}
            aria-label="Zamknij"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={images[open].src}
            alt={images[open].alt}
            className="max-w-full max-h-full object-contain rounded-2xl shadow-elegant"
          />
        </div>
      )}
    </section>
  );
};
