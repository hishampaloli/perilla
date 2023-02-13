import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleRoom_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { roomRepository },
  } = dependencies;

  if (!roomRepository)
    throw new Error("The room repository should be dependencie");

  const execute = (companyName: string, roomId: string, userId: string) => {
    return roomRepository.getSingleRoom(companyName, roomId, userId);
  };
  return {
    execute,
  };
};
