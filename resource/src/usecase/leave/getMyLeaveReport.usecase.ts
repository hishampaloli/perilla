import { DepenteniciesData } from "../../entities/interfaces";

export const getMyLeaveReport_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { leaveRepository },
  } = dependencies;

  if (!leaveRepository)
    throw new Error("The leave repository should be dependencie");

  const execute = (
    companyName: string,
    employeeId: string,
    isAccepted: boolean
  ) => {
    return leaveRepository.getMyLeaveReport(
      companyName,
      employeeId,
      isAccepted
    );
  };
  return {
    execute,
  };
};
