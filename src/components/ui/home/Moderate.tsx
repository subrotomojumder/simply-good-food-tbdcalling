import { images } from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "../button";
import { ArrowUpRight } from "lucide-react";

const Moderate = () => {
  return (
    <div className="py-16 relative">
      <div className="absolute top-0 h-full w-full flex items-center">
        <Container className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="rounded-r-full space-y-4 pl-2">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Make daily meals <br /> healthy and moderate
            </h2>
            <p className="text-green-950 text-sm lg:text-base">
              Ingredient are naturally rich and full of taste
            </p>
            <Button className="gap-1 hover:bg-[#f0a83d] bg-[#fdb64e] text-slate-700 hover:text-white shadow-md">
              Explore Menu <ArrowUpRight size={19} />
            </Button>
          </div>
        </Container>
      </div>
      <div className="w-full grid grid-cols-2 bg-[#c4c4c4]">
        <div className="col-span-2 lg:col-span-1 flex items-center justify-start">
          <div className="w-full bg-white rounded-r-full mr-[7%] lg:mr-[5%] shadow-inner h-56 lg:h-64 my-16" />
        </div>
        <div className="w-full hidden lg:block">
          <Image
            src={images.moderateImg}
            className=""
            height={1000}
            width={1000}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Moderate;
