export const getTenant_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The product repository should be dependencie");

  const execute = (number: number, companyName: string) => {
    console.log(number, companyName)
    return tenantRepository.getTenantData(number, companyName);
  };
  return {
    execute,
  };
};
