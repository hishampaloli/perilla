import { DepenteniciesData } from "../../entities/interfaces";

export const getAllClient_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { clientRepository },
  } = dependencies;

  if (!clientRepository)
    throw new Error("The client repository should be dependencie");

  const execute = (
    companyName: string,
    name: string,
    clientId: string,
    pageNumber: number
  ) => {
    return clientRepository.getAllCLients(
      companyName,
      name,
      clientId,
      pageNumber
    );
  };

  return {
    execute,
  };
};
