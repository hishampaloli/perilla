import { GetMyNotifications } from "../../../models/profile";
import { GetNotificationAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const getMyNotificationReducer = (
  state: GetMyNotifications = { data: null, loading: false, error: null },
  action: GetNotificationAction
): GetMyNotifications => {
  switch (action.type) {
    case ProfileActionsTypes.GET_MY_NOTIFICATIONS_REQUETS:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case ProfileActionsTypes.GET_MY_NOTIFICATIONS_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case ProfileActionsTypes.GET_MY_NOTIFICATIONS_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
