import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { CompleteProjectState, ProjectDataObj } from "../../../models/project";
import { CompleteProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const completeProject =
  (req: any, status: string, projectId: any) =>
  async (dispatch: Dispatch<CompleteProjectsAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.COMPLETE_PROJECTS_REQUEST,
      });

      const { data } = await buildClient(req).patch<ProjectDataObj>(
        `${projectService_Url}/project/completeProject/${projectId}?status=${status}`,
        config
      );

      getState().singleProject.data.data.status = status;

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS,
        payload: getState().singleProject.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.COMPLETE_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
