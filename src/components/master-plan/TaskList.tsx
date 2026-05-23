import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Priority = "CRITICAL" | "DEEP WORK" | "ROUTINE";

type Task = {
  id: string;
  title: string;
  desc?: string;
  priority: Priority;
  est: string;
  xp: number;
  done?: boolean;
};

const initial: Task[] = [
  { id: "1", title: "Finalize Project Phoenix architecture", desc: "Rust core implementation and SQLite schema sync.", priority: "CRITICAL", est: "4.5h", xp: 480 },
  { id: "2", title: "Neural network optimization", desc: "Refine the daily planning algorithm for burnout prevention.", priority: "DEEP WORK", est: "2.0h", xp: 220 },
  { id: "3", title: "Review weekly strategy", desc: "Audit goal alignment for Q4.", priority: "ROUTINE", est: "45m", xp: 80 },
  { id: "4", title: "Sync with engineering pod", desc: "Standup at 14:00.", priority: "ROUTINE", est: "30m", xp: 50 },
];

const priorityStyle: Record<Priority, string> = {
  CRITICAL: "text-primary bg-primary/10 border-primary/20",
  "DEEP WORK": "text-accent bg-accent/10 border-accent/20",
  ROUTINE: "text-muted-foreground bg-white/5 border-border",
};

export function TaskList() {
  const [tasks, setTasks] = useState(initial);
  const remaining = tasks.filter((t) => !t.done).length;

  const toggle = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <section className="space-y-4 animate-fade-up" style={{ animationDelay: "150ms" }}>
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">Active Operations</h2>
          <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
            {remaining} OPEN
          </span>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-foreground transition-colors group">
          <Plus className="size-4 group-hover:rotate-90 transition-transform" />
          NEW MISSION
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, i) => (
          <li
            key={task.id}
            className={cn(
              "glass-panel p-5 rounded-2xl glow-border transition-all flex items-center gap-5 group cursor-pointer animate-fade-up",
              task.done && "opacity-50"
            )}
            style={{ animationDelay: `${200 + i * 80}ms` }}
            onClick={() => toggle(task.id)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggle(task.id);
              }}
              className={cn(
                "size-7 shrink-0 rounded-full border-2 grid place-items-center transition-all",
                task.done
                  ? "border-success bg-success/20"
                  : "border-primary/40 group-hover:border-primary group-hover:shadow-[0_0_12px_oklch(0.85_0.18_200/0.5)]"
              )}
              aria-label="Toggle task"
            >
              {task.done ? (
                <Check className="size-4 text-success" strokeWidth={3} />
              ) : (
                <span className="size-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <h3 className={cn("text-base font-medium text-foreground mb-0.5 truncate", task.done && "line-through")}>
                {task.title}
              </h3>
              {task.desc && <p className="text-xs text-muted-foreground truncate">{task.desc}</p>}
            </div>

            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className={cn("text-[10px] font-display font-bold tracking-wider px-2.5 py-1 rounded-full border", priorityStyle[task.priority])}>
                {task.priority}
              </span>
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-tighter">
                {task.est} · +{task.xp}xp
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
