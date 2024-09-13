import FilterTour from "@/components/FilterTour";
import TourCard from "@/components/TourCard";
import { getTours } from "@/lib/actions";

const Tours = async () => {
    const tours = await getTours();

    return (
        <div className="  px-[20px] lg:px-[100px] bg-[#F9F4F0] pb-[80px]">
            <div className="flex flex-col  pt-[30px]">
                <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold ">
                    Các Tour hiện có
                </h1>
                <p className="mb-[30px] text-[16px] md:text-[18px] text-gray-500">
                    Những địa điểm du lịch nổi tiếng với mức giá phải chăng
                </p>
            </div>

            <FilterTour />
        </div>
    );
};

export const dynamic = "force-dynamic";

export default Tours;
