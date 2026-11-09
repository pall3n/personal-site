import Image from "next/image";

type ProjectCardProps = {
  num: string;
  href: string;
  title: string;
  image: string;
  meta: string;
  summary: string;
};

export default function ProjectCard({
  num,
  href,
  title,
  image,
  meta,
  summary,
}: ProjectCardProps) {
  return (
    <article className="work-card" aria-labelledby={`project-${num}`}>
      <a className="shot shot--card" href={href} tabIndex={-1} aria-hidden="true">
        <Image
          src={image}
          alt=""
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 560px"
          loading="lazy"
        />
      </a>
      <div className="card-head">
        <h3 id={`project-${num}`}>
          <span className="num">{num}</span>
          <a className="project-link" href={href}>
            {title}
          </a>
        </h3>
        <p>{meta}</p>
      </div>
      <p className="soft">{summary}</p>
    </article>
  );
}
