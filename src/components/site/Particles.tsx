"use client";

import { useEffect, useRef } from "react";

export default function Particles({ count = 80 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = ref.current!;
    c.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "absolute h-[2px] w-[2px] bg-neonCyan/80";
      d.style.left = Math.random() * 100 + "%";
      d.style.top = Math.random() * 100 + "%";
      d.style.opacity = String(0.4 + Math.random() * 0.6);
      d.style.animation = `particleFloat ${10 + Math.random() * 12}s linear ${Math.random() * 10}s infinite`;
      c.appendChild(d);
    }
    return () => (c.innerHTML = "");
  }, [count]);

  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}
