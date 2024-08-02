import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import Link from "next/link"
import {ChevronRightCircle } from "lucide-react"

interface NewsCardProps {
    date: string;
    title: string;
    description: string;
    imageUrl: string;
}
// export default function NewsCard(){
//     return(
//         <div className="mx-auto container pb-10">
//             <h1 className=" text-4xl font-base text-[#027AC6] font-libre mb-10">Recent News</h1>
//             <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
//                 <Card className="flex flex-col bg-[#027AC6] font-libre">
//                     <img src="/Images/newsPic.png" alt="" className=" object-cover w-full h-52 rounded-t-xl"/>
//                     <div className="p-4 flex flex-col justify-between flex-1">
//                         <div>
//                             <Badge variant='news_card' className="mb-3">June 1, 2024</Badge>
//                             <h3 className="text-white text-2xl mb-2 ">Exciting New Feature Release</h3>
//                             <p className="text-[#D9D9D9]">Purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a. Ac orci phasellus egestas tellus.</p>
//                         </div>
//                         <Link href='#' className="mt-4 inline-flex items-center justify-end gap-2 text-white">Read More<ChevronRightCircle/></Link>
//                     </div>
//                 </Card>
//             </div>
//         </div>
//     )
// }
const NewsCard: React.FC<NewsCardProps> = ({ date, title, description, imageUrl }) => {
    return (
        <Card className="flex flex-col bg-[#027AC6] font-libre">
            <img src={imageUrl} alt="" className="object-cover w-full h-52 rounded-t-xl" />
            <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                    <Badge variant='news_card' className="mb-3">{date}</Badge>
                    <h3 className="text-white text-2xl mb-2">{title}</h3>
                    <p className="text-[#D9D9D9]">{description}</p>
                </div>
                <Link href='#' className="mt-4 inline-flex items-center justify-end gap-2 text-white">Read More<ChevronRightCircle /></Link>
            </div>
        </Card>
    );
}

export default NewsCard;