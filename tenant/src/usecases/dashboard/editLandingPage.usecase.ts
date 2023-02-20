export const editLandingPage_UseCase = (dependencies: any) => {
  const {
    repository: { dashboardRepository },
  } = dependencies;

  if (!dashboardRepository)
    throw new Error("The dashboard repository should be in dependencies");

  const execute = async (
    companyName: string,
    title: string,
    description: string
  ) => {
    return dashboardRepository.editLandingPage(companyName, title, description);
  };
  return {
    execute,
  };
};
