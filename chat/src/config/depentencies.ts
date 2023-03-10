import {
  employeeRepository,
  roomRepository,
  chatRepository,
} from "../app/repository/mongo";

import {
  createEmployee_UseCase,
  getAllEmployee_UseCase,
  editEmployees_UseCase,
  addMemberToRoom_UseCase,
  createRoom_UseCase,
  getMyRooms_UseCase,
  getSingleEmployees_UseCase,
  getSingleRoom_UseCase,
  removeMemberFromRoom_UseCase,
  createChat_UseCase,
  deleteChat_UseCase,
  getAllChatsInRoom_UseCase,
  findExistingRoom_UseCase,
  updateRoomMessage_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createEmployee_UseCase,
  getAllEmployee_UseCase,
  editEmployees_UseCase,

  addMemberToRoom_UseCase,
  findExistingRoom_UseCase,
  createRoom_UseCase,
  getMyRooms_UseCase,
  getSingleEmployees_UseCase,
  getSingleRoom_UseCase,
  removeMemberFromRoom_UseCase,
  updateRoomMessage_UseCase,

  createChat_UseCase,
  deleteChat_UseCase,
  getAllChatsInRoom_UseCase,
};

const repository: repositoryData = {
  employeeRepository,
  roomRepository,
  chatRepository,
};

export = {
  repository,
  useCases,
};
