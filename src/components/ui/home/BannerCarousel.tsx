import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type TCarouselProps = {
  images: string[];
};
const BannerCarousel = ({ images }: TCarouselProps) => {
  return (
    <Carousel className="w-full max-w-lg rounded-full px-14 lg:px-0">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="h-full w-full rounded-full shadow p-[8.2%] bg-gradient-to-b from-[#6fb162] via-[#80be74] to-[#8dbb84]">
              <div className="h-full w-full rounded-full shadow-inner bg-gray-100/95 p-[10%]">
                <div className="rounded-full bg-none border-8 shadow">
                  <Image
                    src={image}
                    className="rounded-full"
                    height={1000}
                    width={1000}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div>
        <CarouselPrevious className="absolute top-[49.8%] left-[1.5%] border-none bg-[#8ec285] hover:bg-[#62b354] text-white shadow-sm" />
        <CarouselNext className="absolute top-[49.8%] right-[1%] border-none bg-[#8ec285] hover:bg-[#62b354] text-white shadow-sm" />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
