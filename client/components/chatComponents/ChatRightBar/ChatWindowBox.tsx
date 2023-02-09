import React from "react";
import styles from "../../../styles/chat.module.scss";
import LeftMessageBoxDiv from "./LeftMessageBoxDiv";
import RightMessageBoxDiv from "./RightMessageBox";

const ChatWindowBox = () => {
  return (
    <div className={styles.chatWindowBox}>
      <LeftMessageBoxDiv />
      <RightMessageBoxDiv />
      <RightMessageBoxDiv />
      <LeftMessageBoxDiv />
      <RightMessageBoxDiv />
    </div>
  );
};

export default ChatWindowBox;
