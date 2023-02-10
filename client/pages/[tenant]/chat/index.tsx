import React, { useEffect, useRef, useState } from "react";
import ChatMainComponent from "../../../components/chatComponents/ChatMainComponent";
import Header from "../../../components/layout/header/Header";
import { io, Socket } from "socket.io-client";

const index = () => {
  const [socket, setSocket] = useState<Socket>();
  let token: any;

  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("employeeInfo")!);
  }

  useEffect(() => {
    setSocket(
      io("https://perilla.dev", {
        path: "/api/chats/socket.io",
        transports: ["websocket"],
        auth: { token: token?.token?.toString() },
      })
    );

    console.log(socket);
  }, []);

  return (
    <>
      <div>
        <Header />
        <ChatMainComponent />
      </div>
    </>
  );
};

export default index;
