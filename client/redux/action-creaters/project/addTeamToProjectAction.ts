import { Dispatch } from "react";
import { AddTeamToProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { addTeamToProject__API } from "../../../api";

export const addTeamToProject =
  (req: any, employeeId: string, projectId: string) =>
  async (
    dispatch: Dispatch<AddTeamToProjectsAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.ADD_TEAM_TO_PROJECTS_REQUEST,
      });

      const { data } = await addTeamToProject__API(req, employeeId, projectId);

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

      return error?.response?.data?.error?.msg;
    }
  };
