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
import { removeTeamFromProject__API } from "../../../api";

export const removeTeamFromProject =
  (req: any, employeeId: string, projectId: any) =>
  async (
    dispatch: Dispatch<RemoveTeamFromProjectsAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.REMOVE_TEAM_FROM_PROJECTS_REQUEST,
      });

      await removeTeamFromProject__API(req, employeeId, projectId);

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
      return error?.response?.data?.error?.msg;
    }
  };
