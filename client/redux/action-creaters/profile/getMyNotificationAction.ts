import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { NotificationDataArr } from "../../../models/profile";
import { GetNotificationAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const GetMyNotifications =
  (req: any) => async (dispatch: Dispatch<GetNotificationAction>) => {
    try {
      dispatch({
        type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_REQUETS,
      });

      const { data } = await buildClient(req).get<NotificationDataArr>(
        `/api/user/employee/notifications`,
        config
      );

      console.log(data);
      console.log("90909()()()()()");

      dispatch({
        type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
    }
  };
