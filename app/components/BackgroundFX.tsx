const PARTICLES = Array.from({ length: 26 }).map((_, i) => {
  const left = (i * 137.5) % 100;
  const size = 1.5 + ((i * 7) % 5);
  const duration = 14 + ((i * 5) % 16);
  const delay = -((i * 3.7) % duration);
  return { left, size, duration, delay };
});

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="noise absolute inset-0" />
      <div className="grid-overlay absolute inset-0 h-full w-full" />

      <div
        className="orb animate-float-orb h-[38rem] w-[38rem] bg-blue"
        style={{ top: "-10rem", left: "-8rem" }}
      />
      <div
        className="orb animate-float-orb h-[34rem] w-[34rem] bg-purple"
        style={{ top: "10rem", right: "-10rem", animationDelay: "-6s" }}
      />
      <div
        className="orb animate-float-orb h-[26rem] w-[26rem] bg-magenta"
        style={{ bottom: "-8rem", left: "20%", animationDelay: "-11s", opacity: 0.35 }}
      />

      <div className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${p.left}%`,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
