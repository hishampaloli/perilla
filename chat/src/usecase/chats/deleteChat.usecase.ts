import { DepenteniciesData } from "../../entities/interfaces";

export const deleteChat_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { chatRepository },
  } = dependencies;

  if (!chatRepository)
    throw new Error("The chat repository should be dependencie");

  const execute = (chatId: string, userId: string) => {
    return chatRepository.deleteChat(chatId, userId);
  };
  return {
    execute,
  };
};
