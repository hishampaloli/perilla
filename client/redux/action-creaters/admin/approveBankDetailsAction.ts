import { Dispatch } from "react";
import { approveBankDetails__API } from "../../../api";
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

      const { data } = await approveBankDetails__API(req, employeeId, status);

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
    }
  };
