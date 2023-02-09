import React from "react";
import ChatLiBox from "./ChatLiBox";
import styles from "../../../styles/chat.module.scss";

const ChatListComponent = () => {
  return (
    <div className={styles.chatLists}>
      <ChatLiBox />
      <ChatLiBox />
      <ChatLiBox />
      <ChatLiBox />
      <ChatLiBox />
      <ChatLiBox />
      <ChatLiBox />
      <ChatLiBox />
      <ChatLiBox />
    </div>
  );
};

export default ChatListComponent;
