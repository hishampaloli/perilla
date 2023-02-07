import express from "express";
import {
  currentTenant,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
  requireUserAuth,
} from "@hr-management/common";

import { expenseController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createExpenseController,
    deleteExpenseController,
    editExpenseController,
    getAllExpensesController,
    getSingleExpenseController,
  } = expenseController(dependencies);

  router.post(
    "/createExpense",
    currentUser,
    requireUserAuth,
    createExpenseController
  );

  router.get(
    "/allExpense",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getAllExpensesController
  );

  router.get(
    "/:expenseId",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getSingleExpenseController
  );

  router.put(
    "/:expenseId",
    currentUser,
    requireUserAuth,
    editExpenseController
  );

  router.delete(
    "/:expenseId",
    currentUser,
    requireUserAuth,
    deleteExpenseController
  );
  return router;
};
