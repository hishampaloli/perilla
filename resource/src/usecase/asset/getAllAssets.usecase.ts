import { DepenteniciesData } from "../../entities/interfaces";

export const getAllAssets_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { assetRepository },
  } = dependencies;

  if (!assetRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, pageNumber: number) => {
    return assetRepository.getAllAssets(companyName, pageNumber);
  };
  return {
    execute,
  };
};
