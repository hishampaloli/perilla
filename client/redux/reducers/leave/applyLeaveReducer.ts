import { ApplyLeaveState } from "../../../models/Leave";
import { ApplyLeaveAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";

export const applyLeaveReducer = (
  state: ApplyLeaveState = { loading: false, error: null },
  action: ApplyLeaveAction
): ApplyLeaveState => {
  switch (action.type) {
    case LeaveActionTypes.APPLY_LEAVE_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case LeaveActionTypes.GET_MY_LEAVES_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case LeaveActionTypes.APPLY_LEAVE_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
