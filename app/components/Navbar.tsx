"use client"
import { UserButton } from "@clerk/nextjs";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [dropMenu, setDropMenu] = useState(false)
    console.log(dropMenu)
    return (
        <div className="flex justify-between items-center p-5">

            <Link href="/">
                <h1 className="text-[50px]">Tour </h1>
            </Link>

            <ul className="flex justify-center gap-5 max-md:hidden">
                <Link href="/home">
                    <li className="flex  justify-center items-center gap-3 text-[20px]" >
                        <Home />home
                    </li>
                </Link>

                <Link href="/tag">
                    <li className="flex  justify-center items-center gap-3 text-[20px]" >
                        <Home />tag
                    </li>
                </Link>

                <Link href="/name">
                    <li className="flex  justify-center items-center gap-3 text-[20px]" >
                        <Home />na
                    </li>
                </Link>
            </ul>
            <div className="flex items-center justify-center gap-4 border-[1px] p-3 rounded-[40px] shadow-md relative">
                <UserButton />
                <Menu onClick={() => setDropMenu(!dropMenu)} />
                {dropMenu && (
                    <ul className=" absolute top-[60px] left-[-30px] shadow-md bg-white p-5 border-[1px] rounded-lg flex flex-col items-start justify-start gap-3">
                        <Link href="/home">
                            <li className="flex  justify-center items-center gap-3 text-[20px]" >
                                <Home />home
                            </li>
                        </Link>

                        <Link href="/tag">
                            <li className="flex  justify-center items-center gap-3 text-[20px]" >
                                <Home />tag
                            </li>
                        </Link>

                        <Link href="/name">
                            <li className="flex  justify-center items-center gap-3 text-[20px]" >
                                <Home />na
                            </li>
                        </Link>
                    </ul>)}
            </div>

        </div>);
};

export default Navbar;
