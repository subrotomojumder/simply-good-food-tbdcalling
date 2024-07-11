import Container from "@/components/Container";
import React from "react";
import SectionHeading from "./SectionHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../ProductCard";
import Link from "next/link";

export const productsData = [
  {
    _id: "0",
    title: "Health Food Name",
    image: "https://i.ibb.co/LnZt1sR/product-1.png",
    price: 100,
    rate: 4.5,
    materials: ["Protein 49g", "Carbs 23g", "Fat 23g"],
  },
  {
    _id: "1",
    title: "Health Food Name",
    image: "https://i.ibb.co/qmxJmQk/product-3.png",
    price: 100,
    rate: 4.5,
    materials: ["Protein 49g", "Carbs 23g", "Fat 23g"],
  },
  {
    _id: "2",
    title: "Health Food Name",
    image: "https://i.ibb.co/p2R5PcJ/product-2.png",
    price: 100,
    rate: 3.5,
    materials: ["Protein 49g", "Carbs 23g", "Fat 23g"],
  },
  {
    _id: "3",
    title: "Health Food Name",
    image: "https://i.ibb.co/LnZt1sR/product-1.png",
    price: 100,
    rate: 4.5,
    materials: ["Protein 49g", "Carbs 23g", "Fat 23g"],
  },
  {
    _id: "4",
    title: "Health Food Name",
    image: "https://i.ibb.co/qmxJmQk/product-3.png",
    price: 100,
    rate: 4.5,
    materials: ["Protein 49g", "Carbs 23g", "Fat 23g"],
  },
  {
    _id: "5",
    title: "Health Food Name",
    image: "https://i.ibb.co/p2R5PcJ/product-2.png",
    price: 100,
    rate: 3.5,
    materials: ["Protein 49g", "Carbs 23g", "Fat 23g"],
  },
];
const TrendingMenu = () => {
  return (
    <Container className="max-w-full lg:px-0">
      <SectionHeading heading="New & Trending menu" />
      <div className="mt-10">
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
          <CarouselPrevious className="absolute left-[2%] lg:left-[4%] text-gray-700 bg-blue-300/70" />
          <CarouselNext className="absolute right-[2%] lg:right-[4%] text-gray-700 bg-blue-300/70 " />
        </Carousel>
      </div>
    </Container>
  );
};

export default TrendingMenu;
