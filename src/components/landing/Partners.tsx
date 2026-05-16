const partners = [
  {
    name: "Acludemy Solutions",
    href: "https://acludemy.com",
    role: "Applied research & education partner",
    code: "acludemy.com",
  },
  {
    name: "Laocta Techlabs",
    href: "#",
    role: "Joint engineering & infrastructure",
    code: "laocta.labs",
  },
];

export function Partners() {
  return (
    <section id="partners" className="relative py-32 border-t border-border/60 bg-card/20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-3">§ 06 — Partners</p>
            <p className="font-mono text-[11px] text-muted-foreground/80">
              Research network<br />
              Active engagements
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl lg:text-6xl tracking-[-0.02em] leading-[1.05] font-medium max-w-3xl">
              We build with institutions that take{" "}
              <span className="font-serif italic font-normal">rigor</span> seriously.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-background p-10 lg:p-14 hover:bg-card/40 transition-all flex flex-col justify-between min-h-[220px]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  {p.code}
                </span>
                <span className="font-mono text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  VISIT ↗
                </span>
              </div>
              <div className="mt-12">
                <div className="font-serif text-4xl lg:text-5xl tracking-tight">
                  {p.name}
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{p.role}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
