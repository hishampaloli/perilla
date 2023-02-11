import { DepenteniciesData } from "../../entities/interfaces";

export const findExistingRoom_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { roomRepository },
  } = dependencies;

  if (!roomRepository)
    throw new Error("The room repository should be dependencie");

  const execute = (userOne: string, userTwo: string) => {
    return roomRepository.findExistingRoom(userOne, userTwo);
  };
  return {
    execute,
  };
};
