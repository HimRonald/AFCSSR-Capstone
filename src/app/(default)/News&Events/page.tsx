"use client";

import useFetchNews from "@/firebase/firestore/news/fetchNews";

import TitleBar from "@/components/ui/title_bar";
import { Skeleton } from "@/components/ui/skeleton";
import MainCard from "@/components/News&Events/main_card";
import NewsCardList from "@/components/News&Events/news_cardList";
import EventsCard from "@/components/News&Events/events_card";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  status: string;
  thumbnailName: string;
  thumbnail: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

export default function Page() {
  const { data: news, loading } = useFetchNews();
  const newsData: NewsItem[] = news || [];
  console.log("loading", loading);

  //   const newsCards = newsData.map((item) => {
  //     const date = new Date(
  //       item.createdAt.seconds * 1000 + item.createdAt.nanoseconds / 1000000
  //     );
  //     return {
  //       id: item.id,
  //       date: date.toLocaleDateString(),
  //       title: item.title,
  //       description: item.content,
  //       imageUrl: item.thumbnail,
  //     };
  //   });

  const sortedNewsData = newsData.sort((a, b) => {
    const dateA = new Date(
      a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1000000
    );
    const dateB = new Date(
      b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1000000
    );
    return dateB.getTime() - dateA.getTime();
  });

  const latestNews = sortedNewsData[0];
  const latestNewsCard = latestNews
    ? {
        id: latestNews.id,
        date: new Date(
          latestNews.createdAt.seconds * 1000 +
            latestNews.createdAt.nanoseconds / 1000000
        ).toLocaleDateString(),
        title: latestNews.title,
        description: latestNews.content,
        imageUrl: latestNews.thumbnail,
      }
    : null;

  const newsCards = sortedNewsData.slice(1).map((item) => {
    const date = new Date(
      item.createdAt.seconds * 1000 + item.createdAt.nanoseconds / 1000000
    );
    return {
      id: item.id,
      date: date.toLocaleDateString(),
      title: item.title,
      description: item.content,
      imageUrl: item.thumbnail,
    };
  });

  console.log("latest news card", newsCards);

  // const newsCards = [
  //     {
  //         id: "1",
  //         date: "June 1, 2024",
  //         title: "Exciting New Feature Release",
  //         description: "Purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a. Ac orci phasellus egestas tellus.",
  //         imageUrl: "/Images/newsPic.png"
  //     },
  //     {
  //         id: "2",
  //         date: "June 2, 2024",
  //         title: "Company Milestone Achieved",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  //         imageUrl: "/Images/newsPic.png"
  //     },
  //     {
  //         id: "3",
  //         date: "June 3, 2024",
  //         title: "New Partnership Announcement",
  //         description: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  //         imageUrl: "/Images/newsPic.png"
  //     },
  //     {
  //         id: "4",
  //         date: "June 4, 2024",
  //         title: "Upcoming Event",
  //         description: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  //         imageUrl: "/Images/newsPic.png"
  //     },
  //     {
  //         id: "5",
  //         date: "June 5, 2024",
  //         title: "Product Update",
  //         description: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",
  //         imageUrl: "/Images/newsPic.png"
  //     },
  //     {
  //         id: "6",
  //         date: "June 6, 2024",
  //         title: "Team Expansion",
  //         description: "In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
  //         imageUrl: "/Images/newsPic.png"
  //     }
  // ];

  return (
    <>
      <TitleBar title_bar="ACFSSR NEWS" />
      <div className="mx-auto container px-10">
        {loading ? (
          <div className="grid lg:grid-cols-2 my-16">
            <div className="h-[433px] flex gap-y-4">
              <Skeleton className="w-full h-full bg-gray-200 rounded-xl" />
            </div>

            <div className="flex flex-col gap-y-4 mx-5">
              <Skeleton className="w-1/3 h-[50px] bg-gray-200 rounded-full" />
              <div className="mt-5 flex flex-col gap-y-2">
                <Skeleton className="w-full h-[40px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/2 h-[40px] bg-gray-200 rounded-lg" />
              </div>
              <div className="mt-5 flex flex-col gap-y-2">
                <Skeleton className="w-full h-[25px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-3/4 h-[25px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-2/3 h-[25px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex justify-end">
                <Skeleton className="w-1/6 h-[20px] bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            {latestNewsCard && (
              <div>
                <MainCard card={latestNewsCard} />
              </div>
            )}
          </div>
        )}

        <h3 className="font-libre text-[#027AC6] text-4xl mb-8">Recent News</h3>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
            <div className="w-[430px] flex flex-col gap-y-4">
              <Skeleton className="w-full h-[208px] bg-gray-200 rounded-xl" />
              <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-full" />

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[30px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-2/3 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-2/3 h-[20px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex justify-end">
                <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-full" />
              </div>
            </div>

            <div className="w-[430px] flex flex-col gap-y-4">
              <Skeleton className="w-full h-[208px] bg-gray-200 rounded-xl" />
              <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-full" />

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[30px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-2/3 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-2/3 h-[20px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex justify-end">
                <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-full" />
              </div>
            </div>

            <div className="w-[430px] flex flex-col gap-y-4">
              <Skeleton className="w-full h-[208px] bg-gray-200 rounded-xl" />
              <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-full" />

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[30px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex flex-col gap-y-2">
                <Skeleton className="w-full h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-2/3 h-[20px] bg-gray-200 rounded-lg" />
                <Skeleton className="w-2/3 h-[20px] bg-gray-200 rounded-lg" />
              </div>

              <div className="flex justify-end">
                <Skeleton className="w-1/4 h-[30px] bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        ) : (
          <NewsCardList cards={newsCards} />
        )}
        {/* <NewsCardList cards={newsCards} /> */}
      </div>
      
      <TitleBar title_bar="ACFSSR EVENTS" />
      <div className="bg-[#027AC6]">
        <div className="mx-auto container px-10">
          <EventsCard />
        </div>
      </div>
    </>
  );
}
