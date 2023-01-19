import { Employee } from "../../entities/Employee";
import { DepenteniciesData } from "../../entities/interfaces";

export const getEmployee_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The user repository should be dependencie");

  const execute = ({
    company,
    phone,
    email,
  }: {
    company: string;
    phone: number;
    email: string;
  }) => {
    console.log(company, phone, email);

    return employeeRepository.getEmployee({ company, phone, email });
  };
  return {
    execute,
  };
};
