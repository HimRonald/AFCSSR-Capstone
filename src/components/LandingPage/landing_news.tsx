import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
export default function LandingNews(){
    return(
        <div className="bg-white py-10 w-full">
            <div className=" text-[#027AC6] font-libre flex justify-between mx-auto container mb-4">
                <h1 className=" text-4xl font-base">Recent News</h1>
                <Button variant='link' asChild>
                    <Link href='/News&Events'>See All</Link>
                </Button>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-[1fr_1fr] md:gap-8 lg:gap-12">
                <div>
                    <Image src='/Images/test.png' alt="Blog Image" width={800} height={400} className="aspect-[4/2] w-full overflow-hidden rounded-xl object-cover" />
                    <div className="mt-4 space-y-2">
                        <div className="inline-block rounded bg-[#dddcdc] px-3 py-1 text-sm font-libre">
                            20 June, 2024
                        </div>
                        <h2 className=" font-bold font-libre text-2xl text-[#4F4A5C] sm:text-3xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        <p className="text-[#4F4A5C] font-base text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid grid-cols-[180px_1fr] gap-4">
                        <Image src='/Images/test.png' alt="blog news" width={180} height={200} className=" aspect-auto overflow-hidden rounded-xl object-cover" />
                        <div>
                            <div className="inline-block rounded bg-[#dddcdc] px-3 py-1 text-sm font-libre">
                            20 June, 2024
                            </div>
                            <h3 className="mt-2 text-lg font-libre font-bold text-[#4F4A5C]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ad eligendi.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[180px_1fr] gap-4">
                        <Image src='/Images/test.png' alt="blog news" width={180} height={200} className=" aspect-auto overflow-hidden rounded-xl object-cover" />
                        <div>
                            <div className="inline-block rounded bg-[#dddcdc] px-3 py-1 text-sm font-libre">
                            20 June, 2024
                            </div>
                            <h3 className="mt-2 text-lg font-libre font-bold text-[#4F4A5C]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ad eligendi.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[180px_1fr] gap-4">
                        <Image src='/Images/test.png' alt="blog news" width={180} height={200} className=" aspect-auto overflow-hidden rounded-xl object-cover" />
                        <div>
                            <div className="inline-block rounded bg-[#dddcdc] px-3 py-1 text-sm font-libre">
                            20 June, 2024
                            </div>
                            <h3 className="mt-2 text-lg font-libre font-bold text-[#4F4A5C]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ad eligendi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}