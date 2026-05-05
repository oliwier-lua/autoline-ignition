import { Phone } from "lucide-react";

export const PHONE_DISPLAY = "726 259 806";
export const PHONE_HREF = "tel:+48726259806";

interface CallButtonProps {
  variant?: "accent" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export const CallButton = ({
  variant = "accent",
  size = "md",
  label,
  className = "",
}: CallButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-smooth whitespace-nowrap";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  };
  const variants = {
    accent:
      "bg-gradient-accent text-accent-foreground shadow-accent hover:scale-[1.03] hover:brightness-110",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground",
    dark: "bg-surface-dark text-white hover:bg-surface-dark-2",
  };
  return (
    <a
      href={PHONE_HREF}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      aria-label={`Zadzwoń ${PHONE_DISPLAY}`}
    >
      <Phone className="h-4 w-4" strokeWidth={2.5} />
      <span>{label ?? PHONE_DISPLAY}</span>
    </a>
  );
};
