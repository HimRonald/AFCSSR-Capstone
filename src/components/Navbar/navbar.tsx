"use client"
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronDown, MenuIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";;
import { useState, useEffect } from "react";
export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  console.log("Current Pathname",pathName);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (path: string) => isMounted && pathName === path;

  return (
    <header className="drop-shadow-md bg-white fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between md:px-6">
        <Link href='/' className="flex items-center gap-5">
            <Image src="/Images/afcssr-logo.svg" alt="logo" width={97} height={97} />
            <div className=" w-[2px] h-[80px] bg-[#027AC6]"></div>
            <span className="text-[#027AC6] text-[15px] font-moul">សមាគមអតីតនិស្សិតកម្ពុជា<br />ពីសូវៀត និងរុស្សុី</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href='/' className={`font-semibold text-base ${isActive('/') ? 'text-[#027AC6] underline underline-offset-[5px]' : 'text-[#4F4A5C]'} hover:text-[#027AC6] link-underline link-underline-black`}>HOME</Link>
          <Link href='/AboutUs' className={`font-semibold text-base ${isActive('/AboutUs') ? 'text-[#027AC6] underline underline-offset-[5px]' : 'text-[#4F4A5C]'} hover:text-[#027AC6] link-underline link-underline-black`}>ABOUT US</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className={`font-semibold text-base ${pathName.startsWith('/Membership') ? 'text-[#027AC6] underline underline-offset-[5px]' : 'text-[#4F4A5C]'}  hover:text-[#027AC6] link-underline link-underline-black`}>
              MEMBERSHIP <ChevronDown className="inline-block h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-[#4F4A5C]">
              <DropdownMenuItem>
                <Link href="/Membership/Benefits" prefetch={false}>
                  Membership Benefits
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Membership/Process" prefetch={false}>
                  Membership Process
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Membership/Registration" prefetch={false}>
                  Membership Registration
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href='/scholarships' className={`font-semibold text-base ${isActive('/scholarships') ? 'text-[#027AC6] underline underline-offset-[5px]' : 'text-[#4F4A5C]'} hover:text-[#027AC6] link-underline link-underline-black`}>SCHOLARSHIPS</Link>
          <Link href='/News&Events' className={`font-semibold text-base ${isActive('/News&Events') ? 'text-[#027AC6] underline underline-offset-[5px]' : 'text-[#4F4A5C]'} hover:text-[#027AC6] link-underline link-underline-black`}>NEWS & EVENTS</Link>
          <Link href='/Contact' className={`font-semibold text-base ${isActive('/Contact') ? 'text-[#027AC6] underline underline-offset-[5px]' : 'text-[#4F4A5C]'} hover:text-[#027AC6] link-underline link-underline-black`}>CONTACT</Link>
          {/* <Button variant="btn_navbar" size="size_nav">Membership Login</Button> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
          <Button variant="default" size="icon" className="md:hidden">
              <MenuIcon className="h-8 w-8 stroke-2 stroke-[#4F4A5C]" />
              <span className="sr-only">Toggle navigation menu</span>
          </Button>
          </SheetTrigger>
          <SheetContent side='right' className="w-full max-w-xs bg-white">
            <div className="grid gap-4 p-4">
            <Link href='/' className={`font-semibold text-base ${isActive('/') ? 'text-[#027AC6] underline' : 'text-[#4F4A5C]'} hover:text-[#027AC6] hover:underline underline-offset-4`}>HOME</Link>
            <Link href='/AboutUs' className={`font-semibold text-base ${isActive('/AboutUs') ? 'text-[#027AC6] underline' : 'text-[#4F4A5C]'} hover:text-[#027AC6] hover:underline underline-offset-4`}>ABOUT US</Link>
            <Collapsible className="grid gap-2">
                <CollapsibleTrigger className={`flex items-center justify-between font-semibold text-base ${pathName.startsWith('/Membership') ? 'text-[#027AC6] underline' : 'text-[#4F4A5C]'} hover:text-[#027AC6] hover:underline underline-offset-4`}>
                  MEMBERSHIP <ChevronDown className="h-4 w-4 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid gap-2 pl-4">
                    <Link href="/Membership/Benefits" className="text-base" prefetch={false}>
                      Membership Benefits
                    </Link>
                    <Link href="/Membership/Process" className="text-base" prefetch={false}>
                      Membership Process
                    </Link>
                    <Link href="/Membership/Registration" className="text-base" prefetch={false}>
                      Membership Registration
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link href='/scholarships' className={`font-semibold text-base ${isActive('/scholarships') ? 'text-[#027AC6] underline' : 'text-[#4F4A5C]'} hover:text-[#027AC6] hover:underline underline-offset-4`}>SCHOLARSHIPS</Link>
              <Link href='/News&Events' className={`font-semibold text-base ${isActive('/News&Events') ? 'text-[#027AC6] underline' : 'text-[#4F4A5C]'} hover:text-[#027AC6] hover:underline underline-offset-4`}>NEWS & EVENTS</Link>
              <Link href='/Contact' className={`font-semibold text-base ${isActive('/Contact') ? 'text-[#027AC6] underline' : 'text-[#4F4A5C]'} hover:text-[#027AC6] hover:underline underline-offset-4`}>CONTACT</Link>
              {/* <Button variant="btn_navbar" size="size_nav">Membership Login</Button> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

