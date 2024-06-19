"use client"
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { NavigationMenu,NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink  } from "@radix-ui/react-navigation-menu";
const components: {title: string; href: string}[] = [
  {
    title: "Membership Benefits",
    href: '#',
  },
  {
    title: "Membership Benefits",
    href: '#',
  },
  {
    title: "Membership Benefits",
    href: '#',
  },
]
export default function Navbar() {
  return (
    <nav className="w-full h-32 p-5 shadow bg-white md:flex md:items-center md:justify-between">
      <div className="flex items-center gap-5">
           <Image src="/Images/afcssr-logo.svg" alt="logo" width={97} height={97} />
           <div className=" w-[2px] h-[80px] bg-[#027AC6]"></div>
           <span className="text-[#027AC6] text-[15px] font-moul">សមាគមអតីតនិស្សិតកម្ពុជាពី <br/>សូវៀត និងរុស្សុី</span>
       </div>
       <ul className="flex gap-5 items-center">
        <li>
          <a href="#" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">HOME</a>
        </li>
        <li>
          <a href="#" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">ABOUT US</a>
        </li>
        <li>
          <a href="#" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">MEMEBERSHIP</a>
        </li>
        <li>
          <a href="#" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">NEWS & EVENTS</a>
        </li>
        <li>
          <a href="#" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">CONTACT</a>
        </li>
        <div className="">
          <Button variant="btn_navbar" size="size_nav">Membership Login</Button>
        </div>
      </ul>
    </nav>
  );
}

