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
    <div>
      <div className="max-w-screen-sm px-6 mx-auto">
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Link
            href="/portfolio"
            className=" text-stone-700 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-50 transition-all duration-300"
          >
            Projects
          </Link>
          <ArrowRightIcon className="w-3 h-3 flex-shrink-0 stroke-stone-400 dark:stroke-stone-500" />
          <div className="text-stone-500 dark:text-stone-400">{title}</div>
        </div>
      </div>

      <div className="max-w-screen-sm px-6 mx-auto mt-16 space-y-1">
        {/* {image && (
          <div className="rounded-2xl h-32 overflow-hidden mb-8">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )} */}

        <Text as="h1" size="text-3xl">
          {title}
        </Text>
        <Text as="p" size="text-xl">
          {subtitle}
        </Text>
      </div>

      {snapshot && (
        <div className="max-w-screen-sm px-6 mx-auto mt-8 lg:mt-10 border-y border-dashed border-stone-100 dark:border-stone-800">
          <div className="flex flex-col gap-2- divide-y divide-dashed divide-stone-100 dark:divide-stone-800">
            {snapshot.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-1 px-1 py-2.5 hover:bg-stone-50/75 transition-all duration-100"
              >
                <Text
                  weight="font-medium"
                  colour="text-stone-800 dark:text-stone-50"
                >
                  {item.label}
                </Text>
                <Text className="text-right">{item.copy}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
