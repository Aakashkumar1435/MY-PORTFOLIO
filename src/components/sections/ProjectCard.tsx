import { Project } from "@/lib/data";
import Link from "next/link";

type Props = { p: Project };

export default function ProjectCard({ p }: Props) {
  return (
    <div
      className="rounded-3xl overflow-hidden glass-border group"
      style={{
        background:
          "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(255,0,245,0.1))",
      }}
    >
      <div
        className="h-64 flex items-center justify-center text-6xl text-black relative"
        style={{ background: "linear-gradient(45deg,#00f5ff,#ff00f5)" }}
      >
        <div className="absolute inset-0 -translate-x-full skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        {p.emoji}
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold text-neonCyan">{p.title}</h3>
        <p className="mt-3 text-white/70">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border px-3 py-1 text-sm text-neonCyan border-[rgba(0,245,255,0.3)] bg-[rgba(0,245,255,0.2)]"
            >
              {t}
            </span>
          ))}
        </div>

        {p.repo && (
          <div className="mt-6">
            <Link
              href={p.repo}
              className="font-semibold text-neonMagenta hover:text-neonCyan transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
