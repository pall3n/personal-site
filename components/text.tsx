import { cn } from "@/lib/utils";

export default function Text({
  colour = "text-zinc-500 dark:text-zinc-400",
  size = "text-lg",
  weight,
  className,
  as,
  children,
}: {
  colour?: string;
  size?: string;
  weight?: string;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) {
  const Component = as || "div";

  const isHeading =
    as === "h1" ||
    as === "h2" ||
    as === "h3" ||
    as === "h4" ||
    as === "h5" ||
    as === "h6";

  const fontWeight = isHeading && !weight ? `font-bold` : weight;
  const fontColour = isHeading ? `text-zinc-800 dark:text-zinc-50` : colour;

  return (
    <Component className={cn(size, fontWeight, fontColour, className)}>
      {children}
    </Component>
  );
}
