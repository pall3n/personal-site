import type { Metadata } from "next";
import "@/app/site.css";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import ClosingCta from "@/components/site/closing-cta";
import ProjectCard from "@/components/portfolio/project-card";
import { projects } from "./projects";

export const metadata: Metadata = {
  title: "Selected Work | Patrick Allen",
  description:
    "Case studies in product design and frontend engineering — internal tools, creator platforms and product prototypes.",
};

export default function Portfolio() {
  return (
    <div className="pa-site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader navPrefix="/#" />

      <main id="main">
        <div className="container">
          <header className="page-intro" aria-labelledby="portfolio-h">
            <p className="label">Selected work</p>
            <h1 id="portfolio-h" className="h1">
              A few things I&apos;ve worked on.
            </h1>
            <p className="lede">
              Case studies across SaaS products, operational tools and creator platforms —
              designing the experience and building the interface.
            </p>
          </header>

          <section className="section" aria-label="Projects">
            <div className="project-grid">
              {projects.map((project, index) => (
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

          <ClosingCta />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
