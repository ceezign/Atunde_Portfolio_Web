"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Github, Linkedin, MapPin, MapPinned, Send } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { socials, person } from "@/lib/data";

const infoRows = [
  { icon: Mail, label: "Email", value: socials.email },
  { icon: Phone, label: "Phone", value: `${socials.phonePrimary} / ${socials.phoneSecondary}` },
  { icon: MessageCircle, label: "WhatsApp", value: socials.phonePrimary },
  { icon: Github, label: "GitHub", value: "github.com/ceezign" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/atunde-toheeb-551826313" },
  { icon: MapPin, label: "Location", value: person.locationNote },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static template — connect to a real backend or service (Formspree, EmailJS, etc.) to make this functional.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 md:py-16 bg-surface2">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHead
          tag="// 11 — Contact"
          title="Let's build something reliable together."
          description="Open to full-time roles, contract work, and interesting problems."
        />
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            {infoRows.map((row) => (
              <div key={row.label} className="flex gap-3.5 items-start mb-5">
                <div className="w-[42px] h-[42px] rounded-lg bg-surface border border-border flex items-center justify-center text-accent flex-shrink-0">
                  <row.icon size={17} />
                </div>
                <div>
                  <h4 className="text-[0.78rem] text-text-faint uppercase tracking-wide mb-0.5">{row.label}</h4>
                  <p className="text-[0.95rem]">{row.value}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 h-[160px] rounded-sm2 border border-dashed border-border bg-surface flex items-center justify-center gap-2 text-text-faint font-mono text-[0.8rem]">
              <MapPinned size={16} /> Map embed placeholder
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-card p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Field label="Full name">
                  <input type="text" placeholder="Jane Doe" required />
                </Field>
                <Field label="Email address">
                  <input type="email" placeholder="jane@company.com" required />
                </Field>
              </div>
              <Field label="Subject">
                <input type="text" placeholder="Project inquiry" />
              </Field>
              <Field label="Message">
                <textarea placeholder="Tell me a bit about what you're building..." required />
              </Field>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-accent text-[#06120F] font-mono text-xs font-medium uppercase hover:-translate-y-0.5 transition"
              >
                <Send size={14} /> {sent ? "Message queued!" : "Send Message"}
              </button>
              <p className="text-[0.78rem] text-text-faint mt-2.5">
                This form is a static template — connect it to a backend or a service like Formspree before going live.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 [&_input]:w-full [&_textarea]:w-full [&_input]:bg-surface2 [&_textarea]:bg-surface2 [&_input]:border [&_textarea]:border [&_input]:border-border [&_textarea]:border-border [&_input]:rounded-lg [&_textarea]:rounded-lg [&_input]:px-3.5 [&_textarea]:px-3.5 [&_input]:py-3 [&_textarea]:py-3 [&_input]:text-sm [&_textarea]:text-sm [&_input]:outline-none [&_textarea]:outline-none [&_input]:focus:border-accent [&_textarea]:focus:border-accent [&_textarea]:min-h-[120px] [&_textarea]:resize-y">
      <label className="block font-mono text-[0.78rem] text-text-dim mb-1.5">{label}</label>
      {children}
    </div>
  );
}
