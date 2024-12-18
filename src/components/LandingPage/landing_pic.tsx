"use client"
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LandingPic() {
    return (
        <div className="relative w-full overflow-hidden">
            <Image
                src="/Images/landing.png"
                alt="Group photo with blue overlay"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-blue-600/10" /> {/* Blue overlay */}
            <div className="relative py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                <div className="max-w-3xl lg:mr-8">
                    {/* <h1 className="font-libre text-[#F9EB1E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Association Of Former Cambodian Students From Soviet Union And Russia
                    </h1> */}
                    <div className="leading-tight mx-auto max-w-[500px]">
                        <h1 className="font-libre text-[#F9EB1E] text-2xl sm:text-3xl md:text-4xl font-bold">
                            Association Of Former Cambodian Students From
                            <br />
                            Soviet Union And Russia
                        </h1>
                    </div>

                    <Button variant='btn_navbar' size='size_nav' className="mt-8 bg-[#F9EB1E] text-blue-900 hover:bg-blue-900 px-8 py-3 " asChild>
                    <Link href='/Contact'>contact</Link>
                </Button>
                    {/* <Button
                        variant="default"
                        size="lg"
                        asChild
                        className="mt-8 bg-[#F9EB1E] text-blue-900 hover:bg-[#F9EB1E]/90 px-8 py-3 rounded-md font-semibold"
                    >
                        <Link href='/AboutUs'>Learn More</Link>
                    </Button> */}
                </div>
                <div className="lg:w-2/5">
                    <div className="relative w-full" style={{ minWidth: '500px', maxWidth: '800px' }}>
                        <Image
                            src="/Images/soviet-flags-1.png"
                            alt="Collection of national flags"
                            width={1100}
                            height={650}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}