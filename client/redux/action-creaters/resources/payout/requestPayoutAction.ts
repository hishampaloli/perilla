import { RequestPayoutAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { requestPayout__API } from "../../../../api";

export const requestPayout =
  (req: any) =>
  async (
    dispatch: Dispatch<RequestPayoutAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.REQUEST_PAYOUT_REQUEST });

      const { data } = await requestPayout__API(req);

      getState().allPayouts.data.data.unshift(data.data);
      dispatch({
        type: ResourceActionTypes.GET_ALL_PAYOUTS_SUCCESS,
        payload: getState().allPayouts.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.REQUEST_PAYOUT_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
