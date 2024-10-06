// import { streamText } from "ai";
// import { google } from "@ai-sdk/google";

// export async function POST(request: Request) {
//     const { messages } = await request.json();
//     const stream = await streamText({
//         model: google("models/gemini-pro"),
//         system: "You are a helpful assistant.",
//         messages,
//     });
//     return stream.toAIStreamResponse();
// }

import { convertToCoreMessages, streamText, tool } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import {
    getForecast,
    getSearchedTours,
    getSites,
    getWeather,
    swapLocation,
} from "@/lib/actions";

import { DateTime } from "luxon";

export async function POST(request: Request) {
    const { messages } = await request.json();
    const stream = await streamText({
        model: google("models/gemini-pro"),
        system:
            `You help planning travel itineraries. ` +
            `Respond to the users' request with a list ` +
            `of the best stops to make in their destination.` +
            `If they are looking for a tour in a country, ask them for a specific destination in that country.` +
            `You also provide weather information at the location the user asked.` +
            `Respond in Vietnamese.`,
        messages: convertToCoreMessages(messages),
        tools: {
            searchTours: tool({
                description:
                    "Search for tours that match user requirements. Ask users about the destinations they want in that country.",
                parameters: z.object({
                    diemden: z.string().describe("The destination of the tour"),
                }),
                execute: async ({ diemden }) => {
                    const data = await getSearchedTours(diemden);

                    if (data?.length === 0) {
                        return {
                            message: "Chúng tôi chưa có Tour tới đây.",
                        };
                    }

                    return {
                        message: `Đây là kết quả tìm kiếm các tour cho điểm đến ${diemden}: `,
                        result: data,
                    };
                },
            }),
            weather: tool({
                description: "Get the weather and forecast in a location",
                parameters: z.object({
                    location: z
                        .string()
                        .describe("The location to get the weather for"),
                }),
                execute: async ({ location }) => {
                    const sLocation = await swapLocation(location);
                    console.log(sLocation);
                    const dataCurrentWeather = await getWeather(sLocation);
                    console.log(dataCurrentWeather);
                    const dataForecast = await getForecast(dataCurrentWeather);
                    console.log(dataForecast);

                    return {
                        message: `Đây là kết quả tìm kiếm các tour cho điểm đến ${location}: `,

                        result: {
                            currentWeather: dataCurrentWeather,
                            forecast: dataForecast,
                        },
                    };
                },
            }),
        },
    });
    return stream.toAIStreamResponse();
}
