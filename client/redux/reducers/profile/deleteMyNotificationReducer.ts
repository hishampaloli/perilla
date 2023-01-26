import { DeleteMyNotificationsState } from "../../../models/profile";
import { DeleteNotificationAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const DeleteNotificationReducer = (
  state: DeleteMyNotificationsState = { loading: false, error: null },
  action: DeleteNotificationAction
): DeleteMyNotificationsState => {
  switch (action.type) {
    case ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
