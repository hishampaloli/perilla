import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ChangeEmployeeListLayoutState } from "../../../models/custom";
import { ChangeEmployeeListLayoutAction } from "../../action-models";
import { CustomActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const employeeListLayout =
  (data: boolean) =>
  async (dispatch: Dispatch<ChangeEmployeeListLayoutAction>) => {
    console.log(data + "sddsffs");
    
    dispatch({
      type: CustomActionsTypes.CHANGE_EMPOYEE_LIST_LAYOUT,
      payload: data,
    });
  };
