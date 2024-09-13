import { Bot } from "lucide-react";
import Sites from "../../components/Sites";
import Slider from "../../components/Slider";
import TourList from "../../components/TourList";

import Link from "next/link";

export default function Home() {
    return (
        <div className="relative">
            <Link href="/chatbot">
                <div className=" fixed bottom-[50px] right-[30px] p-5 rounded-full bg-orange-500 z-50 text-white animate-bounce cursor-pointer hover:bg-orange-400">
                    <Bot />
                </div>
            </Link>

            <Slider />

            <Sites />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <img
                    src="https://luv-booking-fc2fyqtze-blkluvorg.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-features.6cf4c3d4.png&w=1200&q=75"
                    className="w-[600px] lg:w-[736px] h-[450px] object-contain"
                />
                <div className="w-[350px] md:w-[400px]">
                    <p className="text-[25px] md:text-[30px] font-bold">
                        Lợi ích khi đặt Tour của chúng tôi
                    </p>
                    <div className="flex flex-col mt-[20px]">
                        <p className="text-[20px] md:text-[22px] font-semibold">
                            Giá cả phải chăng
                        </p>
                        <p className="text-[16px] md:text-[18px] text-gray-500 mt-[10px]">
                            Chúng tôi tự tin với mức giá đưa ra là thấp nhất
                            trên thị trường, giúp tiết kiệm chi phí cho khách
                            hàng.
                        </p>
                    </div>

                    <div className="flex flex-col mt-[20px]">
                        <p className="text-[20px] md:text-[22px] font-semibold">
                            An toàn
                        </p>
                        <p className="text-[16px] md:text-[18px] text-gray-500 mt-[10px]">
                            Chúng tôi luôn cung cấp các Tour du lịch an toàn và
                            nhiều chính sách bảo hiểm cho khách hàng.
                        </p>
                    </div>

                    <div className="flex flex-col mt-[20px]">
                        <p className="text-[20px] md:text-[22px] font-semibold">
                            Tiện lợi và dễ dàng
                        </p>
                        <p className="text-[16px] md:text-[18px] text-gray-500 mt-[10px]">
                            Bạn có thể dễ dàng đặt Tour yêu thích với thanh toán
                            trực tuyến vô cùng tiện lợi.
                        </p>
                    </div>
                </div>
            </div>
            <TourList />
            <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center gap-10 mb-[80px]">
                <div className="flex flex-col mt-[20px] w-[350px] md:w-[400px]">
                    <p className="text-[25px] md:text-[30px] font-bold">
                        Đặt Tour ngay hôm nay
                    </p>
                    <p className="text-[16px] md:text-[18px] text-gray-500 mt-[30px]">
                        Đặt Tour ngay hôm nay để tận hưởng chuyến du lịch của
                        bạn và hưởng nhiều ưu đãi đặc biệt.
                    </p>
                    <div className="flex mt-[30px] gap-3">
                        <p className="p-1 bg-[#DBEAFE] text-blue-500 w-max rounded-lg">
                            01
                        </p>
                        <p className="text-[16px] md:text-[18px] font-medium ">
                            Giảm ngay 15% cho lần đặt đầu tiên
                        </p>
                    </div>
                    <div className="flex mt-[20px] gap-3">
                        <p className="p-1 bg-[#FEE2E2] text-red-500 w-max rounded-lg">
                            02
                        </p>
                        <p className="text-[16px] md:text-[18px] font-medium ">
                            Giảm ngay 15% cho lần đặt đầu tiên
                        </p>
                    </div>
                </div>

                <img
                    src="https://luv-booking-fc2fyqtze-blkluvorg.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2.d210fce7.png&w=828&q=75"
                    className="w-[600px] lg:w-[736px] h-[450px] object-contain"
                />
            </div>
        </div>
    );
}

export const dynamic = "force-dynamic";
