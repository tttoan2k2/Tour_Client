import Image from "next/image";
import Sapa from "../../../public/sapa-ruong-bac-thang.jpg";
import Family from "../../../public/1-du-lich-gia-dinh.jpg";
import thienNhien from "../../../public/anh-thien-nhien-dep.jpg";
import {
    BadgePercent,
    BookImage,
    Earth,
    Footprints,
    MapPin,
    MapPinned,
    PersonStanding,
    Plane,
    ShieldCheck,
    TicketPercent,
    Umbrella,
} from "lucide-react";
export default function About() {
    return (
        <div>
            <div className="relative">
                <Image
                    className="h-[250px]  object-cover"
                    width={1600}
                    height={200}
                    alt=""
                    src={Sapa}
                />
                <div className=" absolute z-10 w-full h-full  inset-0 bg-black/40">
                    <h1 className="  text-white font-bold text-[50px] text-center p-[90px] ">
                        {" "}
                        About Us
                    </h1>
                </div>
            </div>

            <div className="flex items-center justify-center gap-10 mt-[100px] h-full">
                <Image
                    className="rounded-[50%] h-[300px] w-[300px] object-cover"
                    width={500}
                    height={500}
                    alt=""
                    src={Family}
                />
                <div className="w-[500px]">
                    <h1 className="font-bold text-[40px]">
                        We Help You Planning Your Journey
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <p>
                        {" "}
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>

            <div className="my-[100px] px-5 bg-[#f9f4f0] py-10 ">
                <h1 className="text-center text-[40px] font-bold ">
                    We Make All The Process Easy
                </h1>
                <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-5 ">
                    <div className="flex gap-3 items-center justify-center">
                        <div className=" text-orange-500 rounded-[100%] p-7 bg-white hover:bg-orange-500 hover:text-white  ">
                            <Footprints className=" w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px] ">
                                Best Travel Agent
                            </h1>
                            <p className="w-[300px] text-[#676767] ">
                                The generated Lorem Ipsum is therefore always
                                free from repetition available
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center justify-center">
                        <div className=" text-orange-500 rounded-[100%] p-7 bg-white hover:bg-orange-500 hover:text-white  ">
                            <MapPin className=" w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px] ">
                                Beautiful Places
                            </h1>
                            <p className="w-[300px] text-[#676767] ">
                                The generated Lorem Ipsum is therefore always
                                free from repetition
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center justify-center">
                        <div className=" text-orange-500 rounded-[100%] p-7 bg-white hover:bg-orange-500 hover:text-white  ">
                            <ShieldCheck className=" w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px] ">
                                Trust & Safety
                            </h1>
                            <p className="w-[300px] text-[#676767] ">
                                There are many variations of passages of Lorem
                                Ipsum available you available
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center justify-center">
                        <div className=" text-orange-500 rounded-[100%] p-7 bg-white hover:bg-orange-500 hover:text-white  ">
                            <Umbrella className=" w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px] ">
                                Passionate Travel
                            </h1>
                            <p className="w-[300px] text-[#676767] ">
                                There are many variations of passages of Lorem
                                Ipsum available
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center justify-center">
                        <div className=" text-orange-500 rounded-[100%] p-7 bg-white hover:bg-orange-500 hover:text-white  ">
                            <BadgePercent className=" w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px] ">
                                Best Price Guarantee
                            </h1>
                            <p className="w-[300px] text-[#676767] ">
                                All the Lorem Ipsum generators on the Internet
                                need
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center justify-center">
                        <div className=" text-orange-500 rounded-[100%] p-7 bg-white hover:bg-orange-500 hover:text-white  ">
                            <TicketPercent className=" w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="font-semibold text-[20px] ">
                                Fast Booking
                            </h1>
                            <p className="w-[300px] text-[#676767] ">
                                If you are going to use a passage of Lorem
                                Ipsum, you need
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <Image
                    className="h-[500px] w-[1600px] object-cover"
                    width={1600}
                    height={500}
                    alt=""
                    src={thienNhien}
                />
                <div className=" absolute w-full h-full  inset-0 flex justify-center gap-[250px] px-[100px] mt-[200px]   ">
                    <div className=" flex flex-col items-center text-white">
                        <MapPinned className=" w-[80px] h-[80px] " />
                        <h1 className="text-[50px] font-bold">54</h1>
                        <h1>Destinations</h1>
                    </div>
                    <div className="flex flex-col items-center text-white">
                        <Plane className=" w-[80px] h-[80px]" />
                        <h1 className="text-[50px] font-bold">2045</h1>
                        <h1>Amazing tours</h1>
                    </div>
                    <div className="flex flex-col items-center  text-white">
                        <BookImage className=" w-[80px] h-[80px]" />
                        <h1 className="text-[50px] font-bold">240</h1>
                        <h1>Tour types</h1>
                    </div>
                    <div className="flex flex-col items-center  text-white">
                        <PersonStanding className=" w-[80px] h-[80px]" />
                        <h1 className="text-[50px] font-bold">13000</h1>
                        <h1>Happy customers</h1>
                    </div>
                </div>
            </div>

            <div className="mt-[50px] ">
                <h1 className="text-center text-[40px] font-bold mb-10">
                    {" "}
                    Meet The Team
                </h1>

                <div className="flex justify-center items-center gap-[250px] ">
                    <div className=" flex flex-col items-center justify-center hover:bg-[#eae4e4] p-10 rounded-[12px]">
                        <Image
                            className="rounded-[50%] h-[250px] w-[250px] object-cover"
                            width={1600}
                            height={500}
                            alt=""
                            src={thienNhien}
                        />
                        <div className="">
                            <h1 className=" font-semibold text-[25px] mt-5">
                                Destinations
                            </h1>
                            <p className="text-center text-[20px] text-[#676767]">
                                Chuc vu
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center justify-center  hover:bg-[# hover:bg-[#c7bbbb] p-10 rounded-[12px]] p-10 rounded-[12px]  ">
                        <Image
                            className="rounded-[50%] h-[250px] w-[250px] object-cover"
                            width={1600}
                            height={500}
                            alt=""
                            src={thienNhien}
                        />
                        <div className="">
                            <h1 className=" font-semibold text-[25px] mt-5">
                                Destinations
                            </h1>
                            <p className="text-center text-[20px] text-[#676767]">
                                Chuc vu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
