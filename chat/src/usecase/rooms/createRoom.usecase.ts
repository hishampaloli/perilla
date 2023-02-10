import { DepenteniciesData } from "../../entities/interfaces";

export const createRoom_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { roomRepository },
  } = dependencies;

  if (!roomRepository)
    throw new Error("The room repository should be dependencie");

  const execute = (room: object) => {
    return roomRepository.createRoom(room);
  };
  return {
    execute,
  };
};
