import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { GetSingleProjectState, ProjectDataObj } from "../../../models/project";
import { AddTeamToProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const addTeamToProject =
  (req: any, employeeId: string, projectId: any) =>
  async (dispatch: Dispatch<AddTeamToProjectsAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.ADD_TEAM_TO_PROJECTS_REQUEST,
      });

      const { data } = await buildClient(req).put<ProjectDataObj>(
        `${projectService_Url}/project/addTeam/${projectId}`,
        { employeeId },
        config
      );

      getState().singleProject.data.data = data.data;

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS,
        payload: getState().singleProject.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.ADD_TEAM_TO_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
