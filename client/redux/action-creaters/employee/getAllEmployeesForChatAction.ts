import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { GetAllEmployeesForChatAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { getAllChatEmployees__API } from "../../../api";

export const getAllEmployeeForChat =
  (req: any, name: string) =>
  async (dispatch: Dispatch<GetAllEmployeesForChatAction>) => {
    try {
      dispatch({
        type: EmployeeActionsTypes.GET_ALL_EMPLOYEES_FOR_CHAT_REQUEST,
      });

      const { data } = await getAllChatEmployees__API(req, name);

      dispatch({
        type: EmployeeActionsTypes.GET_ALL_EMPLOYEES_FOR_CHAT_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: EmployeeActionsTypes.GET_ALL_EMPLOYEES_FOR_CHAT_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
