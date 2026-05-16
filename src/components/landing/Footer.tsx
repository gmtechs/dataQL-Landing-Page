export function Footer() {
  return (
    <footer id="docs" className="border-t border-border/60 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 DataQL Protocol Lab
        </p>
        <div className="flex items-center gap-8 font-mono text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Security Protocol</a>
          <a href="#" className="hover:text-foreground transition-colors">Legal / ToS</a>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--status-green)] animate-pulse-dot" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--status-green)]" />
            </span>
            <span className="text-foreground/80">Cluster Status: Operational</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
