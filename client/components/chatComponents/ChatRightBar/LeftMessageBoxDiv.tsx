import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ConnectSocketState, MessageData } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";

const LeftMessageBoxDiv = ({ messageData }: { messageData: MessageData }) => {
  const date = new Date(messageData?.messagedAt);


  return (
    <div className={styles.leftMessage}>
      <img src={messageData.messageBy.image} alt="" />
      <div>
        <span>
          <p>
            <strong>{messageData?.messageBy?.name}</strong>{" "}
          </p>
          <p style={{ fontSize: "10px", marginTop: "12px" }}>
            {date.toLocaleTimeString()}
          </p>
        </span>
        <p>{messageData?.content}</p>
      </div>
     
    </div>
  );
};

export default LeftMessageBoxDiv;
