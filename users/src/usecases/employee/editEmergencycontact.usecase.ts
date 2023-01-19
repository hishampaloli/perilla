import { DepenteniciesData } from "../../entities/interfaces";

export const editEmergencyContact_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (employeeId: string, primary: any, secondary: any) => {
    return employeeRepository.editEmergencyContact(employeeId, {
      primary,
      secondary,
    });
  };
  return {
    execute,
  };
};
