import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { TaskDataArr } from "../../../models/project";
import { GetTaskUnderProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getTaskUnderProject =
  (req: any, projectId: string | string[], status: boolean) =>
  async (dispatch: Dispatch<GetTaskUnderProjectsAction>) => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_REQUEST,
      });

      console.log(
        `${projectService_Url}/task/allProjectTask/${projectId}?isApproved=${status}`
      );

      const { data } = await buildClient(req).get<TaskDataArr>(
        `${projectService_Url}/task/allProjectTask/${projectId}?isApproved=${status}`,
        config
      );

      console.log(data);

      dispatch({
        type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
