import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Pillars } from "@/components/landing/Pillars";
import { Syftics } from "@/components/landing/Syftics";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DataQL — The Intelligence Protocol for Complex Systems" },
      {
        name: "description",
        content:
          "DataQL abstracts discovery, scraping, cleaning, and modeling behind a single text box. Meet Syftics, the AI-native data operating system.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Pillars />
      <Syftics />
      <Footer />
    </main>
  );
}
