import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { CreateProjectData, ProjectDataObj } from "../../../models/project";
import { CreateProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const createProjects =
  (req: any, projectData: CreateProjectData) =>
  async (dispatch: Dispatch<CreateProjectsAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.CREATE_PROJECTS_REQUEST,
      });

      console.log(getState());
      const { data } = await buildClient(req).post<ProjectDataObj>(
        `${projectService_Url}/project/create?status=${status}`,
        projectData,
        config
      );

      getState().allProjects.data.data.push(data.data);
      getState().allProjects.data.data.reverse();

      dispatch({
        type: ProjectActionsTypes.GET_ALL_PROJECTS_SUCCESS,
        payload: getState().allProjects.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.CREATE_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
