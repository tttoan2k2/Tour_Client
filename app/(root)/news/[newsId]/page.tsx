import { getNews, getNewsDetails } from "@/lib/actions";
import Link from "next/link";
import React from "react";

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
    const news = await getNews();
    const newsDetails = await getNewsDetails(params.newsId);
    const paragraphs = newsDetails.description.split(".");
    return (
        <div className="mt-[30px] px-[20px] lg:px-[100px] pb-[80px] ">
            <h1 className="text-[20px] lg:text-[28px] font-medium text-black md:mb-[30px]">
                {newsDetails.title}
            </h1>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                <div>
                    <img
                        src={newsDetails.image}
                        alt=""
                        className="mb-[30px] text-center w-[300px] md:w-[500px] lg:w-max ld:w-max max-w-[800px]"
                    />
                    {paragraphs.map((p: any) => (
                        <p className="text-[20px] max-w-[800px] mb-[18px]">
                            {p}
                        </p>
                    ))}
                </div>

                <div>
                    {news.map((newItem: any) => (
                        <div className="flex items-start justify-center gap-5 border-b-[2px] pb-[10px] md:pb-[20px]">
                            <img
                                src={newItem.image}
                                alt=""
                                className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] object-contain rounded-lg cursor-pointer hover:scale-105 duration-300"
                            />

                            <div>
                                <Link href={`news/${newItem._id}`}>
                                    <h1 className="text-[18px] lg:text-[20px] font-medium text-black md:mb-[10px] cursor-pointer hover:text-orange-500">
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
            </div>
        </div>
    );
};

export default NewsDetails;

export const dynamic = "force-dynamic";
