"use client";

import { useEffect, useRef } from "react";

type Props = { count?: number };

export default function Particles({ count = 80 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;

    // clear any previous dots
    c.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "absolute h-[2px] w-[2px] bg-neonCyan/80";
      d.style.left = Math.random() * 100 + "%";
      d.style.top = Math.random() * 100 + "%";
      d.style.opacity = String(0.4 + Math.random() * 0.6);
      d.style.animation = `particleFloat ${10 + Math.random() * 12}s linear ${Math.random() * 12
        }s infinite`;
      c.appendChild(d);
    }

    // ✅ cleanup must return void
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [count]);

  return (
    <>
      <div
        ref={ref}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      />
      <style jsx>{`
        @keyframes particleFloat {
          0%   { transform: translateY(0) }
          100% { transform: translateY(-100vh) }
        }
      `}</style>
    </>
  );
}
