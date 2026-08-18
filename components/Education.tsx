import { SectionHead } from "./SectionHead";
import { Timeline } from "./Timeline";
import { education } from "@/lib/data";

export function Education() {
  const entries = education.map((e) => ({
    title: e.institution,
    subtitle: e.degree,
    duration: e.duration,
    points: e.points,
  }));

  return (
    <section id="education" className="py-28 md:py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead tag="// 07 — Education" title="Academic foundation." description="Where the fundamentals were built." />
        <Timeline entries={entries} />
      </div>
    </section>
  );
}
