export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#syftics", label: "Syftics" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <nav className="max-w-[1400px] mx-auto px-8 lg:px-14 h-[68px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-7 w-7 rounded-md overflow-hidden border border-border">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(from 220deg at 50% 50%, oklch(0.88 0.18 200), oklch(0.45 0.15 280), oklch(0.88 0.18 200))",
              }}
            />
            <div className="absolute inset-[3px] rounded-sm bg-background" />
            <div className="absolute inset-0 grid place-items-center font-mono text-[10px] tracking-tighter">
              DQ
            </div>
          </div>
          <span className="font-semibold tracking-[0.22em] text-[13px]">DATAQL</span>
          <span className="hidden sm:inline-flex font-mono text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground">
            RESEARCH LAB · EST 2024
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#access"
          className="font-mono text-[11px] px-3.5 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
        >
          Request Ingress →
        </a>
      </nav>
    </header>
  );
}
