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
  ): Promise<any> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_PERSONALINFO_REQUETS,
      });

      const { data } = await buildClient(req).patch<any>(
        `/api/user/employee/addPersonalInfo`,
        personalData,
        config
      );

      console.log(data);
      getState().myProfile.data.data.personalInformation.employementOfPartner =
        personalData.employementOfPartner;
      getState().myProfile.data.data.personalInformation.martialStatus =
        personalData.martialStatus;
      getState().myProfile.data.data.personalInformation.nationality =
        personalData.nationality;
      getState().myProfile.data.data.personalInformation.noOfChildren =
        personalData.noOfChildren;
      getState().myProfile.data.data.personalInformation.passportNumber =
        personalData.passportNumber;
      getState().myProfile.data.data.personalInformation.religion =
        personalData.religion;

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
