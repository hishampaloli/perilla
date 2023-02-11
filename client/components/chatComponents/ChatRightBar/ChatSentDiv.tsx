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
  const { pushMessageToRoom } = useActions();
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const pushMessage: MessageData = {
    content: message,
    id: "sdfsd",
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

  const handleclick = () => {
    if (message.length > 0) {
      socket.emit("message", {
        roomId: roomData.id,
        message,
      });
      pushMessageToRoom(pushMessage);
    }
  };

  return (
    <div className={styles.sendChatDiv}>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        type="text"
        placeholder="send"
        name=""
        id=""
      />
      <button onClick={handleclick}>
        <span>
          <div>
            <SendIcon />
          </div>
        </span>
      </button>
    </div>
  );
};

export default ChatSentDiv;
