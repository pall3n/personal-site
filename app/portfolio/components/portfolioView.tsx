import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import ProjectList from "./projectList";

export default function PortfolioView({
  project,
}: {
  project: {
    title: string;
    subtitle: string;
    sections: {
      title?: string;
      content: string;
      images?: {
        src: string;
        alt: string;
      }[];
    }[];
  };
}) {
  return (
    <section className="py-8 px-8">
      <div className="max-w-screen-sm px-6 mx-auto">
        <Link
          href="/portfolio"
          className="h-6 rounded-full -ml-1 bg-transparent flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-50 transition-all duration-300"
        >
          <ArrowLeftIcon className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs">Projects</span>
        </Link>
      </div>

      <div className="max-w-screen-sm px-6 mx-auto mt-6">
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-50 mt-4">
          {project.title}
        </h1>
        <div className="lg:text-lg text-zinc-500 dark:text-zinc-400">
          {project.subtitle}
        </div>
      </div>

      <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 mt-6 md:mt-10 lg:mt-12 sm:mt-8">
        {project.sections.map((section, index) => (
          <div
            key={index}
            className="space-y-6 md:space-y-8 lg:space-y-12 min-h-screen-"
          >
            {section.images &&
              (section.images.length > 1 ? (
                <div className="w-full max-w-screen-lg mx-auto">
                  <Carousel opts={{ loop: true }}>
                    <CarouselContent>
                      {section.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              ) : (
                <div className="w-full max-w-screen-lg mx-auto">
                  <img
                    src={section.images[0].src}
                    alt={section.images[0].alt}
                    className="w-full h-auto"
                  />
                </div>
              ))}

            <div className="max-w-screen-sm mx-auto px-6">
              {section.title && (
                <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-50">
                  {section.title}
                </h3>
              )}
              <p className="text-zinc-500 dark:text-zinc-400">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-24 lg:mt-32 pt-12 px-8 mx-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-screen-sm mx-auto px-6">
          <ProjectList />
        </div>
      </div>
    </section>
  );
}
