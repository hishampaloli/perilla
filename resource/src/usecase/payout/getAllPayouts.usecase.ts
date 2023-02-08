import { DepenteniciesData } from "../../entities/interfaces";

export const getAllPayout_usecase = (dependencies: DepenteniciesData) => {
  const {
    repository: { payoutRepository },
  } = dependencies;

  if (!payoutRepository)
    throw new Error("The payout repository should be dependencie");

  const execute = (
    companyName: string,
    pageNumber: number,
    requestedAt: Date,
    status: boolean
  ) => {
    return payoutRepository.getAllPayouts(
      companyName,
      pageNumber,
      requestedAt,
      status
    );
  };
  return {
    execute,
  };
};
