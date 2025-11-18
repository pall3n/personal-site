import CarouselComponent from "@/components/carousel";
import Text from "@/components/text";

export default function PortfolioViewSection({
  title,
  images,
  caption,
  children,
}: {
  title: string;
  images: { src: string; alt: string }[];
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8 md:space-y-10 lg:space-y-14">
      <CarouselComponent images={images} caption={caption} />

      <div className="max-w-screen-sm mx-auto px-6">
        {title && <Text as="h2">{title}</Text>}

        <div className="space-y-4 mt-3">{children}</div>
      </div>
    </div>
  );
}
