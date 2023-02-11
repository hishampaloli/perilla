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
import LeftMessageBoxDiv from "./LeftMessageBoxDiv";
import RightMessageBoxDiv from "./RightMessageBox";

const ChatWindowBox = () => {
  const { data, loading }: GetChatsUnderRoomState = useTypedSelector(
    (state) => state.allChatsUnderRoom
  );
  const me: EmployeeAuthState = useTypedSelector((state) => state.employee);

  const messagesEndRef: any = useRef(null);
  console.log(data);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  });


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

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindowBox;
