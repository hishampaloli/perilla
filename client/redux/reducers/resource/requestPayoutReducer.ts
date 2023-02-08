import { RequestPayoutState } from "../../../models/resources";
import { RequestPayoutAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const requestPayoutReducer = (
  state: RequestPayoutState = { loading: false, error: null },
  action: RequestPayoutAction
): RequestPayoutState => {
  switch (action.type) {
    case ResourceActionTypes.REQUEST_PAYOUT_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.GET_ALL_PAYOUTS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.REQUEST_PAYOUT_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
