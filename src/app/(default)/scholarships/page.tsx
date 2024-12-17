"use client";

import useFetchScholarships from "@/firebase/firestore/scholarships/fetchScholarships";

import TitleBar from "@/components/ui/title_bar";
import { Skeleton } from "@/components/ui/skeleton";
import MainCard from "@/components/scholarships/main_card";
import ScholarshipCardList from "@/components/scholarships/scholarship_cardList";

interface ScholarshipItems {
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
  const { data: scholarships, loading } = useFetchScholarships();
  const scholarshipData: ScholarshipItems[] = scholarships || [];

  const sortedScholarshipData = scholarshipData.sort((a, b) => {
    const dateA = new Date(
      a.createdAt.seconds * 1000 + a.createdAt.nanoseconds / 1000000
    );
    const dateB = new Date(
      b.createdAt.seconds * 1000 + b.createdAt.nanoseconds / 1000000
    );
    return dateB.getTime() - dateA.getTime();
  });

  const latestScholarship = sortedScholarshipData[0];
  const latestScholarshipCard = latestScholarship
    ? {
        id: latestScholarship.id,
        date: new Date(
          latestScholarship.createdAt.seconds * 1000 +
            latestScholarship.createdAt.nanoseconds / 1000000
        ).toLocaleDateString(),
        title: latestScholarship.title,
        description: latestScholarship.content,
        imageUrl: latestScholarship.thumbnail,
      }
    : null;

  const scholarshipCards = sortedScholarshipData.slice(1).map((item) => {
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

  return (
    <>
      <TitleBar title_bar="ACSSR SCHOLARSHIPS" />
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
            {/* {latestScholarshipCard && (
              <div>
                <MainCard card={latestScholarshipCard} />
              </div>
            )} */}
            {latestScholarshipCard ? (
              <div>
                <MainCard card={latestScholarshipCard} />
              </div>
            ) : (
              <p className="text-center text-gray-500 my-10">
                No scholarships found.
              </p>
            )}
          </div>
        )}

        {scholarshipCards.length > 0 && (
          <>
            <h3 className="font-libre text-[#027AC6] text-4xl mb-8">
              Recent Scholarships
            </h3>
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
              <ScholarshipCardList cards={scholarshipCards} />
            )}
          </>
        )}
      </div>
    </>
  );
}
