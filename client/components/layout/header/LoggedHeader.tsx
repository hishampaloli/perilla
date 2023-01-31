import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/header.module.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationComponent from "../../NotificationComponent/NotificationComponent";
import { GetMyNotifications } from "../../../models/profile";
import { useActions } from "../../../hooks/useAction";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const LoggedHeader = ({
  logoutHandler,
  type,
  employeelogoutHandler,
}: {
  logoutHandler?: any;
  type: string;
  employeelogoutHandler?: any;
}) => {
  const userState: AuthState = useTypedSelector((state) => state.user);
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const [noti, setNoti] = useState<boolean>(false);

  const notification: GetMyNotifications = useTypedSelector(
    (state) => state.notification
  );

  const { GetMyNotifications } = useActions();

  useEffect(() => {
    if (data?.phone) {
      GetMyNotifications("");
    }
  }, []);

  const router = useRouter();
  return (
    <>
      <div className={style.notLogged}>
        {!userState.data?.data.isPurchased && type === "tenant" && (
          <Link href={"/payment"}>
            <li>Buy</li>
          </Link>
        )}

        {type === "employee" ? (
          <>
            {" "}
            <p onClick={() => setNoti(!noti)}>
              {notification.data?.data.length ? (
                <div className={style.ActNotiIcon}>
                  <NotificationsActiveIcon />
                </div>
              ) : (
                <div>
                  <NotificationsIcon />
                </div>
              )}
            </p>
            <p>
              <img
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                src={data?.image}
                alt=""
              />
            </p>
            <Link href={"/"}>
              <li onClick={employeelogoutHandler}>Logout</li>
            </Link>
          </>
        ) : (
          <>
            <Link href={"/"}>
              <li onClick={logoutHandler}>Logout</li>
            </Link>
          </>
        )}
      </div>
      {noti && (
        <NotificationComponent
          data={notification?.data?.data}
          setNoti={setNoti}
        />
      )}
    </>
  );
};

export default LoggedHeader;
