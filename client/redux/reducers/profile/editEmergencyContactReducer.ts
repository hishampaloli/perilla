import { EditEmergencyContactState } from "../../../models/profile";
import { EditEmergencyContactAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const EditEmergencyContactReducer = (
  state: EditEmergencyContactState = { loading: false, error: null },
  action: EditEmergencyContactAction
): EditEmergencyContactState => {
  switch (action.type) {
    case ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    case ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};
