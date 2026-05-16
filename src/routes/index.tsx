import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Scale } from "@/components/landing/Scale";
import { Research } from "@/components/landing/Pillars";
import { Principles } from "@/components/landing/Principles";
import { Syftics } from "@/components/landing/Syftics";
import { Partners } from "@/components/landing/Partners";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DataQL — A Research & Development Lab" },
      {
        name: "description",
        content:
          "DataQL is an independent R&D lab building the mathematical substrate beneath modern quantitative research. Home of the Syftics protocol stack.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Scale />
      <Research />
      <Principles />
      <Syftics />
      <Partners />
      <Footer />
    </main>
  );
}
