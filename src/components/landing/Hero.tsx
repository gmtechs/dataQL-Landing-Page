import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade animate-grid-flow opacity-60" />
      <div
        className="absolute left-1/2 top-[-20%] -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.88 0.18 200 / 0.12), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-pulse-dot" />
              <span className="relative rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-primary">
              SYFTICS ENGINE DEPLOYING · 45-DAY COUNTDOWN ACTIVE
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
            The Intelligence Protocol
            <br />
            for <span className="text-primary text-glow">Complex Systems</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            DataQL abstracts discovery, multi-hop scraping, cleaning, and mathematical
            modeling behind a single text box. Turn raw magnitudes of data into
            strategic certainty.
          </p>

          <form
            id="access"
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 w-full max-w-xl"
          >
            <div className="group flex items-center gap-1 p-1.5 rounded-xl border border-border bg-card/60 backdrop-blur focus-within:border-primary/60 transition-colors">
              <span className="pl-3 font-mono text-xs text-muted-foreground select-none">
                {">"}
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter researcher credentials (email)..."
                className="flex-1 bg-transparent outline-none px-2 py-2.5 text-sm placeholder:text-muted-foreground/70"
              />
              <button
                type="submit"
                className="relative px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_-5px_oklch(0.88_0.18_200_/_0.6)]"
              >
                Request Ingress
              </button>
            </div>
            <p className="mt-3 font-mono text-[10px] text-muted-foreground/80 tracking-wide">
              GDPR COMPLIANT · ZERO PII RETENTION POLICY ENFORCED GLOBALLY
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
