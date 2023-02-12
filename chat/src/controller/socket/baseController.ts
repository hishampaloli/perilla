import { DepenteniciesData } from "../../entities/interfaces";
import { Socket } from "socket.io";

export abstract class BaseController {
  socket: Socket;
  dependencies: DepenteniciesData;

  constructor(socket: any, dependencies: any) {
    this.socket = socket;
    this.dependencies = dependencies;
  }
}
