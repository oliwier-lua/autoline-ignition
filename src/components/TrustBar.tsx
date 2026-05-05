import { MapPin, Clock, Users, Banknote } from "lucide-react";

const items = [
  { Icon: MapPin, label: "Całe Lubuskie" },
  { Icon: Clock, label: "Czynne 8 – 22" },
  { Icon: Users, label: "Doświadczona ekipa" },
  { Icon: Banknote, label: "Gotówka za auto od ręki" },
];

export const TrustBar = () => (
  <section className="bg-surface-dark border-y border-white/5">
    <div className="container mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map(({ Icon, label }) => (
        <div key={label} className="flex items-center gap-3 text-white/90">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/15 text-accent">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-semibold text-sm sm:text-base">{label}</span>
        </div>
      ))}
    </div>
  </section>
);
