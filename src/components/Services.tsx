import { Truck, Car, Banknote, Globe } from "lucide-react";
import { CallButton } from "./CallButton";

const services = [
  {
    Icon: Truck,
    title: "Pomoc drogowa",
    desc: "Awarie, wypadki, transport unieruchomionych pojazdów — Zielona Góra, Gorzów Wielkopolski, Żary, Żagań, Nowa Sól, Świebodzin oraz cała autostrada A2 i droga ekspresowa S3 w lubuskim. Holowanie samochodów osobowych i dostawczych.",
    points: ["awarie i wypadki", "holowanie A2 i S3", "dojazd 30–60 min", "całe lubuskie"],
  },
  {
    Icon: Car,
    title: "Wynajem autolawet",
    desc: "Wynajem autolawet osobom prywatnym i firmom w Zielonej Górze, Gorzowie Wielkopolskim i całym lubuskim. Elastyczne warunki — doba, weekend, dłuższe okresy.",
    points: ["doba / weekend", "dłuższe okresy", "osobom i firmom", "Zielona Góra i okolice"],
  },
  {
    Icon: Banknote,
    title: "Skup aut",
    desc: "Skup aut za gotówkę w lubuskim — całe, uszkodzone, powypadkowe, niesprawne. Wycena telefoniczna, gotówka od ręki, formalności po naszej stronie.",
    points: ["każdy stan techniczny", "auta powypadkowe", "gotówka od ręki", "formalności u nas"],
  },
  {
    Icon: Globe,
    title: "Sprowadzanie aut z zagranicy",
    desc: "Sprowadzamy samochody z Niemiec, Holandii, Belgii i Francji do województwa lubuskiego. Pomagamy znaleźć auto, weryfikujemy stan techniczny, organizujemy transport autolawetą, załatwiamy odprawę celną i tłumaczenia dokumentów.",
    points: ["wyszukanie auta", "weryfikacja VIN i stanu", "transport autolawetą", "dokumenty i tłumaczenia"],
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
          Cztery filary naszej działalności — wszystko, czego możesz potrzebować
          w trasie i nie tylko.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ Icon, title, desc, points }) => (
          <div
            key={title}
            className="reveal group bg-card rounded-3xl p-8 shadow-card-soft hover:shadow-elegant transition-smooth border border-border flex flex-col"
          >
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-accent text-accent-foreground mb-6 shadow-accent group-hover:scale-110 transition-smooth">
              <Icon className="h-7 w-7" strokeWidth={2.2} />
            </span>
            <h3 className="font-display text-2xl mb-3">{title}</h3>
            <p className="text-muted-foreground flex-1">{desc}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CallButton size="sm" label="Zadzwoń po wycenę" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
