import { DepenteniciesData } from "../../entities/interfaces";

export const getAllChatsInRoom_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { chatRepository },
  } = dependencies;

  if (!chatRepository)
    throw new Error("The chat repository should be dependencie");

  const execute = (roomId: string, pageNumber: number) => {
    return chatRepository.getAllChatsInRoom(roomId, pageNumber);
  };
  return {
    execute,
  };
};
