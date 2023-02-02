import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { ProjectDataObj } from "../../../models/project";
import { ApproveTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const approvedTask =
  (req: any, taskId: any, status: boolean) =>
  async (dispatch: Dispatch<ApproveTaskAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.APPROVE_TASK_REQUEST,
      });

      const { data } = await buildClient(req).patch<any>(
        `${projectService_Url}/task/approveTask/${taskId}?status=${status}`,

        config
      );

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
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
