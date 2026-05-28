import { useState, useEffect } from "react";
import heroHouse from "@/assets/hero-house.jpg";
import heroHouse2 from "@/assets/project-1.jpg";
import heroHouse3 from "@/assets/project-3.jpg";

const backgroundImages = [heroHouse, heroHouse2, heroHouse3];

const stats = [
  { k: "Licensed & Bonded", v: "Contractors" },
  { k: "Columbus & Mansfield", v: "Service Areas" },
  { k: "24/7", v: "Emergency Services" },
  { k: "New Construction", v: "Specialists" },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="top" className="relative isolate overflow-hidden min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Full background image slideshow */}
      <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden bg-background">
        {backgroundImages.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-all ease-out ${
                isActive 
                  ? "opacity-100 scale-105 duration-[6000ms]" 
                  : "opacity-0 scale-100 duration-1000"
              }`}
            />
          );
        })}
        {/* Cinematic overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/45 to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
      </div>

      {/* aurora blobs + blueprint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl animate-aurora" />
        <div className="absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl animate-aurora" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 grid-blueprint opacity-20 mask-fade-b" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground animate-fade-in mt-6 md:mt-20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Woman-Owned · Licensed &amp; Bonded · Ohio
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] sm:leading-[1.02] tracking-tight animate-fade-up">
            Building Futures
            <span className="block">
              <span className="text-gradient-gold">Brick</span> by{" "}
              <span className="text-gradient-emerald">Brick.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground animate-fade-up delay-200">
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

          {/* Slideshow Indicators */}
          <div className="mt-10 flex gap-2 items-center animate-fade-up delay-400">
            {backgroundImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? "w-8 bg-gradient-to-r from-primary to-emerald shadow-[0_0_8px_var(--primary)]" 
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-500">
            {stats.map((s) => (
              <div
                key={s.k}
                className="glass rounded-2xl p-4 hover:border-primary/40 transition group"
              >
                <dt className="text-xs uppercase tracking-wider text-gold/90">{s.v}</dt>
                <dd className="mt-1 font-display text-sm font-semibold">{s.k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
