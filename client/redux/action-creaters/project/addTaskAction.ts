import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { AddTaskState, TaskDataObj } from "../../../models/project";
import { AddTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { addTask__API } from "../../../api";

export const addTask =
  (req: any, taskData: any) =>
  async (dispatch: Dispatch<AddTaskAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.ADD_TASK_REQUEST,
      });

      const { data } = await addTask__API(req, taskData);

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

      return error?.response?.data?.error?.msg;
    }
  };
