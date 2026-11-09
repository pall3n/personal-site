import { getOtherProjects } from "@/app/portfolio/projects";
import ProjectCard from "./project-card";

export default function NextProjects({ currentSlug }: { currentSlug: string }) {
  const others = getOtherProjects(currentSlug);

  return (
    <section className="section" aria-labelledby="next-h">
      <div className="section-head">
        <div>
          <p className="label">More work</p>
          <h2 id="next-h" className="h2">
            Other selected projects.
          </h2>
        </div>
      </div>
      <div className="project-grid next-work">
        {others.map((project, index) => (
          <ProjectCard
            key={project.slug}
            num={String(index + 1).padStart(2, "0")}
            href={project.href}
            title={project.shortTitle}
            image={project.image}
            meta={project.meta}
            summary={project.summary}
          />
        ))}
      </div>
    </section>
  );
}
