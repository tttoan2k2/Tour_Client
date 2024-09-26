import React from "react";

const Forecast = ({ data, title }: any) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className=" font-medium uppercase">{title}</p>
            </div>
            <hr className="my-1" />
            <div className="flex items-center justify-between">
                {data.map((item: any) => (
                    <div
                        key={item.date}
                        className="flex flex-col items-center justify-center"
                    >
                        <p className=" font-light text-sm">{item.timeTitle}</p>
                        <img
                            src={item.icon}
                            alt="weather icon"
                            className="w-20 my-1"
                        />
                        <p className=" font-medium">{item.temp}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
