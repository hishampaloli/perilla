import { BadRequestError } from "@hr-management/common";
import { Tenant, TenantData } from "../../libs/entities";

export const createTenant_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The product repository should be dependencie");

  const execute = async ({
    address,
    adminName,
    city,
    companyName,
    country,
    email,
    password,
    phone,
    postalCode,
  }: TenantData) => {
    const tenant = new Tenant({
      address,
      adminName,
      city,
      companyName,
      country,
      email,
      password,
      phone,
      postalCode,
    });
    return tenantRepository.createTenant(tenant);
  };
  return {
    execute,
  };
};
