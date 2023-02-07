import { Expense, ExpenseData } from "../../entities/Expense";
import { DepenteniciesData } from "../../entities/interfaces";

export const createExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository },
  } = dependencies;

  if (!expenseRepository)
    throw new Error("The expensef repository should be dependencie");

  const execute = (expense: ExpenseData) => {
    const expensedt = new Expense(expense);
    return expenseRepository.createExpense(expense);
  };
  return {
    execute,
  };
};
