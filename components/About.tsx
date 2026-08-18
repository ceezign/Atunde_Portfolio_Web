import Image from "next/image";
import { Code2, ShieldHalf, Network, Users } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

const pillars = [
  { icon: Code2, title: "Engineering", desc: "Scalable, maintainable, well-tested code." },
  { icon: ShieldHalf, title: "Security-minded", desc: "Built defensively, from day one." },
  { icon: Network, title: "Infrastructure", desc: "I understand what my code runs on." },
  { icon: Users, title: "Collaboration", desc: "Clear communication, calm under pressure." },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 01 — About"
          title=" i Didn&apos;t Start With Code."
          description="The short version of a longer, more interesting story."
        />
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal className="aspect-[4/5] rounded-card border border-border bg-gradient-to-br from-surface2 to-surface relative overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Atunde Toheeb Ayomide"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </Reveal>
          <Reveal delay={0.1} className="text-text-dim space-y-4">
            <p>
              I studied accounting in school — but about 3–4 years ago, software development started as a
              hobby, and gradually became something much bigger. I taught myself to code, then picked up IT support alongside
              it, because I wanted to understand more than how software is built. i wanted to understand how it actually works in the real world: 
              on real machines, across real networks, and in the hands of people who simply need technology to work.
            </p>
            <p>
              That combination shaped how i approach technology today. As a{" "}
              <strong className="text-text">Full-Stack Software Developer and IT Support Professional</strong>, I&apos;ve
              built and maintain web applications, work with databases and APIs, automate workflows, troubleshoot technical problems, and support the systems people rely on every day. My accounting background still influences the way i think about software. i naturally look beyond the code and consider the business process behind it: the numbers, the workflow, the efficiency, and ultimately the person using the system.  
            </p>
            <p>
              I&apos;m also deepening my knowledge of <strong className="text-text">cybersecurity</strong> skills,
              because security shouldn&apos;t be something added after a product is built. Whether I&apos;m working on a client project, supporting an organization&apos;s IT environment, or building something of my own, I try to focus on the same thing: understanding the real problem and building a practical solution..
            </p>
            <p>
              Outside professional work, I&apos;m usually working on a personal project, exploring technologies such as Python, Django, Laravel, React, Node.js, or Motoko, or keeping my fundamentals sharp through coding challenges.
            </p>
            <div className="grid grid-cols-2 gap-3.5 pt-3">
              {pillars.map((p) => (
                <div key={p.title} className="border border-border bg-surface rounded-sm2 p-4">
                  <p.icon size={18} className="text-accent mb-2" />
                  <h4 className="text-text text-[0.92rem] mb-1 font-medium">{p.title}</h4>
                  <p className="text-[0.82rem] text-text-dim m-0">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
