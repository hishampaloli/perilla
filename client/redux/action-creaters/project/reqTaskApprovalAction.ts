import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { ProjectDataObj } from "../../../models/project";
import { ReqTaskApprovalAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const requestTaskApproval =
  (req: any, taskId: any) =>
  async (dispatch: Dispatch<ReqTaskApprovalAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.REQ_TASK_APPROVAL_REQUEST,
      });

      const { data } = await buildClient(req).patch<any>(
        `${projectService_Url}/task/isCompleted/${taskId}`,

        config
      );

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
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
