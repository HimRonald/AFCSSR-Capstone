import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { CircleCheckBig } from "lucide-react"
export default function LandingMembers(){
    return(
        <div className="bg-white py-12 w-full">
            <div className="container px-4">
                <div className="space-y-4 text-center font-libre mb-8">
                    <h2 className="text-5xl font-bold text-[#027AC6]">Join Our Alumni Association</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Connect with fellow alumni, access exclusive benefits, and support your alma mater.
                    </p>
                </div> 
                <div className="grid justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-5 ">
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                        <div className="row-span-3 w-full h-full">
                            <img src="/Images/lay2.png" alt="" className="h-full w-full object-cover rounded-xl" />
                        </div>
                        <div className="col-span-1 w-full h-full">
                            <img src="/Images/lay3.png" alt="" className="h-full w-full object-cover rounded-xl" />
                        </div>
                        <div className=" row-span-2 w-full h-full">
                            <img src="/Images/lay2.png" alt="" className="w-full h-ful object-cover rounded-xl"/>
                        </div>
                    </div>
                    <div className="grid justify-start">
                        <div className="text-[#4F4A5C] mb-8">
                            <h2 className=" text-4xl font-bold mb-8 text-[#027AC6] font-libre">Why Become a Member?</h2>
                            <p className=" text-xl mb-8 font-libre">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis beatae explicabo aliquam. Suscipit sequi asperiores non minima ex. Hic, sint architecto ipsam exercitationem, at dicta amet nostrum sunt modi sequi molestiae asperiores.</p>
                            <div className="h-[1px] w-full bg-[#4F4A5C]"></div>
                            <div className="grid gap-5 text-2xl font-semibold my-10 font-libre">
                                <p className="flex gap-3">
                                <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Dynamic reports and dashboards
                                </p>
                                <p className="flex gap-3">
                                <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Templates for everyone
                                </p>
                                <p className="flex gap-3">
                                <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Development workflow
                                </p>
                                <p className="flex gap-3">
                                <CircleCheckBig color="#027AC6" className="w-[36px] h-[36px]" /> Limitless Business automation
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