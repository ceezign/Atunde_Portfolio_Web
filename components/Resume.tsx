import { Eye, Download } from "lucide-react";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="py-28 md:py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="bg-surface border border-border rounded-card p-10 flex flex-wrap justify-between items-center gap-6">
          <div>
            <h3 className="font-display font-semibold text-[1.3rem] mb-2">Want the full picture?</h3>
            <p className="text-text-dim max-w-[420px]">
              Grab a copy of my resume for the complete rundown of roles, skills, and education — great for
              sharing with your hiring team.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="/resume/Atunde-Toheeb-Ayomide-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border font-mono text-xs uppercase hover:border-accent hover:text-accent transition"
            >
              <Eye size={14} /> View Resume
            </a>
            <a
              href="/resume/Atunde-Toheeb-Ayomide-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-[#06120F] font-mono text-xs font-medium uppercase hover:-translate-y-0.5 transition"
            >
              <Download size={14} /> Download PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
