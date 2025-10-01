import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetail from "@/components/sections/ProjectDetail";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return {
    title: p ? `${p.title} — Project` : "Project",
    description: p?.summary,
  };
}

// Feature snippets per project (you can edit anytime)
const featuresBySlug: Record<string, { title: string; desc: string }[]> = {
  "live-chat-cpp-netbeans": [
    { title: "Server Accept Loop", desc: "Multi-client accept loop using socket APIs with simple thread-per-connection handling." },
    { title: "Client Connection Handling", desc: "Basic client connect + message pipeline for terminal clients." },
    { title: "Message Broadcasting", desc: "Broadcast relay from an incoming client message to all connected peers." },
    { title: "Learning Experience", desc: "Hands-on with sockets, TCP, and client–server patterns. Project left intentionally incomplete." },
  ],
  "atm-interface-raylib-c": [
    { title: "PIN Authentication", desc: "Simple auth flow and state-machine driven screens." },
    { title: "Balance / Withdraw / Deposit", desc: "Core ATM operations with clean keyboard UI." },
    { title: "File I/O Logs", desc: "Receipt-like logging to disk for operations." },
  ],
  "hospital-management-sql": [
    { title: "Relational Schema", desc: "Patients, doctors, appointments, billing, inventory with constraints + indexing." },
    { title: "Complex Queries", desc: "Availability, reports, billing summaries, joins & aggregates." },
    { title: "MySQL Workbench", desc: "Designed, tested and validated using Workbench." },
  ],
  "structify-dsa-visualizer": [
    { title: "Interactive Structures", desc: "Insert, delete, search for arrays, stacks, queues, trees with live states." },
    { title: "Backend Logic", desc: "APIs emit step-by-step transitions to drive animations." },
  ],
  "4096-ai-competition": [
    { title: "Heuristic AI", desc: "Monotonicity/empty-cells/merge potential to pick moves." },
    { title: "Human vs AI", desc: "Real-time score, moves, and winner tracking." },
  ],
  "crackit-edtech-platform": [
    { title: "Multi-format Tests", desc: "Medical/Engineering entrance + 11–12th, with practice & exam modes." },
    { title: "Content & Analytics", desc: "MCQ banks, live lectures, notes, timing, and results dashboards." },
    { title: "MERN + Next.js", desc: "Role-based access, scalable collections, full-stack ownership." },
  ],
  "synthureai-voice-covers": [
    { title: "AI Voice Covers", desc: "Upload vocals → inference pipeline → downloadable/shareable track." },
    { title: "Polished Frontend", desc: "Progress states, responsive audio UI, clean flows." },
  ],
};

export default async function ProjectPage(
  { params }: { params: Params }
) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  // Compose props for the template
  const tags = [ ...p.tech, p.status !== "complete" ? (p.status === "not-completed" ? "not completed" : "in progress") : "" ]
    .filter(Boolean) as string[];

  return (
    <div className="px-0">
      <ProjectDetail
        title={p.title}
        subtitle={p.summary}
        description={p.description}
        tags={tags}
        tech={p.tech}
        features={featuresBySlug[p.slug] || []}
      />
    </div>
  );
}
