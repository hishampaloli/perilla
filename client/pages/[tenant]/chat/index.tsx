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
  const [callEndaudioRef, setCallEndAudioRef] = useState<any>(null);
  const [audioRef, setAudioRef] = useState<any>(null);

  const handleSounf = () => {
    audioRef.pause();
    audioRef.currentTime = 0;
    audioRef.play();
  };
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("employeeInfo")!);
  }

  const handleCallEnd = () => {
    callEndaudioRef.pause();
    callEndaudioRef.currentTime = 0;
    callEndaudioRef.play();
  };

  const {
    connectSocket,
    pushMessageToRoom,
    AddLiveUsers,
    removeOfflineUsers,
    incomingVideoCall,
    cancelOrJoinVideoCall,
  } = useActions();
  useEffect(() => {
    connectSocket(
      io("https://perilla.dev", {
        path: "/api/chats/socket.io",
        transports: ["websocket"],
        auth: { token: token?.token?.toString() },
      })
    );
  }, []);

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

      socket.on("user-joined", ({ joinedUser }: { joinedUser: string }) => {
        console.log("786 joined");
        AddLiveUsers(joinedUser);
      });
      socket.on(
        "user-left",
        ({ disconnectedUser }: { disconnectedUser: string }) => {
          console.log(disconnectedUser);
          console.log("user left");
          removeOfflineUsers(disconnectedUser);
        }
      );

      socket.on(
        "video-call-request-server",
        ({
          callingUser,
          roomId,
          image,
        }: {
          callingUser: string;
          roomId: string;
          image: string;
        }) => {
          incomingVideoCall({ callingUser, roomId, image });
          console.log("incomming video call from " + callingUser);
        }
      );

      socket.on("video-call-rejected-server", () => {
        cancelOrJoinVideoCall();
        handleCallEnd();
        console.log("vide rejcetd");
      });

      socket.on("video-call-canceled-server", () => {
        cancelOrJoinVideoCall();
        console.log("vide canceld");
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

      <audio
        ref={(ref) => {
          setCallEndAudioRef(ref);
        }}
      >
        <source
          src=" http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};

export default index;
