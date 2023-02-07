import { DepenteniciesData } from "../../entities/interfaces";

export const editExpense_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { expenseRepository },
  } = dependencies;

  if (!expenseRepository)
    throw new Error("The expense repository should be dependencie");

  const execute = (
    companyName: string,
    expenseId: string,
    createdBy: string,
    data: object
  ) => {
    return expenseRepository.editExpense(
      companyName,
      expenseId,
      createdBy,
      data
    );
  };
  return {
    execute,
  };
};
