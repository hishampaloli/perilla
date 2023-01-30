import { DepenteniciesData } from "../../entities/interfaces";

export const applyLeave_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { leaveRepository },
  } = dependencies;

  if (!leaveRepository)
    throw new Error("The leave repository should be dependencie");

  const execute = (user: object) => {
    return leaveRepository.applyLeave(user);
  };
  return {
    execute,
  };
};
