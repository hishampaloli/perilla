import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { GetEmployeeLoginOtpAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { getEmployeeOtp__API } from "../../../api";

export const getEmployeeOtp =
  (req: any, loginData: any) =>
  async (dispatch: Dispatch<GetEmployeeLoginOtpAction>) => {
    try {
      dispatch({ type: EmployeeActionsTypes.GET_OTP_REQUETS });

      await getEmployeeOtp__API(req, loginData);

      dispatch({ type: EmployeeActionsTypes.GET_OTP_SUCCESS });

      return "success";
    } catch (error: any) {
      dispatch({
        type: EmployeeActionsTypes.GET_OTP_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
