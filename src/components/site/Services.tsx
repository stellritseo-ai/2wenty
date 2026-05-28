import {
  Building2, Hammer, Compass, Home, Buildings, BadgeCheck, PaintRoller, ClipboardList,
} from "./icons";

const services = [
  { Icon: Building2, title: "Real Estate Development", desc: "Strategic site selection, entitlements, and full-cycle development of premium residential properties." },
  { Icon: Hammer, title: "Residential Construction", desc: "Ground-up builds executed with master craftsmanship and meticulous quality control." },
  { Icon: Compass, title: "Design + Build Services", desc: "Architecture, interior planning, and construction unified under a single, accountable team." },
  { Icon: Home, title: "Single-Family Homes", desc: "Bespoke family residences tailored to lifestyle, lot, and long-term equity." },
  { Icon: Buildings, title: "Multi-Family Projects", desc: "Duplex to mid-rise developments engineered for community growth and investor returns." },
  { Icon: BadgeCheck, title: "Licensed Contractor Services", desc: "Fully licensed, bonded, and insured — every project compliant and protected." },
  { Icon: PaintRoller, title: "Renovation & Remodeling", desc: "Transformative remodels and additions that elevate value and elevate living." },
  { Icon: ClipboardList, title: "Project Management", desc: "Transparent timelines, budgets, and communication from breaking ground to keys in hand." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 grid-blueprint opacity-30 mask-fade-b" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-gold uppercase tracking-widest">
            Services
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight">
            End-to-end construction, <span className="text-gradient-gold">designed around you.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A full studio of capabilities — engineered, scheduled, and delivered under one roof.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative rounded-3xl glass p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
                style={{ background: "radial-gradient(60% 60% at 50% 0%, var(--primary) / 0.15, transparent 70%)" }} />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-gold/20 border border-white/10 group-hover:from-primary/50 transition">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gold/90 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition duration-500">
                  Learn more <span>→</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-[10px] tabular-nums text-muted-foreground/60">
                0{i + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
