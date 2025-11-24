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
        <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-50 mt-4">
          Portfolio
        </h1>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        {work.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="group flex items-center justify-between lg:text-lg lg:leading-snug text-stone-500 dark:text-stone-400"
          >
            <div className="flex gap-1.5">
              <span className="text-stone-300 dark:text-stone-200 font-semibold">
                0{index + 1}.
              </span>
              <span className="text-stone-800 dark:text-stone-50 font-medium">
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
