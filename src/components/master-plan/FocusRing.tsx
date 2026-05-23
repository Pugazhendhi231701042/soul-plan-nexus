import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

const TOTAL = 25 * 60;

export function FocusRing() {
  const [seconds, setSeconds] = useState(TOTAL - 42);
  const [running, setRunning] = useState(true);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running]);

  const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");
  const pct = seconds / TOTAL;
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct);

  return (
    <div className="glass-panel rounded-3xl p-6 flex flex-col items-center gap-5 animate-fade-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center justify-between w-full">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Deep Work Engine</span>
        <span className="text-[10px] font-mono text-success">● ACTIVE</span>
      </div>

      <div className="relative size-48">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
              <stop offset="100%" stopColor="oklch(0.55 0.25 295)" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r={radius} fill="none" stroke="oklch(1 0 0 / 0.06)" strokeWidth="6" />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ filter: "drop-shadow(0 0 6px oklch(0.85 0.18 200 / 0.6))", transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-display font-light tabular-nums tracking-tight">
            {mm}<span className="text-muted-foreground">:</span>{ss}
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Pomodoro · 1/4</span>
        </div>
      </div>

      <div className="flex gap-2 w-full">
        <button
          onClick={() => setRunning((r) => !r)}
          className="flex-1 py-2.5 rounded-xl text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all"
          style={{ background: "var(--gradient-primary)", color: "var(--color-primary-foreground)", boxShadow: "var(--shadow-glow-primary)" }}
        >
          {running ? <><Pause className="size-3.5" /> PAUSE</> : <><Play className="size-3.5" /> RESUME</>}
        </button>
        <button
          onClick={() => { setSeconds(TOTAL); setRunning(false); }}
          className="size-10 grid place-items-center rounded-xl bg-white/5 border border-border hover:bg-white/10 transition-colors"
          aria-label="Reset"
        >
          <RotateCcw className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
