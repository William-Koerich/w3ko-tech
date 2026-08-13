export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-white/[0.02] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-4 font-display text-sm font-medium tracking-[0.25em] text-muted uppercase"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue to-purple" />
          </span>
        ))}
      </div>
    </div>
  );
}
