export const getLandingPage_UseCase = (dependencies: any) => {
  const {
    repository: { dashboardRepository },
  } = dependencies;

  if (!dashboardRepository)
    throw new Error("The dashboard repository should be in dependencies");

  const execute = async (companyName: string) => {
    return dashboardRepository.getLandingPageData(companyName);
  };
  return {
    execute,
  };
};
