import { Dispatch } from "react";
import { ReqTaskApprovalAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { requestTaskApproval__API } from "../../../api";

export const requestTaskApproval =
  (req: any, taskId: any) =>
  async (
    dispatch: Dispatch<ReqTaskApprovalAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.REQ_TASK_APPROVAL_REQUEST,
      });

      await requestTaskApproval__API(req, taskId);

      getState().singleTask.data.data.isCompleted = true;

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS,
        payload: getState().singleTask.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.REQ_TASK_APPROVAL_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
