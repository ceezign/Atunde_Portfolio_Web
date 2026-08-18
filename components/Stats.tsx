"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section id="stats" className="py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="bg-surface border border-border rounded-card p-11 px-5 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] text-center">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <h3 className="font-mono text-[2.2rem] text-accent mb-1.5">
        {count}
        {suffix}
      </h3>
      <p className="text-[0.8rem] text-text-dim uppercase tracking-wide">{label}</p>
    </div>
  );
}
