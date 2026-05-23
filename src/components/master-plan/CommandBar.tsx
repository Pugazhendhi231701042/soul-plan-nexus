import { useEffect, useState } from "react";
import { Command, Sparkles } from "lucide-react";

export function CommandBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-start pt-32 px-4 bg-background/70 backdrop-blur-sm animate-fade-up" onClick={() => setOpen(false)}>
          <div className="glass-panel w-full max-w-xl rounded-3xl p-3 border-primary/30 shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_40px_oklch(0.85_0.18_200/0.2)]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-3 py-2">
              <Sparkles className="size-5 text-primary" />
              <input
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Plan my day · Add task · Optimize my week..."
                className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground"
              />
              <kbd className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-border text-muted-foreground">ESC</kbd>
            </div>
            <div className="mt-2 border-t border-border pt-2 px-2 space-y-1">
              {["Plan my day", "What should I focus on?", "Reduce burnout risk", "Generate study routine"].map((s) => (
                <button key={s} className="w-full text-left px-3 py-2 rounded-xl text-sm hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-panel rounded-full px-5 py-3 flex items-center gap-3 border-primary/20 hover:border-primary/40 transition-all group shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
      >
        <Sparkles className="size-4 text-primary group-hover:rotate-12 transition-transform" />
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Ask Master Plan AI…</span>
        <span className="flex items-center gap-1 ml-2">
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-border">
            <Command className="size-2.5 inline" />K
          </kbd>
        </span>
      </button>
    </>
  );
}
