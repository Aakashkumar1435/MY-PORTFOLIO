// src/lib/data.ts

export const profile = {
  name: "Aakash Kumar",
  role: "Creative Developer & UI/UX Designer",
  blurb:
    "I craft digital experiences that blend innovative design with cutting-edge technology, creating solutions that inspire and engage.",
  stats: [
    { label: "Projects Completed", value: "50+" },
    { label: "Years Experience", value: "3+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Satisfaction Rate", value: "100%" },
  ],
  links: {
    linkedin: "#",
    github: "#",
    email: "#",
    portfolio: "#",
  },
};

export const skills = [
  { icon: "⚛️", name: "React" },
  { icon: "🎨", name: "UI/UX Design" },
  { icon: "🚀", name: "Node.js" },
  { icon: "🎭", name: "Three.js" },
  { icon: "📱", name: "Mobile First" },
  { icon: "☁️", name: "Cloud Deploy" },
];

export type Project = {
  slug: string;
  title: string;
  emoji: string;        // simple icon for the card header
  summary: string;      // 1–2 lines shown on the card
  description: string;  // full description for detail page
  tech: string[];
  status: "complete" | "in-progress" | "not-completed";
  repo?: string;        // <-- added (optional) so we can show "View Code"
};

const DEFAULT_REPO = "https://github.com/Aakashkumar1435/CrackIt";

export const projects: Project[] = [
  {
    slug: "atm-interface-raylib-c",
    title: "ATM Interface (Raylib, C)",
    emoji: "🏧",
    summary:
      "Desktop ATM UI built with Raylib in C: PIN auth, balance, withdraw/deposit UI.",
    description:
      "A desktop ATM interface made with the Raylib framework in C. It includes user authentication via PIN, balance inquiry, withdrawal and deposit flows, and simple receipt-like logs. The goal was to design a clean, keyboard-driven UI and practice state machines and file I/O in C.",
    tech: ["C", "Raylib"],
    status: "complete",
    repo: DEFAULT_REPO,
  },
  {
    slug: "live-chat-cpp-netbeans",
    title: "Live Chat (C++, NetBeans)",
    emoji: "💬",
    summary:
      "Socket-based chat in C++. Implemented client/server basics; project not completed.",
    description:
      "A learning project exploring sockets in C++ for a terminal-based chat. Built the server accept loop, basic client connections, and message broadcast. Stopped before implementing authentication, rooms, and persistence—kept here to show networking exploration and lessons learned.",
    tech: ["C++", "Sockets"],
    status: "not-completed",
    repo: DEFAULT_REPO,
  },
  {
    slug: "hospital-management-sql",
    title: "Hospital Management (SQL Team Project)",
    emoji: "🏥",
    summary:
      "Database schema + queries for a hospital system. Led SQL engineering.",
    description:
      "Team project focused on the database layer for a hospital management system. I owned schema design (patients, doctors, appointments, billing, inventory), indexing, and writing complex SQL (reports, availability, billing summaries). Built and tested on MySQL Workbench.",
    tech: ["MySQL", "SQL Workbench"],
    status: "complete",
    repo: DEFAULT_REPO,
  },
  {
    slug: "structify-dsa-visualizer",
    title: "Structify — DSA Visualizer",
    emoji: "🧩",
    summary:
      "Interactive data-structure visualizer (insert/delete/search). Backend work.",
    description:
      "Structify lets users interact with classic data structures—arrays, stacks, queues, trees—by inserting, deleting, and searching values with live animations. I built the backend logic and APIs, focusing on correctness, performance, and producing step-by-step states for the UI.",
    tech: ["Node.js", "Express", "TypeScript"],
    status: "complete",
    repo: DEFAULT_REPO,
  },
  {
    slug: "4096-ai-competition",
    title: "4096 — Human vs AI",
    emoji: "🎮",
    summary:
      "Game like 2048, first to reach 4096 wins. Includes AI opponent.",
    description:
      "A 2048-style game where random tiles (2/4) spawn and the player uses arrow keys to merge tiles. I added an AI opponent that evaluates moves using heuristics (monotonicity, empty cells, merge potential). The match pits human vs AI with real-time score and move comparisons.",
    tech: ["JavaScript", "Canvas", "Heuristics"],
    status: "complete",
    repo: DEFAULT_REPO,
  },
  {
    slug: "crackit-edtech-platform",
    title: "CrackIt — EdTech Platform",
    emoji: "🎓",
    summary:
      "Full-stack web for tests (medical/engineering/grades), lectures, MCQs, notes.",
    description:
      "A large web application to conduct tests for multiple formats (medical/engineering entrance, grades 11–12). Features: live lectures, MCQ banks, practice/exam modes, timed sessions, analytics, notes, and content management. I co-led the project as full-stack: MERN stack with role-based access and scalable collections.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Next.js"],
    status: "complete",
    repo: DEFAULT_REPO,
  },
  {
    slug: "synthureai-voice-covers",
    title: "SynthureAI — AI Music Covers",
    emoji: "🎵",
    summary:
      "Sing any song in a selected celebrity’s voice. Frontend developer.",
    description:
      "A playful AI music app that creates voice covers in the style of selected artists. The app uploads audio, runs inference in the backend, and returns the processed track with a shareable page. I built the frontend with focus on upload flow, progress states, and responsive audio UI.",
    tech: ["Next.js", "React", "Tailwind", "AI/ML"],
    status: "complete",
    repo: "https://github.com/AlyanTheCodingLegend/SynthureAI",
  },
];

export const languages = [
  { icon: "🟨", name: "JavaScript" },
  { icon: "🔷", name: "TypeScript" },
  { icon: "🐍", name: "Python" },
  { icon: "☕",  name: "Java" },
  { icon: "➕",  name: "C++" },
  { icon: "🅒",  name: "C" },
  { icon: "🌐",  name: "HTML" },
  { icon: "🗄️", name: "SQL" },
];
