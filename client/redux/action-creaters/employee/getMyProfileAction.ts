import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { GetMyProfileAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { EmployeeDataObj } from "../../../models/admin";
import { EmployeeProfileDataObj } from "../../../models/profile";

export const getMyProfile =
  (req: any) => async (dispatch: Dispatch<GetMyProfileAction>) => {
    try {
      dispatch({ type: EmployeeActionsTypes.GET_MYPROFILE_REQUETS });

      const { data } = await buildClient(req).get<EmployeeProfileDataObj>(
        "/api/user/employee/myProfile",
        config
      );

      console.log(data);

      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
