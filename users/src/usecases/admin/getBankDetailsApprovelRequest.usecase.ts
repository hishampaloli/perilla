import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllBankDetailsApprovalRequest_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (company: string, pageNumber: number) => {
    return employeeRepository.reqestedBankDetails(company, pageNumber);
  };
  return {
    execute,
  };
};
