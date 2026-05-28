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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled || menuOpen ? "glass-strong shadow-elegant" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group z-50">
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

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2 text-base font-medium">
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

          <div className="flex items-center gap-4 z-50">
            {/* Header CTA Button (Hidden on extra small devices to prevent crowding) */}
            <a
              href="#contact"
              className="group relative hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-emerald px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition hover:-translate-y-0.5"
            >
              Request Consultation
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>

            {/* Custom Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex h-11 w-11 flex-col items-center justify-center rounded-full border border-white/10 glass md:hidden focus:outline-none hover:border-gold/40 transition"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 my-0.5 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-lg transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-36 pb-12 px-6 sm:px-12 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            <ul className="flex flex-col gap-5 text-2xl font-bold font-display">
              {links.map((l, index) => (
                <li
                  key={l.href}
                  className={`transition-all duration-500 transform ${
                    menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white hover:text-gold active:text-gold transition-colors inline-block py-1"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Consultation and details */}
          <div
            className={`flex flex-col gap-6 border-t border-white/10 pt-8 transition-all duration-500 transform ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${links.length * 60}ms` }}
          >
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="group w-full justify-center inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-emerald px-6 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition active:scale-95"
            >
              Request Consultation
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <a href="tel:+16143592049" className="hover:text-white active:text-white transition-colors">
                  (614) 359-2049
                </a>
              </div>
              <div>
                <a href="mailto:2wenty2wobricksandmortar@gmail.com" className="hover:text-white active:text-white transition-colors break-all">
                  2wenty2wobricksandmortar@gmail.com
                </a>
              </div>
              <div>Columbus &amp; Mansfield, OH</div>
              <div className="text-gold text-xs uppercase tracking-widest font-bold pt-1">
                24/7 Emergency Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
