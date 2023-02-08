import { GetSingleAssetState } from "../../../models/resources";
import { GetSingleAssetAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const getSingleAssetReducer = (
  state: GetSingleAssetState = { data: null, loading: false, error: null },
  action: GetSingleAssetAction
): GetSingleAssetState => {
  switch (action.type) {
    case ResourceActionTypes.GET_SINGLE_ASSET_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case ResourceActionTypes.GET_SINGLE_ASSET_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case ResourceActionTypes.GET_SINGLE_ASSET_FAIL:
      return {
        loading: false,
        error: action.error,
        data: null,
      };

    default:
      return state;
  }
};
