import { AllBankDetailsRequestState } from "../../../models/profile";
import { GetAllBankDetailsReqAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const getAllBankDetailsReqReducer = (
  state: AllBankDetailsRequestState = {
    data: null,
    loading: false,
    error: null,
  },
  action: GetAllBankDetailsReqAction
): AllBankDetailsRequestState => {
  switch (action.type) {
    case ProfileActionsTypes.GET_ALL_BANK_DETAILS_REQUETS:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case ProfileActionsTypes.GET_ALL_BANK_DETAILS_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case ProfileActionsTypes.GET_ALL_BANK_DETAILS_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
