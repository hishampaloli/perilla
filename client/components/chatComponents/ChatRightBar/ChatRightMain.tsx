import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GetSingleRoomsState } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";
import ChatSentDiv from "./ChatSentDiv";
import ChatTopBar from "./ChatTopBar";
import ChatWindowBox from "./ChatWindowBox";
import VideoCallReqComponent from "./VideoCallReqComponent";

const ChatRightMain = () => {
  const { data }: GetSingleRoomsState = useTypedSelector(
    (state) => state.singleRoom
  );
  return (
    <div className={styles.chatRightMain}>
      {data ? (
        <>
          <ChatTopBar roomData={data} />
          <ChatWindowBox />
          <ChatSentDiv roomData={data} />
          <VideoCallReqComponent />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatRightMain;
