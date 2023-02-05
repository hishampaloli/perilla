import { Dispatch } from "react";
import { GetTaskUnderProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { getTaskUnderProject__API } from "../../../api";

export const getTaskUnderProject =
  (req: any, projectId: string | string[], status: boolean) =>
  async (dispatch: Dispatch<GetTaskUnderProjectsAction>): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_REQUEST,
      });

      const { data } = await getTaskUnderProject__API(req, projectId, status);

      dispatch({
        type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
