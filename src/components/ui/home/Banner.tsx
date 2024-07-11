import Container from "@/components/Container";
import { Button } from "../button";
import { ArrowUpRight } from "lucide-react";
import BannerCarousel from "./BannerCarousel";
import { carousel } from "@/assets";

const Banner = () => {
  const bannerImages = [carousel.fasta, carousel.verger, carousel.chicken];
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(239, 230, 235, 0.7), rgba(239, 230, 235, 0.0)), url(https://i.ibb.co/WkvbYmw/87016108c1c11301df3501aadab672bb.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-5 py-16 lg:py-10">
        <div className="flex justify-center lg:justify-start items-center">
          <div className="space-y-6 text-center lg:text-left ">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight">
              Keep Track of <br />{" "}
              <span className="text-[#237314]">Fitness Goal </span>
            </h1>
            <h5 className="text-xl lg:text-3xl font-medium">
              Order on Simply Good Food
            </h5>
            <Button className="gap-1 hover:bg-[#f0a83d] bg-[#fdb64e] text-slate-700 hover:text-white shadow-md">
              Explore Menu <ArrowUpRight size={19} />
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <BannerCarousel images={bannerImages} />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
