import React from "react";
import styles from "../../../styles/chat.module.scss";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import {
  AddOnlineUsersState,
  ChatEmp,
  ConnectSocketState,
  RoomData,
} from "../../../models/socket";
import { EmployeeAuthState } from "../../../models/employee";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useAction";

const ChatTopBar = ({ roomData }: { roomData: RoomData }) => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const { requestVideoCall } = useActions();

  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );

  const user = roomData?.roomMembers.filter((el: ChatEmp) => {
    return data?.id !== el?.id;
  });

  const { users }: AddOnlineUsersState = useTypedSelector(
    (state) => state.onlineUsers
  );

  function checkStringInArray(str: string, arr: string[]): boolean {
    return arr.includes(str);
  }

  const lastSeen = new Date();

  const handleVideoCall = () => {
    socket.emit("send-video-call-request", { roomId: roomData.id });
    requestVideoCall({
      callingUser: user[0]?.name,
      image: user[0]?.image,
      roomId: roomData.id,
    });
  };

  return (
    <div className={styles.chatRightTop}>
      <div>
        <img src={user[0]?.image} alt="" />
        <div>
          <h3>{user[0]?.name}</h3>
          <p>
            {checkStringInArray(user[0]?.id, users) ? (
              "active now"
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginLeft: "0px",
                }}
              >
                <p>offline</p>
                <p style={{ marginLeft: "30px" }}>
                  last seen at {lastSeen.toLocaleTimeString()}
                </p>
              </div>
            )}
          </p>
        </div>
      </div>
      <div>    
        {/* {checkStringInArray(user[0]?.id, users) ? (
          <span onClick={handleVideoCall} style={{ cursor: "pointer" }}>
            <VideocamIcon />
          </span>
        ) : (
          <span style={{ cursor: "not-allowed" }}>
            <VideocamIcon />
          </span>
        )} */}
        <span onClick={handleVideoCall} style={{ cursor: "pointer" }}>
          <VideocamIcon />
        </span>
      </div>
    </div>
  );
};

export default ChatTopBar;
