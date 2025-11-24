import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Text from "@/components/text";

export default function CarouselComponent({
  images,
  caption,
}: {
  images: { src: string; alt: string }[] | undefined;
  caption?: string;
}) {
  return (
    <div>
      {images && images.length > 1 ? (
        <div className="w-full max-w-screen-xl px-8 lg:px-12 mx-auto">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div className="w-full max-w-screen-lg mx-auto">
          <img
            src={images?.[0]?.src}
            alt={images?.[0]?.alt || ""}
            className="w-full h-auto"
          />
        </div>
      )}

      {caption && (
        <Text
          size="text-[13px]"
          className="text-center mt-3 max-w-screen-lg mx-auto"
        >
          {caption}
        </Text>
      )}
    </div>
  );
}
