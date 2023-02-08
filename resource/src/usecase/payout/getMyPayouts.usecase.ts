import { DepenteniciesData } from "../../entities/interfaces";

export const getMyPayouts_usecase = (dependencies: DepenteniciesData) => {
  const {
    repository: { payoutRepository },
  } = dependencies;

  if (!payoutRepository)
    throw new Error("The payout repository should be dependencie");

  const execute = (companyName: string, requestedBy: string) => {
    return payoutRepository.getMyPayouts(companyName, requestedBy);
  };
  return {
    execute,
  };
};
