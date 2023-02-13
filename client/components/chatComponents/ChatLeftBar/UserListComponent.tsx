import React, { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GetAllEmployeesForChatState } from "../../../models/employee";
import { ConnectSocketState } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";

const UserListComponent = ({ setUser, user }: { setUser: any; user: any }) => {
  const [typingTimeOut, setTypingTimeout] = useState<any>();
  const { data, error, loading }: GetAllEmployeesForChatState =
    useTypedSelector((state) => state.allEmployeeForChat);
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );
  const { getAllEmployeeForChat, getMyRooms } = useActions();

  console.log(data);
  useEffect(() => {
    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
    setTypingTimeout(
      setTimeout(() => {
        getAllEmployeeForChat("", user);
      }, 1000)
    );
  }, [user]);

  return (
    <div className={styles.userList}>
      {data?.data.map((el: any) => {
        return (
          <div
            onClick={() => {
              setUser("");
              socket.emit("create-room", { el });
              getMyRooms('sd')
            }}
            className={styles.userListBox}
          >
            <div>
              <img src={el.image} alt="" />
              <div>
                <h4>{el.name}</h4>
                <p>{el.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserListComponent;
