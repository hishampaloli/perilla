import { AddTaskFormState } from "../../../models/custom";
import { AddTaskFormAction } from "../../action-models";
import { CustomActionsTypes } from "../../constants";

export const addTaskFormReducer = (
  state: AddTaskFormState = {
    showForm: false,
  },
  action: AddTaskFormAction
): AddTaskFormState => {
  switch (action.type) {
    case CustomActionsTypes.ADD_TASK_FORM:
      return {
        showForm: action.payload,
      };

    default:
      return state;
  }
};
