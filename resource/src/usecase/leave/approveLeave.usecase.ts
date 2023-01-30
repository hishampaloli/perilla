import { DepenteniciesData } from "../../entities/interfaces";

export const approveLeave_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { leaveRepository },
  } = dependencies;

  if (!leaveRepository)
    throw new Error("The leave repository should be dependencie");

  const execute = (
    companyName: string,
    leaveId: string,
    isAccepted: boolean
  ) => {
    return leaveRepository.approveLeave(companyName, leaveId, isAccepted);
  };
  return {
    execute,
  };
};
