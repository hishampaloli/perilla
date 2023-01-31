import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { EmployeeProfileDataObj } from "../../../models/profile";
import { GetEmployeeProfileAction } from "../../action-models";
import { EmployeeActionsTypes, ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getEmployeeProfileData =
  (req: any, phone: any) =>
  async (dispatch: Dispatch<GetEmployeeProfileAction>) => {
    try {
      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_REQUETS,
      });

      const { data } = await buildClient(req).get<EmployeeProfileDataObj>(
        `/api/user/employee/getEmployee?phone=${phone}`,
        config
      );

      console.log(data);

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
