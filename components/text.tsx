import { cn } from "@/lib/utils";

export default function Text({
  colour,
  size = "text-lg-",
  type = "copy",
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
  type?: "copy" | "heading" | "subheading";
  children: React.ReactNode;
}) {
  const Component = as || "div";

  const isHeading =
    as === "h1" ||
    as === "h2" ||
    as === "h3" ||
    as === "h4" ||
    as === "h5" ||
    as === "h6"
    || type === "heading" || type === "subheading";

  // if h1 bold, h2 semibold, h3 normal, h4 normal, h5 normal, h6 normal
  // if (as === "h1") {
  //   weight = "font-semibold";
  // } else if (as === "h2" || as === "h3") {
  //   weight = "font-semibold";
  // }
  weight = "font-semibold";

  if (type === "heading") {
    size = "text-2xl md:text-4xl lg:text-5xl !leading-normal tracking-tighter";
  } else if (type === "subheading") {
    size = "text-xl md:text-3xl lg:text-4xl !leading-normal tracking-tighter";
  } else if (type === "copy") {
    size = "text-lg md:text-xl lg:text-2xl !leading-normal tracking-tighter";
  }

  const defaultColour = "text-stone-500/70 dark:text-stone-400";

  // const fontWeight = isHeading && !weight ? `font-bold` : weight;
  const fontWeight = weight;
  const fontColour = isHeading && !colour ? `text-stone-800 dark:text-stone-50` : defaultColour;
  // const textLineHeight = isHeading ? `` : `leading-relaxed`;

  return (
    <Component
      className={cn(size, fontWeight, fontColour, className)}
    >
      {children}
    </Component>
  );
}
