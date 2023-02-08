import createExpenseController from "./createExpense.controller";
import deleteExpenseController from "./deleteExpense.controller";
import editExpenseController from "./editExpense.controller";
import getAllExpensesController from "./getAllExpenses.controller";
import getSingleExpenseController from "./getSingleExpense.controller";
import getMyExpenseController from "./getMyExpense.controller";

export = (dependencies: any) => {
  return {
    createExpenseController: createExpenseController(dependencies),
    deleteExpenseController: deleteExpenseController(dependencies),
    editExpenseController: editExpenseController(dependencies),
    getAllExpensesController: getAllExpensesController(dependencies),
    getSingleExpenseController: getSingleExpenseController(dependencies),
    getMyExpenseController: getMyExpenseController(dependencies),
  };
};
