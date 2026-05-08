import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import crest from "@/assets/crest.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-tight flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={crest} alt="The Faith School crest" width={44} height={44} className="h-11 w-11" />
          <div className="leading-tight">
            <p className="font-display text-lg font-bold text-primary">The Faith School</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Limited · Crèche – JSS3</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary after:scale-x-100" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-primary" }}
              className="relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+2348108420754" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" /> 0810 842 0754
          </a>
          <Link
            to="/admissions"
            className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-gold-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-tight flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-secondary text-primary" }}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-gold-foreground"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
