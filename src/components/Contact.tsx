import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./CallButton";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-surface-dark text-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-2">
            Zadzwoń — pomoc drogowa Lubuskie
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="reveal space-y-8 max-w-3xl">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-5 p-6 rounded-3xl bg-gradient-accent text-accent-foreground shadow-accent hover:scale-[1.02] transition-smooth"
            >
              <Phone className="h-10 w-10 flex-shrink-0" strokeWidth={2.5} />
              <div>
                <div className="text-sm font-semibold opacity-80">Zadzwoń bezpośrednio</div>
                <div className="font-display text-4xl">{PHONE_DISPLAY}</div>
              </div>
            </a>

            <div className="space-y-4 text-white/85">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1" />
                <div>
                  <div className="font-semibold text-white">Godziny otwarcia</div>
                  <div>Codziennie 8:00 – 22:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <div className="font-semibold text-white">Obszar działania</div>
                  <div>Województwo lubuskie — Zielona Góra, Gorzów Wielkopolski, Żary, Żagań, Nowa Sól, Świebodzin i okolice</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1" />
                <div>
                  <div className="font-semibold text-white">E-mail</div>
                  <a href="mailto:kontakt@autoline.pl" className="hover:text-accent">
                    kontakt@autoline.pl
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <iframe
                title="Mapa — województwo lubuskie"
                src="https://www.google.com/maps?q=Zielona+G%C3%B3ra,+Lubuskie&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
    </section>
  );
};
