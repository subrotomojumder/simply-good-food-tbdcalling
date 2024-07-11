import { images } from "@/assets";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navRoutes } from "@/utils/routes";
import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-50">
      <Container className="grid grid-cols-12 gap-x-3 gap-y-12 py-0 pt-8 pb-12">
        <div className="col-span-5 lg:col-span-3 w-full max-w-40">
          <Image
            src={images.footerLogo}
            className=""
            height={700}
            width={700}
            alt="image"
          />
        </div>
        <div className="col-span-7 lg:col-span-4 grid grid-cols-2 gap-4">
          {navRoutes.map((item, index) => (
            <Link key={index} href={item.path}>
              <span className="text-sm text-gray-500">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-3">
          <h3 className="font-semibold text-sm text-gray-500">
            Subscribe To Our Email Alerts
          </h3>
          <div className="flex w-full max-w-sm items-center space-x-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="text-sm placeholder:text-gray-400/90 font-light rounded-xl"
            />
            <Button
              type="submit"
              className="text-xs bg-green-btn-ground font-normal rounded-xl"
            >
              Subscribe
            </Button>
          </div>
          <nav className="flex gap-5 text-orange-400 pt-2">
            <a
              href="/"
              target="blank"
              className="border rounded-full h-10 w-10 flex justify-center items-center"
            >
              <Facebook size={21} className="hover:text-blue-500" />
            </a>
            <a
              href="/"
              target="blank"
              className="border rounded-full h-10 w-10 flex justify-center items-center"
            >
              <Instagram size={21} className="hover:text-blue-500" />
            </a>
            <a
              href="/"
              target="blank"
              className="border rounded-full h-10 w-10 flex justify-center items-center"
            >
              <LinkedinIcon size={21} className="hover:text-blue-500" />
            </a>
            <a
              href="/"
              target="blank"
              className="border rounded-full h-10 w-10 flex justify-center items-center"
            >
              <Twitter size={21} className="hover:text-blue-500" />
            </a>
          </nav>
        </div>
      </Container>
      <Container className="max-w-full xl:max-w-full text-center py-1.5 lg:py-2 bg-black">
        <span className="text-xs text-gray-300 tracking-wider">
          © All rights reserved by Simply Good Foods
        </span>
      </Container>
    </div>
  );
};

export default Footer;
