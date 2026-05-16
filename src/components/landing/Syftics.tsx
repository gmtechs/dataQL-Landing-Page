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
    <section id="syftics" className="relative py-28 border-t border-border/60">
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-primary" />
          <span className="font-mono text-xs text-primary tracking-widest">
            FLAGSHIP // SYFTICS OS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
          An AI-native operating system for the analyst's terminal.
        </h2>

        {/* Terminal canvas */}
        <div className="mt-14 rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden shadow-[0_0_80px_-20px_oklch(0.88_0.18_200_/_0.15)]">
          {/* terminal chrome */}
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
            {/* console */}
            <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border font-mono text-[13px] leading-7">
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

            {/* stat strip */}
            <div className="p-6 lg:p-8 grid grid-cols-2 gap-5 content-start">
              {[
                ["Confidence", "94.2%"],
                ["Iterations", "87,412"],
                ["Latency", "412ms"],
                ["Lineage Depth", "11 nodes"],
              ].map(([k, v]) => (
                <div key={k} className="p-4 rounded-lg border border-border bg-background/50">
                  <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{k}</div>
                  <div className="mt-2 font-mono text-2xl text-foreground">{v}</div>
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

        {/* modules */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {modules.map((m) => (
            <div
              key={m.code}
              className="group p-6 rounded-xl border border-border bg-card/40 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <m.icon size={20} strokeWidth={1.5} className="text-primary" />
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {m.code}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
