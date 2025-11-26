import { cn } from "@/lib/utils";

interface ImageGridProps {
  images: { src: string; alt: string; className?: string }[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 lg:px-12">
      {images.map((image, index) => (
        <img
          src={image.src}
          alt={image.alt}
          key={index}
          className={cn(
            "rounded-2xl- w-full h-auto overflow-hidden",
            image.className
          )}
        />
      ))}
    </div>
  );
}
