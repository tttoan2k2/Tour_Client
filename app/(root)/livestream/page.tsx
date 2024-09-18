"use client";

import "@livekit/components-styles";
import {
    LiveKitRoom,
    GridLayout,
    ParticipantTile,
    RoomAudioRenderer,
    ControlBar,
    useTracks,
} from "@livekit/components-react";
import { useEffect, useState } from "react";
import { Track } from "livekit-client";
import { useSearchParams } from "next/navigation";
import { Radio } from "lucide-react";

export default function Page() {
    const params = useSearchParams();

    useEffect(() => {
        const room = params.get("room");
        const name = params.get("name");
        if (room && name) {
            setRoom(room);
            setName(name);
        }
    }, [params]);

    const [room, setRoom] = useState<string>();
    const [name, setName] = useState<string>();

    const [token, setToken] = useState("");

    async function getToken() {
        if (!room || !name) {
            return;
        }
        try {
            const resp = await fetch(
                `/api/get-participant-token?room=${room}&username=${name}`
            );
            const data = await resp.json();
            setToken(data.token);
        } catch (e) {
            console.error(e);
        }
    }

    if (token === "") {
        return (
            <div className="flex flex-col lg:flex-row text-white">
                <div className="bg-orange-900 w-full lg:w-[70%] h-max lg:h-screen px-[20px] lg:px-[100px] py-[80px]">
                    <div className="flex items-center gap-2 ">
                        <div className="p-3 bg-orange-500 rounded-lg">
                            <Radio className="w-8  h-8" />
                        </div>
                        <h1 className="text-[30px] font-semibold">Live Room</h1>
                    </div>
                    <h1 className="mt-[30px] text-[46px] font-bold max-w-[550px] mb-[40px]">
                        Kết nối mọi người lại với nhau với việc tạo live room
                    </h1>
                    <p className="text-[24px] max-w-[650px]">
                        Tạo, hoặc tham gia các phòng live để tăng trải nghiệm du
                        lịch của bạn
                    </p>
                </div>
                <div className="bg-orange-300 w-full py-10 lg:py-0 lg:w-[30%] flex items-center justify-center flex-col">
                    <div>
                        <div className="flex items-center gap-2 mb-[5px]">
                            <div className="p-3 bg-orange-500 rounded-lg">
                                <Radio className="w-8  h-8" />
                            </div>
                            <h1 className="text-[30px] font-semibold">
                                Live Room
                            </h1>
                        </div>
                        <h1 className="text-[19px] mb-[40px]">
                            Tạo hoặc tham gia ngay
                        </h1>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            getToken();
                        }}
                        className="flex flex-col justify-center items-center "
                    >
                        <input
                            type="text"
                            placeholder="Room"
                            value={room}
                            className="mb-4 px-3 py-2 rounded-lg text-black"
                            onChange={(e) => setRoom(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            className="mb-4 px-3 py-2 rounded-lg text-black"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400"
                        >
                            Tham gia ngay
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <LiveKitRoom
            video={true}
            audio={true}
            token={token}
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
            onDisconnected={() => setToken("")}
            // Use the default LiveKit theme for nice styles.
            data-lk-theme="default"
            style={{ height: "100dvh" }}
        >
            {/* Your custom component with basic video conferencing functionality. */}
            <MyVideoConference />
            {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
            <RoomAudioRenderer />
            {/* Controls for the user to start/stop audio, video, and screen 
      share tracks and to leave the room. */}
            <ControlBar />
        </LiveKitRoom>
    );
}

function MyVideoConference() {
    // `useTracks` returns all camera and screen share tracks. If a user
    // joins without a published camera track, a placeholder track is returned.
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false }
    );
    return (
        <GridLayout
            tracks={tracks}
            style={{ height: "calc(100vh - var(--lk-control-bar-height))" }}
        >
            {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
            <ParticipantTile />
        </GridLayout>
    );
}
