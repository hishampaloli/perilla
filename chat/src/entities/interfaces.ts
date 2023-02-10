export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createEmployee_UseCase: any;
  getAllEmployee_UseCase: any;
  editEmployees_UseCase: any;

  addMemberToRoom_UseCase: any;
  createRoom_UseCase: any;
  getMyRooms_UseCase: any;
  getSingleEmployees_UseCase: any;
  getSingleRoom_UseCase: any;
  removeMemberFromRoom_UseCase: any;
}

export interface repositoryData {
  employeeRepository: any;
  roomRepository: any;
  chatRepository: any;
}
