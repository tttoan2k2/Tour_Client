import {
    ChevronDown,
    ChevronUp,
    Divide,
    Sunrise,
    Sunset,
    Thermometer,
    Waves,
    Wind,
} from "lucide-react";

const TempAndDetails = ({ data }: any) => {
    const dataOneDetails = [
        {
            id: 1,
            Icon: <Thermometer size={18} className="mr-1" />,
            title: "Cảm nhận thực tế",
            value: `${data?.feels_like}°`,
        },
        {
            id: 2,
            Icon: <Waves size={18} className="mr-1" />,
            title: "Độ ẩm",
            value: `${data?.humidity}%`,
        },
        {
            id: 3,
            Icon: <Wind size={18} className="mr-1" />,
            title: "Gió",
            value: `${data?.wind}m/s`,
        },
    ];

    const dataTwoDetails = [
        {
            id: 1,
            Icon: <Sunrise size={18} className="mr-1" />,
            title: "Mặt trời mọc",
            value: data?.sunrise,
        },
        {
            id: 2,
            Icon: <Sunset size={18} className="mr-1" />,
            title: "Mặt trời lặn",
            value: data?.sunset,
        },
        {
            id: 3,
            Icon: <ChevronUp size={18} className="mr-1" />,
            title: "Nhiệt độ cao nhất",
            value: `${data?.temp_max}°`,
        },
        {
            id: 4,
            Icon: <ChevronDown size={18} className="mr-1" />,
            title: "Nhiệt độ thấp nhất",
            value: `${data?.temp_min}°`,
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300 uppercase">
                <p>{data?.des}</p>
            </div>
            <div className="flex flex-row items-center justify-between py-3">
                <img src={data?.icon} alt="weather icon" className="w-20" />
                <p className="text-5xl">{data?.temp}°</p>
                <div className="flex flex-col space-y-3 items-start">
                    {dataOneDetails.map(({ id, Icon, title, value }) => (
                        <div
                            key={id}
                            className="flex font-light text-sm items-center justify-center"
                        >
                            {Icon}
                            {`${title}: `}
                            <span className="ml-1 font-medium">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
                {dataTwoDetails.map(({ id, Icon, title, value }) => (
                    <div key={id} className="flex flex-row items-center">
                        {Icon}
                        <p className=" font-light ml-1">
                            {`${title}: `}
                            <span className="ml-1 font-medium">{value}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TempAndDetails;
