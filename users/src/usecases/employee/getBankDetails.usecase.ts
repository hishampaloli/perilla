import { DepenteniciesData } from "../../entities/interfaces";

export const getBankDetails_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async (company: string, employeeId: string) => {
    return await employeeRepository.getBankDetails(company, employeeId);
  };
  return {
    execute,
  };
};
