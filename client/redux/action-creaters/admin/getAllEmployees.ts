import { Dispatch } from "react";
import { getAllEmployees__API } from "../../../api";
import { GetAllEmployeeAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const getAllEmployees =
  (
    req: any,
    {
      role,
      name = "",
      employeeId = "",
      pageNumber = 1,
    }: { role: string; name?: string; employeeId?: string; pageNumber?: number }
  ) =>
  async (dispatch: Dispatch<GetAllEmployeeAction>) => {
    console.log(pageNumber);

    try {
      dispatch({
        type: AdminActionsTypes.GET_ALL_EMPLOYEE_REQUEST,
      });

      const { data } = await getAllEmployees__API(req, {
        role,
        name,
        employeeId,
        pageNumber,
      });

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
    }
  };
