import React from "react";
import { getSites } from "../lib/actions";

import Link from "next/link";
import Image from "next/image";

const Sites = async () => {
    const sites = await getSites();

    return (
        <div className="my-[80px] px-[20px] md:px-[100px]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[50px] font-bold text-center">Địa Danh</h1>
                <p className="mb-[30px] text-[18px] text-center text-gray-500">
                    Chúng tôi có các Tour ở {sites.length} quốc gia và vùng lãnh
                    thổ trên toàn thế giới.
                </p>
            </div>
            <div className="flex items-center justify-center gap-10">
                {sites.map((site: SiteType) => (
                    <Link
                        className="flex items-center justify-center gap-10"
                        key={site._id}
                        href={`/sites/${site._id}`}
                    >
                        <div className="relative hover:scale-105 duration-200 ease-linear">
                            <Image
                                className="w-[400px] h-[250px] rounded-[20px]  "
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
                ))}
            </div>
        </div>
    );
};

export default Sites;
