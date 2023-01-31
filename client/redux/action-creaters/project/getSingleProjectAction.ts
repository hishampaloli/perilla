import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { ProjectDataObj } from "../../../models/project";
import { GetSingleProjectAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getSingleProject =
  (req: any, projectId: string | string[]) =>
  async (dispatch: Dispatch<GetSingleProjectAction>) => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_REQUEST,
      });

      const { data } = await buildClient(req).get<ProjectDataObj>(
        `${projectService_Url}/project/${projectId}`,
        config
      );

      console.log(data);

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
