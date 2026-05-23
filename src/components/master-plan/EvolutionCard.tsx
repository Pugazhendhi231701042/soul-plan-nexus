import { Flame } from "lucide-react";

export function EvolutionCard() {
  const xp = 2450;
  const xpMax = 3000;
  const pct = (xp / xpMax) * 100;

  return (
    <div className="glass-panel p-7 rounded-3xl relative overflow-hidden animate-fade-up" style={{ animationDelay: "300ms" }}>
      <div className="absolute -top-8 -right-8 size-40 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute top-5 right-5 flex items-center gap-1.5">
        <Flame className="size-5 text-flame-gradient fill-current" />
        <span className="text-flame-gradient text-2xl font-bold italic tracking-tighter">147</span>
      </div>

      <h3 className="text-muted-foreground uppercase tracking-[0.25em] text-[10px] font-bold mb-6">Evolution Status</h3>

      <div className="space-y-5 relative">
        <div>
          <div className="flex justify-between items-baseline text-xs mb-2">
            <span className="text-foreground font-semibold">LEVEL 42</span>
            <span className="text-muted-foreground font-mono">{xp.toLocaleString()} / {xpMax.toLocaleString()} XP</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: "var(--gradient-primary)", boxShadow: "0 0 12px oklch(0.85 0.18 200 / 0.6)" }}
            />
          </div>
          <div className="text-[10px] text-muted-foreground mt-2 font-mono uppercase tracking-wider">Rank · Architect</div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-4 bg-white/[0.03] rounded-xl border border-border">
            <div className="text-[10px] text-muted-foreground mb-1 tracking-wider">FOCUS SCORE</div>
            <div className="text-2xl font-display font-bold text-foreground">98<span className="text-muted-foreground text-base">%</span></div>
          </div>
          <div className="p-4 bg-white/[0.03] rounded-xl border border-border">
            <div className="text-[10px] text-muted-foreground mb-1 tracking-wider">DEEP WORK</div>
            <div className="text-2xl font-display font-bold text-primary">+12<span className="text-muted-foreground text-base">d</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
