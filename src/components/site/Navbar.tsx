import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-elegant" : "bg-transparent"
            }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <span className="relative grid h-16 w-16 place-items-center rounded-full overflow-hidden shadow-[0_8px_24px_-8px_var(--primary)] bg-ink">
              <img
                src={logo}
                alt="2wenty 2wo Logo"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute -inset-1 rounded-full border border-gold/40 opacity-0 group-hover:opacity-100 transition" />
            </span>
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold tracking-tight">2wenty 2wo</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bricks &amp; Mortar</div>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 rounded-full text-white hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-emerald px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition hover:-translate-y-0.5"
          >
            Request Consultation
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
