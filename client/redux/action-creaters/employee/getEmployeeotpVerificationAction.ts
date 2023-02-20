import { GetEmployeeLoginVerificationAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { getEmployeeOtpVerfication__API } from "../../../api";

export const getEmployeeOtpVerfication =
  (req: any, loginData: any) =>
  async (dispatch: Dispatch<GetEmployeeLoginVerificationAction>): Promise<string> => {
    try {
      dispatch({ type: EmployeeActionsTypes.GET_OTP_VERIFICATION_REQUETS });

      const { data } = await getEmployeeOtpVerfication__API(req, loginData);

      localStorage.setItem("employeeInfo", JSON.stringify(data));

      dispatch({ type: EmployeeActionsTypes.GET_OTP_VERIFICATION_SUCCESS });
      dispatch({
        type: EmployeeActionsTypes.EMPLOYEE_LOGIN_SUCCESS,
        payload: data.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: EmployeeActionsTypes.GET_OTP_VERIFICATION_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
