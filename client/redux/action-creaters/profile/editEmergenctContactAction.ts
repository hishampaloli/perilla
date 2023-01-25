import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { EditEmergencyContactAction } from "../../action-models";
import { EmployeeActionsTypes, ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const editEmergencyContact =
  (req: any, emergencyData: any) =>
  async (
    dispatch: Dispatch<EditEmergencyContactAction>,
    getState: any
  ): Promise<any> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_REQUETS,
      });

      const { data } = await buildClient(req).patch<any>(
        `/api/user/employee/addEmergencyContact`,
        emergencyData,
        config
      );

      console.log(data);
      console.log('((((((((((((((((((((((((((9');
      
      console.log(getState().myProfile.data.data);
      
      getState().myProfile.data.data.emergencyContact.primary =
        emergencyData.primary;
      getState().myProfile.data.data.emergencyContact.secondary =
        emergencyData.secondary

      dispatch({
        type: ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_SUCCESS,
      });

      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_SUCCESS,
        payload: getState().myProfile.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
