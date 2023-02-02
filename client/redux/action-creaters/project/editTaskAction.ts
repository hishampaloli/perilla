import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { TaskDataObj } from "../../../models/project";
import { EditTasksAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const editTask =
  (req: any, taskData: any, taskId: string) =>
  async (dispatch: Dispatch<EditTasksAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.EDIT_TASKS_REQUEST,
      });

      const { data } = await buildClient(req).put<TaskDataObj>(
        `${projectService_Url}/task/edit/${taskId}`,
        taskData,
        config
      );

      getState().singleTask.data.data = data.data;
      console.log(data.data);

      console.log(getState().singleTask.data);

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
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
