
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Banner from "../../public/tham-quan-lang-bac.jpg";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="relative ">
                <h1 className=" flex text-center absolute top-1/2 left-[600px] text-indigo-900 text-[50px] font-bold"> Natural beauty</h1>
                <Image className="h-[600px]  object-cover" width={1600} height={1600} alt="" src={Banner} />
            </div>

        </div>)
        ;
}
