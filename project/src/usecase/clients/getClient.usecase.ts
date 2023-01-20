import { DepenteniciesData } from "../../entities/interfaces";

export const getClient_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { clientRepository },
  } = dependencies;

  if (!clientRepository)
    throw new Error("The client repository should be dependencie");

  const execute = (companyName: string, clientId: string) => {
    return clientRepository.getClient(companyName, clientId);
  };

  return {
    execute,
  };
};
