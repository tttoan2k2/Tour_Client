"use client";

import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Bot, Send, User } from "lucide-react";
import Spinner from "./Spinner";

export default function Chat() {
    const { isLoading, messages, input, handleInputChange, handleSubmit } =
        useChat();

    return (
        <div className="flex flex-col w-full max-w-xl mx-auto rounded-2xl shadow-lg px-5 py-3">
            {isLoading ? <Spinner /> : null}
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
                                    {m.content}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <form
                onSubmit={handleSubmit}
                className="px-4 py-3 flex items-center gap-2"
            >
                <input
                    className="flex-1 resize-none rounded-lg border-none  px-4 py-3"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />

                <Button size="icon" className="rounded-full">
                    <Send className="w-4 h-4" />
                    <span className="sr-only">Send</span>
                </Button>
            </form>
        </div>
    );
}
