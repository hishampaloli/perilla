import { DepenteniciesData } from "../../entities/interfaces";

export const updateRoomMessage_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { roomRepository },
  } = dependencies;

  if (!roomRepository)
    throw new Error("The room repository should be dependencie");

  const execute = (roomId: string, lastMessage: string) => {
    return roomRepository.updateRoomMessage(roomId, lastMessage);
  };
  return {
    execute,
  };
};
