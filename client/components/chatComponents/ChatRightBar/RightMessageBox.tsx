import React from "react";
import { MessageData } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";

const RightMessageBoxDiv = ({ messageData }: { messageData: MessageData }) => {
  const date = new Date(messageData?.messagedAt);
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
    </div>
  );
};

export default RightMessageBoxDiv;
