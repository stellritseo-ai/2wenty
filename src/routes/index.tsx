import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Experience3D } from "@/components/site/Experience3D";
import { WhyUs } from "@/components/site/WhyUs";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "2wenty 2wo Bricks and Mortar LLC — Luxury Construction & Real Estate Development | Columbus & Mansfield, OH" },
      { name: "description", content: "Woman-owned luxury construction and real estate development serving Columbus, Mansfield, and surrounding Ohio communities. Design-build, new construction, and renovation." },
      { property: "og:title", content: "2wenty 2wo Bricks and Mortar LLC" },
      { property: "og:description", content: "Building futures brick by brick — premium residential development & design-build construction in Ohio." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience3D />
      <WhyUs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
