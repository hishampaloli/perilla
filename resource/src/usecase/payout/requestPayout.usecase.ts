import { DepenteniciesData } from "../../entities/interfaces";

export const requestPayout_usecase = (dependencies: DepenteniciesData) => {
  const {
    repository: { payoutRepository },
  } = dependencies;

  if (!payoutRepository)
    throw new Error("The payout repository should be dependencie");

  const execute = (user: object) => {
    return payoutRepository.requestPayout(user);
  };
  return {
    execute,
  };
};
