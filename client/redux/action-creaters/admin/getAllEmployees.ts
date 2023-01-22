import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import {
  AllEmployeesState,
  EmployeeData,
  EmployeeDataArray,
} from "../../../models/admin";
import { GetAllEmployeeAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getAllEmployees =
  (req: any, role: string) =>
  async (dispatch: Dispatch<GetAllEmployeeAction>) => {
    try {
      dispatch({
        type: AdminActionsTypes.GET_ALL_EMPLOYEE_REQUEST,
      });

      const { data } = await buildClient(req).get<EmployeeDataArray>(
        `/api/user/employee/getAllEmployees?role=${role}`,
        config
      );

      

      dispatch({
        type: AdminActionsTypes.GET_ALL_EMPLOYEE_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.GET_ALL_EMPLOYEE_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };
