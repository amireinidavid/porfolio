"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet className="bg-primary">
      <SheetTrigger className="flex justify-center items-center">
        <MenuIcon className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              David<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  `text-accent border-b-2 border-accent`
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
