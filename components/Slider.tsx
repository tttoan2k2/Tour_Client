"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MapPin, Search } from "lucide-react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter } from "next/navigation";

const Slider = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
    const [date, setDate] = React.useState<Date>();
    const [query, setQuery] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    console.log(pathname);

    return (
        <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex ">
                <div className="flex-none w-full h-[600px]">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex-none w-full h-[600px]">
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex-none w-full h-[600px]">
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            <div className=" absolute inset-0 bg-black/45"></div>

            <div className="absolute top-[25%] left-[250px] z-20 flex items-center justify-center flex-col gap-10">
                <div className="text-white flex flex-col items-center justify-center">
                    <h1 className="text-[60px] font-semibold">
                        Bắt đầu hành trình của bạn
                    </h1>
                    <p className="text-[25px]">
                        Khám phá những Tour du lịch tuyệt vời với giá ưu đãi
                    </p>
                </div>

                <div className="flex gap-3 py-4 px-8 items-center rounded-full shadow-xl w-[1000px] mx-auto justify-between bg-white ">
                    <div className="flex items-center justify-between gap-5 text-[#9ca3af]">
                        <MapPin className="w-8 h-8" />
                        <div>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="outline-none placeholder:text-[18px] font-medium placeholder:text-black text-black text-[18px]"
                                placeholder="Điểm đến"
                            />
                            <p className="text-[14px]">Bạn muốn tới đâu?</p>
                        </div>
                    </div>

                    <div className=" cursor-pointer">
                        <Popover>
                            <PopoverTrigger asChild>
                                <div className="flex items-center justify-between gap-5">
                                    <CalendarIcon className="w-8 h-8 text-[#9ca3af]" />
                                    <div>
                                        {date ? (
                                            format(date, "PPP")
                                        ) : (
                                            <p className="text-[18px] font-medium text-black">
                                                Ngày khởi hành
                                            </p>
                                        )}
                                        <p className="text-[14px] text-[#9ca3af]">
                                            Bạn muốn khởi hành khi nào?
                                        </p>
                                    </div>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    // disabled={dateInfer.map(
                                    //     (day) =>
                                    // )}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <button
                        className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600"
                        onClick={() => {
                            if (pathname.includes("search")) {
                                router.push(`${query}`, {
                                    scroll: false,
                                });
                            } else {
                                router.push(`search/${query}`, {
                                    scroll: false,
                                });
                            }
                        }}
                    >
                        <Search />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
