"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-16 bg-surface2">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 02 — Skills"
          title="The tools behind how I work."
          description="From building applications and managing databases to troubleshooting systems, supporting users, automating workflows, and improving security, these are the tools I use to get real problems solved."
        />
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="bg-surface border border-border rounded-card p-6 hover:border-accent hover:-translate-y-1 transition"
            >
              <h3 className="flex items-center gap-2.5 text-[1rem] font-display font-medium mb-4">
                <Icon name={cat.icon} size={18} className="text-accent" />
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <SkillBar key={item.name} name={item.name} pct={item.pct} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, pct }: { name: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between text-[0.82rem] text-text-dim mb-1.5">
        <span>{name}</span>
        <span className="font-mono text-text-faint">{pct}%</span>
      </div>
      <div className="h-1.5 bg-surface2 rounded border border-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-amber rounded"
        />
      </div>
    </div>
  );
}
