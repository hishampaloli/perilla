import React, { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import {
  AddOnlineUsersState,
  ChatEmp,
  ConnectSocketState,
  RoomData,
} from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";

const ChatLiBox = ({ roomdata }: { roomdata: RoomData }) => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [typingUser, setTypingUser] = useState<string>("");
  const [typingId, setTypingId] = useState<string>("");
  const { getSingleRoom, getChatsUnderRoomRooms } = useActions();
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );

  const { users }: AddOnlineUsersState = useTypedSelector(
    (state) => state.onlineUsers
  );

  const user = roomdata?.roomMembers.filter((el: ChatEmp) => {
    return data?.id !== el?.id;
  });

  const date = new Date(roomdata.lastMessageAt);

  console.log(users);
  function checkStringInArray(str: string, arr: string[]): boolean {
    return arr.includes(str);
  }

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
    }
  }, [socket]);
  return (
    <div
      onClick={() => {
        getSingleRoom("", roomdata);
        getChatsUnderRoomRooms("sd", roomdata.id);
      }}
      className={styles.chatLiBox}
    >
      <div>
        {checkStringInArray(user[0].id, users) && <span></span>}

        <img src={user[0].image} alt="" />
        <div>
          <h4>{user[0].name}</h4>
          {isTyping && typingId === roomdata.id ? (
            <p>typing...</p>
          ) : (
            <p>
              {roomdata?.lastMessage ? roomdata?.lastMessage : "no messages"}
            </p>
          )}
        </div>
      </div>
      <p
        style={{ fontSize: "12px", marginTop: "-10px", color: "lightgray" }}
      >{`${date.toLocaleTimeString()}`}</p>
    </div>
  );
};

export default ChatLiBox;
