export const editDashboard_UseCase = (dependencies: any) => {
  const {
    repository: { dashboardRepository },
  } = dependencies;

  if (!dashboardRepository)
    throw new Error("The dashboard repository should be in dependencies");

  const execute = async (companyName: string, data: string) => {
    return dashboardRepository.editDashBoardData(companyName, data);
  };
  return {
    execute,
  };
};
