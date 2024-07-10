"use client";

import { images } from "@/assets";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navRoutes } from "@/utils/routes";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";

export type TNavItem = {
  name: string;
  path: string;
};
const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLUListElement>(null);
  const handleOutsideClose = (e: any) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [path]);
  return (
    <div className="">
      <Container className="max-w-full text-center py-2.5 bg-[#fdb64e]">
        <span className="text-xs font-medium text-gray-100 tracking-wider">
          %% Free shipping on all orders %%
        </span>
      </Container>
      <Container>
        <header
          className={cn(
            "sticky top-0 left-0 w-full z-[999] py-1 md:py-2 transition-all duration-300 bg-white "
          )}
        >
          <nav className="h-full w-full max-w-[1480px] mx-auto flex justify-between items-center px-4 md:px-[30px] ">
            <Link href={"/"}>
              <div className="max-w-16 md:max-w-20">
                <Image
                  src={images.navLogo}
                  alt="logo"
                  property="true"
                  className="max-h-full"
                />
              </div>
            </Link>
            <Button
              onClick={() => setIsOpen((c) => !c)}
              variant={"ghost"}
              className=" lg:hidden rounded-[2px] z-10"
            >
              <AlignJustify className="shrink-0 size-[22px] sm:size-6" />
            </Button>
            {/* large device */}
            <ul className="hidden lg:flex justify-around space-x-5 divide-x">
              {navRoutes.map((item: TNavItem, i) => (
                <li
                  className={cn("text-sm text-gray-500 pl-5 pr-2 py-1 transition-all", {
                    "text-green-400": i === 0,
                  })}
                  key={i}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex gap-4">
              <Link href={"#login"}>
                <Button className="py-0 rounded-lg border-green-btn-ground bg-gray-100" variant={"outline"}>
                  Log in
                </Button>
              </Link>
              <Link href={"#login"}>
                <Button className="bg-green-btn-ground rounded-lg border border-green-btn-ground ">Sign Up</Button>
              </Link>
            </div>
            {/* small device */}
            <div
              onClick={handleOutsideClose}
              className={cn(
                " lg:hidden fixed inset-0 bg-gray-900/50 invisible ",
                {
                  visible: isOpen,
                }
              )}
            >
              <ul
                ref={containerRef}
                className="flex flex-col text-end divide-y divide-gray-500 absolute right-0 top-12 md:top-16 bg-white dark:bg-slate-600 py-2 px-4"
              >
                {navRoutes.map((item: TNavItem, i) => (
                  <Link href={item.path} key={i}>
                    <li
                      className={cn(
                        "rounded-[2px] hover:bg-sky-500/80 hover:text-white font-[500] px-4 py-2",
                        {
                          "transition-all": isOpen,
                        }
                      )}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
                <li className="py-2">
                  <Link href={"#login"}>
                    <button className="bg-green-500 active:bg-green-600 px-2 py-1 rounded-md w-full">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
