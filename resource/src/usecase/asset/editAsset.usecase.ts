import { DepenteniciesData } from "../../entities/interfaces";

export const editAssets_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { assetRepository },
  } = dependencies;

  if (!assetRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (
    companyName: string,
    assetId: string,
    createdBy: string,
    data: object
  ) => {
    return assetRepository.editAssets(companyName, assetId, createdBy, data);
  };
  return {
    execute,
  };
};
