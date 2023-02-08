import { ErrorState } from "../../models/admin";
import {
  AssetsDataArr,
  AssetsDataObj,
  ExpenseDataArr,
  ExpenseDataObj,
  PayoutDataArr,
  PayoutDataObj,
} from "../../models/resources";
import { ResourceActionTypes } from "../constants";

interface GetAllAssetsRequestAction {
  type: ResourceActionTypes.GET_ALL_ASSETS_REQUEST;
}

interface GetAllAssetsSuccessAction {
  type: ResourceActionTypes.GET_ALL_ASSETS_SUCCESS;
  payload: AssetsDataArr;
}
interface GetAllAssetsFailAction {
  type: ResourceActionTypes.GET_ALL_ASSETS_FAIL;
  error: ErrorState[];
}

export type GetAllAssetsAction =
  | GetAllAssetsRequestAction
  | GetAllAssetsFailAction
  | GetAllAssetsSuccessAction;

interface GetSingleAssetRequestAction {
  type: ResourceActionTypes.GET_SINGLE_ASSET_REQUEST;
}

interface GetSingleAssetSuccessAction {
  type: ResourceActionTypes.GET_SINGLE_ASSET_SUCCESS;
  payload: AssetsDataObj;
}
interface GetSingleAssetFailAction {
  type: ResourceActionTypes.GET_SINGLE_ASSET_FAIL;
  error: ErrorState[];
}

export type GetSingleAssetAction =
  | GetSingleAssetRequestAction
  | GetSingleAssetFailAction
  | GetSingleAssetSuccessAction;

interface CreateAssetRequestAction {
  type: ResourceActionTypes.CREATE_ASSET_REQUEST;
}

interface CreateAssetFailAction {
  type: ResourceActionTypes.CREATE_ASSET_FAIL;
  error: ErrorState[];
}

export type CreateAssetAction =
  | CreateAssetRequestAction
  | GetAllAssetsSuccessAction
  | CreateAssetFailAction;

interface EditAssetRequestAction {
  type: ResourceActionTypes.EDIT_ASSET_REQUEST;
}

interface EditAssetFailAction {
  type: ResourceActionTypes.EDIT_ASSET_FAIL;
  error: ErrorState[];
}

export type EditAssetAction =
  | EditAssetRequestAction
  | GetAllAssetsSuccessAction
  | EditAssetFailAction;

interface DeleteAssetRequestAction {
  type: ResourceActionTypes.DELETE_ASSET_REQUEST;
}

interface DeleteAssetSuccessAction {
  type: ResourceActionTypes.DELETE_ASSET_SUCCESS;
}

interface DeleteAssetFailAction {
  type: ResourceActionTypes.DELETE_ASSET_FAIL;
  error: ErrorState[];
}

export type DeleteAssetAction =
  | DeleteAssetRequestAction
  | GetAllAssetsSuccessAction
  | DeleteAssetFailAction;

interface GetAllExpensesRequestAction {
  type: ResourceActionTypes.GET_ALL_EXPENSES_REQUEST;
}

interface GetAllExpensesSuccessAction {
  type: ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS;
  payload: ExpenseDataArr;
}
interface GetAllExpensesFailAction {
  type: ResourceActionTypes.GET_ALL_EXPENSES_FAIL;
  error: ErrorState[];
}

export type GetAllExpensesAction =
  | GetAllExpensesRequestAction
  | GetAllExpensesFailAction
  | GetAllExpensesSuccessAction;

interface GetSingleExpenseRequestAction {
  type: ResourceActionTypes.GET_SINGLE_EXPENSE_REQUEST;
}

interface GetSingleExpenseSuccessAction {
  type: ResourceActionTypes.GET_SINGLE_EXPENSE_SUCCESS;
  payload: ExpenseDataObj;
}
interface GetSingleExpenseFailAction {
  type: ResourceActionTypes.GET_SINGLE_EXPENSE_FAIL;
  error: ErrorState[];
}

export type GetSingleExpenseAction =
  | GetSingleExpenseRequestAction
  | GetSingleExpenseFailAction
  | GetSingleExpenseSuccessAction;

interface CreateExpenseRequestAction {
  type: ResourceActionTypes.CREATE_EXPENSE_REQUEST;
}

interface CreateExpenseFailAction {
  type: ResourceActionTypes.CREATE_EXPENSE_FAIL;
  error: ErrorState[];
}

export type CreateExpenseAction =
  | CreateExpenseRequestAction
  | GetAllExpensesSuccessAction
  | CreateExpenseFailAction;

interface EditExpenseRequestAction {
  type: ResourceActionTypes.EDIT_EXPENSE_REQUEST;
}

interface EditExpenseFailAction {
  type: ResourceActionTypes.EDIT_EXPENSE_FAIL;
  error: ErrorState[];
}

export type EditExpenseAction =
  | EditExpenseRequestAction
  | GetAllExpensesSuccessAction
  | EditExpenseFailAction;

interface DeleteExpenseRequestAction {
  type: ResourceActionTypes.DELETE_EXPENSE_REQUEST;
}

interface DeleteExpenseFailAction {
  type: ResourceActionTypes.DELETE_EXPENSE_FAIL;
  error: ErrorState[];
}

export type DeleteExpenseAction =
  | DeleteExpenseRequestAction
  | GetAllExpensesSuccessAction
  | DeleteExpenseFailAction;

interface GetAllPayoutsRequestAction {
  type: ResourceActionTypes.GET_ALL_PAYOUTS_REQUEST;
}

interface GetAllPayoutsSuccessAction {
  type: ResourceActionTypes.GET_ALL_PAYOUTS_SUCCESS;
  payload: PayoutDataArr;
}

interface GetAllPayoutsFailAction {
  type: ResourceActionTypes.GET_ALL_PAYOUTS_FAIL;
  error: ErrorState[];
}

export type GetAllPayoutsAction =
  | GetAllPayoutsRequestAction
  | GetAllPayoutsSuccessAction
  | GetAllPayoutsFailAction;

interface RequestPayoutRequestAction {
  type: ResourceActionTypes.REQUEST_PAYOUT_REQUEST;
}

interface RequestPayoutFailAction {
  type: ResourceActionTypes.REQUEST_PAYOUT_FAIL;
  error: ErrorState[];
}

export type RequestPayoutAction =
  | RequestPayoutRequestAction
  | GetAllPayoutsSuccessAction
  | RequestPayoutFailAction;

interface CompletePayoutRequestAction {
  type: ResourceActionTypes.COMPLETE_PAYOUT_REQUEST;
}

interface CompletePayoutFailAction {
  type: ResourceActionTypes.COMPLETE_PAYOUT_FAIL;
  error: ErrorState[];
}

export type CompletePayoutAction =
  | CompletePayoutRequestAction
  | GetAllPayoutsSuccessAction
  | CompletePayoutFailAction;
