import { DepenteniciesData } from "../../entities/interfaces";
import { Socket } from "socket.io";

export abstract class BaseController {
  protected socket: Socket;
  protected dependencies: DepenteniciesData;

  constructor(socket: any, dependencies: any) {
    this.socket = socket;
    this.dependencies = dependencies;
  }
}
