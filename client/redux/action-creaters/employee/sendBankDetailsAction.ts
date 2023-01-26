import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { SendbankDetailsAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";

export const sendBankDetails =
  (req: any) =>
  async (dispatch: Dispatch<SendbankDetailsAction>, getState: any) => {
    try {
      dispatch({ type: EmployeeActionsTypes.SENT_BANKDETAILS_REQUETS });

      const { data } = await buildClient(req).patch<any>(
        "/api/user/employee/sendBankDetails",
        config
      );

      getState().myProfile.data.data.bankDetails.approvalReq = true;

      dispatch({
        type: EmployeeActionsTypes.SENT_BANKDETAILS_SUCCESS,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: EmployeeActionsTypes.SENT_BANKDETAILS_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };