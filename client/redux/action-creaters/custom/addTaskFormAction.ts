import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ChangeEmployeeListLayoutState } from "../../../models/custom";
import { AddTaskFormAction } from "../../action-models";
import { CustomActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const AddTaskForm =
  (data: boolean) => async (dispatch: Dispatch<AddTaskFormAction>) => {
    dispatch({
      type: CustomActionsTypes.ADD_TASK_FORM,
      payload: data,
    });
  };
