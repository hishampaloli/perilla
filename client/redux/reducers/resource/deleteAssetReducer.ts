import { DeleteAssetState } from "../../../models/resources";
import { DeleteAssetAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const deleteAssetReducer = (
  state: DeleteAssetState = { loading: false, error: null },
  action: DeleteAssetAction
): DeleteAssetState => {
  switch (action.type) {
    case ResourceActionTypes.DELETE_ASSET_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.DELETE_ASSET_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.DELETE_ASSET_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
