export const createDashboard_UseCase = (dependencies: any) => {
  const {
    repository: { dashboardRepository },
  } = dependencies;

  if (!dashboardRepository)
    throw new Error("The dashboard repository should be in dependencies");

  const execute = async ({
    adminName,
    companyName,
  }: {
    adminName: string;
    companyName: string;
  }) => {

    return dashboardRepository.createDashBoardData({
      adminName,
      companyName,
    });
  };
  return {
    execute,
  };
};
