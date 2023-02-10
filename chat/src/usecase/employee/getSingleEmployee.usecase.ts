import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleEmployees_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (company: string, employeeId: string) => {
    return employeeRepository.getEmployee(company, employeeId);
  };
  return {
    execute,
  };
};
