import { ChangeEmployeeListLayoutState } from "../../../models/custom";
import { ChangeEmployeeListLayoutAction } from "../../action-models";
import { CustomActionsTypes } from "../../constants";

export const employeeListLayoutReducer = (
  state: ChangeEmployeeListLayoutState = {
    listData: true,
  },
  action: ChangeEmployeeListLayoutAction
): ChangeEmployeeListLayoutState => {
  switch (action.type) {
    case CustomActionsTypes.CHANGE_EMPOYEE_LIST_LAYOUT:
      return {
        listData: action.payload,
      };

    default:
      return state;
  }
};
