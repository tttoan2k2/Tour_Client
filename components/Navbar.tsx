"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/logo.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const { user } = useUser();
    const pathname = usePathname();
    const [dropMenu, setDropMenu] = useState(false);
    console.log(dropMenu);
    return (
        <div className="sticky top-0 left-0 z-[1000] flex justify-between items-center py-4 px-5 md:px-10 shadow-lg bg-white">
            <Link href="/">
                <Image alt="" src={Logo} />
            </Link>

            <ul className="flex justify-center gap-10 max-md:hidden text-[18px] font-normal">
                <Link
                    href="/"
                    className={`${pathname === "/" && "text-orange-500"}`}
                >
                    <li>Home</li>
                </Link>

                <Link
                    href="/tours"
                    className={`${pathname === "/tours" && "text-orange-500"}`}
                >
                    <li className="hover:text-orange-500">Tours</li>
                </Link>
                <Link
                    href="/blogs"
                    className={`${pathname === "/blogs" && "text-orange-500"}`}
                >
                    <li className="hover:text-orange-500">Blog</li>
                </Link>

                <Link
                    href="/about"
                    className={`${pathname === "/about" && "text-orange-500"}`}
                >
                    <li className="hover:text-orange-500">About us</li>
                </Link>
                <Link
                    href="/contact"
                    className={`${
                        pathname === "/contact" && "text-orange-500"
                    }`}
                >
                    <li className="hover:text-orange-500">Contact</li>
                </Link>
            </ul>
            <div className="flex items-center justify-center gap-4 border-[1px] p-3 rounded-[40px] shadow-md relative">
                {user ? (
                    <UserButton afterSignOutUrl="/sign-in" />
                ) : (
                    <Link href="/sign-in">
                        <p className="">Sign in</p>
                    </Link>
                )}
                <Menu
                    onClick={() => setDropMenu(!dropMenu)}
                    className="md:hidden"
                />
                {dropMenu && (
                    <ul className=" absolute z-[1000] top-[60px] left-[-90px] shadow-md bg-white p-3 border-[1px] rounded-lg flex flex-col items-start justify-start gap-3 min-w-[180px]">
                        <Link
                            href="/"
                            className={`${
                                pathname === "/" && "text-orange-500"
                            } hover:bg-[#e6dede] w-full rounded-[12px] px-2 py-1 hover:text-orange-500`}
                        >
                            <li className="">Home</li>
                        </Link>

                        <Link
                            href="/tours"
                            className={`${
                                pathname === "/tours" && "text-orange-500"
                            } hover:bg-[#e6dede] w-full rounded-[12px] px-2 py-1 hover:text-orange-500`}
                        >
                            <li className="hover:text-orange-500">Tours</li>
                        </Link>
                        <Link
                            href="/blogs"
                            className={`${
                                pathname === "/blogs" && "text-orange-500"
                            } hover:bg-[#e6dede] w-full rounded-[12px] px-2 py-1 hover:text-orange-500`}
                        >
                            <li className="hover:text-orange-500">Blog</li>
                        </Link>

                        <Link
                            href="/about"
                            className={`${
                                pathname === "/about" && "text-orange-500"
                            } hover:bg-[#e6dede] w-full rounded-[12px] px-2 py-1 hover:text-orange-500`}
                        >
                            <li className="hover:text-orange-500">About us</li>
                        </Link>
                        <Link
                            href="/contact"
                            className={`${
                                pathname === "/contact" && "text-orange-500"
                            } hover:bg-[#e6dede] w-full rounded-[12px] px-2 py-1 hover:text-orange-500`}
                        >
                            <li>Contact</li>
                        </Link>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
