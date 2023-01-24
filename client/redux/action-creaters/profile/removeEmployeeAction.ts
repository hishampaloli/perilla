import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { RemoveEmployeeAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const removeEmployee =
  (req: any, id: any) =>
  async (dispatch: Dispatch<RemoveEmployeeAction>, getState: any) => {
    try {
      dispatch({
        type: ProfileActionsTypes.REMOVE_EMPLOYEE_PROFILE_REQUETS,
      });

      const { data } = await buildClient(req).patch<any>(
        `/api/user/employee/remove/${id}`,
        config
      );

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
    }
  };
