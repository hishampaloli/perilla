import { CustomActionsTypes } from "../constants";

interface ChangeEmployeeListLayoutSuccessAction {
  type: CustomActionsTypes.CHANGE_EMPOYEE_LIST_LAYOUT;
  payload: boolean;
}

export type ChangeEmployeeListLayoutAction =
  ChangeEmployeeListLayoutSuccessAction;
