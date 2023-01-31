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

export const editProjects =
  (req: any, projectData: EditProjectData, projectId: string) =>
  async (dispatch: Dispatch<EditProjectsAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.EDIT_PROJECTS_REQUEST,
      });

      const { data } = await buildClient(req).put<ProjectDataObj>(
        `${projectService_Url}/project/${projectId}`,
        projectData,
        config
      );
      console.log(data);

      getState().singleProject.data.data = data.data;
      console.log(getState().singleProject.data);

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
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
