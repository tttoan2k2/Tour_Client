import React from "react";
import { getTours } from "../lib/actions";
import TourCard from "./TourCard";

const TourList = async () => {
    const tours = await getTours();

    return (
        <div className="flex flex-col items-center gap-10 my-[80px] px-[20px] md:px-[100px] bg-[#F9F4F0] pb-[80px]">
            <h1 className="text-[50px] font-bold text-center pt-[50px]">
                Tours
            </h1>
            {!tours || tours.length === 0 ? (
                <p>Không có Tour nào.</p>
            ) : (
                <div className="grid grid-cols-3 gap-5">
                    {tours.map((tour: TourType) => (
                        <TourCard key={tour._id} tour={tour} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TourList;
