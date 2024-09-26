import React from "react";

const TimeAndLocation = ({ data }: any) => {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-xl font-extralight">{data?.time}</p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className="text-3xl font-medium">
                    {data?.name},{data?.country}
                </p>
            </div>
        </div>
    );
};

export default TimeAndLocation;
