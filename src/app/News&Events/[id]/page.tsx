"use client";

import { notFound, useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import useFetchNewsDetail from "@/firebase/firestore/news/fetchNewsDetail";

// interface NewsItem {
//   id: string;
//   date: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   fullContent: string;
// }

// const newsItems: NewsItem[] = [
//   {
//     id: "1",
//     date: "June 1, 2024",
//     title: "Exciting New Feature Release",
//     description:
//       "Purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a.",
//     imageUrl: "/Images/newsPic.png",
//     fullContent:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  ",
//   },
//   {
//     id: "2",
//     date: "June 15, 2024",
//     title: "Company Milestone Achieved",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
//     imageUrl: "/Images/newsPic.png",
//     fullContent:
//       "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
//   },
//   {
//     id: "3",
//     date: "July 3, 2024",
//     title: "New Partnership Announcement",
//     description:
//       "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
//     imageUrl: "/Images/newsPic.png",
//     fullContent:
//       "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
//   },
// ];

// function getNewsItem(id: string): NewsItem | undefined {
//   return newsItems.find((item) => item.id === id);
// }

// const SkeletonLine = ({ width }: { width: string }) => (
//   <Skeleton className={`bg-[#E0E0E0] ${width} h-4 my-2`} />
// );

interface NewsItems {
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  title: string;
  content: string;
  thumbnail: string;
}

export default function NewsDetail() {
  const { id } = useParams();
  const { data, loading } = useFetchNewsDetail(id);
  const newsDetail = data as unknown as NewsItems;

  const date = new Date(
    newsDetail?.createdAt?.seconds * 1000 +
      newsDetail?.createdAt?.nanoseconds / 1000000
  );

  if (!newsDetail) {
    notFound();
  }

  return (
    <div className="mx-auto container px-10 py-8">
      {loading ? (
        <div>
          <div className="w-full h-64 mb-6">
            <Skeleton className="h-full bg-gray-200 rounded-xl" />
          </div>

          <div className="w-full flex flex-col gap-y-4">
            <div>
              <Skeleton className="w-1/6 h-[35px] bg-gray-200 rounded-full" />
            </div>

            <div className="flex flex-col gap-y-2">
              <Skeleton className="w-11/12 h-[30px] bg-gray-200 rounded-lg" />
              <Skeleton className="w-2/5 h-[30px] bg-gray-200 rounded-lg" />
            </div>

            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-11/12 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-5/6 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-11/12 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/6 h-[20px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/2 h-[20px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-3/4 h-[20px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-11/12 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/6 h-[20px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-1/6 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/4 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/3 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/4 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/5 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/6 h-[20px] bg-gray-200 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img
            src={newsDetail.thumbnail}
            alt={newsDetail.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <Badge variant="news" className="mb-3">
            {date.toLocaleString()}
          </Badge>
          <h1 className="text-3xl font-bold mb-4 text-[#027AC6]">
            {newsDetail.title}
          </h1>
          <div
            className="prose max-w-none text-lg mb-6"
            dangerouslySetInnerHTML={{
              __html: newsDetail.content
                ? newsDetail.content
                : "No content available",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
