import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { CreateProjectData, ProjectDataObj } from "../../../models/project";
import { CreateProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";
import { createProjects__API } from "../../../api";

export const createProjects =
  (req: any, projectData: CreateProjectData) =>
  async (
    dispatch: Dispatch<CreateProjectsAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.CREATE_PROJECTS_REQUEST,
      });

      const { data } = await createProjects__API(req, projectData);

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
      console.log(error?.response?.data?.error?.msg);
      return error?.response?.data?.error?.msg?.message;
    }
  };
