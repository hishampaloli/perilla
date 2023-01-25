import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { EmployeeLogoutAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";

export const logoutEmployee =
  (req: any) => async (dispatch: Dispatch<EmployeeLogoutAction>) => {
    try {
      const { data } = await buildClient(req).post<any>(
        "/api/user/employee/logout",
        config
      );

      localStorage.removeItem("employeeInfo");

      dispatch({ type: EmployeeActionsTypes.EMPLOYEE_LOGOUT_SUCCESS });

      return "success";
    } catch (error: any) {
      console.log(error);

      return error.response.data.error.msg;
    }
  };
