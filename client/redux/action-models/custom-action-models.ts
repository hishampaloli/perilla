import { CustomActionsTypes } from "../constants";

interface ChangeEmployeeListLayoutSuccessAction {
  type: CustomActionsTypes.CHANGE_EMPOYEE_LIST_LAYOUT;
  payload: boolean;
}
export type ChangeEmployeeListLayoutAction =
  ChangeEmployeeListLayoutSuccessAction;

interface AddTaskFormSuccessAction {
  type: CustomActionsTypes.ADD_TASK_FORM;
  payload: boolean;
}
export type AddTaskFormAction = AddTaskFormSuccessAction;
