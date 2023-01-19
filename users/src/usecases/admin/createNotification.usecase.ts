import { DepenteniciesData } from "../../entities/interfaces";

export const createNotification_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (data: object) => {
    return employeeRepository.createNotification(data);
  };
  return {
    execute,
  };
};
