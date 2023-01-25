import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { GetEmployeeLoginVerificationAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";

export const getEmployeeOtpVerfication =
  (req: any, loginData: any) =>
  async (dispatch: Dispatch<GetEmployeeLoginVerificationAction>) => {
    try {
      dispatch({ type: EmployeeActionsTypes.GET_OTP_VERIFICATION_REQUETS });

      const { data } = await buildClient(req).post<string>(
        "/api/user/employee/verifyOtp",
        loginData,
        config
      );

      dispatch({ type: EmployeeActionsTypes.GET_OTP_VERIFICATION_SUCCESS });

      return "success";
    } catch (error: any) {
      dispatch({
        type: EmployeeActionsTypes.GET_OTP_VERIFICATION_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
