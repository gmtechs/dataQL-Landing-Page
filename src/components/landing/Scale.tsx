const stats = [
  { value: "100K+", label: "Monte Carlo loops per query", code: "qmc.iter" },
  { value: "11", label: "Active research protocols", code: "protocol.n" },
  { value: "412ms", label: "Median end-to-end latency", code: "p50.lat" },
  { value: "99.97%", label: "Lineage attestation coverage", code: "trust.cov" },
];

export function Scale() {
  return (
    <section className="relative py-24 border-t border-border/60 bg-card/20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-2">§ 02 — Scale of operations</p>
            <h3 className="text-2xl lg:text-3xl font-medium tracking-tight max-w-xl">
              The lab in <span className="font-serif italic">numbers</span>.
            </h3>
          </div>
          <p className="hidden md:block font-mono text-[10px] text-muted-foreground tracking-widest">
            UPDATED HOURLY · LIVE TELEMETRY
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {stats.map((s) => (
            <div
              key={s.code}
              className="border-r border-b border-border p-8 lg:p-10 group hover:bg-card/60 transition-colors"
            >
              <div className="font-serif text-5xl lg:text-7xl font-normal leading-none tracking-tight">
                {s.value}
              </div>
              <div className="mt-6 text-sm text-foreground/80 leading-snug max-w-[18ch]">
                {s.label}
              </div>
              <div className="mt-4 font-mono text-[10px] text-muted-foreground tracking-widest">
                {s.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
