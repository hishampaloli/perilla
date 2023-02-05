import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import {
  GetSingleProjectState,
  ProjectDataObj,
  EditProjectData,
} from "../../../models/project";
import { EditProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";
import { editProjects__API } from "../../../api";

export const editProjects =
  (req: any, projectData: EditProjectData, projectId: string) =>
  async (dispatch: Dispatch<EditProjectsAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.EDIT_PROJECTS_REQUEST,
      });

      const { data } = await editProjects__API(req, projectData, projectId);

      getState().singleProject.data.data = data.data;

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS,
        payload: getState().singleProject.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.EDIT_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
