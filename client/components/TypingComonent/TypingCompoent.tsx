import React from "react";
import styles from "../../styles/typing.module.scss";

const TypingCompoent = ({ user }: { user: string }) => {
  return (
    <div className={styles.chatBubble}>
      <strong>{user} is typing </strong>
      <div className={styles.typing}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default TypingCompoent;
