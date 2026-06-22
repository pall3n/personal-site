import Text from "@/components/text";
import PortfolioViewHeader from "./portfolioViewHeader";
import PortfolioViewSection from "./portfolioViewSection";
import PortfolioViewFooter from "./portfolioViewFooter";

export default function PortfolioView({
  project,
}: {
  project: {
    title: string;
    subtitle: string;
    snapshot?: {
      label: string;
      copy: string;
    }[];
    sections: {
      title?: string;
      content: string[];
      images?: {
        src: string;
        alt: string;
      }[];
      caption?: string;
    }[];
  };
}) {
  return (
    <section className="py-16 text-semibold">
      <PortfolioViewHeader
        title={project.title}
        subtitle={project.subtitle}
        snapshot={project.snapshot}
      />

      <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 mt-6 md:mt-10 lg:mt-12 sm:mt-8">
        {project.sections.map((section, index) => (
          <PortfolioViewSection
            key={index}
            title={section.title || ""}
            images={section.images || []}
            caption={section.caption || ""}
          >
            {section.content.map((item, index) => (
              <Text key={index} type="copy" as="p">{item}</Text>
            ))}
          </PortfolioViewSection>
        ))}
      </div>

      <PortfolioViewFooter />
    </section>
  );
}
