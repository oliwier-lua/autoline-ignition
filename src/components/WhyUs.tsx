import { Award, Zap, Scale, Wallet } from "lucide-react";

const items = [
  {
    Icon: Award,
    title: "Doświadczenie",
    desc: "Lata praktyki na drogach Lubuskiego — znamy region jak własną kieszeń.",
  },
  {
    Icon: Zap,
    title: "Szybki dojazd",
    desc: "Działamy 8:00 – 22:00, w miastach wojewódzkich zwykle 30–60 minut.",
  },
  {
    Icon: Scale,
    title: "Uczciwa wycena",
    desc: "Cena znana przed przyjazdem. Bez ukrytych kosztów i niespodzianek.",
  },
  {
    Icon: Wallet,
    title: "Gotówka za auto",
    desc: "Skup aut w każdym stanie — gotówka od ręki, formalności po naszej stronie.",
  },
];

export const WhyUs = () => (
  <section id="o-nas" className="py-20 sm:py-28 bg-background">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-14 reveal">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Dlaczego my
        </span>
        <h2 className="font-display text-4xl sm:text-5xl mt-2">
          Konkretni ludzie, konkretna robota
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="reveal p-6 rounded-2xl bg-card border border-border hover:border-accent transition-smooth shadow-card-soft"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent mb-4">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
