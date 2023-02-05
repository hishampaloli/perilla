import { Dispatch } from "react";
import { removeEmployee__API } from "../../../api";
import buildClient from "../../../api/buildClient";
import { RemoveEmployeeAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const removeEmployee =
  (req: any, id: any) =>
  async (
    dispatch: Dispatch<RemoveEmployeeAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.REMOVE_EMPLOYEE_PROFILE_REQUETS,
      });

      const { data } = await removeEmployee__API(req, id);

      getState().employeeProfile.data.data.isBlocked = true;

      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS,
        payload: getState().employeeProfile.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.REMOVE_EMPLOYEE_PROFILE_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
