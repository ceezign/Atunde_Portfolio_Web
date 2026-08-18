"use client";

import { motion } from "framer-motion";
import { Quote, User } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-16 bg-surface2">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead tag="// 10 — Testimonials" title="What people I've worked with say." description="" />
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface border border-border rounded-card p-6"
            >
              <Quote size={20} className="text-accent opacity-50 mb-3" />
              <p className="text-text-dim text-[0.92rem] mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full bg-surface2 border border-border flex items-center justify-center text-text-faint">
                  <User size={18} />
                </div>
                <div>
                  <h5 className="text-[0.86rem] font-medium">{t.name}</h5>
                  <span className="text-[0.76rem] text-text-faint">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
