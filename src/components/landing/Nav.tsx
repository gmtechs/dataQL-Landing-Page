export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7 rounded-md overflow-hidden border border-border">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(from 220deg at 50% 50%, oklch(0.88 0.18 200), oklch(0.45 0.15 280), oklch(0.88 0.18 200))",
              }}
            />
            <div className="absolute inset-[3px] rounded-sm bg-background" />
            <div className="absolute inset-0 grid place-items-center font-mono text-[10px] tracking-tighter text-foreground">
              DQ
            </div>
          </div>
          <span className="font-semibold tracking-[0.18em] text-sm">DATAQL</span>
          <span className="hidden sm:inline-flex font-mono text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground">
            v1.0.0-Beta
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <li><a href="#protocol" className="hover:text-foreground transition-colors">Protocol</a></li>
          <li><a href="#syftics" className="hover:text-foreground transition-colors">Syftics OS</a></li>
          <li><a href="#docs" className="hover:text-foreground transition-colors">Documentation</a></li>
        </ul>

        <a
          href="#access"
          className="font-mono text-xs px-3 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
        >
          ./access
        </a>
      </nav>
    </header>
  );
}
