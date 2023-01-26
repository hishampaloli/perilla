import React, { useEffect } from "react";
import style from "../../styles/notification.module.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import NotificationListComponent from "./NotificationListComponent";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetMyNotifications, NotificationData } from "../../models/profile";
import Spinner from "../layout/SpinnerComponent";
import { useActions } from "../../hooks/useAction";
import NoDataCopmonent from "../layout/NoDataCopmonent";

const NotificationComponent = ({
  setNoti,
  data,
}: {
  setNoti: any;
  data: any;
}) => {

  return (
    <div className={style.notificationMain}>
      <div onClick={() => setNoti(false)} className={style.clsBtn}>
        <HighlightOffIcon />
      </div>
      <h1>Notifications</h1>

      {data?.map((el: NotificationData) => {
        return <NotificationListComponent notification={el} />;
      })}
      {!data?.length && <NoDataCopmonent text="" />}
    </div>
  );
};

export default NotificationComponent;
