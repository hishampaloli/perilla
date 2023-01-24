import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ClientDataArr } from "../../../models/admin";
import { ApproveBankDetailsAction } from "../../action-models";
import { AdminActionsTypes, ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const approveBankDetails =
  (req: any, employeeId: any, status: boolean) =>
  async (dispatch: Dispatch<ApproveBankDetailsAction>, getState: any) => {
    try {
      dispatch({
        type: AdminActionsTypes.APPROVE_BANK_DETAILS_REQUETS,
      });

      const { data } = await buildClient(req).patch<any>(
        `/api/user/employee/bankStatus/${employeeId}?status=${status}`,
        config
      );

      getState().employeeProfile.data.data.bankDetails.approvalReq = false;
      getState().employeeProfile.data.data.bankDetails.isApproved = status;

      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS,
        payload: getState().employeeProfile.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.APPROVE_BANK_DETAILS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };
