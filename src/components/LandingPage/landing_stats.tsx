import Image from "next/image"
import { Button } from "../ui/button"
import CountUp from "./testcountup"
import Link from "next/link"
export default function LandingStats(){
    return(
        <>
        <div className="h-[820px] w-full bg-white flex flex-col items-center justify-center">
            <div className="text-[#4F4A5C] font-libre text-center mx-[290px] border-b-2 border-[#4F4A5C] mb-20">
                <h1 className="text-4xl font-bold">The Association of Former Cambodian Students From Soviet Union and Russia</h1>
                <span className=" text-xl font-medium">Solidarity, Humanity, Cooperation, and Development</span>
                <p></p>
                <Button variant='link' className="mb-8" asChild>
                    <Link href="/AboutUs">Learn More</Link>    
                </Button>
            </div>
            <div>
                {/* Will try to use mapping for this style */}
                <div className="flex gap-24 font-libre">
                    <div className="flex flex-col items-center text-[#027AC6]">
                        <Image alt="Alumni" src='/Images/Alumni.svg' width={140} height={140} className="mb-8"/>
                        <span className="text-5xl"><CountUp from={0} to={1500} /> +</span>
                        <span className="text-xl font-medium">Alumni</span>
                    </div>
                    <div className="flex flex-col items-center text-[#027AC6]">
                        <Image alt="Memeber" src='/Images/Members.svg' width={140} height={140} className="mb-8" />
                        <span className="text-5xl"><CountUp from={0} to={500} /> +</span>
                        <span className="text-xl font-medium">Members</span>
                    </div>
                    <div className="flex flex-col items-center text-[#027AC6]">
                        <Image alt="Events" src='/Images/Events.svg' width={140} height={140} className="mb-8" />
                        <span className="text-5xl"><CountUp from={0} to={10} /> +</span>
                        <span className="text-xl font-medium">Events</span>
                    </div>
                    <div className="flex flex-col items-center text-[#027AC6]">
                        <Image alt="Branches" src='/Images/Branches.svg' width={140} height={140} className="mb-8" />
                        <span className="text-5xl"><CountUp from={0} to={2} /></span>
                        <span className="text-xl font-medium">Branches</span>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}