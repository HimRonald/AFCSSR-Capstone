import { Button } from "../ui/button"
import Link from "next/link"
export default function LandingNews(){
    return(
        <div className="bg-white py-10 w-full">
            <div className="container mx-auto grid  ">
                <div className=" text-[#027AC6] font-libre flex justify-between">
                    <h1 className=" text-4xl font-base">Recent News</h1>
                    <Button variant='link' asChild>
                        <Link href='#'>See All</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}