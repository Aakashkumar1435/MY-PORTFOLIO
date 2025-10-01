"use client";

import { profile } from "@/lib/data";
import Particles from "@/components/site/Particles";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const name = profile.name; // "Aakash Kumar"
  const [text, setText] = useState("");        // what’s currently shown
  const [done, setDone] = useState(false);     // typing finished?

  useEffect(() => {
    let i = 0;
    const speedMs = 150;  // typing speed (lower = faster)
    const delayMs = 500;  // delay before typing starts

    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setText(name.slice(0, i));
        if (i >= name.length) {
          clearInterval(id);
          setDone(true);
        }
      }, speedMs);
    }, delayMs);

    return () => clearTimeout(start);
  }, [name]);

  return (
    <section
      id="home" /* ✅ section anchor */
      className="relative min-h-[100svh] flex items-center justify-center bg-hero-radial overflow-hidden"
    >
      {/* soft cyan/magenta glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(0,245,255,.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,0,245,.08) 0%, transparent 50%)",
        }}
      />

      {/* floating particles */}
      <Particles count={90} />

      {/* content */}
      <div className="relative z-[1] text-center px-6">
        {/* Typewriter heading (text grows in JS) */}
        <h1
          className="gradient-text inline-block text-[40px] md:text-[86px] font-black leading-[1.05] animate-gradientShift"
          suppressHydrationWarning
          aria-label={name}
        >
          {text}
          {!done && <span className="caret align-[-.1em]" />}
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-3 text-xl md:text-2xl text-white/60"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {profile.role}
        </motion.p>

        {/* Blurb */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/70"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {profile.blurb}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {/* ✅ go to in-page section (works from any route) */}
          <a
            href="/#projects"
            className="rounded-full px-7 py-3.5 font-semibold text-black shadow-lg"
            style={{ background: "linear-gradient(45deg,#00f5ff,#ff00f5)" }}
          >
            View My Work
          </a>
          <a
            href="/#contact"
            className="rounded-full px-7 py-3.5 font-semibold border-2 border-neonCyan text-white"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
