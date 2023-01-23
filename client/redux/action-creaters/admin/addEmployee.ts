import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { EmployeeDataObj } from "../../../models/admin";
import { AddEmploteeAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const addEmployee =
  (req: any, employeeDetails: object) =>
  async (dispatch: Dispatch<AddEmploteeAction>, getState: any) => {
    try {
      dispatch({
        type: AdminActionsTypes.ADD_EMPLOYEE_REQUEST,
      });

      const { data } = await buildClient(req).post<EmployeeDataObj>(
        `/api/user/employee/createEmployee`,
        employeeDetails,
        config
      );

      getState().allEmployees.data.data.push(data.data);
      dispatch({
        type: AdminActionsTypes.GET_ALL_EMPLOYEE_SUCCESS,
        payload: getState().allEmployees.data,
      });

      console.log(getState().allEmployees.data);

      return "success";
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.ADD_EMPLOYEE_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
