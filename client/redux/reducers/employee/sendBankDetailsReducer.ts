import { SendbankDetailsForAprovalState } from "../../../models/employee";
import { SendbankDetailsAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";

export const sendBankDetailsReducer = (
  state: SendbankDetailsForAprovalState = { loading: false, error: null },
  action: SendbankDetailsAction
): SendbankDetailsForAprovalState => {
  switch (action.type) {
    case EmployeeActionsTypes.SENT_BANKDETAILS_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case EmployeeActionsTypes.SENT_BANKDETAILS_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case EmployeeActionsTypes.SENT_BANKDETAILS_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
