import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { productsData } from "@/components/ui/home/TrendingMenu";
import StarIcon from "@/components/ui/StarIcon";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/ui/home/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";

const ProductDetails = ({
  params,
}: {
  params: { [index: string]: unknown };
}) => {
  const { productId } = params;
  const product = productsData[productId as number];
  return (
    <div>
      <Container className="py-10">
        <Link href={"/"}>
          <Button
            variant={"ghost"}
            className="text-sm gap-4 text-gray-500 hover:bg-gray-50"
          >
            <ArrowLeft size={20} /> Back
          </Button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          <div className="w-full overflow-hidden rounded-3xl border-8 h-[500px]">
            <Image
              src={product.image}
              className="object-cover h-full w-full"
              height={700}
              width={700}
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="text-3xl font-bold text-[#3e3e3e]">
              {product.title}
            </h4>
            <div className="flex items-center gap-1">
              <StarIcon width={20} height={20} fill="#fdb64e" />
              <span className="text-[#fdb64e]">{product.rate}</span>
            </div>
            <div className="flex gap-3 -ml-3">
              {product.materials.map((item: string, i: number) => (
                <div key={i} className="text-sm flex justify-start gap-4 mr-0">
                  <span className="text-gray-950">{i !== 0 && "/"}</span>
                  <span className="text-slate-400">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-2xl font-bold">
              <span className="font-medium ">$</span>{" "}
              <span className="font-semibold">{product.price}</span>
            </p>
            <p className="text-gray-600">
              Ipsum dolor, sit amet consectetur adipisicing elit. Commodi quod
              in vel! Saepe fugit ipsum quod animi? Tempore impedit, iusto
              perferendis veniam minus consectetur assumenda! Earum eos facere
              sed itaque maiores autem laboriosam, consequatur, saepe modi nisi
              tenetur delectus exercitationem.
            </p>
            <div className="pt-3">
              <Button className="bg-green-btn-ground w-full font-normal rounded-xl">
                Add to Cart
              </Button>
            </div>
            <div className="space-y-3.5">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-600">Ingredients</p>
                <button className="bg-gray-100 rounded-full shadow-md p-0.5">
                  <ChevronRight size={21} />
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-600">Instructions</p>
                <button className="bg-gray-100 rounded-full shadow-md p-0.5">
                  <ChevronRight size={21} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="max-w-full">
        <SectionHeading heading="Related products" className="text-start lg:px-6 max-w-6xl mx-auto" />
        <div className="my-6">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="mx-[7%] max-w-6xl xl:mx-auto">
              {productsData.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-[30%] px-3 md:px-4"
                >
                  <Link href={`/products/${product._id}`}>
                    <ProductCard product={product} />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
