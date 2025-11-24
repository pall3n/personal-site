import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import Text from "@/components/text";

export default function PortfolioViewHeader({
  title,
  subtitle,
  snapshot,
}: {
  title: string;
  subtitle: string;
  snapshot?: {
    label: string;
    copy: string;
  }[];
}) {
  return (
    <div>
      <div className="max-w-screen-sm px-6 mx-auto">
        <Link
          href="/portfolio"
          className="h-6 rounded-full -ml-1 bg-transparent flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-50 transition-all duration-300"
        >
          <ArrowLeftIcon className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs">Projects</span>
        </Link>
      </div>

      <div className="max-w-screen-sm px-6 mx-auto mt-6 space-y-2">
        <Text as="h1" size="text-3xl">
          {title}
        </Text>
        <Text as="p" size="text-xl">
          {subtitle}
        </Text>
      </div>

      {snapshot && (
        <div className="max-w-screen-sm px-6 mx-auto mt-6 lg:mt-8 border-y border-dashed border-stone-100 dark:border-stone-800">
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
