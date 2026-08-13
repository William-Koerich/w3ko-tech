export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0c1330] to-[#150a2b] ring-1 ring-white/10 ${className}`}
    >
      <span
        className="font-display font-bold tracking-tighter text-gradient"
        style={{ fontSize: "0.5em" }}
      >
        W3
      </span>
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      <span className="text-gradient">W3KO</span>{" "}
      <span className="text-foreground">TECH</span>
    </span>
  );
}
