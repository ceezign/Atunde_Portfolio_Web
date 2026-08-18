"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, FileDown, ArrowRight, SatelliteDish } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { roles, socials, person } from "@/lib/data";

export function Hero() {
  const typed = useTypingEffect(roles);

  return (
    <section id="home" className="pt-[170px] pb-24">
      <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-border bg-surface px-3 py-1.5 rounded-full mb-6">
            <SatelliteDish size={13} /> AVAILABLE FOR NEW OPPORTUNITIES
          </span>

          <h1 className="font-display font-semibold text-[clamp(2.4rem,5.2vw,4rem)] leading-[1.05] mb-4">
            {person.name} builds software that keeps <span className="text-accent">businesses running.</span>
          </h1>

          <div className="font-mono text-[clamp(1rem,2vw,1.25rem)] text-text-dim min-h-[1.6em] mb-6">
            {typed}
            <span className="inline-block w-[9px] bg-amber ml-0.5 animate-blink">&nbsp;</span>
          </div>

          <p className="text-text-dim max-w-[560px] mb-9 text-[1.05rem]">
            I started in accounting, moved into tech as a hobby about 4–5 years ago, and never looked
            back. Today I&apos;m a full-stack developer and IT support specialist who&apos;s also
            deepening my cybersecurity skills — which means I don&apos;t just ship features, I think
            about uptime, access, and what happens when things break in production. I build scalable web
            applications, automate the boring parts of operations, and help people trust their technology
            again.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-[#06120F] font-mono text-xs font-medium uppercase tracking-wide hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_var(--accent-dim)] transition"
            >
              View Projects
            </a>
            <a
              href="/resume/Atunde-Toheeb-Ayomide-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-text font-mono text-xs font-medium uppercase tracking-wide hover:border-accent hover:text-accent transition"
            >
              <FileDown size={14} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-text-dim font-mono text-xs font-medium uppercase tracking-wide hover:text-text transition"
            >
              <ArrowRight size={14} /> Contact Me
            </a>
          </div>

          <div className="flex gap-3">
            {[
              { href: socials.github, icon: Github, label: "GitHub" },
              { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
              { href: socials.whatsapp, icon: MessageCircle, label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-[42px] h-[42px] rounded-lg border border-border bg-surface flex items-center justify-center hover:border-accent hover:text-accent hover:-translate-y-1 transition"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-card border border-border bg-surface shadow-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
            <span className="w-2.5 h-2.5 rounded-full bg-danger" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber" />
            <span className="w-2.5 h-2.5 rounded-full bg-ok" />
            <div className="ml-2 font-mono text-[0.72rem] text-text-faint">~/alex-morgan/status.log</div>
          </div>
          <div className="p-5 font-mono text-[0.82rem]">
            {[
              { label: "freelance.rating", value: "5.0 ★", pill: "ok" },
              { label: "build.status", value: "passing", pill: "ok" },
              { label: "learning.now", value: "cybersecurity", pill: "warn" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-dashed border-border">
                <span className="text-text-dim">{row.label}</span>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.7rem] ${
                    row.pill === "ok" ? "bg-ok/10 text-ok" : "bg-amber/10 text-amber"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center py-2.5 border-b border-dashed border-border">
              <span className="text-text-dim">stack.confidence</span>
              <div className="w-[90px] h-1.5 bg-surface2 rounded border border-border overflow-hidden">
                <div className="h-full w-[92%] bg-gradient-to-r from-accent to-amber rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-dashed border-border">
              <span className="text-text-dim">github.repos</span>
              <span className="font-semibold">71 public</span>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <span className="text-text-dim">current.role</span>
              <span className="text-accent font-semibold">IT Support Supervisor</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
