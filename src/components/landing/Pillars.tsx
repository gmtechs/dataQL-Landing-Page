import { Cpu, Activity, Shield } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    tag: "01 / CORE",
    title: "Agentic Core Architecture",
    body: "Dynamic Model Context Protocol (MCP) tool summoning. Agents negotiate, route, and instantiate the precise toolchain per query — no static pipelines, no wasted compute.",
    metric: "MCP · 142 TOOLS",
  },
  {
    icon: Activity,
    tag: "02 / COMPUTE",
    title: "Probabilistic Simulations",
    body: "Localized Quasi-Monte Carlo execution running 100,000+ matrix distribution loops. Convergence-bounded uncertainty surfaced as actionable confidence bands.",
    metric: "QMC · 10⁵ LOOPS",
  },
  {
    icon: Shield,
    tag: "03 / TRUST",
    title: "Immutable Lineage Tracking",
    body: "Every transformation cryptographically signed. Visual data traceability with per-node reliability scores — audit any number back to its origin row.",
    metric: "SHA · LINEAGE",
  },
];

export function Pillars() {
  return (
    <section id="protocol" className="relative py-28 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest">
              // THE CORE ENGINE
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              Three protocols. One coherent intelligence layer.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Built for institutional researchers who require provenance, statistical
            rigor, and deterministic reproducibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <article
              key={p.tag}
              className="group relative p-7 rounded-xl border border-border bg-card/40 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-opacity" />
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 grid place-items-center rounded-lg border border-border bg-background/50 text-primary group-hover:border-primary/40 transition-colors">
                  <p.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <div className="mt-8 pt-5 border-t border-dashed border-border/70 flex items-center justify-between">
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
