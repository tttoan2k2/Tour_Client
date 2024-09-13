import React from "react";
import { getSites } from "../lib/actions";

import Link from "next/link";
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Sites = async () => {
    const sites = await getSites();

    return (
        <div className="my-[80px] px-[20px] lg:px-[100px] w-full">
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold text-center">
                    Địa Danh
                </h1>
                <p className="mb-[30px] text-[16px] md:text-[18px] text-center text-gray-500">
                    Chúng tôi có các Tour ở {sites.length} quốc gia và vùng lãnh
                    thổ trên toàn thế giới.
                </p>
            </div>

            <Carousel className="w-full">
                <CarouselContent>
                    {sites.map((site: SiteType) => (
                        <CarouselItem
                            className="basis-1/2 md:basis-1/3"
                            key={site._id}
                        >
                            <Link
                                className="flex items-center justify-center"
                                href={`/sites/${site._id}`}
                            >
                                <div className="relative hover:scale-95 duration-200 overflow-hidden ease-linear">
                                    <Image
                                        className="w-[172px] h-[172px] md:w-[230px] md:h-[270px] lg:w-[400px] lg:h-[250px] rounded-[20px] "
                                        src={site.image}
                                        alt=""
                                        width={300}
                                        height={300}
                                    />
                                    <div className=" absolute inset-0 bg-black/50 rounded-[20px] flex items-center justify-center text-white text-[30px] font-semibold">
                                        <h1>{site.title}</h1>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="md:ml-[35px] lg:ml-[10px]" />
                <CarouselNext className="md:mr-[35px] lg:mr-[10px]" />
            </Carousel>
        </div>
    );
};

export default Sites;
