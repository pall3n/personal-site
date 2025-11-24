import Link from "next/link";
import Text from "@/components/text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const work = [
  {
    label: "Print Evolved",
    href: "/portfolio/print-evolved",
    image: "/images/projects/print-evolved/preview.png",
  },
  {
    label: "Snackable",
    href: "/portfolio/snackable",
    image: "/images/projects/snackable/preview.png",
  },
  {
    label: "Podcast App",
    href: "/portfolio/podcast-app",
    image: "/images/projects/podcast/preview.png",
  },
  {
    label: "Mity V2",
    href: "/portfolio/mity",
    image: "/images/projects/mity/preview.png",
  },
];

export default function ProjectList({
  inline = false,
  hideProjectIndex = null,
  showHeader = false,
}: {
  inline?: boolean;
  hideProjectIndex?: number | null;
  showHeader?: boolean;
}) {
  return (
    //  <section className="py-16 px-8 max-w-screen-sm mx-auto">
    <div>
      {showHeader && (
        <div className="flex flex-col">
          <Text as="h2" size="text-xl">
            Portfolio
          </Text>
        </div>
      )}

      <div
        className={cn(
          "grid gap-4 lg:gap-6 mt-8",
          inline ? "grid-cols-3" : "grid-cols-2"
        )}
      >
        {work.map((item, index) => (
          <ProjectItem
            item={item}
            index={index}
            hideProjectIndex={hideProjectIndex}
            inline={inline}
          />
        ))}
      </div>
      {/* </section> */}
    </div>
  );
}

const ProjectItem = ({
  item,
  index,
  hideProjectIndex,
  inline = false,
}: {
  item: any;
  index: number;
  hideProjectIndex: number | null;
  inline?: boolean;
}) => {
  if (hideProjectIndex !== null && index === hideProjectIndex) {
    return null;
  }

  return (
    <Link
      href={item.href}
      key={index}
      className={cn(
        "group transition-all duration-100 text-stone-500 dark:text-stone-400",
        index === 0 && !inline ? "col-span-2" : ""
      )}
    >
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-auto rounded-xl ring-0 group-hover:ring-4 ring-offset-2 ring-stone-100 transition-all duration-300"
      />

      <div className="flex items-center justify-between gap-1 px-2 py-3">
        <div className="flex gap-1.5">
          <span className="text-stone-800 dark:text-stone-50 font-medium">
            {item.label}
          </span>
        </div>

        <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </Link>
  );
};
