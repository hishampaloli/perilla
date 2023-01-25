import { EditPersonalInfoState } from "../../../models/profile";
import { EditPersonalInfoAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const EditPersonalInfoReducer = (
  state: EditPersonalInfoState = { loading: false, error: null },
  action: EditPersonalInfoAction
): EditPersonalInfoState => {
  switch (action.type) {
    case ProfileActionsTypes.EDIT_PERSONALINFO_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.EDIT_PERSONALINFO_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case ProfileActionsTypes.EDIT_PERSONALINFO_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
