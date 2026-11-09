import type { ReactNode } from "react";
import Image from "next/image";

export type CaseImage = {
  src: string;
  alt: string;
  span2?: boolean;
};

type CaseSectionProps = {
  id?: string;
  label?: string;
  title: string;
  children: ReactNode;
  caption?: string;
  carousel?: CaseImage[];
  grid?: CaseImage[];
  featured?: CaseImage;
};

export default function CaseSection({
  id,
  label,
  title,
  children,
  caption,
  carousel,
  grid,
  featured,
}: CaseSectionProps) {
  const headingId = id ? `${id}-h` : undefined;

  return (
    <section
      className="case-section"
      id={id}
      aria-labelledby={headingId}
    >
      <div className="section-head">
        <div>
          {label && <p className="label">{label}</p>}
          <h2 id={headingId} className="h2">
            {title}
          </h2>
        </div>
      </div>

      <div className="prose">{children}</div>

      {(featured || carousel?.length || grid?.length) && (
        <div className="media-block">
          {featured && (
            <div className="shot shot--wide">
              <Image
                src={featured.src}
                alt={featured.alt}
                width={1600}
                height={1000}
                sizes="(max-width: 1160px) 100vw, 1160px"
                loading="lazy"
              />
            </div>
          )}

          {carousel && carousel.length > 0 && (
            <div className="media-carousel">
              {carousel.map((img) => (
                <div className="shot" key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 85vw, 720px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {grid && grid.length > 0 && (
            <div className="media-grid">
              {grid.map((img) => (
                <div
                  className={`shot shot--card${img.span2 ? " shot--span-2" : ""}`}
                  key={img.src}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

          {caption ? <p className="media-caption">{caption}</p> : null}
        </div>
      )}
    </section>
  );
}
