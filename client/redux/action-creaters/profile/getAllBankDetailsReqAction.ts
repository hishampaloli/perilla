import { Dispatch } from "react";
import { editallBankDetailsData__API } from "../../../api";
import { GetAllBankDetailsReqAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const getAllBankDetailsData =
  (req: any, pageNumber: number = 1) =>
  async (dispatch: Dispatch<GetAllBankDetailsReqAction>): Promise<void> => {
    try {
      dispatch({
        type: AdminActionsTypes.GET_ALL_BANK_DETAILS_REQUETS,
      });

      const { data } = await editallBankDetailsData__API(req, pageNumber);

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
