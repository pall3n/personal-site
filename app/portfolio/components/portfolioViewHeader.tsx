import Link from "next/link";
import { ArrowRightIcon, CircleDivideIcon } from "lucide-react";
import Text from "@/components/text";

export default function PortfolioViewHeader({
  title,
  image,
  subtitle,
  snapshot,
}: {
  title: string;
  image?: string;
  subtitle: string;
  snapshot?: {
    label: string;
    copy: string;
  }[];
}) {
  return (
    <div className="text-semibold">
      <div className="px-8 max-w-[920px] mx-auto">
        <div className="flex items-center gap-1.5 text-sm font-semibold">
          <Link
            href="/portfolio"
            className=" text-stone-700 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-50 transition-all duration-300"
          >
            Projects
          </Link>
          <ArrowRightIcon className="w-3 h-3 flex-shrink-0 stroke-stone-400/70 dark:stroke-stone-500" />
          <div className="text-stone-500 dark:text-stone-400">{title}</div>
        </div>
      </div>

      <div className="max-w-[920px] px-6 mx-auto mt-20 md:mt-30 lg:mt-40 space-y-4-">
        {/* {image && (
          <div className="rounded-2xl h-32 overflow-hidden mb-8">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )} */}

        <Text as="h1" type="subheading">
          {title}
        </Text>
        <Text as="p" type="subheading" colour="text-stone-500/70 dark:text-stone-400">
          {subtitle}
        </Text>
      </div>

      {snapshot && (
        <div className="max-w-[920px] px-6 mx-auto mt-12 lg:mt-24">
          <div className="flex flex-col gap-2- divide-y-2 divide-stone-50 dark:divide-stone-800 border-y-2 border-stone-50 dark:border-stone-800">
            {snapshot.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-1 px-2 py-4 hover:bg-stone-50/75 transition-all duration-100"
              >
                <Text
                  size="text-sm md:text-lg"
                  className="!leading-normal tracking-tighter text-stone-800 dark:text-stone-50"
                >
                  {item.label}
                </Text>
                <Text size="text-sm md:text-lg"
                  className="!leading-normal tracking-tighter text-right">{item.copy}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
