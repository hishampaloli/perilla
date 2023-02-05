import { Dispatch } from "react";
import { GetAllProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { getAllMyProjects__API, getAllProjects__API } from "../../../api";

export const getAllProjects =
  (
    req: any,
    {
      status,
      type,
      name = "",
      pageNumber,
    }: { status: string; type: string; name?: string; pageNumber?: number }
  ) =>
  async (dispatch: Dispatch<GetAllProjectsAction>): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_ALL_PROJECTS_REQUEST,
      });

      const { data } =
        type === "hr"
          ? await getAllProjects__API(req, { status, type, name, pageNumber })
          : await getAllMyProjects__API(req, {
              status,
              type,
              name,
              pageNumber,
            });

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
