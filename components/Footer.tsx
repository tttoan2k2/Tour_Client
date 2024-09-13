import Image from "next/image";
import Logo from "../public/logo.svg";
import Google from "../public/google.jpg";
import AppStore from "../public/appstore.jpg";
import { Handshake } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className=" bg-orange-500 mb-[80px] px-[20px] lg:px-[100px] w-full py-3 lg:py-10 text-white">
            <div className="flex md:flex-row flex-col gap-5 justify-between">
                <div>
                    <Image src={Logo} alt="logo" className="mb-5" />
                    <div className="flex items-center justify-center gap-5 bg-orange-400 p-5 rounded-lg cursor-pointer hover:bg-orange-300">
                        <Handshake />
                        <p>Hợp tác với chúng tôi</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-5">
                        <h2 className=" font-medium text-[18px] ">
                            Tải ứng dụng trên
                        </h2>
                        <Image
                            src={Google}
                            alt=""
                            width={100}
                            height={100}
                            className=" rounded-lg"
                        />
                        <Image
                            src={AppStore}
                            alt=""
                            width={100}
                            height={100}
                            className=" rounded-lg"
                        />
                    </div>
                </div>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <div>
                        <h2 className=" font-medium text-[18px] mb-4">
                            Về chúng tôi
                        </h2>
                        <ul className="flex flex-col gap-3">
                            <Link href="">
                                <li>Cách đặt chỗ</li>
                            </Link>
                            <Link href="">
                                <li>Liên hệ với chúng tôi</li>
                            </Link>
                            <Link href="">
                                <li>Trợ giúp</li>
                            </Link>
                            <Link href="">
                                <li>Tuyển dụng</li>
                            </Link>
                            <Link href="">
                                <li>Về chúng tôi</li>
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className=" font-medium text-[18px] mb-4">
                            Sản phẩm
                        </h2>
                        <ul className="flex flex-col gap-3">
                            <Link href="">
                                <li>Khách sạn</li>
                            </Link>
                            <Link href="">
                                <li>Vé máy bay</li>
                            </Link>
                            <Link href="">
                                <li>Vé xe khách</li>
                            </Link>
                            <Link href="">
                                <li>Đưa đón sân bay</li>
                            </Link>
                            <Link href="">
                                <li>Car Rental</li>
                            </Link>
                            <Link href="">
                                <li>Xperience</li>
                            </Link>
                            <Link href="">
                                <li>Cruises</li>
                            </Link>
                            <Link href="">
                                <li>Biệt thự</li>
                            </Link>
                            <Link href="">
                                <li>Căn hộ</li>
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className=" font-medium text-[18px] mb-4">
                            Theo dõi chúng tôi trên
                        </h2>
                        <ul className="flex flex-col gap-3">
                            <Link href="">
                                <li>Facebook</li>
                            </Link>
                            <Link href="">
                                <li>Instagram</li>
                            </Link>
                            <Link href="">
                                <li>TikTok</li>
                            </Link>
                            <Link href="">
                                <li>Youtube</li>
                            </Link>
                            <Link href="">
                                <li>Telegram</li>
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className=" font-medium text-[18px] mb-4">Khác</h2>
                        <ul className="flex flex-col gap-3">
                            <Link href="">
                                <li>Chính sách & Quyền riêng tư</li>
                            </Link>
                            <Link href="">
                                <li>Điều khoản & Điều kiện</li>
                            </Link>
                            <Link href="">
                                <li>Quy chế hoạt động</li>
                            </Link>
                            <Link href="">
                                <li>Đăng kí nơi nghỉ của bạn</li>
                            </Link>
                            <Link href="">
                                <li>Khu vực báo chí</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-white py-5 mt-10">
                <p className="text-center">
                    Copyright © 2024 Tour. All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
