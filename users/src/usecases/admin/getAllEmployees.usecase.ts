import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllEmployees_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (
    company: string,
    role: string,
    name: string,
    employeeId: string,
    pageNumber: number
  ) => {
    return employeeRepository.getAllEmployees(
      company,
      role,
      name,
      employeeId,
      pageNumber
    );
  };
  return {
    execute,
  };
};
