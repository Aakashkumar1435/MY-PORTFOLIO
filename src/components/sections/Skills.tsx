"use client";

import { skills, languages } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills" /* ✅ section anchor */
      className="scroll-mt-24 py-24 md:py-32 px-6 md:px-10"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,245,255,0.06), rgba(255,0,245,0.06))",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-grad-accent bg-clip-text text-transparent">
          My Skills
        </h2>

        {/* Primary skill cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="group relative rounded-2xl border border-[rgba(0,245,255,0.25)] bg-white/5 p-10 text-center"
              style={{ backdropFilter: "blur(10px)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 120% at 20% 10%, rgba(0,245,255,0.08), transparent 40%), radial-gradient(120% 120% at 80% 90%, rgba(255,0,245,0.08), transparent 40%)",
                }}
              />
              <div className="relative z-[1]">
                <div className="text-5xl md:text-6xl mb-5 leading-none select-none">
                  {s.icon}
                </div>
                <div className="text-neonCyan font-semibold text-lg md:text-xl">
                  {s.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subsection: Programming Languages (smaller cards) */}
        <h3 className="mt-16 text-2xl md:text-3xl font-bold text-center text-white/90">
          Programming Languages
        </h3>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((l, i) => (
            <motion.div
              key={l.name}
              className="rounded-xl border border-[rgba(0,245,255,0.25)] bg-white/5 p-5 md:p-6 text-center"
              style={{ backdropFilter: "blur(8px)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="text-3xl md:text-4xl mb-2 select-none">{l.icon}</div>
              <div className="text-white/85 text-sm md:text-base font-medium">
                {l.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
