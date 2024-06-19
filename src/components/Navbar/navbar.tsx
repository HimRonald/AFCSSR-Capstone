"use client"
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Dropdown } from "flowbite-react";
export default function Navbar() {
  return (
    <nav className="w-full h-32 p-9 shadow bg-white md:flex md:items-center md:justify-between">
      <div className="flex items-center gap-5">
           <Image src="/Images/afcssr-logo.svg" alt="logo" width={97} height={97} />
           <div className=" w-[2px] h-[80px] bg-[#027AC6]"></div>
           <span className="text-[#027AC6] text-[15px] font-moul">សមាគមអតីតនិស្សិតកម្ពុជាពី <br/>សូវៀត និងរុស្សុី</span>
       </div>
       <ul className="flex gap-5 items-center">
        <li>
          <a href="/" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">HOME</a>
        </li>
        <li>
          <a href="/AboutUs" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">ABOUT US</a>
        </li>
        <li className=" font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black ">
          <Dropdown label="MEMBERSHIP" inline>
            <Dropdown.Item href="/Membership/Benefits">Membership Benefits</Dropdown.Item>
            <Dropdown.Item href="/Membership/Process">Membership Process</Dropdown.Item>
            <Dropdown.Item href="/Membership/Registration">Membership Registration</Dropdown.Item>
          </Dropdown>
        </li>
        <li>
          <a href="/News&Events" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">NEWS & EVENTS</a>
        </li>
        <li>
          <a href="/Contact" className="font-semibold text-base text-[#4F4A5C] hover:text-[#027AC6] link-underline link-underline-black">CONTACT</a>
        </li>
        <div className="ml-4">
          <Button variant="btn_navbar" size="size_nav">Membership Login</Button>
        </div>
      </ul>
    </nav>
  );
}

