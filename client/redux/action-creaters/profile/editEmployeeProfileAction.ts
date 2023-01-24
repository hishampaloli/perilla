import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { EmployeeProfileDataObj } from "../../../models/profile";
import { EditEmployeeProfileAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const editEmployeeProfile =
  (
    req: any,
    id: string,
    employeeData: {
      name: string;
      email: string;
      phone?: number;
      designation: string;
      role: string;
      employeeId: string;
    }
  ) =>
  async (
    dispatch: Dispatch<EditEmployeeProfileAction>,
    getState: any
  ): Promise<any> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_REQUETS,
      });

      const { data } = await buildClient(req).put<EmployeeProfileDataObj>(
        `/api/user/employee/edit/${id}`,
        employeeData,
        config
      );

      

      getState().employeeProfile.data.data.name = employeeData.name;
      getState().employeeProfile.data.data.email = employeeData.email;
      getState().employeeProfile.data.data.phone = employeeData.phone;
      getState().employeeProfile.data.data.designation =
        employeeData.designation;
      getState().employeeProfile.data.data.role = employeeData.role;
      getState().employeeProfile.data.data.employeeId = employeeData.employeeId;

      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS,
        payload: getState().employeeProfile.data,
      });

      dispatch({
        type: ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_SUCCESS,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
