"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Feature = { title: string; desc: string };

export default function ProjectDetail(props: {
  title: string;
  subtitle?: string;
  tags?: string[];              // kept if you ever want tags later
  description: string;
  tech: string[];
  features?: Feature[];
  repoUrl?: string | null;      // if provided -> “View Code” button
}) {
  const {
    title,
    subtitle,
    description,
    tech,
    features = [],
    repoUrl = null,
  } = props;

  // animate section title + cards when they enter
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const inView = useInView(titleRef, { once: true, margin: "-100px 0px -100px 0px" });
  const titleControls = useAnimationControls();

  useEffect(() => {
    if (inView) titleControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [inView, titleControls]);

  return (
    <div className="flex min-h-screen pt-24 md:pt-28">
      {/* LEFT panel (sticky) */}
      <aside className="w-full md:w-1/2 px-6 md:px-14 py-10 md:py-16 md:sticky md:top-24 self-start">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-white/70 text-base md:text-lg">
            {subtitle}
          </p>
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

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap gap-3">
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-black shadow-lg transition-transform hover:scale-[1.02]"
              style={{ background: "linear-gradient(45deg,#00f5ff,#ff00f5)" }}
            >
              View Code
              <span aria-hidden>↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border border-white/10 bg-white/5 text-white/70">
              Code not available
            </span>
          )}
        </div>
      </aside>

      {/* RIGHT panel (Key Features) – visible on md+ to match your screenshot */}
      {features.length > 0 && (
        <main
          className="hidden md:block w-1/2 px-6 md:px-14 py-16 relative"
          style={{
            background:
              "linear-gradient(135deg, rgba(102,126,234,.10), rgba(118,75,162,.10))",
          }}
        >
          {/* floating glow blobs */}
          <div
            className="absolute w-[260px] h-[260px] rounded-full blur-[60px]"
            style={{
              top: "10%",
              right: "10%",
              background:
                "radial-gradient(circle, rgba(102,126,234,.35) 0%, transparent 70%)",
              animation: "floatY 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[260px] h-[260px] rounded-full blur-[60px]"
            style={{
              bottom: "18%",
              right: "30%",
              background:
                "radial-gradient(circle, rgba(118,75,162,.35) 0%, transparent 70%)",
              animation: "floatY 6s ease-in-out 2s infinite",
            }}
          />

          {/* Key features */}
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
              <FeatureCard key={`${f.title}-${i}`} feature={f} index={i} />
            ))}
          </div>
        </main>
      )}

      {/* tiny keyframes (scoped) */}
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
  const ref = useRef<HTMLDivElement | null>(null);
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
