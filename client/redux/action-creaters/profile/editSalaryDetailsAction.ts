import { Dispatch } from "react";
import { editSalaryDetails__API } from "../../../api";
import { SalaryDetailsData } from "../../../models/profile";
import { EditSalaryDetailsAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const editSalaryDetails =
  (req: any, id: string, salaryDetails: SalaryDetailsData) =>
  async (
    dispatch: Dispatch<EditSalaryDetailsAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_SALARY_DETAILS_REQUETS,
      });

      const { data } = await editSalaryDetails__API(req, id, salaryDetails);

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
