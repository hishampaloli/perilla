import { GetEmployeeOtpState } from "../../../models/employee";
import { GetEmployeeLoginOtpAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";

export const getLoginOtpReducer = (
  state: GetEmployeeOtpState = { loading: false, error: null },
  action: GetEmployeeLoginOtpAction
): GetEmployeeOtpState => {
  switch (action.type) {
    case EmployeeActionsTypes.GET_OTP_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case EmployeeActionsTypes.GET_OTP_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case EmployeeActionsTypes.GET_OTP_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
