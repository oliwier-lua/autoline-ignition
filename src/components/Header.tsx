import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CallButton } from "./CallButton";

const links = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#obszar", label: "Obszar" },
  { href: "#galeria", label: "Galeria" },
  { href: "#o-nas", label: "O nas" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "bg-surface-dark/95 backdrop-blur shadow-elegant"
          : "bg-surface-dark/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-3xl tracking-wider text-white">
            AUTO<span className="text-accent">LINE</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-accent transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton size="sm" className="hidden sm:inline-flex" />
          <a
            href="tel:+48726259806"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-accent text-accent-foreground"
            aria-label="Zadzwoń"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-surface-dark border-t border-white/10">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/90 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
