import house3d from "@/assets/house-3d.png";
import blueprint from "@/assets/blueprint.jpg";

export function Experience3D() {
  return (
    <section id="experience" className="relative py-[60px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/0.15,_transparent_60%)]" />
        <img src={blueprint} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 grid-blueprint opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary uppercase tracking-widest">
              Immersive Experience
            </div>
            <h2 className="mt-5 font-display text-3xl sm:text-[42px] font-bold leading-tight">
              See your home <span className="text-gradient-emerald">before it's built.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg">
              Walk through every blueprint in three dimensions. Our design-build
              workflow turns concepts into cinematic, interactive renders — so
              you commit with absolute confidence.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ["3D rendered floor plans", "Photo-real previews of every room"],
                ["Live blueprint review", "Adjust materials in real time"],
                ["Site walkthroughs", "Track progress weekly with media"],
                ["Material library", "Curated finishes and fixtures"],
              ].map(([t, d]) => (
                <div key={t} className="glass rounded-2xl p-4">
                  <div className="font-display font-semibold text-sm sm:text-base">{t}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[520px] md:h-[620px]">
            {/* rotating ring */}
            <div aria-hidden className="absolute inset-0 grid place-items-center">
              <div className="relative h-[280px] w-[280px] sm:h-[460px] sm:w-[460px] max-w-full max-h-full">
                <div className="absolute inset-0 rounded-full border border-gold/30 animate-spin-slow" />
                <div className="absolute inset-4 sm:inset-6 rounded-full border border-primary/30 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "32s" }} />
                <div className="absolute inset-10 sm:inset-16 rounded-full border border-white/10" />
                <div className="absolute inset-16 sm:inset-24 rounded-full bg-gradient-to-tr from-primary/30 to-gold/20 blur-2xl sm:blur-3xl" />
              </div>
            </div>

            <img
              src={house3d}
              alt="Floating 3D model of a luxury home"
              loading="lazy"
              className="relative z-10 mx-auto h-full w-auto object-contain animate-float drop-shadow-[0_20px_40px_rgba(31,163,74,0.3)] sm:drop-shadow-[0_30px_60px_rgba(31,163,74,0.4)]"
            />

            {/* floating chips */}
            <div className="absolute top-4 sm:top-10 left-1 sm:left-2 glass-strong rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs animate-float">
              <div className="text-gold uppercase tracking-widest text-[9px] sm:text-[10px]">Material</div>
              <div className="font-display font-semibold">Quartzite · Oak</div>
            </div>
            <div className="absolute bottom-6 sm:bottom-12 right-1 sm:right-2 glass-strong rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs animate-float-slow">
              <div className="text-primary uppercase tracking-widest text-[9px] sm:text-[10px]">Square ft</div>
              <div className="font-display font-semibold">3,840</div>
            </div>
            <div className="absolute top-1/2 right-0 sm:right-1 glass-strong rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-gold uppercase tracking-widest text-[9px] sm:text-[10px]">Eta</div>
              <div className="font-display font-semibold">Q3 2026</div>
            </div>

            {/* particles */}
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                aria-hidden
                className="absolute h-1 w-1 rounded-full bg-gold/60 animate-float"
                style={{
                  top: `${(i * 37) % 90 + 5}%`,
                  left: `${(i * 53) % 90 + 5}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${6 + (i % 5)}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
