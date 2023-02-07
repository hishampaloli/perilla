import { DepenteniciesData } from "../../entities/interfaces";

export const deleteExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository },
  } = dependencies;

  if (!expenseRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, assetId: string, createdBy: string) => {
    return expenseRepository.deleteExpense(companyName, assetId, createdBy);
  };
  return {
    execute,
  };
};
