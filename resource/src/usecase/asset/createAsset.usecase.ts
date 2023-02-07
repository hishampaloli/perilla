import { Asset, AssetData } from "../../entities/Asset";
import { DepenteniciesData } from "../../entities/interfaces";

export const createAsset_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { assetRepository },
  } = dependencies;

  if (!assetRepository)
    throw new Error("The asset repository should be dependencie");

  const execute = (asset: AssetData) => {
    const assetDt = new Asset(asset);
    return assetRepository.createAsset(assetDt);
  };
  return {
    execute,
  };
};
