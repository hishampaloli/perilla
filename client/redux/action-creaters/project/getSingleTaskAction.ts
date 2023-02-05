import { Dispatch } from "react";
import { GetSingleTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { getSingleTask__API } from "../../../api";

export const getSingleTask =
  (req: any, taskId: string | string[]) =>
  async (dispatch: Dispatch<GetSingleTaskAction>): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_REQUEST,
      });

      const { data } = await getSingleTask__API(req, taskId);

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
