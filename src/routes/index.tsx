import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackdrop } from "@/components/master-plan/AmbientBackdrop";
import { Sidebar } from "@/components/master-plan/Sidebar";
import { TaskList } from "@/components/master-plan/TaskList";
import { HabitRow } from "@/components/master-plan/HabitRow";
import { EvolutionCard } from "@/components/master-plan/EvolutionCard";
import { NeuralInsight } from "@/components/master-plan/NeuralInsight";
import { FocusRing } from "@/components/master-plan/FocusRing";
import { CommandBar } from "@/components/master-plan/CommandBar";
import { AmbientPanel } from "@/components/master-plan/AmbientPanel";
import { StatusBar } from "@/components/master-plan/StatusBar";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Master Plan — Life Command Center" },
      { name: "description", content: "AI-powered tasks, reminders, habits, focus and streaks. The cinematic life management OS." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen w-full text-foreground font-sans flex">
      <AmbientBackdrop />
      <Sidebar />

      <main className="flex-1 min-w-0 flex flex-col px-4 sm:px-8 lg:px-12 py-8 lg:py-10 relative">
        <header className="flex flex-wrap justify-between items-end gap-6 mb-10 animate-fade-up">
          <div>
            <p className="text-[10px] font-mono tracking-[0.4em] text-primary uppercase mb-3">
              ◆ Initiating Sequence · {new Date().toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-light tracking-tight text-foreground">
              Daily <span className="font-bold text-primary-gradient">Directive</span>
            </h1>
            <p className="text-muted-foreground italic font-light mt-2">"The only way out is through." — AI Coach</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="glass-panel px-5 py-3 rounded-2xl flex items-center gap-3">
              <span className="size-2 rounded-full bg-success shadow-[0_0_10px_oklch(0.82_0.2_155/0.6)] animate-pulse-slow" />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Rank</span>
              <span className="text-base font-display font-bold text-success">ELITE IV</span>
            </div>
            <button
              className="px-5 py-3 rounded-2xl text-sm font-bold tracking-wider transition-all hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)", color: "var(--color-primary-foreground)", boxShadow: "var(--shadow-glow-primary)" }}
            >
              + NEW MISSION
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8 space-y-8">
            <TaskList />
            <HabitRow />
          </div>

          <div className="xl:col-span-4 space-y-6">
            <FocusRing />
            <EvolutionCard />
            <NeuralInsight />
            <AmbientPanel />
          </div>
        </div>

        <StatusBar />
      </main>

      <CommandBar />
    </div>
  );
}
