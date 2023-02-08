import { CompletePayoutAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { completePayout_API } from "../../../../api";
import { ExpenseData } from "../../../../models/resources";

export const completePayout =
  (req: any, payoutId: string) =>
  async (
    dispatch: Dispatch<CompletePayoutAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.COMPLETE_PAYOUT_REQUEST });

      const { data } = await completePayout_API("", payoutId);

      getState().allPayouts.data.data = getState().allPayouts.data.data.filter(
        (el: ExpenseData) => {
          return el.id !== payoutId;
        }
      );
      getState().allPayouts.data.data.unshift(data.data);
      dispatch({
        type: ResourceActionTypes.GET_ALL_PAYOUTS_SUCCESS,
        payload: getState().allPayouts.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.COMPLETE_PAYOUT_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
