import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Skeleton } from "../ui/skeleton";
import { ChevronRightCircle } from "lucide-react";

interface NewsCardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  date,
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card className="flex flex-col bg-[#027AC6] font-libre shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
      <img
        src={imageUrl}
        alt=""
        className="object-cover w-full h-52 rounded-t-xl"
      />
      <CardContent className="p-4 flex flex-col justify-between flex-1">
        <div>
          <Badge variant="news_card" className="mb-3">
            {date}
          </Badge>
          <h3 className="text-white text-2xl mb-2">{title}</h3>
          <div
            className="news-content line-clamp-3 text-white"
            dangerouslySetInnerHTML={{
              __html: description ? description : "No content available",
            }}
          ></div>
        </div>
        <Link
          href={`/News&Events/${id}`}
          className="mt-4 inline-flex items-center justify-end gap-2 text-white"
        >
          Read More
          <ChevronRightCircle />
        </Link>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
