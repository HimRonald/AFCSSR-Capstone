import { Badge } from "../ui/badge"
import { Clock, ChevronRightCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function MainCard(){
    return(
        <div className="my-16 mx-auto container">
            <div className="grid justify-center lg:grid-cols-2 gap-5">
                <div>
                    <img src="/Images/newsPic.png" alt="" className="object-cover rounded-xl " />
                </div>
                <div className="font-libre">
                    <Badge variant='news' className="text-base font-semibold">Phnom Penh | 32 February 2024</Badge>
                    <div className="flex flex-col mt-5">
                        <span className="flex items-center text-[#4F4A5C] gap-2 font-bold">3 minutes read<Clock size={20} color='#4F4A5C'/> </span>
                        <Link href='#' className="mt-5">
                            <h1 className="font-bold text-5xl text-[#027AC6]">AFCSSR Meeting with Embassy</h1>
                        </Link>
                        <p className="text-[#4F4A5C] font-medium text-2xl mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, eveniet.</p>
                    </div>
                    <div className="flex justify-end mt-5">
                    <Button variant='read_more' size='read_size' className="flex-end gap-3" asChild>
                        <Link href='#'>Read More <ChevronRightCircle/> </Link>
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}