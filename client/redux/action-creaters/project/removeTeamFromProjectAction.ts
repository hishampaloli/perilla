import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import {
  EmployeeData,
  GetSingleProjectState,
  ProjectDataObj,
} from "../../../models/project";
import { RemoveTeamFromProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const removeTeamFromProject =
  (req: any, employeeId: string, projectId: any) =>
  async (dispatch: Dispatch<RemoveTeamFromProjectsAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.REMOVE_TEAM_FROM_PROJECTS_REQUEST,
      });

      const { data } = await buildClient(req).put<ProjectDataObj>(
        `${projectService_Url}/project/removeTeam/${projectId}`,
        { employeeId },
        config
      );
console.log(data);

      getState().singleProject.data.data.team =
        getState().singleProject.data.data.team.filter((el: EmployeeData) => {
          return el.id !== employeeId;
        });

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS,
        payload: getState().singleProject.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.REMOVE_TEAM_FROM_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
