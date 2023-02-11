import React, { useEffect, useRef, useState } from "react";
import ChatMainComponent from "../../../components/chatComponents/ChatMainComponent";
import Header from "../../../components/layout/header/Header";
import { io, Socket } from "socket.io-client";
import { useActions } from "../../../hooks/useAction";
import { ConnectSocketState, MessageData } from "../../../models/socket";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const index = () => {
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );
  let token: any;

  const [audioRef, setAudioRef] = useState<any>(null);

  const handleSounf = () => {
    audioRef.pause();
    audioRef.currentTime = 0;
    audioRef.play();
  };
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("employeeInfo")!);
  }

  const { connectSocket, pushMessageToRoom } = useActions();
  useEffect(() => {
    connectSocket(
      io("https://perilla.dev", {
        path: "/api/chats/socket.io",
        transports: ["websocket"],
        auth: { token: token?.token?.toString() },
      })
    );
  }, []);

  console.log(socket);
  useEffect(() => {
    if (socket) {
      socket.on(
        "message-from-server",
        ({ createdChat }: { createdChat: MessageData }) => {
          pushMessageToRoom(createdChat);
          console.log(createdChat);
          handleSounf();
          console.log("786");
        }
      );
      socket.on("room-joined", ({ roomIds }: { roomIds: any }) => {
        console.log(roomIds);
      });
    }
  }, [socket]);

  return (
    <>
      <div>
        <Header />
        <ChatMainComponent />
      </div>
      <audio
        ref={(ref) => {
          setAudioRef(ref);
        }}
      >
        <source
          src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-bounce.m4a"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};

export default index;
