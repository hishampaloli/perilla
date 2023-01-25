import { EditBankDetailsState } from "../../../models/profile";
import { EditBankDetailsAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const EditBankDetailsReducer = (
  state: EditBankDetailsState = { loading: false, error: null },
  action: EditBankDetailsAction
): EditBankDetailsState => {
  switch (action.type) {
    case ProfileActionsTypes.EDIT_BANK_DETAILS_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.EDIT_BANK_DETAILS_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case ProfileActionsTypes.EDIT_BANK_DETAILS_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
