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
import { getSearchedTours, getSites } from "@/lib/actions";

export async function POST(request: Request) {
    const { messages } = await request.json();
    const stream = await streamText({
        model: google("models/gemini-pro"),
        system:
            `You help planning travel itineraries. ` +
            `Respond to the users' request with a list ` +
            `of the best stops to make in their destination.` +
            `If they are looking for a tour in a country, ask them for a specific destination in that country.` +
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
                    console.log(data);

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
        },
    });
    return stream.toAIStreamResponse();
}
