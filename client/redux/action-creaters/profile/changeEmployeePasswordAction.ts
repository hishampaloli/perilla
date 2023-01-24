import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ClientData, CLientDataObj } from "../../../models/admin";
import { ChangeEmployeePasswordState } from "../../../models/profile";
import { ChangeEmployeePasswordAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const changeEmployeePassword =
  (req: any, id: string, password: any) =>
  async (
    dispatch: Dispatch<ChangeEmployeePasswordAction>,
    getState: any
  ): Promise<any> => {
    try {
      dispatch({
        type: ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_REQUEST,
      });

      const { data } = await buildClient(req).patch<any>(
        `/api/user/employee/changePassword/${id}`,
        password,
        config
      );

      console.log(data);
      console.log("()()()()()()()()()()()()(");

      dispatch({
        type: ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_SUCCESS,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
