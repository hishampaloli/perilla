import React, { useEffect } from "react";
import ChatLiBox from "./ChatLiBox";
import styles from "../../../styles/chat.module.scss";
import { useActions } from "../../../hooks/useAction";
import {
  ConnectSocketState,
  GetMyRoomsState,
  RoomData,
} from "../../../models/socket";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";

const ChatListComponent = () => {
  const { getMyRooms } = useActions();
  const { data, error, loading }: GetMyRoomsState = useTypedSelector(
    (state) => state.myRooms
  );

  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );

  useEffect(() => {
    getMyRooms("");
  }, []);

  const roomIds = data?.data.map((el: any) => {
    return el.id;
  });

  useEffect(() => {
    socket?.emit("join-room", {
      roomIds: roomIds,
    });
  }, [data]);

  return (
    <div className={styles.chatLists}>
      {data?.data.map((el: RoomData) => {
        return <ChatLiBox roomdata={el} />;
      })}
    </div>
  );
};

export default ChatListComponent;
