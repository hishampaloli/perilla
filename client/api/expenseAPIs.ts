import { resourceService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { ExpenseDataArr, ExpenseDataObj } from "../models/resources";

const expense = "expense";

export const getAllExpenses__API = (req: any) =>
  buildClient(req).get<ExpenseDataArr>(
    `${resourceService_Url}/${expense}/allExpense`,
    config
  );

export const getMyExpensePosts_API = (req: any) =>
  buildClient(req).get<ExpenseDataArr>(
    `${resourceService_Url}/${expense}/MyExpense`,
    config
  );

export const createExpense_API = (req: any, expenseData: any) =>
  buildClient(req).post<ExpenseDataObj>(
    `${resourceService_Url}/${expense}/createExpense`,
    expenseData,
    config
  );

export const deleteExpense_API = (req: any, expenseId: any) =>
  buildClient(req).delete<ExpenseDataObj>(
    `${resourceService_Url}/${expense}/${expenseId}`,
    config
  );

export const editExpense_API = (req: any, expenseId: any, expenseData: object) =>
  buildClient(req).put<ExpenseDataObj>(
    `${resourceService_Url}/${expense}/${expenseId}`,
    expenseData,
    config
  );
