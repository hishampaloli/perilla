import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const employeeLogin_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (company: string, phone: number, password: string) => {
    return employeeRepository.employeeLogin(company, phone, password);
  };
  return {
    execute,
  };
};
