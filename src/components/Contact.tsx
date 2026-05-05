import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { CallButton, PHONE_DISPLAY, PHONE_HREF } from "./CallButton";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Zapytanie ze strony — ${form.name}`);
    const body = encodeURIComponent(
      `Imię: ${form.name}\nTelefon: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:kontakt@autoline.pl?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-surface-dark text-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-14 reveal">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="font-display text-4xl sm:text-5xl mt-2">
            Zadzwoń lub napisz
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="reveal space-y-8">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-5 p-6 rounded-3xl bg-gradient-accent text-accent-foreground shadow-accent hover:scale-[1.02] transition-smooth"
            >
              <Phone className="h-10 w-10 flex-shrink-0" strokeWidth={2.5} />
              <div>
                <div className="text-sm font-semibold opacity-80">Zadzwoń bezpośrednio</div>
                <div className="font-display text-4xl">{PHONE_DISPLAY}</div>
              </div>
            </a>

            <div className="space-y-4 text-white/85">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1" />
                <div>
                  <div className="font-semibold text-white">Godziny otwarcia</div>
                  <div>Codziennie 8:00 – 22:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <div className="font-semibold text-white">Obszar działania</div>
                  <div>Województwo lubuskie</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1" />
                <div>
                  <div className="font-semibold text-white">E-mail</div>
                  <a href="mailto:kontakt@autoline.pl" className="hover:text-accent">
                    kontakt@autoline.pl
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <iframe
                title="Mapa — województwo lubuskie"
                src="https://www.google.com/maps?q=Zielona+G%C3%B3ra,+Lubuskie&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={submit}
            className="reveal bg-surface-dark-2 p-8 rounded-3xl border border-white/10 space-y-4"
          >
            <h3 className="font-display text-2xl mb-2">Wyślij wiadomość</h3>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Imię
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-smooth"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Telefon
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-smooth"
                placeholder="600 000 000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Wiadomość
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-smooth resize-none"
                placeholder="Skąd–dokąd, co potrzebujesz..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-accent text-accent-foreground font-semibold shadow-accent hover:brightness-110 transition-smooth"
            >
              Wyślij zapytanie
            </button>
            <p className="text-xs text-white/50 text-center">
              Lub po prostu zadzwoń — odpowiemy od razu.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
