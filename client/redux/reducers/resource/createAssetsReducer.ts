import { CreateAssetState } from "../../../models/resources";
import { CreateAssetAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const createAssetReducer = (
  state: CreateAssetState = { loading: false, error: null },
  action: CreateAssetAction
): CreateAssetState => {
  switch (action.type) {
    case ResourceActionTypes.CREATE_ASSET_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.GET_ALL_ASSETS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.CREATE_ASSET_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
