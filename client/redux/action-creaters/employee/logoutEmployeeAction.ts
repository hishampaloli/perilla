import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { EmployeeLogoutAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { logoutEmployee__API } from "../../../api";

export const logoutEmployee =
  (req: any) => async (dispatch: Dispatch<EmployeeLogoutAction>) => {
    try {
      const { data } = await logoutEmployee__API(req);
      localStorage.removeItem("employeeInfo");

      dispatch({ type: EmployeeActionsTypes.EMPLOYEE_LOGOUT_SUCCESS });

      return "success";
    } catch (error: any) {
      return error.response.data.error.msg;
    }
  };
