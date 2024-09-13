"use client";

import Image from "next/image";
import React, { useState } from "react";

const Media = ({ tourMedia }: { tourMedia: string[] }) => {
    const [mainImage, setMainImage] = useState(tourMedia[0]);
    return (
        <div className="flex flex-col gap-3 max-w-[800px]">
            <Image
                src={mainImage}
                width={800}
                height={800}
                alt="product"
                className="w-[350px] h-[300px] md:w-[480px] md:h-[300px] lg:w-[800px] lg:h-[400px] rounded-lg shadow-xl object-cover"
            />
            <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
                {tourMedia.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        height={200}
                        width={200}
                        alt="product"
                        className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
                            mainImage === image ? "border-2 border-black" : ""
                        }`}
                        onClick={() => setMainImage(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Media;
