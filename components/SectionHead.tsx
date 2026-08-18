import { Reveal } from "./Reveal";

export function SectionHead({ tag, title, description }: { tag: string; title: string; description: string }) {
  return (
    <Reveal className="max-w-[680px] mb-14">
      <span className="block font-mono text-xs text-amber uppercase tracking-wider mb-3">{tag}</span>
      <h2 className="font-display font-semibold text-[clamp(1.8rem,3.6vw,2.6rem)] mb-3.5">{title}</h2>
      <p className="text-text-dim text-[1.02rem]">{description}</p>
    </Reveal>
  );
}
