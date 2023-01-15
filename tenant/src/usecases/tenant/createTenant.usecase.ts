import { Tenant, TenantData } from "../../libs/entities";

export const createTenant_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({
    address,
    adminName,
    city,
    companyName,
    country,
    email,
    password,
    paymentDetails,
    paymentId,
    phone,
    postalCode,
    purchaseDate,
  }: TenantData) => {
    const tenant = new Tenant({
      address,
      adminName,
      city,
      companyName,
      country,
      email,
      password,
      paymentDetails,
      paymentId,
      phone,
      postalCode,
      purchaseDate,
    });
    return tenantRepository.createTenant(tenant);
  };
  return {
    execute,
  };
};
