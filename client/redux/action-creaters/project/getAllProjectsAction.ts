import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { ProjectDataArr } from "../../../models/project";
import { GetAllProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getAllProjects =
  (req: any, status: string = "pending") =>
  async (dispatch: Dispatch<GetAllProjectsAction>) => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_ALL_PROJECTS_REQUEST,
      });

      const { data } = await buildClient(req).get<ProjectDataArr>(
        `${projectService_Url}/project/allProjects?status=${status}`,
        config
      );

      console.log(data);

      dispatch({
        type: ProjectActionsTypes.GET_ALL_PROJECTS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_ALL_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
