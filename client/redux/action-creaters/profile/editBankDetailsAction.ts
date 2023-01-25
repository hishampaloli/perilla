import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ClientData, CLientDataObj } from "../../../models/admin";

import { EditBankDetailsAction } from "../../action-models";
import { EmployeeActionsTypes, ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const editBankDetails =
  (req: any, bankData: any) =>
  async (
    dispatch: Dispatch<EditBankDetailsAction>,
    getState: any
  ): Promise<any> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_BANK_DETAILS_REQUETS,
      });

      const { data } = await buildClient(req).put<any>(
        `/api/user/employee/editBankDetails`,
        bankData,
        config
      );

      console.log(data);
      console.log("***************");
      getState().myProfile.data.data.bankDetails.bankName = bankData.bankName;
      getState().myProfile.data.data.bankDetails.accountNumber =
        bankData.accountNumber;
      getState().myProfile.data.data.bankDetails.ifcsCode = bankData.ifcsCode;
      getState().myProfile.data.data.bankDetails.panNumber = bankData.panNumber;

      dispatch({
        type: ProfileActionsTypes.EDIT_BANK_DETAILS_SUCCESS,
      });

      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_SUCCESS,
        payload: getState().myProfile.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.EDIT_BANK_DETAILS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
