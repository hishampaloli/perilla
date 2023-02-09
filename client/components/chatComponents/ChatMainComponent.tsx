import React from "react";
import ChatLeftMain from "./ChatLeftBar/ChatLeftMain";
import ChatRightMain from "./ChatRightBar/ChatRightMain";
import styles from "../../styles/chat.module.scss";

const ChatMainComponent = () => {
  return (
    <div className={styles.chatMain}>
      <ChatLeftMain />
      <ChatRightMain />
    </div>
  );
};

export default ChatMainComponent;
