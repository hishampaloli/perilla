import { GetClientProfileState } from "../../../models/profile";
import { GetClientProfileAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const getClientProfileReducer = (
  state: GetClientProfileState = { data: null, loading: false, error: null },
  action: GetClientProfileAction
): GetClientProfileState => {
  switch (action.type) {
    case ProfileActionsTypes.GET_CLIENT_PROFILE_REQUETS:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case ProfileActionsTypes.GET_CLIENT_PROFILE_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case ProfileActionsTypes.GET_CLIENT_PROFILE_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
