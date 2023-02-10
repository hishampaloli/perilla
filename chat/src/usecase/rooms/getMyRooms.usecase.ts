import { DepenteniciesData } from "../../entities/interfaces";

export const getMyRooms_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { roomRepository },
  } = dependencies;

  if (!roomRepository)
    throw new Error("The room repository should be dependencie");

  const execute = (companyName: string, userId: string) => {
    return roomRepository.getMyRooms(companyName, userId);
  };
  return {
    execute,
  };
};
