import { DepenteniciesData } from "../../entities/interfaces";

export const removeMemberFromRoom_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { roomRepository },
  } = dependencies;

  if (!roomRepository)
    throw new Error("The room repository should be dependencie");

  const execute = (roomId: string, companyName: string, userId: string) => {
    return roomRepository.addMemberToRoom(roomId, companyName, userId);
  };
  return {
    execute,
  };
};
