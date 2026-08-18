"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certs" className="py-28 md:py-16 bg-surface2">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 06 — Certifications"
          title="Continuous learning, formalized."
          description="Credentials that back up the skills above."
        />
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="bg-surface border border-border rounded-card p-5 flex gap-3.5 items-start"
            >
              <div className="w-[46px] h-[46px] rounded-lg bg-surface2 border border-border flex items-center justify-center text-accent flex-shrink-0">
                <Icon name={c.icon} size={20} />
              </div>
              <div>
                <h4 className="text-[0.94rem] font-medium mb-1">{c.name}</h4>
                <span className="text-[0.78rem] text-text-faint font-mono">{c.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
