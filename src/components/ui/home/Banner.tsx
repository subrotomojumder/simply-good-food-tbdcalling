import Container from "@/components/Container";
import { ArrowUpRight } from "lucide-react";
import BannerCarousel from "./BannerCarousel";
import { carousel } from "@/assets";
import { Button } from "../button";

const Banner = () => {
  const bannerImages = [carousel.fasta, carousel.verger, carousel.chicken];
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(239, 230, 235, 0.7), rgba(239, 230, 235, 0.10)), url(https://i.ibb.co/WkvbYmw/87016108c1c11301df3501aadab672bb.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-5 py-16 lg:py-10 h-full lg:h-screen lg:max-h-[800px]">
        <div className="h-full flex justify-center lg:justify-start items-center">
          <div className="space-y-6 text-center lg:text-left ">
            <div className="text-5xl lg:text-7xl font-semibold leading-snug">
              <span> Keep Track of</span> <br />
              <span className="text-[#237314] inline-block lg:pt-3">
                Fitness Goal{" "}
              </span>
            </div>
            <h5 className="text-xl lg:text-3xl font-medium">
              Order on Simply Good Food
            </h5>
            <div className="pt-3">
              <Button className="animate-bounce gap-1 hover:bg-[#f0a83d] bg-[#fdb64e] text-slate-700 hover:text-white shadow-md">
                Explore Menu <ArrowUpRight size={19} />
              </Button>
            </div>
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
