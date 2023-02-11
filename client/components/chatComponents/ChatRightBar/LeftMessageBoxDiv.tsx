import React from "react";
import { MessageData } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";

const LeftMessageBoxDiv = ({ messageData }: { messageData: MessageData }) => {
  return (
    <div className={styles.leftMessage}>
      <img src={messageData.messageBy.image} alt="" />
      <div>
        <span>
          <p>
            <strong>{messageData?.messageBy?.name}</strong>{" "}
          </p>
          <p>{messageData?.messagedAt.toString().slice(0, 10)}</p>
        </span>
        <p>{messageData?.content}</p>
      </div>
    </div>
  );
};

export default LeftMessageBoxDiv;
