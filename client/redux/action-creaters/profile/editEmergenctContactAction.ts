import { Dispatch } from "react";
import { editEmergencyContact__API } from "../../../api";
import { EditEmergencyContactAction } from "../../action-models";
import { EmployeeActionsTypes, ProfileActionsTypes } from "../../constants";

export const editEmergencyContact =
  (req: any, emergencyData: any) =>
  async (
    dispatch: Dispatch<EditEmergencyContactAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_REQUETS,
      });

      await editEmergencyContact__API(req, emergencyData);

      getState().myProfile.data.data.emergencyContact.primary =
        emergencyData.primary;
      getState().myProfile.data.data.emergencyContact.secondary =
        emergencyData.secondary;

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
