

export const getTenant_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The product repository should be dependencie");

  const execute = () => {
    return tenantRepository.getTenants();
  };
  return {
    execute,
  };
};
