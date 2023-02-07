import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository },
  } = dependencies;

  if (!expenseRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, expenseId: string) => {
    return expenseRepository.getSingleExpense(companyName, expenseId);
  };
  return {
    execute,
  };
};
