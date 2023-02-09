import React from "react";
import styles from "../../../styles/chat.module.scss";
import ChatSentDiv from "./ChatSentDiv";
import ChatTopBar from "./ChatTopBar";
import ChatWindowBox from "./ChatWindowBox";

const ChatRightMain = () => {
  return (
    <div className={styles.chatRightMain}>
      <ChatTopBar />
      <ChatWindowBox />
      <ChatSentDiv />
    </div>
  );
};

export default ChatRightMain;
