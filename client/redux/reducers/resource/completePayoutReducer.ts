import { CompletePayoutsState } from "../../../models/resources";
import { CompletePayoutAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const completePayoutReducer = (
  state: CompletePayoutsState = { loading: false, error: null },
  action: CompletePayoutAction
): CompletePayoutsState => {
  switch (action.type) {
    case ResourceActionTypes.COMPLETE_PAYOUT_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.GET_ALL_PAYOUTS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.COMPLETE_PAYOUT_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
