import { Plane } from "lucide-react";

export default function Home() {
    return (
        <div className="px-5 py-5 flex items-center justify-between">
            <h1 className="text-[30px] font-bold">Tour</h1>

            <ul className="flex items-center justify-center gap-5">
                <li className="flex gap-2">
                    <Plane /> Home
                </li>
                <li>Khách sạn</li>
                <li>Tour</li>
                <li>Khuyến mãi</li>
            </ul>

            <input placeholder="search" className="" />
        </div>
    );
}
