import React from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ConnectSocketState, MessageData } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const RightMessageBoxDiv = ({ messageData }: { messageData: MessageData }) => {
  const date = new Date(messageData?.messagedAt);
  const { deleteChat } = useActions();
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );

  return (
    <div className={styles.rightMessage}>
      <div>
        <span>
          <p style={{ fontSize: "10px", marginTop: "12px" }}>
            {date.toLocaleTimeString()}
          </p>
          <p>
            <strong>{messageData?.messageBy?.name}</strong>{" "}
          </p>
        </span>
        <p>{messageData?.content}</p>
      </div>
      <img src={messageData.messageBy.image} alt="" />
      <h3
        onClick={() => {
          console.log(messageData);
          if (messageData.id) {
            socket.emit("message-deleted", {
              messageId: messageData.id,
              roomId: messageData.messageRoom,
            });
            deleteChat(messageData.id);
          }
        }}
      >
        <DeleteIcon />
      </h3>
    </div>
  );
};

export default RightMessageBoxDiv;
