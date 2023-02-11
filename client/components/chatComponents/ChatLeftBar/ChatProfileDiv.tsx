import React from "react";
import styles from "../../../styles/chat.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { EmployeeAuthState } from "../../../models/employee";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const ChatProfileDiv = () => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  return (
    <div className={styles.chatProfile}>
      <div>
        <img src={data?.image} alt="" />
        <p>{data?.name}</p>
      </div>

      <span style={{ cursor: "pointer" }}>
        <MoreHorizIcon />
      </span>
    </div>
  );
};

export default ChatProfileDiv;
