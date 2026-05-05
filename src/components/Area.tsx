import { MapPin } from "lucide-react";

const cities = [
  "Zielona Góra",
  "Gorzów Wielkopolski",
  "Nowa Sól",
  "Żary",
  "Żagań",
  "Świebodzin",
  "Międzyrzecz",
  "Słubice",
  "Sulechów",
  "Krosno Odrzańskie",
  "Kostrzyn nad Odrą",
  "Drezdenko",
  "Strzelce Krajeńskie",
];

export const Area = () => (
  <section id="obszar" className="py-20 sm:py-28 bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Gdzie dojeżdżamy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-2">
            Działamy na terenie całego{" "}
            <span className="text-accent">województwa lubuskiego</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Najczęściej obsługiwane miasta i okolice:
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {cities.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 text-foreground"
              >
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="font-medium">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative">
          <iframe
            src="https://www.google.com/maps?q=wojew%C3%B3dztwo+lubuskie&output=embed&z=8"
            width="100%"
            height="450"
            style={{ border: 0 }}
            className="rounded-2xl w-full shadow-elegant"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Województwo lubuskie — obszar działania Autoline (pomoc drogowa, holowanie, autolaweta)"
          />
        </div>
      </div>
    </div>
  </section>
);
