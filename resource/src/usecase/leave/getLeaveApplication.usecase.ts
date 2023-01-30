import { DepenteniciesData } from "../../entities/interfaces";

export const getLeaveApplications_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { leaveRepository },
  } = dependencies;

  if (!leaveRepository)
    throw new Error("The leave repository should be dependencie");

  const execute = (companyName: string, isAccepted: boolean) => {
    return leaveRepository.getLeaveApplications(companyName, isAccepted);
  };
  return {
    execute,
  };
};
