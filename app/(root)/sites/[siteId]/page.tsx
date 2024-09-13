import TourCard from "@/components/TourCard";
import { getSiteDetails, getTours } from "@/lib/actions";
import Image from "next/image";
import React from "react";

const SiteDetails = async ({ params }: { params: { siteId: string } }) => {
    const siteDetails = await getSiteDetails(params.siteId);

    return (
        <div className=" px-[20px] lg:px-[100px] py-[40px] ">
            <p className="text-[50px] font-bold text-center mb-[30px]">
                {siteDetails.title}
            </p>

            <Image
                src={siteDetails.image}
                width={1500}
                height={1000}
                alt="collection"
                className="w-full h-[400px] object-cover rounded-xl"
            />

            <p className="text-[28px] font-semibold mt-[50px] mb-[10px]">
                Giới thiệu về du lịch {siteDetails.title}
            </p>

            <p className="text-[18px] text-gray-600 ">
                {siteDetails.description}
            </p>
            <p className="text-[28px] font-semibold mt-[50px] ">
                Các Tour du lịch ở {siteDetails.title}
            </p>
            <p className="text-[18px] text-gray-600 mb-[20px]">
                Hiện nay chúng tôi có {siteDetails.tours.length} ở{" "}
                {siteDetails.title} với đa dạng điểm đến
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[20px]">
                {siteDetails.tours.map((tour: TourType) => (
                    <TourCard key={tour._id} tour={tour} />
                ))}
            </div>
        </div>
    );
};

export default SiteDetails;

export const dynamic = "force-dynamic";
