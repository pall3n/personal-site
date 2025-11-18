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
          className="h-6 rounded-full -ml-1 bg-transparent flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-50 transition-all duration-300"
        >
          <ArrowLeftIcon className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs">Projects</span>
        </Link>
      </div>

      <div className="max-w-screen-sm px-6 mx-auto mt-6 space-y-2">
        <Text as="h1" size="text-2xl">
          {title}
        </Text>
        <Text as="p">{subtitle}</Text>
      </div>

      {snapshot && (
        <div className="max-w-screen-sm px-6 mx-auto mt-6 lg:mt-8">
          <div className="flex flex-col gap-1">
            {snapshot.map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <Text
                  weight="font-medium"
                  colour="text-zinc-800 dark:text-zinc-50"
                >
                  {item.label}
                </Text>
                <Text>{item.copy}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
