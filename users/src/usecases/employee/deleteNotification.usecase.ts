import { DepenteniciesData } from "../../entities/interfaces";

export const deleteMyNotification_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The employee repository should be dependencie");

  const execute = (companyName: string, employee: string, id: string) => {
    return employeeRepository.deleteMyNotification(companyName, employee, id);
  };
  return {
    execute,
  };
};
