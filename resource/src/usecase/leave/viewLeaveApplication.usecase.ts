import { DepenteniciesData } from "../../entities/interfaces";

export const viewLeaveApplication_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { leaveRepository },
  } = dependencies;

  if (!leaveRepository)
    throw new Error("The leave repository should be dependencie");

  const execute = (
    companyName: string,
    leaveId: string,
    employeeId: string
  ) => {
    return leaveRepository.viewLeaveApplication(
      companyName,
      leaveId,
      employeeId
    );
  };
  return {
    execute,
  };
};
