import { Music2, Volume2 } from "lucide-react";

export function AmbientPanel() {
  return (
    <div className="glass-panel rounded-3xl p-6 animate-fade-up" style={{ animationDelay: "550ms" }}>
      <h3 className="text-muted-foreground uppercase tracking-[0.25em] text-[10px] font-bold mb-5">Atmospheric Layer</h3>

      <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden mb-5 border border-border">
        <div className="absolute inset-0 animate-spin-slow" style={{ background: "conic-gradient(from 0deg, oklch(0.55 0.25 295 / 0.4), oklch(0.85 0.18 200 / 0.4), oklch(0.7 0.2 50 / 0.3), oklch(0.55 0.25 295 / 0.4))" }} />
        <div className="absolute inset-0 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex items-end gap-1">
            {[8, 16, 24, 18, 12, 22, 14, 20, 10].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-primary animate-pulse-slow"
                style={{ height: `${h * 2}px`, animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-white/[0.03] rounded-xl border border-border">
          <div className="flex items-center gap-2.5">
            <Music2 className="size-3.5 text-primary" />
            <span className="text-xs font-medium">Cyber Dreams</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">CYBER_DREAMS.WAV</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-white/[0.03] rounded-xl border border-border">
          <div className="flex items-center gap-2.5">
            <Volume2 className="size-3.5 text-accent" />
            <span className="text-xs font-medium">Ambient Mix</span>
          </div>
          <span className="text-[10px] font-mono text-foreground">62%</span>
        </div>
      </div>
    </div>
  );
}
