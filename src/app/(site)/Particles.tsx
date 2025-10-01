// src/components/site/Particles.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Particles({ count = 80 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;

    // Clear any previous particles
    c.textContent = "";

    const created: HTMLDivElement[] = [];

    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "absolute h-[2px] w-[2px] bg-neonCyan/80";
      d.style.left = `${Math.random() * 100}%`;
      d.style.top = `${Math.random() * 100}%`;
      d.style.opacity = String(0.4 + Math.random() * 0.6);
      d.style.animation = `particleFloat ${10 + Math.random() * 12}s linear ${Math.random() * 10}s infinite`;
      created.push(d);
      c.appendChild(d);
    }

    // Cleanup on unmount or when `count` changes
    return () => {
      for (const el of created) el.remove();
    };
  }, [count]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" />
  );
}
