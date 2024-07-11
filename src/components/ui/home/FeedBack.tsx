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
import Image from "next/image";
import { users } from "@/assets";

const FeedBack = () => {
  const feedbackData = [
    {
      name: "Anjelina",
      image: users.users_1,
      profession: "Student",
      comment:
        "Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services",
    },
    {
      name: "Anjelina",
      image: users.users_2,
      profession: "Student",
      comment:
        "Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services",
    },
    {
      name: "Anjelina",
      image: users.users_1,
      profession: "Student",
      comment:
        "Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services",
    },
    {
      name: "Anjelina",
      image: users.users_2,
      profession: "Student",
      comment:
        "Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services",
    },
    {
      name: "Anjelina",
      image: users.users_1,
      profession: "Student",
      comment:
        "Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services",
    },
    {
      name: "Anjelina",
      image: users.users_2,
      profession: "Student",
      comment:
        "Thank you for all, you service was soo good and safe, i will suggest my friends about your fantastic services",
    },
  ];
  return (
    <Container>
      <SectionHeading heading="Feedbacks" />
      <div className="mt-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {feedbackData.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-[46%] px-3 md:px-4"
              >
                <div className="grid grid-cols-8 items-center gap-4 bg-gray-100/80 border px-5 py-8">
                  <div className="w-full col-span-2">
                    <Image
                      src={item.image}
                      className=""
                      height={500}
                      width={500}
                      alt="image"
                    />
                  </div>
                  <div className="w-full col-span-6 space-y-2.5">
                    <div className="space-y-1.5">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-green-500">
                        {item.profession}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">{item.comment}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default FeedBack;
