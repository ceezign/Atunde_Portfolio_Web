import { Reveal } from "./Reveal";

interface TimelineEntry {
  title: string;
  subtitle: string;
  duration: string;
  points: string[];
  stack?: string[];
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative pl-9 border-l-2 border-border">
      {entries.map((e, i) => (
        <Reveal key={e.title} delay={i * 0.08} className="relative mb-11 last:mb-0">
          <span className="absolute -left-[43px] top-1 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent" />
          <div className="bg-surface border border-border rounded-card p-6 md:p-7">
            <div className="flex flex-wrap justify-between gap-2 mb-1.5">
              <h3 className="font-display font-semibold text-[1.15rem]">{e.title}</h3>
              <span className="font-mono text-[0.78rem] text-amber whitespace-nowrap">{e.duration}</span>
            </div>
            <div className="text-accent text-[0.9rem] font-semibold mb-3.5">{e.subtitle}</div>
            <ul className="pl-5 text-text-dim text-[0.92rem] space-y-1.5 mb-3.5 list-disc">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {e.stack && (
              <div className="flex flex-wrap gap-2">
                {e.stack.map((s) => (
                  <span key={s} className="font-mono text-[0.72rem] px-2.5 py-1 border border-border rounded-full text-text-dim">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
