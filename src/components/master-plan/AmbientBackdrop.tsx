export function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 size-[480px] rounded-full bg-accent/30 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 size-[520px] rounded-full bg-primary/20 blur-[140px] animate-pulse-slow" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-0 left-1/3 size-[400px] rounded-full bg-flame/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: "-1s" }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
