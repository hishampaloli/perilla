export const tenantLogin_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (
    number: number,
    companyName: string,
    password: string
  ) => {
    return tenantRepository.loginTenant(number, companyName, password);
  };

  return {
    execute,
  };
};
