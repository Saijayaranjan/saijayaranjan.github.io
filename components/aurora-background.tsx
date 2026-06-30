"use client"

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.10),transparent_55%)]" />

      {/* Aurora blobs */}
      <div
        className="aurora-blob animate-aurora h-[40rem] w-[40rem] bg-primary/20"
        style={{ top: "-10rem", left: "-8rem" }}
      />
      <div
        className="aurora-blob animate-aurora h-[34rem] w-[34rem] bg-[hsl(var(--accent-cyan)/0.16)]"
        style={{ top: "20%", right: "-10rem", animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob animate-aurora h-[36rem] w-[36rem] bg-[hsl(var(--accent-violet)/0.14)]"
        style={{ bottom: "-12rem", left: "30%", animationDelay: "-12s" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)/0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, #000 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 0%, transparent 75%)",
        }}
      />

      {/* Noise/vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_100%)]" />
    </div>
  )
}
