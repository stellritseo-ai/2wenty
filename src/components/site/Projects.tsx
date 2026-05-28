import { useState } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const items = [
  { src: p1, title: "Maple Ridge Estate", tag: "New Construction", meta: "Columbus, OH · 4,200 sqft", span: "md:row-span-2" },
  { src: p2, title: "Linden Heights Kitchen", tag: "Renovation", meta: "Full remodel · 8 weeks", span: "" },
  { src: p3, title: "Westgate Townhomes", tag: "Multi-Family", meta: "12-unit development", span: "" },
  { src: p4, title: "North Hill Transformation", tag: "Before / After", meta: "Studs to finish", span: "md:col-span-2" },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<typeof items[number] | null>(null);

  return (
    <section id="projects" className="relative py-[60px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary uppercase tracking-widest">
              Selected Work
            </div>
            <h2 className="mt-5 font-display text-[46px] font-bold leading-tight">
              A portfolio of homes <span className="text-gradient-emerald">that endure.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From transformative renovations to ground-up developments, every project is a study in detail and patience.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 grid-rows-[repeat(2,minmax(260px,1fr))] gap-4 md:gap-5">
          {items.map((it) => (
            <figure
              key={it.title}
              onClick={() => setActiveProject(it)}
              className={`group relative overflow-hidden rounded-3xl shadow-elegant cursor-zoom-in ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 z-10">
                <div className="inline-flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-[10px] uppercase tracking-widest text-gold">
                  {it.tag}
                </div>
                <div className="mt-3 font-display text-xl font-semibold">{it.title}</div>
                <div className="text-sm text-muted-foreground">{it.meta}</div>
              </figcaption>
              <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full glass-strong opacity-0 group-hover:opacity-100 transition duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-gold">→</span>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setActiveProject(null)}
        >
          <button
            onClick={() => setActiveProject(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-ink/60 text-white/80 hover:text-gold border border-white/10 hover:border-gold/30 hover:bg-ink transition duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div
            className="relative max-w-full max-h-[85vh] md:max-w-4xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)] animate-scale-in cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeProject.src}
              alt={activeProject.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-3xl"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 sm:p-8">
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-widest text-gold font-semibold">
                {activeProject.tag}
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
                {activeProject.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                {activeProject.meta}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
