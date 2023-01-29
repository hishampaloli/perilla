import { DepenteniciesData } from "../../entities/interfaces";

export const createEmployee_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (user: object) => {
    return employeeRepository.createEmployee(user);
  };
  return {
    execute,
  };
};
