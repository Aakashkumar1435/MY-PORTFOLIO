import { projects } from "@/lib/data";
import ProjectCard from "@/components/sections/ProjectCard";

export const metadata = { title: "Works" };

export default function ProjectsPage() {
  return (
    <section className="px-6 md:px-10 py-16">
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white/90">
        WORKS
      </h1>
      <p className="mt-2 text-sm text-white/50">Creative projects &amp; experiments</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
