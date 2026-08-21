

"use client";

import { useRef, useState } from "react";
import { Mail, Phone, MessageCircle, Github, Linkedin, MapPin, MapPinned, Send, CheckCircle2, AlertCircle } from "lucide-react";
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

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field, bots often do.
    if (data.get("_gotcha")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          _gotcha: data.get("_gotcha"),
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result?.error || null);
      }
    } catch {
      setStatus("error");
      setErrorMsg(null);
    }
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
            <form ref={formRef} onSubmit={handleSubmit} className="bg-surface border border-border rounded-card p-8">
              {/* Honeypot field — hidden from real users via CSS, catches simple bots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="!absolute !-left-[9999px] !w-px !h-px !opacity-0"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Field label="Full name">
                  <input type="text" name="name" placeholder="Jane Doe" required disabled={status === "sending"} />
                </Field>
                <Field label="Email address">
                  <input type="email" name="email" placeholder="jane@company.com" required disabled={status === "sending"} />
                </Field>
              </div>
              <Field label="Subject">
                <input type="text" name="subject" placeholder="Project inquiry" disabled={status === "sending"} />
              </Field>
              <Field label="Message">
                <textarea
                  name="message"
                  placeholder="Tell me a bit about what you're building..."
                  required
                  disabled={status === "sending"}
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-accent text-[#06120F] font-mono text-xs font-medium uppercase hover:-translate-y-0.5 transition disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                <Send size={14} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-[0.82rem] text-ok mt-3">
                  <CheckCircle2 size={15} /> Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-[0.82rem] text-danger mt-3">
                  <AlertCircle size={15} />
                  {errorMsg || `Couldn't send that. Please email me directly at ${socials.email}, or try again in a moment.`}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 [&_input]:w-full [&_textarea]:w-full [&_input]:bg-surface2 [&_textarea]:bg-surface2 [&_input]:border [&_textarea]:border [&_input]:border-border [&_textarea]:border-border [&_input]:rounded-lg [&_textarea]:rounded-lg [&_input]:px-3.5 [&_textarea]:px-3.5 [&_input]:py-3 [&_textarea]:py-3 [&_input]:text-sm [&_textarea]:text-sm [&_input]:outline-none [&_textarea]:outline-none [&_input]:focus:border-accent [&_textarea]:focus:border-accent [&_textarea]:min-h-[120px] [&_textarea]:resize-y [&_input:disabled]:opacity-60 [&_textarea:disabled]:opacity-60">
      <label className="block font-mono text-[0.78rem] text-text-dim mb-1.5">{label}</label>
      {children}
    </div>
  );
}
