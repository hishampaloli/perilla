import { GetLeaveReqState } from "../../../models/Leave";
import { GetLeaveReqAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";

export const getLeaveReqReducer = (
  state: GetLeaveReqState = { data: null, loading: false, error: null },
  action: GetLeaveReqAction
): GetLeaveReqState => {
  switch (action.type) {
    case LeaveActionTypes.GET_LEAVE_REQUEST_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case LeaveActionTypes.GET_LEAVE_REQUEST_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case LeaveActionTypes.GET_LEAVE_REQUEST_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
