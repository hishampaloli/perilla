export const getPayedTenant_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The product repository should be dependencie");

  const execute = (companyName: string) => {
    return tenantRepository.getPayedTenantProfile(companyName);
  };
  return {
    execute,
  };
};
