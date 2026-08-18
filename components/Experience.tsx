import { SectionHead } from "./SectionHead";
import { Timeline } from "./Timeline";
import { experience } from "@/lib/data";

export function Experience() {
  const entries = experience.map((e) => ({
    title: e.company,
    subtitle: e.role,
    duration: e.duration,
    points: e.points,
    stack: e.stack,
  }));

  return (
    <section id="experience" className="py-28 md:py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 03 — Experience"
          title="Where I've put these skills to work."
          description="A timeline of roles, responsibilities, and measurable outcomes."
        />
        <Timeline entries={entries} />
      </div>
    </section>
  );
}
