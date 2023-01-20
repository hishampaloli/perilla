import { ClientData, Client } from "../../entities/Client";
import { DepenteniciesData } from "../../entities/interfaces";

export const createClient_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { clientRepository },
  } = dependencies;

  if (!clientRepository)
    throw new Error("The client repository should be dependencie");

  const execute = (data: ClientData) => {
    let client = new Client(data);
    return clientRepository.createClient(client);
  };
  return {
    execute,
  };
};
