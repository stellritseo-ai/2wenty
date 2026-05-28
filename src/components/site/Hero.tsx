import heroHouse from "@/assets/hero-house.jpg";

const stats = [
  { k: "Licensed & Bonded", v: "Contractors" },
  { k: "Columbus & Mansfield", v: "Service Areas" },
  { k: "24/7", v: "Emergency Services" },
  { k: "New Construction", v: "Specialists" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero pt-28 md:pt-32">
      {/* aurora blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl animate-aurora" />
        <div className="absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl animate-aurora" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 grid-blueprint opacity-40 mask-fade-b" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Woman-Owned · Licensed &amp; Bonded · Ohio
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight animate-fade-up">
              Building Futures
              <span className="block">
                <span className="text-gradient-gold">Brick</span> by{" "}
                <span className="text-gradient-emerald">Brick.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up delay-200">
              Luxury residential development, renovations, and design-build
              construction services for families, first-time homebuyers, and
              growing communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-300">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-emerald px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_50px_-12px_var(--primary)] transition hover:-translate-y-0.5"
              >
                Request Consultation
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground hover:border-gold/40 transition"
              >
                View Projects
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-3 max-w-xl animate-fade-up delay-500">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="glass rounded-2xl p-4 hover:border-primary/40 transition group"
                >
                  <dt className="text-xs uppercase tracking-wider text-gold/90">{s.v}</dt>
                  <dd className="mt-1 font-display text-base font-semibold">{s.k}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero visual */}
          <div className="relative animate-scale-in delay-200">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-tr from-primary/20 via-transparent to-gold/20 blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden glass-strong shadow-elegant">
              <img
                src={heroHouse}
                alt="Luxury modern home rendered in cinematic lighting"
                width={1600}
                height={1200}
                className="w-full h-[480px] md:h-[560px] object-cover"
              />
              {/* floating UI cards */}
              <div className="absolute top-5 left-5 glass-strong rounded-2xl px-4 py-3 animate-float">
                <div className="text-[10px] uppercase tracking-widest text-gold">Project</div>
                <div className="font-display font-semibold">Maple Ridge Estate</div>
                <div className="text-xs text-muted-foreground">Columbus, OH · 4,200 sqft</div>
              </div>
              <div className="absolute bottom-5 right-5 glass-strong rounded-2xl px-4 py-3 animate-float-slow">
                <div className="text-[10px] uppercase tracking-widest text-primary">Live build</div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-display font-semibold">Phase 3 · Framing</span>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-amber-500 text-gold-foreground text-xs font-bold">SF</div>
                <div>
                  <div className="text-xs text-muted-foreground">Owner</div>
                  <div className="font-display text-sm font-semibold">Senita Feagin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
