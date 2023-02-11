import React from "react";
import styles from "../../../styles/chat.module.scss";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import { AddOnlineUsersState, ChatEmp, RoomData } from "../../../models/socket";
import { EmployeeAuthState } from "../../../models/employee";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const ChatTopBar = ({ roomData }: { roomData: RoomData }) => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
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

  return (
    <div className={styles.chatRightTop}>
      <div>
        <img src={user[0]?.image} alt="" />
        <div>
          <h3>{user[0]?.name}</h3>
          <p>
            {checkStringInArray(user[0]?.id, users) ? "active now" : `offline`}
          </p>
        </div>
      </div>
      <div>
        <span>
          <CallIcon />
        </span>
        <span>
          <VideocamIcon />
        </span>
      </div>
    </div>
  );
};

export default ChatTopBar;
