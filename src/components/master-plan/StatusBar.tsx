import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const t = time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  return (
    <div className="mt-12 pt-6 border-t border-border flex flex-wrap justify-between items-center gap-y-2 text-[10px] text-muted-foreground font-mono tracking-widest">
      <div className="flex flex-wrap gap-x-8 gap-y-1">
        <span>SYS · OPTIMAL</span>
        <span>NEURAL_LINK · ACTIVE</span>
        <span>SYNC · {t}</span>
      </div>
      <div className="flex gap-4">
        <span className="text-primary/60">MASTER_PLAN_OS</span>
        <span className="text-foreground/30">v4.0.2-BETA</span>
      </div>
    </div>
  );
}
