export const resetPassword_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The product repository should be dependencie");

  const execute = (
    phone: number,
    companyName: string,
    oldPassword: string,
    password: string
  ) => {
    return tenantRepository.resetPassword(
      phone,
      companyName,
      oldPassword,
      password
    );
  };
  return {
    execute,
  };
};
