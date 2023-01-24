import { EditClientState } from "../../../models/profile";
import { EditClientAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const EditClientReducer = (
  state: EditClientState = { loading: false, error: null },
  action: EditClientAction
): EditClientState => {
  switch (action.type) {
    case ProfileActionsTypes.EDIT_CLIENT_PROFILE_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.GET_CLIENT_PROFILE_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case ProfileActionsTypes.EDIT_CLIENT_PROFILE_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
