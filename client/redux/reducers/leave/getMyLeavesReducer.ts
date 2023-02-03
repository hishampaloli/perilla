import { GetMyLeavesState } from "../../../models/Leave";
import { GetMyLeavesAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";

export const getMyLeavesReducer = (
  state: GetMyLeavesState = { data: null, loading: false, error: null },
  action: GetMyLeavesAction
): GetMyLeavesState => {
  switch (action.type) {
    case LeaveActionTypes.GET_MY_LEAVES_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case LeaveActionTypes.GET_MY_LEAVES_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case LeaveActionTypes.GET_MY_LEAVES_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
