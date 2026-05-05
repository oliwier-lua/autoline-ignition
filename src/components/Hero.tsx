import heroImg from "@/assets/hero-tow.jpg";
import { CallButton } from "./CallButton";
import { MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Autolaweta transportująca samochód o zmierzchu"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-wider mb-6 reveal">
            <MapPin className="h-3.5 w-3.5" /> Całe województwo lubuskie
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] reveal">
            Pomoc drogowa i wynajem autolawet —{" "}
            <span className="text-accent">całe Lubuskie</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl reveal">
            Szybko, profesjonalnie, w uczciwej cenie. Czynne codziennie{" "}
            <span className="text-white font-semibold">8:00 – 22:00</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 reveal">
            <CallButton size="lg" label="Zadzwoń teraz" />
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center px-7 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-smooth"
            >
              Nasze usługi
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-white/70 text-sm reveal">
            <span className="h-px w-10 bg-accent" />
            <span>Działamy na terenie całego województwa lubuskiego</span>
          </div>
        </div>
      </div>
    </section>
  );
};
