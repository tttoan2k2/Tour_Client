"use client";

import { LocateFixed, Search } from "lucide-react";
import { useState } from "react";

const Input = ({ setQuery, setUnits }: any) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input !== "") {
            setQuery(input);
        }
    };

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setQuery({ lat: latitude, lon: longitude });
            });
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    type="text"
                    className="p-3 w-full shadow-xl focus:outline-none rounded-lg text-black"
                    placeholder="Nhập nơi bạn muốn xem..."
                    onChange={(e) => setInput(e.target.value)}
                />

                <Search
                    size={30}
                    className=" cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearch}
                />
                <LocateFixed
                    size={30}
                    className=" cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocation}
                />
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button
                    onClick={() => setUnits("metric")}
                    className="text-2xl font-medium transition ease-out hover:scale-125"
                >
                    °C
                </button>
                <p className="text-2xl font-medium mx-1">|</p>
                <button
                    onClick={() => setUnits("imperial")}
                    className="text-2xl font-medium transition ease-out hover:scale-125"
                >
                    °F
                </button>
            </div>
        </div>
    );
};

export default Input;
