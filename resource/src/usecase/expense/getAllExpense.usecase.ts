import { DepenteniciesData } from "../../entities/interfaces";

export const getAllExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository },
  } = dependencies;

  if (!expenseRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, pageNumber: number) => {
    return expenseRepository.getAllExpenses(companyName, pageNumber);
  };
  return {
    execute,
  };
};
