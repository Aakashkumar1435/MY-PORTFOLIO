"use client";

import { profile } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about" /* ✅ section anchor */
      className="scroll-mt-24 relative py-24 md:py-32 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-grad-accent bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="mt-12 grid md:grid-cols-2 gap-14 items-start">
        {/* Left text column */}
<div className="text-white/80 text-lg leading-8">
  <h3 className="text-neonCyan text-2xl font-semibold mb-4">
    Passionate Creator
  </h3>

  <p className="mb-5">
    I am Aakash Kumar — a full-stack developer focused on the MERN stack and
    Next.js. I love turning ideas into fast, accessible products: clean REST APIs
    with Node.js/Express, well-designed MongoDB schemas, and polished React/Next.js
    interfaces. I have shipped 5+ projects from DSA visualizers and mini-games to a
    full EdTech platform, learning something new with each build.
  </p>

  <p>
    These days I am sharpening TypeScript, testing, and cloud deployments
    (Vercel/Render), and exploring practical AI/ML integrations. I enjoy clean
    code, thoughtful UX, and steady iteration. I am actively open to internships,
    junior roles, and collaborative projects—if you are building something
    interesting, let’s talk.
  </p>
</div>


        {/* Right stats grid */}
        <div className="grid grid-cols-2 gap-6">
          {profile.stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-2xl p-8 text-center border border-[rgba(0,245,255,0.25)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(255,0,245,0.08))",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="text-4xl md:text-5xl font-black bg-grad-accent bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-2 text-white/85">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
