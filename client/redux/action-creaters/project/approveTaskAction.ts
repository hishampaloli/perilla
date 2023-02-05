import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { ProjectDataObj } from "../../../models/project";
import { ApproveTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";
import { approvedTask__API } from "../../../api";

export const approvedTask =
  (req: any, taskId: any, status: boolean) =>
  async (
    dispatch: Dispatch<ApproveTaskAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.APPROVE_TASK_REQUEST,
      });

      await approvedTask__API(req, taskId, status);

      getState().singleTask.data.data.isApproved = status;
      getState().singleTask.data.data.isCompleted = status;

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS,
        payload: getState().singleTask.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.APPROVE_TASK_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
