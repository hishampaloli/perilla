import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { BankDetailsArr } from "../../../models/profile";
import { GetAllBankDetailsReqAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getAllBankDetailsData =
  (req: any) => async (dispatch: Dispatch<GetAllBankDetailsReqAction>) => {
    try {
      dispatch({
        type: AdminActionsTypes.GET_ALL_BANK_DETAILS_REQUETS,
      });

      const { data } = await buildClient(req).get<BankDetailsArr>(
        `/api/user/employee/allBankReq`,
        config
      );

      console.log(data);
      console.log("90909()()()()()");

      dispatch({
        type: AdminActionsTypes.GET_ALL_BANK_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.GET_ALL_BANK_DETAILS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
    }
  };