"use client"
import { UserButton } from "@clerk/nextjs";
import { Home, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/logo.svg"

const Navbar = () => {
    const [dropMenu, setDropMenu] = useState(false)
    console.log(dropMenu)
    return (
        <div className="flex justify-between items-center p-5">

            <Link href="/">
                <Image alt="" src={Logo}/>
            </Link>

            <ul className="flex justify-center gap-10 max-md:hidden text-[20px] font-medium">
                <Link href="/home">
                    <li >
                        Home
                    </li>
                </Link>

                <Link href="/tours">
                    <li >
                        Tours
                    </li>
                </Link>
                <Link href="/blog">
                    <li >
                        Blog
                    </li>
                </Link>

                <Link href="/about">
                    <li >
                        About us
                    </li>
                </Link>
                <Link href="/contact">
                    <li >
                        Contact
                    </li>
                </Link>
            </ul>
            <div className="flex items-center justify-center gap-4 border-[1px] p-3 rounded-[40px] shadow-md relative">
                <UserButton />
                <Menu onClick={() => setDropMenu(!dropMenu)} />
                {dropMenu && (
                    <ul className=" absolute top-[60px] left-[-30px] shadow-md bg-white p-5 border-[1px] rounded-lg flex flex-col items-start justify-start gap-3">
                        <Link href="/home">
                    <li >
                        Home
                    </li>
                </Link>

                <Link href="/tours">
                    <li >
                        Tours
                    </li>
                </Link>
                <Link href="/blog">
                    <li >
                        Blog
                    </li>
                </Link>

                <Link href="/about">
                    <li >
                        About us
                    </li>
                </Link>
                <Link href="/contact">
                    <li >
                        Contact
                    </li>
                </Link>
                    </ul>)}
            </div>

        </div>);
};

export default Navbar;
