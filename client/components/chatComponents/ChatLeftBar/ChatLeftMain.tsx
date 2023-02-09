import React from "react";
import ChatListComponent from "./ChatListComponent";
import ChatProfileDiv from "./ChatProfileDiv";
import SearchUserBar from "./SearchUserBar";
import styles from "../../../styles/chat.module.scss";

const ChatLeftMain = () => {
  return (
    <div className={styles.chatLeftMain}>
      <ChatProfileDiv />
      <SearchUserBar />
      <ChatListComponent />
    </div>
  );
};

export default ChatLeftMain;
