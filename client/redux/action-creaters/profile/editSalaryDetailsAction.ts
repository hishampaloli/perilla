import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import {
  SalaryDetailsDataObj,
  SalaryDetailsData,
} from "../../../models/profile";
import { EditSalaryDetailsState } from "../../../models/profile";
import { EditSalaryDetailsAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const editSalaryDetails =
  (req: any, id: string, salaryDetails: SalaryDetailsData) =>
  async (
    dispatch: Dispatch<EditSalaryDetailsAction>,
    getState: any
  ): Promise<any> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_SALARY_DETAILS_REQUETS,
      });

      const { data } = await buildClient(req).put<SalaryDetailsDataObj>(
        `/api/user/employee/salaryDetails/${id}`,
        salaryDetails,
        config
      );

      getState().employeeProfile.data.data.salaryDetails = data.data;

      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS,
        payload: getState().employeeProfile.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.EDIT_SALARY_DETAILS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
