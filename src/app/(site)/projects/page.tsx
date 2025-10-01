import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { projects } from "@/lib/data";

type Params = { slug: string };
type Props = { params: Promise<Params> };

const DEFAULT_REPO = "https://github.com/Aakashkumar1435/CrackIt";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — Project` : "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <ProjectDetail
      title={p.title}
      subtitle={p.summary}
      description={p.description}
      tech={p.tech}
      repoUrl={p.repo || DEFAULT_REPO}  // always pass a URL
    />
  );
}
