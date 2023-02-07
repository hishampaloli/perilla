import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleAsset_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { assetRepository },
  } = dependencies;

  if (!assetRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, assetId: string) => {
    return assetRepository.getSingleAsset(companyName, assetId);
  };
  return {
    execute,
  };
};
