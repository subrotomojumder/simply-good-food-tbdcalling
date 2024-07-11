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
    <div className="shadow-lg sticky top-0 left-0 w-full z-[999] bg-white ">
      <Container className="max-w-full xl:max-w-full text-center py-1.5 lg:py-2 bg-[#fdb64e]">
        <span className="text-xs font-medium text-gray-100 tracking-wider">
          %% Free shipping on all orders %%
        </span>
      </Container>
      <Container className="relative py-0">
        <header className={cn("py-1")}>
          <nav className="h-full w-full mx-auto flex justify-between items-center">
            <Link href={"/"}>
              <div className="max-w-14 lg:max-w-20">
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
              className={cn("lg:hidden rounded-[2px] z-10 ", {
                "bg-gray-200": isOpen,
              })}
            >
              <AlignJustify className={cn("shrink-0 size-[22px] sm:size-6")} />
            </Button>
            {/* large device */}
            <ul className="hidden lg:flex justify-around space-x-5 divide-x divide-slate-300">
              {navRoutes.map((item: TNavItem, i) => (
                <li
                  className={cn(
                    "text-gray-500 pl-5 pr-2 transition-all text-sm lg:text-base",
                    {
                      "text-green-600": i === 0,
                    }
                  )}
                  key={i}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex gap-4">
              <Link href={"/login"}>
                <Button
                  size={"sm"}
                  className="px-5 rounded-lg border-green-btn-ground bg-gray-100"
                  variant={"outline"}
                >
                  Log in
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button
                  size={"sm"}
                  className="px-5 bg-green-btn-ground rounded-lg border border-green-btn-ground "
                >
                  Sign Up
                </Button>
              </Link>
            </div>
            {/* small device */}
            <div
              onClick={handleOutsideClose}
              className={cn(
                " lg:hidden fixed inset-0 bg-gray-900/50 invisible",
                {
                  visible: isOpen,
                }
              )}
            >
              <ul
                ref={containerRef}
                className={cn(
                  "flex flex-col text-end divide-y divide-gray-500 absolute right-0 top-24 bg-white dark:bg-slate-600 py-2 px-4 translate-x-16",
                  {
                    "translate-x-0 duration-300": isOpen,
                  }
                )}
              >
                {navRoutes.map((item: TNavItem, i) => (
                  <Link href={item.path} key={i}>
                    <li
                      className={cn(
                        "rounded-[2px] hover:bg-sky-500/90 text-slate-600 hover:text-white font-[500] px-4 py-2",
                        {
                          "transition-all": isOpen,
                          "text-green-600": i === 0,
                        }
                      )}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
                <li className="py-2">
                  <Link href={"/login"}>
                    <Button
                      size={"sm"}
                      className="bg-green-btn-ground active:bg-green-600 px-2 py-1 rounded-md w-full"
                    >
                      Login
                    </Button>
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
