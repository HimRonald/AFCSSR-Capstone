"use client";

import { notFound, useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import useFetchScholarshipDetail from "@/firebase/firestore/scholarships/fetchScholarshipDetail";

interface ScholarshipItems {
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  title: string;
  content: string;
  thumbnail: string;
}

export default function ScholarshipDetail() {
  const { id } = useParams();
  const { data, loading } = useFetchScholarshipDetail(id);
  const scholarshipDetail = data as unknown as ScholarshipItems;

  const date = new Date(
    scholarshipDetail?.createdAt?.seconds * 1000 +
      scholarshipDetail?.createdAt?.nanoseconds / 1000000
  );

  if (!scholarshipDetail) {
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
            src={scholarshipDetail.thumbnail}
            alt={scholarshipDetail.title}
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <Badge variant="news" className="mb-3">
            {date.toLocaleString()}
          </Badge>
          <h1 className="text-3xl font-bold mb-4 text-[#027AC6]">
            {scholarshipDetail.title}
          </h1>
          <div
            className="prose max-w-none text-lg mb-6"
            dangerouslySetInnerHTML={{
              __html: scholarshipDetail.content
                ? scholarshipDetail.content
                : "No content available",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
