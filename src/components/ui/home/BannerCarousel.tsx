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
            <div>
              <div className="h-full w-full border-[30px] lg:border-[50px] border-[linear-gradient(to bottom, #33ccff 100%, #ff99cc 42%)] rounded-full shadow p-7 lg:p-10">
                <div className="rounded-full bg-none border shadow">
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
        <CarouselPrevious className="absolute top-[49.8%] left-[1.5%] border-none bg-[#8ec285] hover:bg-[#62b354] text-white" />
        <CarouselNext className="absolute top-[49.8%] right-[1%] border-none bg-[#8ec285] hover:bg-[#62b354] text-white" />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
