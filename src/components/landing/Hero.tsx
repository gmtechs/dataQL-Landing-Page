import { useState } from "react";
import heroOrb from "@/assets/hero-orb.png";

export function Hero() {
  const [email, setEmail] = useState("");
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg radial-fade animate-grid-flow opacity-50" />
      <div
        className="absolute left-1/2 top-[-30%] -translate-x-1/2 w-[1100px] h-[1100px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.88 0.18 200 / 0.10), transparent 70%)",
        }}
      />

      {/* 3D refractive shapes */}
      <img
        src={heroOrb}
        alt=""
        aria-hidden
        width={620}
        height={620}
        className="hidden lg:block absolute -right-32 top-24 w-[620px] opacity-70 pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 0 100px oklch(0.88 0.18 200 / 0.35))",
          animation: "fade-up 1.4s cubic-bezier(0.16,1,0.3,1) both, float 11s ease-in-out infinite",
        }}
      />
      <img
        src={heroOrb}
        alt=""
        aria-hidden
        width={220}
        height={220}
        className="hidden lg:block absolute left-[5%] bottom-32 w-[220px] opacity-40 pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 0 60px oklch(0.88 0.18 200 / 0.25)) hue-rotate(20deg)",
          animation: "float 13s ease-in-out -4s infinite",
          transform: "rotate(25deg)",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(5deg); }
        }
      `}</style>

      <div className="relative max-w-[1400px] mx-auto px-8 lg:px-14 pt-20 pb-28 lg:pt-28 lg:pb-40">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-20 lg:mb-28">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="eyebrow">DataQL · A Research & Development Company</span>
          </div>
          <span className="hidden md:inline-flex font-mono text-[10px] text-muted-foreground tracking-[0.25em]">
            VOL.01 / ISSUE.0 — 2026
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9 animate-fade-up">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-pulse-dot" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono text-[11px] tracking-wide text-primary">
                SYFTICS ENGINE DEPLOYING · 45-DAY COUNTDOWN ACTIVE
              </span>
            </div>

            <h1 className="text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[0.95] tracking-[-0.025em] font-medium">
              The intelligence protocol
              <br />
              for <span className="font-serif italic font-normal text-primary text-glow">complex systems.</span>
            </h1>

            <div className="mt-12 grid md:grid-cols-12 gap-8 max-w-5xl">
              <p className="md:col-span-7 text-lg lg:text-xl leading-[1.55] text-foreground/85">
                DataQL is an independent research &amp; development lab building the
                mathematical substrate beneath modern quantitative inquiry. We design
                protocols that turn raw magnitudes of unstructured data into
                provable, reproducible strategic certainty.
              </p>
              <div className="md:col-span-5 md:pl-8 md:border-l md:border-border">
                <p className="eyebrow mb-3">Mandate</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Operate at the intersection of agentic systems, probabilistic
                  computation, and institutional-grade data lineage. Publish openly.
                  Ship privately.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Access form */}
        <form
          id="access"
          onSubmit={(e) => e.preventDefault()}
          className="mt-20 max-w-2xl"
        >
          <p className="eyebrow mb-4">Request research access</p>
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
    </section>
  );
}
