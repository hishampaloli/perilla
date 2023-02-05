import { Dispatch } from "react";
import { GetSingleProjectAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { getSingleProject__API } from "../../../api";

export const getSingleProject =
  (req: any, projectId: string | string[]) =>
  async (dispatch: Dispatch<GetSingleProjectAction>): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_REQUEST,
      });

      const { data } = await getSingleProject__API(req, projectId);

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
