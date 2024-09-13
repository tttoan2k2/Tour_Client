import React from "react";
import { getTours } from "../lib/actions";
import TourCard from "./TourCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TourList = async () => {
    const tours = await getTours();

    const firstSix = tours.slice(0, 6);

    return (
        <div className=" my-[80px] px-[20px] lg:px-[100px] bg-[#F9F4F0] pb-[80px]">
            <div className="flex items-center justify-between">
                <div className="flex flex-col  pt-[30px]">
                    <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold ">
                        Các Tour hiện có
                    </h1>
                    <p className="mb-[30px] text-[16px] md:text-[18px] text-gray-500">
                        Những địa điểm du lịch nổi tiếng với mức giá phải chăng
                    </p>
                </div>
                <Link
                    href="/tours"
                    className="flex items-center justify-center gap-3 p-4 border rounded-[24px] text-gray-500 hover:bg-[#eee6df]"
                >
                    <p className="font-medium">Xem tất cả</p>
                    <ArrowRight />
                </Link>
            </div>

            {!tours || tours.length === 0 ? (
                <p>Không có Tour nào.</p>
            ) : (
                <div className="flex items-start justify-center gap-5 flex-wrap">
                    {firstSix.map((tour: TourType) => (
                        <TourCard key={tour._id} tour={tour} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TourList;
