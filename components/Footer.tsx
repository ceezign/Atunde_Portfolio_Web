import { socials, person } from "@/lib/data";
import { BackToTop } from "./BackToTop";

const footerLinks = {
  "Quick Links": [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "IT Support", href: "#services" },
    { label: "Cybersecurity", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
  Connect: [
    { label: "GitHub", href: socials.github },
    { label: "LinkedIn", href: socials.linkedin },
    { label: "Email", href: `mailto:${socials.email}` },
    { label: "WhatsApp", href: socials.whatsapp },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-surface">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] grid-cols-2 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 font-display font-bold text-lg mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-ok" />
              Toheeb<span className="text-accent">.</span>Dev
            </div>
            <p className="text-text-dim text-[0.9rem] max-w-[280px]">
              Full-stack developer and IT support specialist working across software, infrastructure, and
              (increasingly) security. Building things that hold up under real-world use.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[0.82rem] uppercase tracking-wide text-text-faint mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-text-dim text-[0.9rem] hover:text-accent transition">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap gap-4 pt-6 border-t border-border text-[0.82rem] text-text-faint">
          <span>© {new Date().getFullYear()} {person.name}. All rights reserved.</span>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
