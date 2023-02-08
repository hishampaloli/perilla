import { GetAllAssetsState } from "../../../models/resources";
import { GetAllAssetsAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const getAllAssetReducer = (
  state: GetAllAssetsState = { data: null, loading: false, error: null },
  action: GetAllAssetsAction
): GetAllAssetsState => {
  switch (action.type) {
    case ResourceActionTypes.GET_ALL_ASSETS_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case ResourceActionTypes.GET_ALL_ASSETS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case ResourceActionTypes.GET_ALL_ASSETS_FAIL:
      return {
        loading: false,
        error: action.error,
        data: null,
      };

    default:
      return state;
  }
};
