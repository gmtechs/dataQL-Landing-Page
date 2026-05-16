export function About() {
  return (
    <section id="about" className="relative py-32 border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <div className="sticky top-28">
              <p className="eyebrow mb-3">§ 01 — About</p>
              <p className="font-mono text-[11px] text-muted-foreground/80">
                DataQL Protocol Lab<br />
                London · Singapore · Remote
              </p>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">
            <h2 className="text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.05] font-medium max-w-4xl">
              A research lab dedicated to making{" "}
              <span className="font-serif italic font-normal text-primary">computation</span>{" "}
              behave like{" "}
              <span className="font-serif italic font-normal text-primary">reasoning</span>.
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
              <div>
                <p className="eyebrow mb-3">Origin</p>
                <p className="text-foreground/80 leading-relaxed">
                  Founded in 2024 by a small team of quantitative researchers,
                  systems engineers, and former trading-floor technologists, DataQL
                  was incorporated to answer a single operating question: what would
                  an analyst's terminal look like if it could think with us, not
                  for us?
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">What we build</p>
                <p className="text-foreground/80 leading-relaxed">
                  We build foundational research protocols — agentic orchestration
                  primitives, probabilistic compute kernels, and cryptographic data
                  lineage — and package them into instruments that institutional
                  analysts can deploy in a single afternoon.
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Mission</p>
                <p className="text-foreground/80 leading-relaxed">
                  Collapse the distance between a research question and a
                  defensible, reproducible answer. Make statistical rigor a default,
                  not a discipline.
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Method</p>
                <p className="text-foreground/80 leading-relaxed">
                  Publish open protocols. Ship private products. Refuse pipelines
                  that cannot be audited end-to-end. Treat uncertainty as a
                  first-class data type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
