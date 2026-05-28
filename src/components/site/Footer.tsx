import { Instagram, Facebook, Linkedin } from "./icons";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-ink mt-20 pt-20 pb-10 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div aria-hidden className="absolute inset-0 grid-blueprint opacity-20 mask-fade-b" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative grid h-16 w-16 place-items-center rounded-full overflow-hidden shadow-[0_8px_24px_-8px_var(--primary)] bg-ink">
                <img
                  src={logo}
                  alt="2wenty 2wo Logo"
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold tracking-tight">2wenty 2wo Bricks &amp; Mortar LLC</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Woman-Owned · Ohio</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Luxury residential development, renovations, and design-build
              construction for the communities of Columbus, Mansfield, and beyond.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full glass hover:border-gold/40 hover:text-gold transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
          ]} />

          <FooterCol title="Services" links={[
            { label: "New Construction", href: "#services" },
            { label: "Renovations", href: "#services" },
            { label: "Design + Build", href: "#services" },
            { label: "Multi-Family", href: "#services" },
          ]} />

          <div>
            <div className="text-xs uppercase tracking-widest text-gold">Contact</div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+16143592049" className="hover:text-foreground">(614) 359-2049</a></li>
              <li className="break-all"><a href="mailto:2wenty2wobricksandmortar@gmail.com" className="hover:text-foreground">2wenty2wobricksandmortar@gmail.com</a></li>
              <li>Columbus &amp; Mansfield, OH</li>
              <li>Mon – Sat · 8:30 AM – 6:00 PM</li>
              <li className="text-gold">24/7 Emergency Services</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} 2wenty 2wo Bricks and Mortar LLC. All rights reserved.</div>
          <div>Design By StellR IT</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-gold">{title}</div>
      <ul className="mt-5 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-muted-foreground hover:text-foreground transition">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
