import { Dispatch } from "react";
import { changeEmployeePassword__API } from "../../../api";
import { ChangeEmployeePasswordAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const changeEmployeePassword =
  (req: any, id: string, password: any) =>
  async (dispatch: Dispatch<ChangeEmployeePasswordAction>): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_REQUEST,
      });

      await changeEmployeePassword__API(req, id, password);

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
