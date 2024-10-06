import { DateTime } from "luxon";

export const getSites = async () => {
    const sites = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sites`);
    return await sites.json();
};

export const getSiteDetails = async (siteId: string) => {
    const site = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sites/${siteId}`
    );
    return await site.json();
};

export const getTours = async () => {
    const tours = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tours`);
    return await tours.json();
};

export const getTourDetails = async (tourId: string) => {
    const tour = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tours/${tourId}`
    );
    return await tour.json();
};

export const getNews = async () => {
    const news = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);
    return await news.json();
};

export const getNewsDetails = async (newsId: string) => {
    const news = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news/${newsId}`
    );
    return await news.json();
};

export const getSearchedTours = async (query: string) => {
    const searchedTours = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/search/${query}`
    );
    return await searchedTours.json();
};

export const getOrders = async (customerId: string) => {
    const orders = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`
    );
    return await orders.json();
};

export const getRelatedTours = async (tourId: string) => {
    const relatedTours = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tours/${tourId}/related`
    );
    return await relatedTours.json();
};

export const swapLocation = async (input: string) => {
    const resLocation = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
    );

    const locationData = await resLocation.json();

    return { lat: locationData[0]?.lat, lon: locationData[0]?.lon };
};

export const formatToLocalTime = (
    secs: any,
    offset: any,
    format = "cccc, dd LLL yyyy' | Giờ địa phương: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

export const formatIcon = (icon: any) =>
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const getWeather = async (dataLocation: any) => {
    if (dataLocation) {
        const resWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${dataLocation?.lat}&lon=${dataLocation?.lon}&lang=vi&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
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

        return {
            transforData,
            lat: weatherData?.coord.lat,
            lon: weatherData?.coord.lon,
            timezone: weatherData.timezone,
        };
    }
};

export const getForecast = async (dataWeather: any) => {
    if (dataWeather) {
        const resWeatherForecast = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${dataWeather?.lat}&lon=${dataWeather?.lon}&lang=vi&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`
        );
        const weatherForecastData = await resWeatherForecast.json();

        // hourly
        const hourly = weatherForecastData?.list
            ?.map((item: any) => ({
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
            ?.filter((item: any) => item.dt_txt.slice(-8) === "00:00:00")
            ?.map((item: any) => ({
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

        return {
            hourly,
            daily,
        };
    }
};
