import aboutImg from "@/assets/about.jpg";
import blueprint from "@/assets/blueprint.jpg";

const focus = [
  "Real estate development",
  "New construction",
  "Single-family homes",
  "Multi-family projects",
  "Residential construction",
  "Design + build services",
  "Licensed contractor services",
];

const helps = ["Families", "Single parents", "First-time homebuyers", "Community projects"];

export function About() {
  return (
    <section id="about" className="relative py-[60px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-gold/15 to-primary/15 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={aboutImg}
                alt="Senita Feagin, founder of 2wenty 2wo Bricks and Mortar"
                width={1200}
                height={1400}
                loading="lazy"
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-10 w-56 h-56 rounded-2xl overflow-hidden glass-strong shadow-card rotate-[6deg] hidden sm:block animate-float-slow">
              <img src={blueprint} alt="Architectural blueprint" loading="lazy" className="h-full w-full object-cover opacity-90" />
            </div>
            <div className="absolute -top-6 -left-4 sm:-left-8 glass-strong rounded-2xl px-5 py-4 shadow-card animate-float">
              <div className="text-xs uppercase tracking-widest text-gold">Founder</div>
              <div className="font-display text-lg font-semibold">Senita Feagin</div>
              <div className="text-xs text-muted-foreground">Woman-Owned · Ohio</div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-gold uppercase tracking-widest">
              About the firm
            </div>
            <h2 className="mt-5 font-display text-[47px] font-bold leading-tight">
              Crafted with care. <br />
              <span className="text-gradient-emerald">Built to outlast generations.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              2wenty 2wo Bricks and Mortar LLC is a woman-owned real estate
              development and construction company serving Columbus, Mansfield,
              Ohio, and surrounding areas within a 70–75 mile radius.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-primary mb-3">We specialize in</div>
                <ul className="space-y-2 text-sm">
                  {focus.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-gold mb-3">We help</div>
                <ul className="space-y-2 text-sm">
                  {helps.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-gradient-to-br from-primary/15 to-gold/10 p-4">
                  <div className="text-xs text-muted-foreground">Service radius</div>
                  <div className="font-display text-xl font-bold">70–75 miles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
