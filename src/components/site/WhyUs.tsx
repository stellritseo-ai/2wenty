import { Heart, ShieldCheck, Users, Sparkles, Award, MessageCircle, Home, BadgeCheck } from "./icons";

const items = [
  { Icon: Heart, title: "Woman-Owned Business", desc: "Founded and led by Senita Feagin with vision and integrity." },
  { Icon: ShieldCheck, title: "Licensed & Bonded", desc: "Fully compliant, insured, and committed to safety." },
  { Icon: Users, title: "Community-Focused", desc: "We invest in the neighborhoods we build in." },
  { Icon: Sparkles, title: "Modern Design Standards", desc: "Contemporary aesthetics with timeless materials." },
  { Icon: Award, title: "High-Quality Craftsmanship", desc: "Master tradespeople and uncompromising QC." },
  { Icon: MessageCircle, title: "Personalized Experience", desc: "A dedicated point of contact through every phase." },
  { Icon: Home, title: "Family-Oriented Vision", desc: "Homes designed for the way real families live." },
  { Icon: BadgeCheck, title: "Transparent Communication", desc: "Clear timelines, budgets, and weekly updates." },
];

export function WhyUs() {
  return (
    <section className="relative py-[60px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-gold uppercase tracking-widest">
            Why choose us
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Built on trust. <span className="text-gradient-gold">Delivered with luxury.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden glass-strong">
          {items.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative p-7 bg-background/40 hover:bg-background/70 transition"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <Icon className="h-7 w-7 text-gold group-hover:text-primary transition" />
              <h3 className="mt-5 font-display text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
