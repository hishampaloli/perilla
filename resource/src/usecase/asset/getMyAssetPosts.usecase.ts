import { DepenteniciesData } from "../../entities/interfaces";

export const getMyAssetPosts_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { assetRepository },
  } = dependencies;

  if (!assetRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (companyName: string, createdBy: string) => {
    return assetRepository.getMyAssetPosts(companyName, createdBy);
  };
  return {
    execute,
  };
};
