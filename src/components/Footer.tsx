import { PHONE_DISPLAY, PHONE_HREF } from "./CallButton";

export const Footer = () => (
  <footer className="bg-surface-dark-2 text-white/70 border-t border-white/5">
    <div className="container mx-auto py-14 grid md:grid-cols-3 gap-10">
      <div>
        <div className="font-display text-3xl tracking-wider text-white mb-3">
          AUTO<span className="text-accent">LINE</span>
        </div>
        <p className="text-sm">
          Pomoc drogowa, wynajem autolawet i skup aut na terenie całego
          województwa lubuskiego.
        </p>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-3">Kontakt</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href={PHONE_HREF} className="hover:text-accent">
              📞 {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a href="mailto:kontakt@autoline.pl" className="hover:text-accent">
              ✉ kontakt@autoline.pl
            </a>
          </li>
          <li>📍 Województwo lubuskie</li>
          <li>🕘 Codziennie 8:00 – 22:00</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-3">Informacje</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-accent">Polityka prywatności</a></li>
          <li><a href="#" className="hover:text-accent">Regulamin</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/5">
      <div className="container mx-auto py-5 text-xs text-center text-white/50">
        © 2026 Autoline. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);
