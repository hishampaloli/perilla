export const createLandingPage_UseCase = (dependencies: any) => {
  const {
    repository: { dashboardRepository },
  } = dependencies;

  if (!dashboardRepository)
    throw new Error("The dashboard repository should be in dependencies");

  const execute = async (data: any) => {
    return dashboardRepository.createLandingPage(data);
  };
  return {
    execute,
  };
};
