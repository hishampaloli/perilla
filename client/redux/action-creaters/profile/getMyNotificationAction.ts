import { Dispatch } from "react";
import { GetMyNotifications__API } from "../../../api";
import { GetNotificationAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const GetMyNotifications =
  (req: any) =>
  async (dispatch: Dispatch<GetNotificationAction>): Promise<void> => {
    try {
      dispatch({
        type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_REQUETS,
      });

      const { data } = await GetMyNotifications__API(req);

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
