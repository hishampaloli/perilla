import { Dispatch } from "react";
import { deleteNotification__API } from "../../../api";
import { DeleteNotificationAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const deleteNotification =
  (req: any, id: string) =>
  async (
    dispatch: Dispatch<DeleteNotificationAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_REQUETS,
      });

      await deleteNotification__API(req, id);

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
