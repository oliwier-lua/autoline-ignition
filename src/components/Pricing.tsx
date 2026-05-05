import { CallButton } from "./CallButton";
import { Calculator } from "lucide-react";

export const Pricing = () => (
  <section className="py-20 sm:py-28 bg-surface-dark text-white relative overflow-hidden">
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
    <div className="container mx-auto relative">
      <div className="max-w-3xl mx-auto text-center reveal">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 text-accent mb-6">
          <Calculator className="h-7 w-7" />
        </span>
        <h2 className="font-display text-4xl sm:text-5xl">
          Cena zależy od liczby kilometrów
        </h2>
        <p className="mt-6 text-lg text-white/75">
          Każde zlecenie wyceniamy indywidualnie — finalna kwota zależy
          przede wszystkim od dystansu (km dojazdu + transportu) oraz
          rodzaju usługi. Zadzwoń, podaj{" "}
          <span className="text-accent font-semibold">skąd-dokąd</span>,
          a od razu otrzymasz konkretną cenę.{" "}
          <span className="text-white font-semibold">Bez ukrytych kosztów.</span>
        </p>

        <div className="mt-10 flex justify-center">
          <CallButton size="lg" label="📞 Darmowa wycena: 726 259 806" />
        </div>
      </div>
    </div>
  </section>
);
