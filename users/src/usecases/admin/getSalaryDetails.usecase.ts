
import { DepenteniciesData } from "../../entities/interfaces";

export const getSalaryDetails_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (company: string, employee: string) => {
    return employeeRepository.getSalaryDetails(company, employee);
  };
  return {
    execute,
  };
};
