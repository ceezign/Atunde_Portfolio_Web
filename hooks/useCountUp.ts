"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const stepValue = Math.max(1, Math.ceil(target / steps));
    const intervalMs = duration / steps;
    let current = 0;

    const id = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        current = target;
        clearInterval(id);
      }
      setValue(current);
    }, intervalMs);

    return () => clearInterval(id);
  }, [inView, target, duration]);

  return { ref, value };
}
