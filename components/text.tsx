import { cn } from "@/lib/utils";

export default function Text({
  colour = "text-stone-500 dark:text-stone-400",
  size = "text-lg-",
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

  // if h1 bold, h2 semibold, h3 normal, h4 normal, h5 normal, h6 normal
  if (as === "h1") {
    weight = "font-bold";
  } else if (as === "h2" || as === "h3") {
    weight = "font-semibold";
  }
  // const fontWeight = isHeading && !weight ? `font-bold` : weight;
  const fontWeight = weight;
  const fontColour = isHeading ? `text-stone-800 dark:text-stone-50` : colour;
  const textLineHeight = isHeading ? `` : `leading-relaxed`;

  return (
    <Component
      className={cn(size, fontWeight, fontColour, textLineHeight, className)}
    >
      {children}
    </Component>
  );
}
