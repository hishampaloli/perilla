import { Dispatch } from "react";
import { EditTasksAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { editTask__API } from "../../../api";

export const editTask =
  (req: any, taskData: any, taskId: string) =>
  async (
    dispatch: Dispatch<EditTasksAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.EDIT_TASKS_REQUEST,
      });

      const { data } = await editTask__API(req, taskData, taskId);

      getState().singleTask.data.data = data.data;

      dispatch({
        type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS,
        payload: getState().singleTask.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.EDIT_TASKS_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
