"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="py-28 md:py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 09 — Writing"
          title="Notes on code, security, and career."
          description="Occasional long-form writing on the things I'm learning."
        />
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {blogPosts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="bg-surface border border-border rounded-card overflow-hidden hover:border-accent hover:-translate-y-1 transition"
            >
              <div className="h-[150px] bg-gradient-to-br from-surface2 to-surface border-b border-border flex items-center justify-center text-text-faint">
                <PenLine size={26} />
              </div>
              <div className="p-5">
                <span className="font-mono text-[0.7rem] text-amber uppercase">{p.category}</span>
                <h3 className="font-display text-[1rem] font-medium my-2">{p.title}</h3>
                <p className="text-[0.85rem] text-text-dim mb-3">{p.excerpt}</p>
                <span className="text-[0.75rem] text-text-faint font-mono">
                  {p.date} · {p.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
