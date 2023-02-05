import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { EditPersonalInfoAction } from "../../action-models";
import { EmployeeActionsTypes, ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const editPersonalInfo =
  (req: any, personalData: any) =>
  async (
    dispatch: Dispatch<EditPersonalInfoAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_PERSONALINFO_REQUETS,
      });

      const { data } = await buildClient(req).patch<any>(
        `/api/user/employee/addPersonalInfo`,
        personalData,
        config
      );

      getState().myProfile.data.data.personalInformation = data.data;

      dispatch({
        type: ProfileActionsTypes.EDIT_PERSONALINFO_SUCCESS,
      });

      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_SUCCESS,
        payload: getState().myProfile.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.EDIT_PERSONALINFO_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
