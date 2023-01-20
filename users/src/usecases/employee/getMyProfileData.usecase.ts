import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const getMyProfileData_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async (company: string, employeeId: string) => {
    const personalInfo = await employeeRepository.getPersonalInfo(
      company,
      employeeId
    );

    console.log(personalInfo, company, employeeId);

    const ContactInfo = await employeeRepository.getEmergencyContact(
      company,
      employeeId
    );

    const salaryInfo = await employeeRepository.getSalaryDetails(company, employeeId);

    return { personalInfo, ContactInfo, salaryInfo };
  };
  return {
    execute,
  };
};
