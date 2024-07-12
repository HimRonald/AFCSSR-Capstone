"use client"
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
export default function LandingPic() {
    return (
        <div className="relative w-full overflow-hidden">
            <img src="/Images/landing.png" alt="Landing page picture" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative py-24 mx-auto max-w-4xl text-center sm:px-6 lg:px-8 px-4">
                <h2 className="font-bold md:text-8xl text-6xl font-libre text-[#F9EB1E]">AFCSSR</h2>
                <p className="text-white text-5xl text-center font-libre tracking-wide mt-6 ">Membership Registration <br /> Now Open!</p>
                <p className="text-white text-center text-base font-libre my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, quos.</p>
                <Button variant='btn_landing' size='size_landing' asChild>
                    <Link href='/Membership/Registration'>Register Now</Link>
                </Button>
            </div>
        </div>
    )
}
