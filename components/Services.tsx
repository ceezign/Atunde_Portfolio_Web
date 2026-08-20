"use client";

import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { SectionHead } from "./SectionHead";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-28 md:py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 05 — Services"
          title="What I can build, fix, and improve."
          description="I work across software development, IT support, automation, infrastructure, and security, helping businesses solve real technical problems as a freelancer, contractor, or full-time team member."
        />
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="bg-surface border border-border rounded-card p-6 hover:border-amber hover:-translate-y-1 transition"
            >
              <Icon name={s.icon} size={26} className="text-amber mb-3.5" />
              <h3 className="font-display font-medium text-[1.02rem] mb-2">{s.title}</h3>
              <p className="text-[0.86rem] text-text-dim">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
