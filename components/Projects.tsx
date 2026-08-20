"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";

export function Projects() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 md:py-16 bg-surface2">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 04 — Projects"
          title="Things I've built, broken, and fixed."
          description="A selection of software, infrastructure, and product work. Filter by category."
        />
        <div className="flex flex-wrap gap-2.5 mb-9">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`font-mono text-[0.76rem] uppercase px-4 py-2 rounded-full border transition ${
                active === c ? "border-accent text-accent" : "border-border text-text-dim hover:border-accent hover:text-accent"
              } bg-surface`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="bg-surface border border-border rounded-card overflow-hidden flex flex-col hover:border-accent hover:-translate-y-1.5 transition"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-surface2 to-surface border-b border-border flex items-center justify-center text-text-faint relative">
        <span className="absolute top-3 left-3 bg-bg text-accent font-mono text-[0.68rem] px-2.5 py-1 rounded-full border border-border uppercase">
          {project.category}
        </span>
        <FolderGit2 size={40} />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display font-semibold text-[1.1rem] mb-2">{project.title}</h3>
        <p className="text-text-dim text-[0.9rem] mb-3.5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[0.72rem] px-2.5 py-1 border border-border rounded-full text-text-dim">
              {s}
            </span>
          ))}
        </div>

        {open && (
          <div className="border-t border-border mt-1 pt-3.5 text-[0.85rem] text-text-dim space-y-2">
            <div>
              <strong className="block text-text text-[0.8rem] mb-1">Key features</strong>
              {project.features.join(" · ")}
            </div>
            <div>
              <strong className="block text-text text-[0.8rem] mb-1">Challenge solved</strong>
              {project.improvements}
            </div>
            <div>
              <strong className="block text-text text-[0.8rem] mb-1">Challenge solved</strong>
              {project.challenge}
            </div>
            <div>
              <strong className="block text-text text-[0.8rem] mb-1">Lesson learned</strong>
              {project.lesson}
            </div>
          </div>
        )}
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-accent font-mono text-[0.76rem] mt-3 text-left bg-transparent border-none cursor-pointer"
        >
          {open ? "− Details" : "+ Details"}
        </button>

        <div className="flex gap-4 mt-auto pt-4 font-mono text-[0.78rem]">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-dim hover:text-accent transition">
            <Github size={14} /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-dim hover:text-accent transition">
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
