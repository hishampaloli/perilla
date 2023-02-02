import { RequestTaskApprovalState } from "../../../models/project";
import { ReqTaskApprovalAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const reqTaskApprovalReducer = (
  state: RequestTaskApprovalState = { loading: false, error: null },
  action: ReqTaskApprovalAction
): RequestTaskApprovalState => {
  switch (action.type) {
    case ProjectActionsTypes.REQ_TASK_APPROVAL_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.REQ_TASK_APPROVAL_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
