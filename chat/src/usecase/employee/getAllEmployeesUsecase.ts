import { DepenteniciesData } from "../../entities/interfaces";

export const getAllEmployee_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (company: string) => {
    return employeeRepository.getAllEmployees(company);
  };
  return {
    execute,
  };
};
