import { DepenteniciesData } from "../../entities/interfaces";

export const editBankDetails_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (employeeId: string, data: string) => {
    return employeeRepository.editBankDetails(employeeId, data);
  };
  return {
    execute,
  };
};
