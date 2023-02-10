import { DepenteniciesData } from "../../entities/interfaces";

export const createChat_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { chatRepository },
  } = dependencies;

  if (!chatRepository)
    throw new Error("The chat repository should be dependencie");

  const execute = (chat: object) => {
    return chatRepository.createChat(chat);
  };
  return {
    execute,
  };
};
