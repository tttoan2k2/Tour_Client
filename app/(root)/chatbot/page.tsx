"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { ToolInvocation } from "ai";

import { Bot, Send, User } from "lucide-react";
import TourCard from "@/components/TourCard";
import TimeAndLocation from "@/components/TimeAndLocation";
import TempAndDetails from "@/components/TempAndDetails";
import Forecast from "@/components/Forecast";

const QUESTIONS = [
    { title: "Tour du lịch Thái Lan" },
    { title: "Tour du lịch Việt Nam" },
    { title: "Thời tiết ở Đà Nẵng" },
    { title: "Thời tiết ở Osaka" },
];

export default function Chat() {
    const {
        isLoading,
        messages,
        input,
        setInput,
        handleInputChange,
        handleSubmit,
    } = useChat();

    console.log(messages);

    const renderToolInvocation = (toolInvocation: any) => {
        const toolCallId = toolInvocation.toolCallId;
        const message = toolInvocation?.result?.message;
        const result = toolInvocation?.result?.result;

        const formatBackground = () => {
            if (!result?.currentWeather?.transforData)
                return "from-cyan-600 to-blue-700";
            if (result?.currentWeather?.transforData?.temp >= 28)
                return "from-yellow-600 to-orange-700";
            return "from-cyan-600 to-blue-700";
        };

        switch (toolInvocation.toolName) {
            case "searchTours":
                return (
                    <div key={toolCallId}>
                        <div className="bg-blue-700 bg-opacity-10 text-sm whitespace-pre-wrap px-3 py-2 rounded-lg w-fit">
                            {message}
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {result?.length > 0 &&
                                result?.map((tour: any) => (
                                    <TourCard key={tour._id} tour={tour} />
                                ))}
                        </div>
                    </div>
                );

            case "weather":
                return (
                    <div
                        key={toolCallId}
                        className={`px-[20px] lg:px-[100px] bg-gradient-to-br shadow-xl ${formatBackground()} shadow-gray-400  text-white pb-[80px]`}
                    >
                        <div className="flex flex-col  pt-[30px]">
                            <h1 className="text-[30px] md:text-[35px] lg:text-[40px] font-bold ">
                                Thời tiết
                            </h1>
                            <p className="mb-[30px] text-[16px] md:text-[18px] ">
                                Xem thông tin thời tiết để chuẩn bị cho tour du
                                lịch của bạn
                            </p>
                        </div>

                        <TimeAndLocation
                            data={result?.currentWeather?.transforData}
                        />
                        <TempAndDetails
                            data={result?.currentWeather?.transforData}
                        />
                        <Forecast
                            title="Dự báo thời tiết trong ngày"
                            data={result?.forecast?.hourly}
                        />
                        <Forecast
                            title="Dự báo thời tiết 5 ngày tiếp theo"
                            data={result?.forecast?.daily}
                        />
                    </div>
                );
        }
    };

    return (
        <div className="bg-[#F9F9FA] flex flex-col items-center pb-10 w-full">
            {messages.length === 0 && (
                <div className="flex flex-col items-center pt-10">
                    <div className="flex flex-col gap-5 border-[1px] px-6 py-5 rounded-lg bg-white max-w-[500px]">
                        <h1 className="text-[20px] font-medium">
                            Chào mừng bạn sự dụng tính năng AI Chatbot của chúng
                            tôi!
                        </h1>
                        <p className="text-[#71717A]">
                            Đây là chức năng chat bot mới nhất của chúng tôi.
                            Bạn có thể đưa ra các yêu cầu, mong muốn của bản
                            thân, chat bot sẽ đưa ra các Tour du lịch theo yêu
                            cầu đó.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-[50px] w-full">
                        {QUESTIONS.map((question, i) => (
                            <div
                                key={i}
                                className="border-[1px] px-6 py-5 rounded-lg bg-white cursor-pointer hover:bg-[#F9F9FA]"
                                onClick={() => setInput(question.title)}
                            >
                                <p>{question.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="px-5 py-3 mt-10 w-[1000px] max-h-screen overflow-y-auto">
                {messages.map((m) => (
                    <div key={m.id} className="whitespace-pre-wrap px-4 pb-3">
                        {m.role === "user" ? (
                            <div className="flex gap-5">
                                <div className="border-[1px] rounded-full p-3 w-max h-max">
                                    <User className="w-4 h-4" />
                                </div>

                                <div className="flex flex-col w-full gap-2">
                                    <strong>Bạn</strong>
                                    <div className="bg-muted rounded-lg p-3 w-full">
                                        {m.content}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-5">
                                <div className="border-[1px] rounded-full p-3 w-max h-max">
                                    <Bot className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <strong>Chatbot</strong>

                                    <div className="bg-primary rounded-lg p-3 text-primary-foreground w-full">
                                        {m?.toolInvocations?.map(
                                            renderToolInvocation
                                        )}
                                        {m.content}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <form
                onSubmit={handleSubmit}
                className="px-4 py-3 flex items-center gap-2 mt-10 bg-white rounded-lg w-[500px] border-[1px] sticky bottom-0"
            >
                <input
                    className="flex-1 resize-none rounded-lg border-none  px-4 py-3"
                    value={input}
                    placeholder="Bạn cần hỏi gì..."
                    onChange={handleInputChange}
                />

                {isLoading ? (
                    <Spinner />
                ) : (
                    <Button size="icon" className="rounded-full">
                        <Send className="w-4 h-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                )}
            </form>
        </div>
    );
}
