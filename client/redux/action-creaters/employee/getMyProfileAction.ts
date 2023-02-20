import { GetMyProfileAction } from "../../action-models";
import { EmployeeActionsTypes, ProfileActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { getMyProfile__API } from "../../../api";

export const getMyProfile =
  (req: any) =>
  async (dispatch: Dispatch<GetMyProfileAction>): Promise<string> => {
    try {
      dispatch({ type: EmployeeActionsTypes.GET_MYPROFILE_REQUETS });

      const { data } = await getMyProfile__API(req);

      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_FAIL,
        error: [],
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: EmployeeActionsTypes.GET_MYPROFILE_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
