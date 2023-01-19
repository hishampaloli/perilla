import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const createEmployeeData_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = async (employeeId: string) => {
    const personalDetails = await employeeRepository.createPersonalInfo(
      employeeId
    );

    const createdEmergencyContact =
      await employeeRepository.createEmergencyContact(employeeId);

    const data = {
      personalInformation: personalDetails.id,
      emergencyContact: createdEmergencyContact.id,
    };
    
    return employeeRepository.createEmployeeDatas(employeeId, data);
  };
  return {
    execute,
  };
};
