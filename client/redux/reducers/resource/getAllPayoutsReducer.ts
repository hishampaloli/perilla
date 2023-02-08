import { GetAllPayoutsState } from "../../../models/resources";
import { GetAllPayoutsAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const getAllPayoutsReducer = (
  state: GetAllPayoutsState = { data: null, loading: false, error: null },
  action: GetAllPayoutsAction
): GetAllPayoutsState => {
  switch (action.type) {
    case ResourceActionTypes.GET_ALL_PAYOUTS_REQUEST:
      return {
        loading: true,
        error: null,
        data: null
      };

    case ResourceActionTypes.GET_ALL_PAYOUTS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      };

    case ResourceActionTypes.GET_ALL_PAYOUTS_FAIL:
      return {
        loading: false,
        error: action.error,
        data: null
      };

    default:
      return state;
  }
};
