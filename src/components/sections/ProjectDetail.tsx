"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Feature = { title: string; desc: string };

export default function ProjectDetail(props: {
  title: string;
  subtitle?: string;
  tags?: string[];
  description: string;
  tech: string[];
  features?: Feature[];
  repoUrl?: string; // GitHub link
}) {
  const { title, subtitle, tags = [], description, tech, features = [], repoUrl } = props;

  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px 0px -100px 0px" });
  const titleControls = useAnimationControls();

  useEffect(() => {
    if (inView) titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [inView, titleControls]);

  // fallback (safety) — render button with default if nothing passed
  const repo = repoUrl || "https://github.com/Aakashkumar1435/CrackIt";

  return (
    <div className="flex min-h-screen pt-24 md:pt-28">
      {/* LEFT panel */}
      <aside className="w-full md:w-1/2 px-6 md:px-14 py-10 md:py-16 md:sticky md:top-24 self-start">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          {title}
        </h1>

        {subtitle && <p className="mt-4 text-white/70 text-base md:text-lg">{subtitle}</p>}

        {!!tags.length && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-[#667eea] text-[#00d4ff]"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <p className="mt-6 text-white/80 leading-8">{description}</p>

        {/* Tech grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tech.map((t) => (
            <div
              key={t}
              className="rounded-lg text-center text-sm font-semibold border border-transparent bg-white/5 px-3 py-3 hover:border-[#667eea] hover:bg-[#667eea1a] transition"
            >
              {t}
            </div>
          ))}
        </div>

        {/* View Code button (always rendered; uses fallback link) */}
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-black shadow-lg transition-transform hover:-translate-y-0.5"
          style={{ background: "linear-gradient(45deg,#00f5ff,#ff00f5)" }}
          aria-label="View source code on GitHub"
        >
          {/* tiny GitHub svg (no dependency) */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="-mt-[1px]">
            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.11.81 2.24v3.33c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/>
          </svg>
          View Code
        </a>
      </aside>

      {/* RIGHT panel — only if features provided */}
      {features.length > 0 && (
        <main
          className="hidden md:block w-1/2 px-6 md:px-14 py-16 relative"
          style={{
            background: "linear-gradient(135deg, rgba(102,126,234,.10), rgba(118,75,162,.10))",
          }}
        >
          <div
            className="absolute w-[260px] h-[260px] rounded-full blur-[60px]"
            style={{
              top: "10%", right: "10%",
              background: "radial-gradient(circle, rgba(102,126,234,.35) 0%, transparent 70%)",
              animation: "floatY 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[260px] h-[260px] rounded-full blur-[60px]"
            style={{
              bottom: "18%", right: "30%",
              background: "radial-gradient(circle, rgba(118,75,162,.35) 0%, transparent 70%)",
              animation: "floatY 6s ease-in-out 2s infinite",
            }}
          />

          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            className="text-3xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#667eea] bg-clip-text text-transparent"
          >
            Key Features
          </motion.h2>

          <div className="mt-8">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>
        </main>
      )}

      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-28px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: { title: string; desc: string };
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 ? 60 : -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={[
        "mb-5 rounded-2xl p-6 border backdrop-blur",
        "border-white/10 bg-white/[.06] hover:bg-[#667eea26] hover:border-[#667eea] transition",
        index % 2 ? "ml-10" : "mr-10",
      ].join(" ")}
    >
      <div className="text-[#00d4ff] font-semibold text-lg">{feature.title}</div>
      <p className="mt-2 text-sm text-white/75 leading-6">{feature.desc}</p>
    </motion.div>
  );
}
