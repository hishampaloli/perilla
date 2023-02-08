import { DepenteniciesData } from "../../entities/interfaces";

export const completePayouts_usecase = (dependencies: DepenteniciesData) => {
  const {
    repository: { payoutRepository },
  } = dependencies;

  if (!payoutRepository)
    throw new Error("The payout repository should be dependencie");

  const execute = (companyName: string, payoutId: string) => {
    return payoutRepository.completePayouts(companyName, payoutId);
  };
  return {
    execute,
  };
};
