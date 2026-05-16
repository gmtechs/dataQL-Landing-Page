export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-background">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-14 pt-24 pb-14">
        {/* Manifesto strip */}
        <div className="grid lg:grid-cols-12 gap-12 pb-20 border-b border-border">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">§ 07 — Colophon</p>
            <p className="font-serif text-3xl lg:text-5xl leading-[1.1] tracking-tight max-w-3xl">
              <span className="italic text-primary">DataQL</span> is a research lab.
              Syftics is what happens when our research meets the analyst&apos;s
              terminal.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-10 text-sm">
            <div>
              <p className="eyebrow mb-4">Lab</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About DataQL</a></li>
                <li><a href="#research" className="hover:text-foreground transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Publications</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Product</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#syftics" className="hover:text-foreground transition-colors">Syftics OS</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* DataQL wordmark */}
        <div className="py-14">
          <div
            className="font-serif text-[clamp(5rem,18vw,18rem)] leading-[0.85] tracking-[-0.04em] text-foreground/95 select-none"
          >
            DataQL<span className="text-primary">.</span>
          </div>
        </div>

        {/* Bottom utility row */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-mono text-[11px] text-muted-foreground">
            © 2026 DataQL Protocol Lab · All research published openly
          </p>
          <div className="flex flex-wrap items-center gap-8 font-mono text-[11px] text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Security Protocol</a>
            <a href="#" className="hover:text-foreground transition-colors">Legal / ToS</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[var(--status-green)] animate-pulse-dot" />
                <span className="relative h-2 w-2 rounded-full bg-[var(--status-green)]" />
              </span>
              <span className="text-foreground/80">Cluster Status: Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
