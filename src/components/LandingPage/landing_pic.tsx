"use client"
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
export default function LandingPic() {
    const [openModal, setOpenModal] = useState(true);
    return (
        <div className="relative">
            <img src="/Images/landing.png" alt="Landing page picture" className="w-full h-[580px] object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 ">
                <span className=" font-bold text-8xl font-libre text-[#F9EB1E]">AFCSSR</span>
                <span className="text-white text-5xl text-center font-libre tracking-wide ">Membership Registration <br /> Now Open!</span>
                <p className="text-white text-center text-base font-libre w-[955px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quos.</p>
                <Button variant='btn_landing' size='size_landing' asChild>
                    <Link href='/Membership/Registration'>Register Now</Link>
                </Button>
            </div>
        </div>
    )
}