import { LineChart, Database, Webhook } from "lucide-react";

const modules = [
  {
    icon: LineChart,
    name: "Global Finance Pack",
    code: "fin.market",
    desc: "Real-time market data monitoring with native EMA, SMA, RSI, and MACD indicators computed at session edge.",
  },
  {
    icon: Database,
    name: "Bring Your Own Data",
    code: "byod.duck",
    desc: "Private secure ingestion using DuckDB local session processing for CSV, JSON, and SQL files. Nothing leaves your boundary.",
  },
  {
    icon: Webhook,
    name: "Autonomous Data Hooks",
    code: "hook.alert",
    desc: "Plain-text alert parameters pushing real-time threshold notifications straight to Slack or Email webhooks.",
  },
];

export function Syftics() {
  return (
    <section id="syftics" className="relative py-32 border-t border-border/60">
      <div className="absolute inset-0 grid-bg radial-fade opacity-25" />

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-3">§ 05 — Flagship product</p>
            <p className="font-mono text-[11px] text-muted-foreground/80">
              Syftics OS<br />
              T-45 days to v1.0
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.05] font-medium max-w-4xl">
              <span className="font-serif italic font-normal text-primary">Syftics.</span>{" "}
              The first commercial instrument built on the DataQL protocol stack.
            </h2>
            <p className="mt-6 text-foreground/70 max-w-2xl leading-relaxed">
              An AI-native operating system for the analyst&apos;s terminal. Syftics is
              the productised expression of our three research protocols — written
              once, deployable to any institutional research desk.
            </p>
          </div>
        </div>

        {/* Terminal canvas */}
        <div className="mt-8 rounded-xl border border-border bg-card/60 backdrop-blur overflow-hidden shadow-[0_0_120px_-30px_oklch(0.88_0.18_200_/_0.2)]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/60">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              syftics — ~/lab/session.42 — 120×38
            </span>
            <span className="font-mono text-[11px] text-primary">● live</span>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-border font-mono text-[13px] leading-7">
              <p><span className="text-muted-foreground">syftics&gt;</span> <span className="text-foreground">query</span> &quot;volatility regime shift in NDX past 14d&quot;</p>
              <p className="text-muted-foreground">[mcp] summoning: fin.market, stat.gqmc, lineage.trace</p>
              <p className="text-muted-foreground">[qmc]  running 100,000 distributional loops...</p>
              <p className="text-muted-foreground">[qmc]  convergence reached at iter 87,412 · ε = 0.0021</p>
              <p><span className="text-primary">→ regime:</span> high-vol cluster detected · p=0.94</p>
              <p><span className="text-primary">→ macd:</span> bearish cross @ 14:02 UTC</p>
              <p><span className="text-primary">→ hook:</span> dispatched · slack#desk-research</p>
              <p className="mt-4 flex items-center gap-2">
                <span className="text-muted-foreground">syftics&gt;</span>
                <span className="h-4 w-2 bg-primary animate-pulse-dot" />
              </p>
            </div>

            <div className="p-6 lg:p-10 grid grid-cols-2 gap-5 content-start">
              {[
                ["Confidence", "94.2%"],
                ["Iterations", "87,412"],
                ["Latency", "412ms"],
                ["Lineage Depth", "11 nodes"],
              ].map(([k, v]) => (
                <div key={k} className="p-4 rounded-lg border border-border bg-background/50">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{k}</div>
                  <div className="mt-2 font-serif text-3xl">{v}</div>
                </div>
              ))}
              <div className="col-span-2 p-4 rounded-lg border border-primary/30 bg-primary/5">
                <div className="font-mono text-[10px] text-primary tracking-widest uppercase">Distribution</div>
                <svg viewBox="0 0 200 60" className="mt-2 w-full h-12">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const h = 8 + Math.abs(Math.sin(i * 0.5)) * 40 * (1 - Math.abs(i - 20) / 25);
                    return (
                      <rect
                        key={i}
                        x={i * 5}
                        y={60 - h}
                        width={3}
                        height={h}
                        fill="currentColor"
                        className="text-primary"
                        opacity={0.4 + (h / 60) * 0.6}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
          {modules.map((m) => (
            <div
              key={m.code}
              className="bg-background p-7 hover:bg-card/40 transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <m.icon size={20} strokeWidth={1.5} className="text-primary" />
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {m.code}
                </span>
              </div>
              <h3 className="text-lg font-medium tracking-tight">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
