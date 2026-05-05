import { Truck, Car, Banknote } from "lucide-react";
import { CallButton } from "./CallButton";

const services = [
  {
    Icon: Truck,
    title: "Pomoc drogowa",
    desc: "Awarie, wypadki, transport unieruchomionych pojazdów. Dojazd na terenie całego województwa lubuskiego.",
  },
  {
    Icon: Car,
    title: "Wynajem autolawet",
    desc: "Wynajem autolawet osobom prywatnym i firmom. Elastyczne warunki — doba, weekend, dłuższe okresy.",
  },
  {
    Icon: Banknote,
    title: "Skup aut",
    desc: "Skupujemy auta w każdym stanie — całe, uszkodzone, powypadkowe. Wycena telefoniczna, gotówka od ręki, formalności po naszej stronie.",
  },
];

export const Services = () => (
  <section id="uslugi" className="py-20 sm:py-28 bg-background">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-14 reveal">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Co robimy
        </span>
        <h2 className="font-display text-4xl sm:text-5xl mt-2">Nasze usługi</h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Trzy filary naszej działalności — wszystko, czego możesz potrzebować
          w trasie i nie tylko.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="reveal group bg-card rounded-3xl p-8 shadow-card-soft hover:shadow-elegant transition-smooth border border-border flex flex-col"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-accent text-accent-foreground mb-6 shadow-accent group-hover:scale-110 transition-smooth">
              <Icon className="h-7 w-7" strokeWidth={2.2} />
            </span>
            <h3 className="font-display text-2xl mb-3">{title}</h3>
            <p className="text-muted-foreground flex-1">{desc}</p>
            <div className="mt-6">
              <CallButton size="sm" label="Zadzwoń po wycenę" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
