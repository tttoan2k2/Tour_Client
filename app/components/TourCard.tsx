import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TourCard = ({ tour }: { tour: TourType }) => {
    return (
        <Link
            href={`/tours/${tour._id}`}
            className="bg-white rounded-[12px] shadow-lg"
        >
            <div className="p-5">
                <Image
                    src={tour.media[0]}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-[12px] shadow-lg"
                />
            </div>

            <div className="p-5 flex flex-col justify-between gap-3  text-[16px]">
                <h1 className="text-[20px] font-medium text-black max-w-[300px]">
                    {tour.title}
                </h1>
                <p className=" line-clamp-3 text-gray-500">
                    {tour.description}
                </p>
                <p>Điểm khởi hành: {tour.diem_khoi_hanh}</p>
                <div className="flex gap-2 items-center pb-3">
                    <Calendar size={18} />
                    <p>Bắt đầu từ: {tour.thoi_gian[0]}</p>
                </div>
                <div className="border-t-[1px] border-[#ccc] pt-5 flex items-center justify-between">
                    <div>
                        <p className="">Giá từ</p>
                        <p className="font-semibold text-orange-500 text-[20px]">
                            {tour.price} đ
                        </p>
                    </div>
                    <div className="flex items-center gap-3 text-[14px] font-semibold text-black">
                        <p>Khám phá ngay</p>
                        <ArrowRight
                            size={16}
                            className=" text-orange-500 animate-bounce"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TourCard;
