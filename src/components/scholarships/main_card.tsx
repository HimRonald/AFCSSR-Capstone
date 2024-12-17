import { Badge } from "../ui/badge";
import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface ScholarshipCardProps {
  card: {
    id: string;
    date: string;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export default function MainCard({ card }: ScholarshipCardProps) {
  return (
    <div className="my-16">
      <div className="grid justify-center lg:grid-cols-2 gap-5">
        <div>
          <img
            src={card.imageUrl}
            alt=""
            className="object-cover rounded-xl "
          />
        </div>
        <div className="font-libre">
          <Badge variant="scholarships" className="text-base font-semibold">
            Phnom Penh | {card.date}
          </Badge>
          <div className="flex flex-col mt-5">
            <Link href={`/scholarships/${card.id}`} className="mt-5">
              <h1 className="font-bold text-5xl text-[#027AC6] line-clamp-2">
                {card.title}
              </h1>
            </Link>
            <div
              className="text-[#4F4A5C] font-medium text-2xl mt-5 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: card.description
                  ? card.description
                  : "No content available",
              }}
            ></div>
          </div>
          <div className="flex justify-end mt-5">
            <Button
              variant="read_more"
              size="read_size"
              className="flex-end gap-3"
              asChild
            >
              <Link href={`/scholarships/${card.id}`}>
                Read More <ChevronRightCircle />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
