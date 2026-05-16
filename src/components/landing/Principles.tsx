const principles = [
  {
    n: "I",
    title: "Reproducibility is non-negotiable",
    body: "Every output is bound to a verifiable input lineage. If a result cannot be replayed deterministically, it does not ship.",
  },
  {
    n: "II",
    title: "Uncertainty is a first-class type",
    body: "Confidence intervals travel alongside every figure. Point estimates without distribution are treated as incomplete data.",
  },
  {
    n: "III",
    title: "Local-first, sovereign by default",
    body: "Compute happens inside the user's boundary wherever the protocol allows. No silent telemetry. No covert egress.",
  },
  {
    n: "IV",
    title: "Open protocols, private products",
    body: "We publish the mathematics in the open and harden the implementations behind paid instruments. The community gets the standard. We earn the runtime.",
  },
];

export function Principles() {
  return (
    <section className="relative py-32 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-3">§ 04 — Principles</p>
            <p className="font-mono text-[11px] text-muted-foreground/80">
              Four operating laws<br />
              Non-negotiable
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.05] font-medium max-w-3xl">
              The four laws we{" "}
              <span className="font-serif italic font-normal">refuse to bend</span>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {principles.map((p) => (
            <article
              key={p.n}
              className="bg-background p-10 lg:p-12 hover:bg-card/40 transition-colors"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-serif italic text-5xl text-primary leading-none">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-md">
                    {p.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
