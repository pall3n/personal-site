import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const work = [
  {
    label: "Print Evolved",
    href: "/portfolio/print-evolved",
  },
  {
    label: "Snackable",
    href: "/portfolio/snackable",
  },
  {
    label: "Podcast App",
    href: "/portfolio/podcast-app",
  },
  {
    label: "Mity V2",
    href: "/portfolio/mity",
  },
];

export default function ProjectList() {
  return (
    //  <section className="py-16 px-8 max-w-screen-sm mx-auto">
    <div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-50 mt-4">
          Portfolio
        </h1>
      </div>

      <div className="flex flex-col gap-6 md:gap-8- mt-6 sm:mt-8-">
        {work.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="group flex items-center justify-between lg:text-lg lg:leading-snug text-zinc-500 dark:text-zinc-400"
          >
            <div className="flex gap-2">
              <span className="italic text-zinc-400 dark:text-zinc-200 font-medium">
                0{index + 1}.
              </span>
              <span className="text-zinc-800 dark:text-zinc-50 font-medium">
                {item.label}
              </span>
            </div>

            <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>
        ))}
      </div>
      {/* </section> */}
    </div>
  );
}
