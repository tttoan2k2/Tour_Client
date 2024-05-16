import Media from "@/components/Media";
import TourDetailsInfo from "@/components/TourDetailsInfo";
import { getTourDetails } from "@/lib/actions";
import { Check, Dot } from "lucide-react";

import React from "react";

const TourDetails = async ({ params }: { params: { tourId: string } }) => {
    const tourDetails = await getTourDetails(params.tourId);

    return (
        <div className="px-[20px] md:px-[100px] pb-[50px]">
            <h1 className=" font-medium text-[28px] my-[30px]">
                Tour du lịch {tourDetails.title}
            </h1>
            <div className="flex items-start justify-center gap-10">
                <Media tourMedia={tourDetails.media} />
                <TourDetailsInfo tourInfo={tourDetails} />
            </div>

            <div>
                <h1 className="font-medium text-[25px]  mb-[20px]">
                    Tour du lịch {tourDetails.title}
                </h1>
                <p className="w-[800px] text-gray-900">
                    {tourDetails.description}
                </p>
            </div>

            <div>
                <h1 className="text-[28px] font-medium mt-[50px] mb-[20px]">
                    Tổng quan
                </h1>
                <div className="flex flex-col gap-3 text-gray-900">
                    {tourDetails.tong_quan.map(
                        (item: string, index: number) => (
                            <div
                                key={index}
                                className="flex gap-3 items-center"
                            >
                                <Check className="text-orange-500" />
                                <p>{item}</p>
                            </div>
                        )
                    )}
                </div>
            </div>

            <div>
                <h1 className="text-[28px] font-medium mt-[50px] mb-[20px]">
                    Lịch trình Tour
                </h1>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {tourDetails.lich_trinh.map(
                        (item: string, index: number) => (
                            <li className="mb-10 ms-4" key={index}>
                                <div className="absolute w-3 h-3 bg-orange-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <p className="text-lg text-gray-900 dark:text-white">
                                    {item}
                                </p>
                            </li>
                        )
                    )}
                </ol>
            </div>

            <div>
                <h1 className="text-[28px] font-medium mt-[50px] mb-[20px]">
                    Quy định dịch vụ
                </h1>
                <div className="flex flex-col gap-3 text-gray-900">
                    {tourDetails.quy_dinh.map((item: string, index: number) => (
                        <div key={index} className="flex gap-3 items-center">
                            <Dot className="text-orange-500" />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
