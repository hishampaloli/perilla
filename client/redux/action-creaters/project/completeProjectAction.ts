import { Dispatch } from "react";
import { CompleteProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { completeProject__API } from "../../../api";

export const completeProject =
  (req: any, status: string, projectId: any) =>
  async (
    dispatch: Dispatch<CompleteProjectsAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.COMPLETE_PROJECTS_REQUEST,
      });

      await completeProject__API(req, status, projectId);

      getState().singleProject.data.data.status = status;

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS,
        payload: getState().singleProject.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.COMPLETE_PROJECTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
