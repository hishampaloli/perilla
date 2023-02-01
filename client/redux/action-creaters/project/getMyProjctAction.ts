import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import {
  GetSingleProjectState,
  ProjectDataArr,
  ProjectDataObj,
} from "../../../models/project";
import { GetMyProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getMyProjects =
  (req: any, employeeId: string, type: string) =>
  async (dispatch: Dispatch<GetMyProjectsAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_MY_PROJECTS_REQUEST,
      });

      if (type === "employee") {
        let { data } = await buildClient(req).get<ProjectDataArr>(
          `${projectService_Url}/project/projectUnderUser/${employeeId}`,
          config
        );

        dispatch({
          type: ProjectActionsTypes.GET_MY_PROJECTS_SUCCESS,
          payload: data,
        });
      } else {
        let { data } = await buildClient(req).get<ProjectDataArr>(
          `${projectService_Url}/project/projectUnderClient/${employeeId}`,
          config
        );
        console.log(data);

        dispatch({
          type: ProjectActionsTypes.GET_MY_PROJECTS_SUCCESS,
          payload: data,
        });
      }

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_MY_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
