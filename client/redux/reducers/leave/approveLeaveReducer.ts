import { ApproveLeaveState } from "../../../models/Leave";
import { ApproveLeaveAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";

export const approveLeaveReducer = (
  state: ApproveLeaveState = { loading: false, error: null },
  action: ApproveLeaveAction
): ApproveLeaveState => {
  switch (action.type) {
    case LeaveActionTypes.APPROVE_LEAVE_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case LeaveActionTypes.VIEW_SINGLE_LEAVE_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case LeaveActionTypes.APPROVE_LEAVE_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
