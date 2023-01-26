import React from "react";
import style from "../../styles/notification.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
import {
  DeleteMyNotificationsState,
  NotificationData,
} from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";

const NotificationListComponent = ({
  notification,
}: {
  notification: NotificationData;
}) => {
  const { loading }: DeleteMyNotificationsState = useTypedSelector(
    (state) => state.deleteNotification
  );

  const { deleteNotification } = useActions();

  const handleDelete = async () => {
    const res = await deleteNotification("sd", notification.id);

    if (`${res}` === "success") {
      toast.success("Successfully Updated the password");
    } else {
      toast.error(`${res}`);
    }
  };

  return (
    <div className={style.notificationList}>
      <p>{notification.message}</p>
      <div onClick={handleDelete} className={style.dltIcon}>
        <ClearIcon />
      </div>
    </div>
  );
};

export default NotificationListComponent;
