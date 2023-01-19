import { DepenteniciesData } from "../../entities/interfaces";

export const getMyNotification_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The employee repository should be dependencie");

  const execute = (companyName: string, employee: string) => {
    return employeeRepository.getMyNotification(companyName, employee);
  };
  return {
    execute,
  };
};
