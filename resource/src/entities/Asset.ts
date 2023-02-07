export interface AssetData {
  createdBy: string;
  companyName: string;
  assetName: string;
  createdAt: Date;
  price: number;
}

export class Asset {
  createdBy: string;
  companyName: string;
  assetName: string;
  createdAt: Date;
  price: number;

  constructor({
    createdBy,
    companyName,
    assetName,
    createdAt,
    price,
  }: AssetData) {
    this.companyName = companyName;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.assetName = assetName;
    this.price = price;
  }
}
