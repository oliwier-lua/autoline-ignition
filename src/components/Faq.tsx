import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ile kosztuje pomoc drogowa?",
    a: "Cena zależy od liczby kilometrów (dojazd + transport) oraz rodzaju usługi. Zadzwoń, podaj skąd-dokąd, a od razu otrzymasz konkretną wycenę.",
  },
  {
    q: "Czy odbierzecie auto z całego województwa?",
    a: "Tak, dojeżdżamy w całe lubuskie — Zielona Góra, Gorzów Wlkp., Nowa Sól, Żary, Świebodzin i mniejsze miejscowości.",
  },
  {
    q: "Czy skupujecie auta uszkodzone i powypadkowe?",
    a: "Tak — skupujemy auta w każdym stanie technicznym. Powypadkowe, niesprawne, z brakami — wycena telefoniczna i gotówka od ręki.",
  },
  {
    q: "Jak szybko przyjedziecie?",
    a: "Zwykle 30–60 minut na terenie miast wojewódzkich. W mniejszych miejscowościach czas zależy od dystansu — dokładny ETA podajemy przez telefon.",
  },
  {
    q: "Czy płacicie gotówką za auto?",
    a: "Tak — gotówka od ręki, od razu po wycenie i podpisaniu umowy. Wszystkie formalności załatwiamy na miejscu.",
  },
  {
    q: "W jakich godzinach pracujecie?",
    a: "Codziennie, 7 dni w tygodniu, w godzinach 8:00 – 22:00.",
  },
];

export const Faq = () => (
  <section className="py-20 sm:py-28 bg-secondary">
    <div className="container mx-auto max-w-3xl">
      <div className="mb-12 reveal">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          FAQ
        </span>
        <h2 className="font-display text-4xl sm:text-5xl mt-2">
          Najczęstsze pytania
        </h2>
      </div>

      <Accordion type="single" collapsible className="reveal space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`q-${i}`}
            className="bg-card border border-border rounded-2xl px-5 shadow-card-soft"
          >
            <AccordionTrigger className="text-left font-semibold text-base hover:no-underline hover:text-accent">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
