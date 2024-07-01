"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
export default function LandingEvents(){
    return(
        <>
        <div className="bg-[#027AC6] py-10">
            <div className="container mx-auto px-8 ">
                <div className="flex justify-items-center items-center">
                    <h1 className=" text-white font-base font-libre text-4xl w-[380px]">Upcoming Events</h1>
                    <div className="w-full h-1 bg-white "></div>
                </div>
                <div>
                    <div className="flex items-center gap-9 flex-row justify-center my-5">
                        <div className="text-[#F9EB1E] font-libre items-center flex flex-col justify-center">
                            <p className="text-3xl font-bold">30</p>
                            <p className="text-base">MAY</p>
                        </div>
                        <div className=" w-[2px] h-[123px] bg-white"></div>
                        <div className="text-white">
                            <h1 className=" text-3xl font-libre mb-4 ">Lorem, ipsum dolor</h1>
                            <p className=" text-sm w-[780px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                        <Image src='/Images/test.png' alt="test" width={243} height={145} className="rounded-xl"></Image>
                    </div>
                    <div className="bg-white w-full h-[1px]"></div>
                </div>
                <div>
                    <div className="flex items-center gap-9 flex-row justify-center my-5">
                        <div className="text-[#F9EB1E] font-libre items-center flex flex-col justify-center">
                            <p className="text-3xl font-bold">30</p>
                            <p className="text-base">MAY</p>
                        </div>
                        <div className=" w-[2px] h-[123px] bg-white"></div>
                        <div className="text-white">
                            <h1 className=" text-3xl font-libre mb-4 ">Lorem, ipsum dolor</h1>
                            <p className=" text-sm w-[780px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                        <Image src='/Images/test.png' alt="test" width={243} height={145} className="rounded-xl"></Image>
                    </div>
                    <div className="bg-white w-full h-[1px]"></div>
                </div>
                <div>
                    <div className="flex items-center gap-9 flex-row justify-center my-5">
                        <div className="text-[#F9EB1E] font-libre items-center flex flex-col justify-center">
                            <p className="text-3xl font-bold">30</p>
                            <p className="text-base">MAY</p>
                        </div>
                        <div className=" w-[2px] h-[123px] bg-white"></div>
                        <div className="text-white">
                            <h1 className=" text-3xl font-libre mb-4 ">Lorem, ipsum dolor</h1>
                            <p className=" text-sm w-[780px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                        <Image src='/Images/test.png' alt="test" width={243} height={145} className="rounded-xl shadow"></Image>
                    </div>
                    <div className="bg-white w-full h-[1px]"></div>
                </div>
                <div className="flex justify-end">
                <Button variant='link' className="text-[#F9EB1E] font-libre" asChild>
                    <Link href="/News&Events">View All</Link>
                </Button>
                </div>
            </div>
        </div>
        </>
    )
}