import { Dispatch } from "react";
import { getEmployeeProfileData__API } from "../../../api";
import { GetEmployeeProfileAction } from "../../action-models";
import { EmployeeActionsTypes, ProfileActionsTypes } from "../../constants";

export const getEmployeeProfileData =
  (req: any, phone: any) =>
  async (dispatch: Dispatch<GetEmployeeProfileAction>): Promise<void> => {
    try {
      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_REQUETS,
      });

      const { data } = await getEmployeeProfileData__API(req, phone);

      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_FAIL,
        error: [],
      });
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_FAIL,
        error: error?.response?.data?.error?.msg,
      });
    }
  };
