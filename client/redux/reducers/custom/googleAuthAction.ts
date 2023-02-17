import { GoogleAuthAction } from "../../action-models";
import { CustomActionsTypes } from "../../constants";

export const googleDataReducer = (
  state: any = {
    data: null,
  },
  action: GoogleAuthAction
): any => {
  switch (action.type) {
    case CustomActionsTypes.GOOGLE_LOGIN:
      return {
        data: action.payload,
      };

    case CustomActionsTypes.GOOGLE_LOGOUT:
      return {
        data: null,
      };

    default:
      return state;
  }
};
