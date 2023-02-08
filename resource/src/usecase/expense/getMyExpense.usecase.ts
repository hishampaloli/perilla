import { DepenteniciesData } from "../../entities/interfaces";

export const getMyExpensePosts_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository },
  } = dependencies;

  if (!expenseRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, createdBy: string) => {
    return expenseRepository.getMyExpenses(companyName, createdBy);
  };
  return {
    execute,
  };
};
