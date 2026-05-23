import { LayoutDashboard, ListTodo, Target, BarChart3, Calendar, Settings, Sparkles, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Command", id: "command" },
  { icon: ListTodo, label: "Missions", id: "missions" },
  { icon: Target, label: "Habits", id: "habits" },
  { icon: Calendar, label: "Plan", id: "plan" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export function Sidebar() {
  const [active, setActive] = useState("command");
  return (
    <aside className="hidden md:flex w-20 shrink-0 flex-col items-center py-8 border-r border-border bg-black/30 backdrop-blur-2xl relative z-10">
      <div className="size-12 rounded-2xl p-[1.5px] mb-12" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-primary)" }}>
        <div className="w-full h-full bg-background rounded-[14px] grid place-items-center">
          <span className="font-display font-bold text-xl text-primary-gradient">M</span>
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "size-11 rounded-xl grid place-items-center cursor-pointer transition-all relative group",
                isActive
                  ? "bg-primary/10 text-primary shadow-[0_0_15px_oklch(0.85_0.18_200/0.25)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
              aria-label={item.label}
            >
              <Icon className="size-5" strokeWidth={1.75} />
              {isActive && <span className="absolute -left-[10px] top-1/2 -translate-y-1/2 h-6 w-[2px] bg-primary rounded-r" />}
              <span className="absolute left-full ml-3 px-2 py-1 rounded-md bg-surface border border-border text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-4 items-center">
        <button className="size-11 rounded-full bg-accent/15 border border-accent/30 grid place-items-center text-accent hover:bg-accent/25 transition-all" aria-label="AI">
          <Sparkles className="size-5" strokeWidth={1.75} />
        </button>
        <button className="size-10 rounded-full p-[1.5px] hover:scale-105 transition-transform" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-primary)" }} aria-label="Profile">
          <div className="w-full h-full rounded-full bg-background grid place-items-center">
            <User className="size-4 text-primary" strokeWidth={2} />
          </div>
        </button>
      </div>
    </aside>
  );
}
