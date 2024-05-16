"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import {
    Calendar as CalendarIcon,
    CircleMinus,
    CirclePlus,
    UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const TourDetailsInfo = ({ tourInfo }: { tourInfo: TourType }) => {
    const { user } = useUser();
    const router = useRouter();
    const [date, setDate] = React.useState<Date>();

    const [adultQuantity, setAdultQuantity] = useState<number>(0);
    const [adultPrice, setAdultPrice] = useState<number>(0);
    const [childrenQuantity, setChildrenQuantity] = useState<number>(0);
    const [childrenPrice, setChildrenPrice] = useState<number>(0);
    const [infantQuantity, setInfantQuantity] = useState<number>(0);
    const [infantPrice, setInfantPrice] = useState<number>(0);

    const dateInfer = tourInfo.thoi_gian.map((item) => {
        const [day, month, year] = item.split("/").map(Number);
        return new Date(year, month - 1, day);
    });

    const customer = {
        clerkId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
        name: user?.fullName,
    };

    const handleCheckout = async () => {
        try {
            if (!user) {
                router.push("sign-in");
            } else {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            tourItem: {
                                title: tourInfo.title,
                                _id: tourInfo._id,
                                tour_date: date,
                                diem_khoi_hanh: tourInfo.diem_khoi_hanh,
                                adultPrice: adultPrice,
                                adultQuantity: adultQuantity,
                                childrenPrice: childrenPrice,
                                childrenQuantity: childrenQuantity,
                                infantPrice: infantPrice,
                                infantQuantity: infantQuantity,
                                total_price:
                                    adultPrice + childrenPrice + infantPrice,
                                total_quantity:
                                    adultQuantity +
                                    childrenQuantity +
                                    infantQuantity,
                            },
                            customer,
                        }),
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                    }
                );

                const data = await res.json();
                window.location.href = data.url;
                console.log(data);
            }
        } catch (err) {
            console.log("Checkout", err);
        }
    };

    return (
        <div className="border-[1px] p-8 rounded-lg w-[420px] shadow-lg">
            <p className="text-[30px] font-bold mb-5">
                {tourInfo.price}đ /{" "}
                <i className="text-[16px] font-normal">người</i>
            </p>
            <div className="flex gap-2 mb-3">
                <p className="font-semibold">Khởi hành từ: </p>
                <p>{tourInfo.diem_khoi_hanh}</p>
            </div>
            <div className="flex gap-2">
                <p className="font-semibold">Chủ đề: </p>
                <p>{tourInfo.category}</p>
            </div>
            <div className="my-[20px]">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? (
                                format(date, "PPP")
                            ) : (
                                <span>Ngày khởi hành</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            modifiers={{ style: dateInfer }}
                            modifiersStyles={{
                                style: {
                                    backgroundColor: "orange",
                                    borderRadius: "50%",
                                },
                                disabled: { fontSize: "85%" },
                            }}
                            // disabled={dateInfer.map(
                            //     (day) =>
                            // )}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                adultQuantity +
                                    childrenQuantity +
                                    infantQuantity ===
                                    0 && "text-muted-foreground"
                            )}
                        >
                            <UserPlus className="mr-2 h-4 w-4" />

                            <span>
                                Số hành khách:{" "}
                                {adultQuantity +
                                    childrenQuantity +
                                    infantQuantity}
                            </span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[350px] p-5 flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-[16px] font-medium">
                                    Người lớn
                                </p>
                                <p className="text-[13px] text-muted-foreground">
                                    Từ 13 tuổi trở lên
                                </p>
                            </div>
                            <div className="flex items-center justify-between gap-5 text-[20px]">
                                <button
                                    className=" cursor-pointer text-[#4a4949] hover:text-black disabled:text-[#ccc]"
                                    onClick={() => {
                                        adultQuantity > 0 &&
                                            setAdultQuantity(adultQuantity - 1);
                                        setAdultPrice(
                                            tourInfo.price * (adultQuantity - 1)
                                        );
                                    }}
                                    disabled={adultQuantity === 0}
                                >
                                    <CircleMinus />
                                </button>
                                <p>{adultQuantity}</p>
                                <CirclePlus
                                    className=" cursor-pointer text-[#4a4949] hover:text-black"
                                    onClick={() => {
                                        setAdultQuantity(adultQuantity + 1);
                                        setAdultPrice(
                                            tourInfo.price * (adultQuantity + 1)
                                        );
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-[16px] font-medium">
                                    Trẻ em
                                </p>
                                <p className="text-[13px] text-muted-foreground">
                                    Từ 2 đến 12 tuổi
                                </p>
                            </div>
                            <div className="flex items-center justify-between gap-5 text-[20px]">
                                <button
                                    className=" cursor-pointer text-[#4a4949] hover:text-black disabled:text-[#ccc]"
                                    onClick={() => {
                                        childrenQuantity > 0 &&
                                            setChildrenQuantity(
                                                childrenQuantity - 1
                                            );
                                        setChildrenPrice(
                                            tourInfo.price *
                                                0.9 *
                                                (childrenQuantity - 1)
                                        );
                                    }}
                                    disabled={childrenQuantity === 0}
                                >
                                    <CircleMinus />
                                </button>

                                <p>{childrenQuantity}</p>

                                <CirclePlus
                                    className=" cursor-pointer text-[#4a4949] hover:text-black"
                                    onClick={() => {
                                        setChildrenQuantity(
                                            childrenQuantity + 1
                                        );
                                        setChildrenPrice(
                                            tourInfo.price *
                                                0.9 *
                                                (childrenQuantity + 1)
                                        );
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-[16px] font-medium">Em bé</p>
                                <p className="text-[13px] text-muted-foreground">
                                    Từ 2 tuổi trở xuống
                                </p>
                            </div>
                            <div className="flex items-center justify-between gap-5 text-[20px]">
                                <button
                                    className=" cursor-pointer text-[#4a4949] hover:text-black disabled:text-[#ccc]"
                                    onClick={() => {
                                        infantQuantity > 0 &&
                                            setInfantQuantity(
                                                infantQuantity - 1
                                            );
                                        setInfantPrice(
                                            tourInfo.price *
                                                0.5 *
                                                (infantQuantity - 1)
                                        );
                                    }}
                                    disabled={infantQuantity === 0}
                                >
                                    <CircleMinus />
                                </button>

                                <p>{infantQuantity}</p>
                                <CirclePlus
                                    className=" cursor-pointer text-[#4a4949] hover:text-black"
                                    onClick={() => {
                                        setInfantQuantity(infantQuantity + 1);
                                        setInfantPrice(
                                            tourInfo.price *
                                                0.5 *
                                                (infantQuantity + 1)
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="mt-[30px] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        <p>Vé người lớn x </p>
                        <p>{adultQuantity}</p>
                    </div>
                    <p>{adultPrice}đ</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        <p>Vé trẻ em x </p>
                        <p>{childrenQuantity}</p>
                    </div>
                    <p>{childrenPrice}đ</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        <p>Vé em bé x </p>
                        <p>{infantQuantity}</p>
                    </div>
                    <p>{infantPrice}đ</p>
                </div>
            </div>

            <div className="border-t-[1px] flex items-center justify-between mt-[30px] pt-[20px] text-[20px] font-medium">
                <p>Tổng: </p>
                <p>{adultPrice + childrenPrice + infantPrice}đ</p>
            </div>

            <Button
                className="w-full mt-[30px] bg-orange-500 text-[18px]"
                onClick={handleCheckout}
            >
                Đặt ngay
            </Button>
        </div>
    );
};

export default TourDetailsInfo;
