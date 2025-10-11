// src/app/(site)/projects/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { projects } from "@/lib/data";

type Params = { slug: string };

// params is a Promise in your runtime – await it here
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — Project` : "Project" };
}

export default async function ProjectPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const featuresMap: Record<string, { title: string; desc: string }[]> = {
    "crackit-edtech-platform": [
      { title: "Multi-Exam Support", desc: "Medical, engineering & grades 11–12 with practice/exam modes and timing." },
      { title: "Live Lectures & MCQs", desc: "Scheduling, MCQ banks, notes, analytics, and content moderation." },
      { title: "Category-Wise Leaderboards", desc: "Live leaderboards per exam/category (medical, engineering, grades) to boost engagement and show real-time rankings." },
    ],
    "structify-dsa-visualizer": [
      { title: "Interactive Structures", desc: "Insert, delete, search arrays, stacks, queues, trees with live states." },
      { title: "State Emission", desc: "APIs emit step-by-step transitions to drive animations in the UI." },
      { title: "Performance & Correctness", desc: "Careful data modeling to keep operations predictable and fast." },
    ],
    "synthureai-voice-covers": [
      { title: "Upload → Inference → Share", desc: "Simple flow to upload audio, run inference, and share the processed track." },
      { title: "Responsive Player UI", desc: "Progress states and mobile-friendly audio controls." },
      { title: "Artist Presets", desc: "Pick an artist/voice model and render consistent covers." },
    ],
    "hospital-management-sql": [
      { title: "Normalized Schema", desc: "Patients, doctors, appointments, billing, inventory, indexing." },
      { title: "Operational Queries", desc: "Availability, billing summaries, reports, and constraints." },
      { title: "MySQL Workbench", desc: "Designed, tested, and profiled in Workbench with sample data." },
    ],
    "atm-interface-raylib-c": [
      { title: "Complete ATM Flow", desc: "PIN auth, balance inquiry, deposit/withdraw with receipt-style logs." },
      { title: "State Machine UI", desc: "Keyboard-driven screens built on Raylib primitives." },
      { title: "Interactive Sound Cues", desc: "Beep/click sounds on PIN entry, success, and error states to make the UI feel responsive." },
    ],
    "live-chat-cpp-netbeans": [
      { title: "Socket Basics", desc: "Server accept loop, client connect, and message broadcast." },
      { title: "Learning Project", desc: "Paused before auth/rooms/persistence; kept for networking exploration." },
    ],
    "4096-ai-competition": [
      { title: "Minimax + Heuristics", desc: "AI picks moves via minimax search (with depth pruning) using heuristics like monotonicity, empty cells, and merge potential." },
      { title: "Real-Time Match", desc: "Human vs AI with move comparisons and scoring." },
      { title: "2048-Style Core", desc: "2/4 tile spawns, swipe/arrow controls, smooth merges." },
    ],
  };

  const features = featuresMap[p.slug] ?? [];

  return (
    <ProjectDetail
      title={p.title}
      subtitle={p.summary}
      description={p.description}
      tech={p.tech}
      tags={[
        p.status === "complete"
          ? "Complete"
          : p.status === "in-progress"
          ? "In Progress"
          : "Not Completed",
      ]}
      features={features}
      repoUrl={p.repo ?? null}
      // status={p.status}
    />
  );
}
