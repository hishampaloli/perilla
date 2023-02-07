import { DepenteniciesData } from "../../entities/interfaces";

export const deleteAssets_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { assetRepository },
  } = dependencies;

  if (!assetRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, assetId: string, createdBy: string) => {
    return assetRepository.deleteAsset(companyName, assetId, createdBy);
  };
  return {
    execute,
  };
};
