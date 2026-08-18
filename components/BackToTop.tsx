"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="w-10 h-10 rounded-full border border-border bg-bg flex items-center justify-center hover:border-accent hover:text-accent transition"
    >
      <ArrowUp size={16} />
    </button>
  );
}
