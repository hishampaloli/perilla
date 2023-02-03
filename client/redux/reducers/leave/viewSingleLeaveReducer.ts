import { ViewSingleLeaveState } from "../../../models/Leave";
import { ViewSingleLeaveAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";

export const viewSingleLeaveReducer = (
  state: ViewSingleLeaveState = { data: null, loading: false, error: null },
  action: ViewSingleLeaveAction
): ViewSingleLeaveState => {
  switch (action.type) {
    case LeaveActionTypes.VIEW_SINGLE_LEAVE_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case LeaveActionTypes.VIEW_SINGLE_LEAVE_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case LeaveActionTypes.VIEW_SINGLE_LEAVE_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
