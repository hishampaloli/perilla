import { DepenteniciesData } from "../../entities/interfaces";

export const editPersonalInfo_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = (
    employeeId: string,
    nationality: string,
    religion: string,
    martialStatus: string,
    employementOfPartner: string,
    passportNumber: string,
    noOfChildren: string
  ) => {
    return employeeRepository.editPersonalInfo(employeeId, {
      nationality,
      religion,
      martialStatus,
      employementOfPartner,
      passportNumber,
      noOfChildren,
    });
  };
  return {
    execute,
  };
};
