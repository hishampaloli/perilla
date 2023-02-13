import React, { useState } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import {
  ConnectSocketState,
  MessageData,
  RoomData,
} from "../../../models/socket";
import SendIcon from "@mui/icons-material/Send";
import styles from "../../../styles/chat.module.scss";

const ChatSentDiv = ({ roomData }: { roomData: RoomData }) => {
  const [message, setMessage] = useState<string>("");

  const [typingTimeOut, setTypingTimeout] = useState<any>();
  const { pushMessageToRoom } = useActions();
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const pushMessage: MessageData = {
    content: message,
    id: "",
    messagedAt: new Date(),
    messageRoom: roomData.id,
    messageBy: {
      email: data?.email!,
      id: data?.id!,
      image: data?.image!,
      name: data?.name!,
      phone: data?.phone!,
      role: data?.role!,
    },
  };

  const handleclick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (message.length > 0) {
      socket.emit("message", {
        roomId: roomData.id,
        message,
      });
      pushMessageToRoom(pushMessage);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleclick} className={styles.sendChatDiv}>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
          socket.emit("typing-started-client", { roomId: roomData.id });
          if (typingTimeOut) {
            clearTimeout(typingTimeOut);
          }
          setTypingTimeout(
            setTimeout(() => {
              socket.emit("typing-stopped-client", { roomId: roomData.id });
            }, 1000)
          );
        }}
        value={message}
        type="text"
        placeholder="send"
        name=""
        id=""
      />
      <button>
        <span>
          <div>
            <SendIcon />
          </div>
        </span>
      </button>
    </form>
  );
};

export default ChatSentDiv;
