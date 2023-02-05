import { Dispatch } from "react";
import { addEmployee__API } from "../../../api";
import { AddEmploteeAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const addEmployee =
  (req: any, employeeDetails: object) =>
  async (dispatch: Dispatch<AddEmploteeAction>, getState: any) => {
    try {
      dispatch({
        type: AdminActionsTypes.ADD_EMPLOYEE_REQUEST,
      });

      const { data } = await addEmployee__API(req, employeeDetails);

      getState().allEmployees.data.data.push(data.data);
      dispatch({
        type: AdminActionsTypes.GET_ALL_EMPLOYEE_SUCCESS,
        payload: getState().allEmployees.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.ADD_EMPLOYEE_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
