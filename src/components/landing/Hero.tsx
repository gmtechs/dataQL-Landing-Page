import { useState } from "react";
import heroOrb from "@/assets/hero-orb.png";

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

      {/* 3D refractive shapes */}
      <img
        src={heroOrb}
        alt=""
        aria-hidden
        width={520}
        height={520}
        className="hidden lg:block absolute -right-24 top-16 w-[520px] opacity-80 pointer-events-none select-none animate-fade-up"
        style={{
          filter: "drop-shadow(0 0 80px oklch(0.88 0.18 200 / 0.35))",
          animation: "fade-up 1.2s cubic-bezier(0.16,1,0.3,1) both, float 9s ease-in-out infinite",
        }}
      />
      <img
        src={heroOrb}
        alt=""
        aria-hidden
        width={260}
        height={260}
        className="hidden lg:block absolute -left-20 bottom-24 w-[260px] opacity-50 pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 0 60px oklch(0.88 0.18 200 / 0.3)) hue-rotate(20deg)",
          animation: "float 11s ease-in-out -3s infinite",
          transform: "rotate(25deg)",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(6deg); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground px-2.5 py-1 rounded border border-border">
              R&amp;D · RESEARCH × DEVELOPMENT LAB
            </span>
          </div>

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
            DataQL is an independent R&amp;D company building the substrate beneath
            modern quantitative research. We abstract discovery, multi-hop scraping,
            cleaning, and mathematical modeling behind a single text box — turning raw
            magnitudes of data into strategic certainty.
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

          {/* Partners */}
          <div className="mt-20 w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-border" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                RESEARCH PARTNERSHIPS
              </span>
              <span className="h-px w-12 bg-border" />
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-2xl mx-auto">
              <a
                href="https://acludemy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-border bg-card/40 hover:border-primary/40 hover:bg-card/70 transition-all"
              >
                <div className="text-left">
                  <div className="text-sm font-semibold tracking-tight">Acludemy Solutions</div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider mt-0.5">
                    acludemy.com
                  </div>
                </div>
                <span className="font-mono text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
              <div className="flex-1 flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-border bg-card/40">
                <div className="text-left">
                  <div className="text-sm font-semibold tracking-tight">Laocta Techlabs</div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider mt-0.5">
                    JOINT RESEARCH
                  </div>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
