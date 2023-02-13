import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import {
  ConnectSocketState,
  GetChatsUnderRoomState,
  MessageData,
  RoomData,
} from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";
import Spinner from "../../layout/SpinnerComponent";
import TypingCompoent from "../../TypingComonent/TypingCompoent";
import LeftMessageBoxDiv from "./LeftMessageBoxDiv";
import RightMessageBoxDiv from "./RightMessageBox";

const ChatWindowBox = ({ roomData }: { roomData: RoomData }) => {
  const { data, loading }: GetChatsUnderRoomState = useTypedSelector(
    (state) => state.allChatsUnderRoom
  );
  const { deleteChat } = useActions();
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingUser, setTypingUser] = useState<string>("");
  const [typingId, setTypingId] = useState<string>("");
  const me: EmployeeAuthState = useTypedSelector((state) => state.employee);

  const messagesEndRef: any = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  });

  useEffect(() => {
    if (socket) {
      socket?.on(
        "typing-started-server",
        ({ typingUser, roomId }: { typingUser: string; roomId: string }) => {
          setTypingUser(typingUser);
          setIsTyping(true);
          setTypingId(roomId);
          console.log("786");
        }
      );

      socket?.on("typing-stopped-server", () => {
        setTypingUser("");
        setIsTyping(false);
        setTypingId("");
        console.log("***(");
      });

      socket?.on(
        "message-deleted-from-server",
        ({ messageId }: { messageId: string }) => {
          console.log(messageId + "message deleted");
          deleteChat(messageId);
        }
      );
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

      {isTyping && roomData?.id === typingId && (
        <TypingCompoent user={typingUser} />
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindowBox;
