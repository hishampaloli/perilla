import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ClientData, CLientDataObj } from "../../../models/admin";
import { DeleteMyNotificationsState } from "../../../models/profile";
import { DeleteNotificationAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const deleteNotification =
  (req: any, id: string) =>
  async (
    dispatch: Dispatch<DeleteNotificationAction>,
    getState: any
  ): Promise<any> => {
    try {
      dispatch({
        type: ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_REQUETS,
      });

      const { data } = await buildClient(req).delete<any>(
        `/api/user/employee/notifications/${id}`,
        config
      );

      getState().notification.data.data =
        getState().notification.data.data.filter((el: any) => {
          return el.id !== id;
        });

      dispatch({
        type: ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_SUCCESS,
      });

      dispatch({
        type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_SUCCESS,
        payload: getState().notification.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
