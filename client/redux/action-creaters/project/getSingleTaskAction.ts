import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { TaskDataObj } from "../../../models/project";
import { GetSingleTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getSingleTask =
  (req: any, taskId: string | string[]) =>
  async (dispatch: Dispatch<GetSingleTaskAction>) => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_REQUEST,
      });

      const { data } = await buildClient(req).get<TaskDataObj>(
        `${projectService_Url}/task/singleTask/${taskId}`,
        config
      );

      console.log(data);

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
