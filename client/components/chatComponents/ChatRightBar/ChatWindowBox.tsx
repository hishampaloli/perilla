import React, { useEffect, useRef, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import {
  ConnectSocketState,
  GetChatsUnderRoomState,
  MessageData,
} from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";
import Spinner from "../../layout/SpinnerComponent";
import TypingCompoent from "../../TypingComonent/TypingCompoent";
import LeftMessageBoxDiv from "./LeftMessageBoxDiv";
import RightMessageBoxDiv from "./RightMessageBox";

const ChatWindowBox = () => {
  const { data, loading }: GetChatsUnderRoomState = useTypedSelector(
    (state) => state.allChatsUnderRoom
  );
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingUser, setTypingUser] = useState<string>("");
  const me: EmployeeAuthState = useTypedSelector((state) => state.employee);

  const messagesEndRef: any = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  });

  useEffect(() => {
    if (socket) {
      socket?.on(
        "typing-started-server",
        ({ typingUser }: { typingUser: string }) => {
          setTypingUser(typingUser);
          setIsTyping(true);
          console.log("786");
        }
      );

      socket?.on("typing-stopped-server", () => {
        setTypingUser("");
        setIsTyping(false);
        console.log("***(");
      });
    }
  }, [socket]);

  return (
    <div className={styles.chatWindowBox}>
      {loading && <Spinner />}
      {data?.data.map((el: MessageData) => {
        return (
          <>
            {" "}
            {me.data?.id === el.messageBy.id ? (
              <RightMessageBoxDiv messageData={el} />
            ) : (
              <LeftMessageBoxDiv messageData={el} />
            )}{" "}
          </>
        );
      })}
      {isTyping && <TypingCompoent user={typingUser} />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindowBox;
