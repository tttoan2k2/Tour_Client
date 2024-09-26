"use client";

import { DateTime } from "luxon";
import Forecast from "@/components/Forecast";
import Input from "@/components/Input";
import TempAndDetails from "@/components/TempAndDetails";
import TimeAndLocation from "@/components/TimeAndLocation";

import { useEffect, useState } from "react";

const Weather = () => {
    const [query, setQuery] = useState("Thanh Xuân");
    const [units, setUnits] = useState("metric");
    const [data, setData] = useState<null | {}>();
    const [temp, setTemp] = useState(0);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    console.log(query);

    const swapLocation = async () => {
        if (typeof query === "string") {
            const resLocation = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
            );
            const locationData = await resLocation.json();
            console.log(locationData);
            return { lat: locationData[0]?.lat, lon: locationData[0]?.lon };
        }
        return query;
    };

    const formatToLocalTime = (
        secs: any,
        offset: any,
        format = "cccc, dd LLL yyyy' | Giờ địa phương: 'hh:mm a"
    ) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

    const formatIcon = (icon: any) =>
        `http://openweathermap.org/img/wn/${icon}@2x.png`;

    const getWeather = async () => {
        const dataLocation = await swapLocation();
        console.log(dataLocation);
        if (dataLocation) {
            const resWeather = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?lat=${dataLocation?.lat}&lon=${dataLocation?.lon}&lang=vi&units=${units}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
            );
            const weatherData = await resWeather.json();

            const transforData = {
                timezone: weatherData?.timezone,
                name: weatherData?.name,
                country: weatherData?.sys?.country,
                temp: weatherData?.main?.temp,
                feels_like: weatherData?.main?.feels_like,
                temp_min: weatherData?.main?.temp_min,
                temp_max: weatherData?.main?.temp_max,
                humidity: weatherData?.main?.humidity,
                sunrise: formatToLocalTime(
                    weatherData?.sys?.sunrise,
                    weatherData?.timezone,
                    "hh:mm a"
                ),
                sunset: formatToLocalTime(
                    weatherData?.sys?.sunset,
                    weatherData?.timezone,
                    "hh:mm a"
                ),
                wind: weatherData?.wind?.speed,
                des: weatherData?.weather[0]?.description,
                icon: formatIcon(weatherData?.weather[0]?.icon),
                time: formatToLocalTime(weatherData?.dt, weatherData?.timezone),
            };

            console.log(weatherData);

            setData(transforData);
            setTemp(weatherData?.main?.temp);

            return {
                lat: weatherData?.coord.lat,
                lon: weatherData?.coord.lon,
                timezone: weatherData.timezone,
            };
        }
    };

    const getForecast = async () => {
        const dataWeather = await getWeather();
        if (dataWeather) {
            const resWeatherForecast = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${dataWeather?.lat}&lon=${dataWeather?.lon}&lang=vi&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
            );
            const weatherForecastData = await resWeatherForecast.json();

            // hourly
            const hourly = weatherForecastData?.list
                .map((item: any) => ({
                    temp: item.main.temp,
                    timeTitle: formatToLocalTime(
                        item.dt,
                        dataWeather.timezone,
                        "hh:mm a"
                    ),
                    icon: formatIcon(item.weather[0].icon),
                    des: item.weather[0].description,
                    date: item.dt_txt,
                }))
                .slice(0, 5);

            // daily
            const daily = weatherForecastData?.list
                .filter((item: any) => item.dt_txt.slice(-8) === "00:00:00")
                .map((item: any) => ({
                    temp: item.main.temp,
                    timeTitle: formatToLocalTime(
                        item.dt,
                        dataWeather.timezone,
                        "ccc"
                    ),
                    icon: formatIcon(item.weather[0].icon),
                    des: item.weather[0].description,
                    date: item.dt_txt,
                }));

            setHourlyForecast(hourly);
            setDailyForecast(daily);
        }
    };

    useEffect(() => {
        getWeather();
        getForecast();
    }, [query, units]);

    const formatBackground = () => {
        if (!data) return "from-cyan-600 to-blue-700";
        if (temp >= 28) return "from-yellow-600 to-orange-700";
        return "from-cyan-600 to-blue-700";
    };

    return (
        <div
            className={`px-[20px] lg:px-[100px] bg-gradient-to-br shadow-xl ${formatBackground()} shadow-gray-400  text-white pb-[80px]`}
        >
            <div className="flex flex-col  pt-[30px]">
                <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold ">
                    Thời tiết
                </h1>
                <p className="mb-[30px] text-[16px] md:text-[18px] ">
                    Xem thông tin thời tiết để chuẩn bị cho tour du lịch của bạn
                </p>
            </div>
            <Input setQuery={setQuery} setUnits={setUnits} />
            <TimeAndLocation data={data} />
            <TempAndDetails data={data} />
            <Forecast
                title="Dự báo thời tiết trong ngày"
                data={hourlyForecast}
            />
            <Forecast
                title="Dự báo thời tiết 5 ngày tiếp theo"
                data={dailyForecast}
            />
        </div>
    );
};

export default Weather;
