import Slider from "@/components/Slider";
import TourCard from "@/components/TourCard";
import { getSearchedTours } from "@/lib/actions";

const SearchPage = async ({ params }: { params: { query: string } }) => {
    const searchedTours = await getSearchedTours(params.query);

    const decodedQuery = decodeURIComponent(params.query);

    return (
        <div className="">
            <Slider />
            <div className="px-[20px] md:px-[100px] py-[50px]">
                <p className="text-[30px] font-semibold mb-[10px]">
                    Kết quả tìm kiếm cho từ khóa "{decodedQuery}"
                </p>
                {!searchedTours ||
                    (searchedTours.length === 0 && (
                        <p className="text-[20px]">
                            Không tìm thấy kết quả phù hợp
                        </p>
                    ))}
                <div className="grid grid-cols-3 gap-5">
                    {searchedTours?.map((tour: any) => (
                        <TourCard key={tour._id} tour={tour} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
