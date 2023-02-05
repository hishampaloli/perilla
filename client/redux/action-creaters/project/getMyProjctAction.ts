import { Dispatch } from "react";
import { GetMyProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { projectsUnserClient__API, projectsUnserUser__API } from "../../../api";

export const getMyProjects =
  (req: any, employeeId: string, type: string) =>
  async (dispatch: Dispatch<GetMyProjectsAction>): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_MY_PROJECTS_REQUEST,
      });

      let { data } =
        type === "employee"
          ? await projectsUnserUser__API(req, employeeId)
          : await projectsUnserClient__API(req, employeeId);

      dispatch({
        type: ProjectActionsTypes.GET_MY_PROJECTS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_MY_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
