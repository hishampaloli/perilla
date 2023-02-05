import { Dispatch } from "react";
import { editBankDetails__API } from "../../../api";
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
  ): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_BANK_DETAILS_REQUETS,
      });

      await editBankDetails__API(req, bankData);

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
