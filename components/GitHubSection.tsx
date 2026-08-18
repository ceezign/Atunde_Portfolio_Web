"use client";

import { Github, Star, FolderGit2 } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { githubStats, socials } from "@/lib/data";

export function GitHubSection() {
  return (
    <section id="github" className="py-28 md:py-16 bg-surface2">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 08 — GitHub"
          title="Open source & public repositories."
          description="A snapshot pulled from my public GitHub profile."
        />
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
          <Reveal className="bg-surface border border-border rounded-card p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display text-[1rem] font-medium">Pinned repositories</h3>
              <span className="font-mono text-[0.78rem] text-text-faint">from github.com/ceezign</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {githubStats.pinnedRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={`${socials.github}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 border border-border rounded-sm2 p-3.5 hover:border-accent transition"
                >
                  <FolderGit2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[0.84rem] text-text truncate">{repo.name}</p>
                    <span className="text-[0.72rem] text-text-faint font-mono">{repo.language}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-display text-[1rem] font-medium mb-2.5">Language mix (indicative)</h3>
              <div className="flex h-2.5 rounded-md overflow-hidden border border-border">
                {githubStats.languages.map((l) => (
                  <div key={l.name} style={{ width: `${l.pct}%`, background: l.color }} />
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-3.5 text-[0.78rem] text-text-dim">
                {githubStats.languages.map((l) => (
                  <span key={l.name} className="inline-flex items-center gap-1.5">
                    <i className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: l.color }} />
                    {l.name} {l.pct}%
                  </span>
                ))}
              </div>
              <p className="text-[0.74rem] text-text-faint mt-2.5">
                Estimated from primary languages across repos — swap in the real GitHub API for exact numbers.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bg-surface border border-border rounded-card p-6 flex flex-col">
            <div className="flex justify-between py-2.5 border-b border-dashed border-border text-[0.82rem] font-mono">
              <span className="text-text-dim">Public repos</span>
              <span className="text-text font-semibold">{githubStats.publicRepos}</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-dashed border-border text-[0.82rem] font-mono">
              <span className="text-text-dim">Pinned projects</span>
              <span className="text-text font-semibold">{githubStats.pinnedRepos.length}</span>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-dashed border-border text-[0.82rem] font-mono">
              <span className="text-text-dim flex items-center gap-1.5">
                <Star size={13} /> Followers
              </span>
              <span className="text-text-faint">See live profile</span>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 border border-border rounded-lg py-3 font-mono text-xs uppercase hover:border-accent hover:text-accent transition"
            >
              <Github size={15} /> View Full Profile
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
