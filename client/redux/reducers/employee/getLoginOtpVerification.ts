import { GetEmployeeOtpVerificationState } from "../../../models/employee";
import { GetEmployeeLoginVerificationAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";

export const getLoginOtpVerificationReducer = (
  state: GetEmployeeOtpVerificationState = { loading: false, error: null },
  action: GetEmployeeLoginVerificationAction
): GetEmployeeOtpVerificationState => {
  switch (action.type) {
    case EmployeeActionsTypes.GET_OTP_VERIFICATION_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case EmployeeActionsTypes.GET_OTP_VERIFICATION_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case EmployeeActionsTypes.GET_OTP_VERIFICATION_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
