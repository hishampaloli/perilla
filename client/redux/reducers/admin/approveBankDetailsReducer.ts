import { ApproveBankDetailsState } from "../../../models/admin";
import { ApproveBankDetailsAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const approveBankDetailsReducer = (
  state: ApproveBankDetailsState = { loading: false, error: null },
  action: ApproveBankDetailsAction
): ApproveBankDetailsState => {
  switch (action.type) {
    case AdminActionsTypes.APPROVE_BANK_DETAILS_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case AdminActionsTypes.APPROVE_BANK_DETAILS_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
