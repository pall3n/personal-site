import CarouselComponent from "@/components/carousel";
import ImageGrid from "@/components/imageGrid";
import Text from "@/components/text";

export default function PortfolioViewSection({
  title,
  images,
  imageGrid,
  caption,
  children,
}: {
  title: string;
  images?: { src: string; alt: string }[];
  imageGrid?: { src: string; alt: string }[];
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8 md:space-y-10 lg:space-y-14">
      {images && <CarouselComponent images={images} caption={caption} />}

      {imageGrid && <ImageGrid images={imageGrid} />}

      <div className="max-w-screen-sm mx-auto px-6">
        {title && (
          <Text as="h2" className="text-sm uppercase font-semibold">
            {title}
          </Text>
        )}

        <div className="space-y-4 lg:space-y-6 mt-4">{children}</div>
      </div>
    </div>
  );
}
