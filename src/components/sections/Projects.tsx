"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import {
  CreditCard,
  MessageSquare,
  HeartPulse,
  Boxes,
  Gamepad2,
  GraduationCap,
  Music2,
} from "lucide-react";

// Theme-matching gradients (cyan / magenta / purple / teal)
const themedGradients = [
  "linear-gradient(135deg, #00f5ff, #6c5ce7)",
  "linear-gradient(135deg, #6c5ce7, #ff00f5)",
  "linear-gradient(135deg, #00f5ff, #00d1b2)",
  "linear-gradient(135deg, #ff00f5, #6c5ce7)",
  "linear-gradient(135deg, #00d1b2, #00f5ff)",
  "linear-gradient(135deg, #6c5ce7, #00f5ff)",
];

// Pick an icon for each project (by slug)
const iconBySlug: Record<
  string,
  React.ComponentType<{ size?: number; strokeWidth?: number }>
> = {
  "atm-interface-raylib-c": CreditCard,
  "live-chat-cpp-netbeans": MessageSquare,
  "hospital-management-sql": HeartPulse,
  "structify-dsa-visualizer": Boxes,
  "4096-ai-competition": Gamepad2,
  "crackit-edtech-platform": GraduationCap,
  "synthureai-voice-covers": Music2,
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            SELECTED
            <br />
            WORKS
          </h2>
          <p className="mt-3 text-lg md:text-xl text-white/50">
            Creative projects &amp; experiments
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-14">
          {projects.map((p, i) => {
            const Icon = iconBySlug[p.slug] ?? Boxes;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link href={`/projects/${p.slug}`} className="block group">
                  <div className="relative h-[520px] transition-transform duration-500 group-hover:scale-[1.02]">
                    {/* Tilted card */}
                    <div className="relative h-full w-full rounded-[28px] overflow-hidden border border-white/10 bg-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.5)] -rotate-2 transition-all duration-500 group-hover:rotate-0 group-hover:border-white/20 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
                      {/* Gradient header */}
                      <div
                        className="relative h-[300px]"
                        style={{
                          background: themedGradients[i % themedGradients.length],
                        }}
                      >
                        {/* Icon top-right */}
                        <div className="absolute top-5 right-5 text-white/20">
                          <Icon size={72} strokeWidth={1.6} />
                        </div>
                        {/* soft floor fade */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111] to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative p-6 md:p-8">
                        <span className="inline-block text-[11px] tracking-wide uppercase rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                          {inferCategory(p)}
                        </span>

                        <h3 className="mt-3 text-2xl font-bold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-white/70 leading-6 text-[0.95rem]">
                          {p.summary}
                        </p>

                        {/* tech chips only — removed the white round arrow */}
                        <div className="mt-5 flex items-center gap-2 flex-wrap">
                          {p.tech.slice(0, 3).map((t) => (
                            <div
                              key={t}
                              className="h-8 px-2 rounded-md border border-white/10 bg-white/5 text-[11px] grid place-items-center text-white/80"
                              title={t}
                            >
                              {abbr(t)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* helpers */
function abbr(t: string) {
  if (/^next/i.test(t)) return "NX";
  if (/^node/i.test(t)) return "ND";
  if (/^express/i.test(t)) return "EX";
  if (/^mongodb/i.test(t)) return "MG";
  if (/^mysql/i.test(t)) return "SQL";
  if (/^(ai|ml|ai\/ml)/i.test(t)) return "AI";
  if (/^typescript/i.test(t)) return "TS";
  if (/^javascript/i.test(t)) return "JS";
  return t.slice(0, 2).toUpperCase();
}

function inferCategory(p: { title: string; tech: string[] }) {
  const title = p.title.toLowerCase();
  if (title.includes("ai") || p.tech.some((t) => /ai|ml/i.test(t))) return "AI / ML";
  if (title.includes("game") || /canvas|raylib/i.test(p.tech.join(","))) return "Game";
  if (title.includes("hospital") || title.includes("management")) return "Database";
  if (title.includes("chat")) return "Networking";
  if (title.includes("platform") || title.includes("edtech")) return "SaaS Platform";
  return "Project";
}
