import { DepenteniciesData } from "../../entities/interfaces";

export const getSinglePayout_usecase = (dependencies: DepenteniciesData) => {
  const {
    repository: { payoutRepository },
  } = dependencies;

  if (!payoutRepository)
    throw new Error("The payout repository should be dependencie");

  const execute = (companyName: string, payoutId: string) => {
    return payoutRepository.getSinglePayoutDetails(companyName, payoutId);
  };
  return {
    execute,
  };
};
