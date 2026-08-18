"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[900] border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#home" className="flex items-center gap-2.5 font-display font-bold text-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-ok shadow-[0_0_12px_var(--ok)] animate-pulse-dot" />
          Atunde<span className="text-accent">.</span>Dev
        </Link>

        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[0.78rem] tracking-wide uppercase text-text-dim px-3.5 py-2 rounded-lg hover:text-text hover:bg-surface2 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center hover:border-accent hover:text-accent transition"
          >
            {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-[#06120F] font-mono text-xs font-medium uppercase tracking-wide hover:-translate-y-0.5 transition ${
              scrolled ? "" : "opacity-0 pointer-events-none"
            }`}
          >
            Hire Me
          </a>
          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 border-t border-border bg-surface p-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-mono text-sm uppercase tracking-wide text-text-dim px-4 py-3 rounded-lg hover:bg-surface2 hover:text-text transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
