import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { AddTaskState, TaskDataObj } from "../../../models/project";
import { AddTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const addTask =
  (req: any, taskData: any) =>
  async (dispatch: Dispatch<AddTaskAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.ADD_TASK_REQUEST,
      });

      const { data } = await buildClient(req).post<TaskDataObj>(
        `${projectService_Url}/task/create`,
        taskData,
        config
      );

      getState().getTaskUnderProjects.data.data.push(data.data);

      dispatch({
        type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_SUCCESS,
        payload: getState().getTaskUnderProjects.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.ADD_TASK_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
