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

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="reveal space-y-8">
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

          <div className="reveal bg-surface-dark-2 p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-center text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Najszybsza droga
            </div>
            <a
              href={PHONE_HREF}
              className="font-display text-5xl sm:text-6xl text-white hover:text-accent transition-smooth leading-tight"
              aria-label={`Zadzwoń ${PHONE_DISPLAY}`}
            >
              📞 {PHONE_DISPLAY}
            </a>
            <p className="mt-6 text-white/80 text-lg">
              Najszybszy sposób na pomoc — zadzwoń. Odbieramy codziennie 8:00–22:00.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <a
                href={PHONE_HREF}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent transition-smooth"
              >
                <Phone className="h-5 w-5 text-accent mb-2" />
                <div className="text-xs text-white/60 uppercase tracking-wider">Telefon</div>
                <div className="font-semibold text-white text-sm">{PHONE_DISPLAY}</div>
              </a>
              <a
                href="mailto:kontakt@autoline.pl"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent transition-smooth"
              >
                <Mail className="h-5 w-5 text-accent mb-2" />
                <div className="text-xs text-white/60 uppercase tracking-wider">E-mail</div>
                <div className="font-semibold text-white text-sm break-all">kontakt@autoline.pl</div>
              </a>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="h-5 w-5 text-accent mb-2" />
                <div className="text-xs text-white/60 uppercase tracking-wider">Obszar</div>
                <div className="font-semibold text-white text-sm">Województwo lubuskie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
