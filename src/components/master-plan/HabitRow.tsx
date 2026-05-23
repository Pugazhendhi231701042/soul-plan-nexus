import { useState } from "react";
import { Droplet, Wind, BookOpen, Dumbbell, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const habits = [
  { id: "h1", label: "Hydrate", icon: Droplet, streak: 14 },
  { id: "h2", label: "Breathwork", icon: Wind, streak: 9 },
  { id: "h3", label: "Read 20m", icon: BookOpen, streak: 22 },
  { id: "h4", label: "Movement", icon: Dumbbell, streak: 6 },
  { id: "h5", label: "Meditate", icon: Brain, streak: 18 },
];

export function HabitRow() {
  const [done, setDone] = useState<Record<string, boolean>>({ h1: true, h3: true });
  return (
    <section className="animate-fade-up" style={{ animationDelay: "500ms" }}>
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">Subconscious Cycles</h2>
        <span className="text-[10px] font-mono text-muted-foreground">2 / 5 LOCKED IN</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {habits.map((h) => {
          const Icon = h.icon;
          const isDone = done[h.id];
          return (
            <button
              key={h.id}
              onClick={() => setDone((p) => ({ ...p, [h.id]: !p[h.id] }))}
              className={cn(
                "glass-panel rounded-2xl p-4 flex flex-col items-start gap-3 transition-all group hover:-translate-y-0.5",
                isDone ? "border-success/40 bg-success/5 shadow-[0_0_20px_oklch(0.82_0.2_155/0.15)]" : "glow-border"
              )}
            >
              <div className={cn("size-9 rounded-xl grid place-items-center transition-colors", isDone ? "bg-success/20 text-success" : "bg-white/5 text-muted-foreground group-hover:text-primary")}>
                <Icon className="size-4" strokeWidth={1.75} />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">{h.label}</div>
                <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  <span className="text-flame-gradient font-bold">{h.streak}d</span> streak
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
