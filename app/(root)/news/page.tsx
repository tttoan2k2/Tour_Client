import { getNews } from "@/lib/actions";
import Link from "next/link";

const News = async () => {
    const news = await getNews();

    return (
        <div className=" px-[20px] lg:px-[100px] pb-[80px]">
            <div className="flex flex-col  pt-[30px] border-b-[2px]">
                <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold ">
                    Tin Tức
                </h1>
                <p className="mb-[30px] text-[16px] md:text-[18px] text-gray-500">
                    Những thông tin mới nhất về các Tour và thông tin khuyến mãi
                </p>
            </div>

            {!news || news.length === 0 ? (
                <p>Không có tin tức nào.</p>
            ) : (
                <div className="flex items-center justify-center gap-5 flex-col pt-[30px]">
                    {news.map((newItem: any) => (
                        <div className="flex justify-between gap-5 border-b-[2px] pb-[10px] md:pb-[30px]">
                            <img
                                src={newItem.image}
                                alt=""
                                className="lg:w-[400px] lg:h-[200px] w-[150px] h-[150px] object-cover rounded-lg cursor-pointer hover:scale-105 duration-300"
                            />

                            <div className="w-[800px]">
                                <Link href={`news/${newItem._id}`}>
                                    <h1 className="text-[18px] lg:text-[22px] font-medium text-black md:mb-[10px] cursor-pointer hover:text-orange-500">
                                        {newItem.title}
                                    </h1>
                                </Link>
                                <p className="line-clamp-3 text-gray-500">
                                    {newItem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export const dynamic = "force-dynamic";

export default News;
