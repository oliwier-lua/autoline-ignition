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
          <div className="aspect-square w-full max-w-md mx-auto bg-gradient-dark rounded-3xl p-8 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, hsl(var(--accent)) 0%, transparent 50%)" }} />
            <svg viewBox="0 0 400 400" className="w-full h-full relative" aria-label="Kontur województwa lubuskiego">
              {/* Stylized lubuskie outline */}
              <path
                d="M120 50 L200 40 L260 70 L300 60 L340 110 L330 170 L350 220 L320 270 L340 320 L290 360 L220 350 L160 370 L110 340 L80 290 L60 220 L70 160 L90 100 Z"
                fill="hsl(var(--accent) / 0.18)"
                stroke="hsl(var(--accent))"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* City pins */}
              {[
                { x: 130, y: 280, label: "Zielona Góra" },
                { x: 240, y: 130, label: "Gorzów Wlkp." },
                { x: 200, y: 220, label: "Świebodzin" },
                { x: 290, y: 260, label: "Sulechów" },
                { x: 110, y: 330, label: "Żary" },
              ].map((p) => (
                <g key={p.label}>
                  <circle cx={p.x} cy={p.y} r="6" fill="hsl(var(--accent))" />
                  <circle cx={p.x} cy={p.y} r="11" fill="hsl(var(--accent) / 0.3)" />
                  <text
                    x={p.x + 14}
                    y={p.y + 4}
                    fill="white"
                    fontSize="11"
                    fontFamily="Inter"
                    fontWeight="600"
                  >
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);
