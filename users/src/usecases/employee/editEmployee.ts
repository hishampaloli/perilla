import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const editEmployees_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (company: string, employeeId: string, data: any) => {
    return employeeRepository.editEmployee(company, employeeId, data);
  };
  return {
    execute,
  };
};
