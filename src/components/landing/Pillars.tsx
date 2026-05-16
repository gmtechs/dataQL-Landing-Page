import { Cpu, Activity, Shield } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    tag: "01 / Core",
    title: "Agentic Core Architecture",
    body: "Dynamic Model Context Protocol (MCP) tool summoning. Agents negotiate, route, and instantiate the precise toolchain per query — no static pipelines, no wasted compute.",
    metric: "MCP · 142 TOOLS",
  },
  {
    icon: Activity,
    tag: "02 / Compute",
    title: "Probabilistic Simulations",
    body: "Localized Quasi-Monte Carlo execution running 100,000+ matrix distribution loops. Convergence-bounded uncertainty surfaced as actionable confidence bands.",
    metric: "QMC · 10⁵ LOOPS",
  },
  {
    icon: Shield,
    tag: "03 / Trust",
    title: "Immutable Lineage Tracking",
    body: "Every transformation cryptographically signed. Visual data traceability with per-node reliability scores — audit any number back to its origin row.",
    metric: "SHA · LINEAGE",
  },
];

export function Research() {
  return (
    <section id="research" className="relative py-32 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-3">§ 03 — Research</p>
            <p className="font-mono text-[11px] text-muted-foreground/80">
              Three protocols<br />
              One coherence layer
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.05] font-medium max-w-3xl">
              The three protocols that compose every{" "}
              <span className="font-serif italic font-normal text-primary">DataQL</span>{" "}
              instrument.
            </h2>
            <p className="mt-6 text-foreground/70 max-w-2xl leading-relaxed">
              Each protocol is published as open research and implemented as a
              hardened runtime kernel. Together, they form the substrate on which
              our flagship product — Syftics — is built.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {pillars.map((p) => (
            <article
              key={p.tag}
              className="group relative p-8 lg:p-10 bg-background hover:bg-card transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="h-12 w-12 grid place-items-center rounded-lg border border-border bg-background/50 text-primary group-hover:border-primary/40 transition-colors">
                  <p.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight font-serif">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
                {p.body}
              </p>
              <div className="mt-12 pt-5 border-t border-dashed border-border/70 flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground/80">
                  {p.metric}
                </span>
                <span className="font-mono text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  → READ SPEC
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
