import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { CircleCheckBig } from "lucide-react"
export default function LandingMembers() {
    return (
        <div className="bg-white py-2 w-full"> 
            <div className="container px-4">
                <div className="space-y-4 text-center font-libre mb-4"> 
                    <h2 className="text-5xl font-bold text-[#027AC6]">Join Our Alumni Association</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Connect with fellow alumni, access exclusive benefits, and support.
                    </p>
                </div>
                <div className="grid justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-5 mt-5">
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                        <div className="row-span-3">
                            <img src="/Images/lay2.png" alt="" className="object-cover rounded-xl" />
                        </div>
                        <div className="col-span-1 ">
                            <img src="/Images/lay3.png" alt="" className="object-cover rounded-xl" />
                        </div>
                        <div className=" row-span-2 ">
                            <img src="/Images/lay1.png" alt="" className="object-cover rounded-xl" />
                        </div>
                    </div>
                    <div className="grid justify-start">
                        <div className="text-[#4F4A5C] mb-4"> 
                            <h2 className=" text-4xl font-bold mb-4 text-[#027AC6] font-libre">Why Become a Member?</h2> 
                            <div className="h-[1px] w-full bg-[#4F4A5C]"></div>
                            <div className="grid gap-5 text-2xl font-semibold my-6 font-libre"> 
                                <p className="flex gap-3">
                                    <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Network Opportunities
                                </p>
                                <p className="flex gap-3">
                                    <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Professional Development
                                </p>
                                <p className="flex gap-3">
                                    <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Cultural and Social Events
                                </p>
                                <p className="flex gap-3">
                                    <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Community Support
                                </p>
                            </div>
                            <Button variant="btn_navbar" size="size_nav" asChild>
                                <Link href='/Membership/Benefits'>See Membership Detail</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}