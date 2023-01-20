import { ClientData, Client } from "../../entities/Client";
import { DepenteniciesData } from "../../entities/interfaces";

export const editClient_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { clientRepository },
  } = dependencies;

  if (!clientRepository)
    throw new Error("The client repository should be dependencie");

  const execute = (companyName: string, clientId: string, data: any) => {
    return clientRepository.editClient(companyName, clientId, data);
  };
  return {
    execute,
  };
};
