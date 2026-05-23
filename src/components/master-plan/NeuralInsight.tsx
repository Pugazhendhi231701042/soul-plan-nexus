import { useState } from "react";
import { Sparkles } from "lucide-react";

export function NeuralInsight() {
  const [accepted, setAccepted] = useState<null | boolean>(null);
  return (
    <div className="glass-panel p-7 rounded-3xl bg-accent/[0.04] border-accent/20 relative overflow-hidden animate-fade-up" style={{ animationDelay: "400ms" }}>
      <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-accent/30 blur-3xl" />
      <div className="flex items-center gap-2.5 mb-4 relative">
        <div className="relative">
          <Sparkles className="size-4 text-accent" strokeWidth={2} />
          <span className="absolute inset-0 size-4 rounded-full bg-accent/30 blur-md animate-pulse-slow" />
        </div>
        <h3 className="text-accent font-display font-bold text-xs tracking-[0.25em] uppercase">Neural Insight</h3>
      </div>
      <p className="text-foreground/85 leading-relaxed text-sm relative">
        Your cognitive load peaks between <span className="text-accent font-semibold">10:00 – 12:00</span>. I&apos;ve rescheduled 3 low-priority tasks to the afternoon to preserve your deep work window.
      </p>
      {accepted === null ? (
        <div className="mt-5 flex gap-2 relative">
          <button
            onClick={() => setAccepted(true)}
            className="flex-1 py-2.5 bg-accent/20 text-accent text-xs font-bold rounded-xl border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            CONFIRM
          </button>
          <button
            onClick={() => setAccepted(false)}
            className="flex-1 py-2.5 text-muted-foreground text-xs font-bold rounded-xl border border-border hover:bg-white/5 transition-all"
          >
            ADJUST
          </button>
        </div>
      ) : (
        <div className="mt-5 text-xs font-mono text-success uppercase tracking-wider relative">
          {accepted ? "✓ Plan applied · 3 tasks moved" : "↻ Awaiting your manual sequence"}
        </div>
      )}
    </div>
  );
}
