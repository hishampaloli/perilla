import { BaseController } from "./baseController";
import { v4 as uuidv4 } from "uuid";
export class CreateRoomController extends BaseController {
  createRoom = async ({ el }: { el: any }) => {
    const {
      useCases: {
        createRoom_UseCase,
        addMemberToRoom_UseCase,
        findExistingRoom_UseCase,
      },
    } = this.dependencies;

    console.log(el._id);
    console.log(this.socket.data.user.id);

    const roomFound = await findExistingRoom_UseCase(this.dependencies).execute(
      el._id,
      this.socket.data.user.id
    );

    console.log(roomFound);
    if (roomFound === null) {
      const createdRoom = await createRoom_UseCase(this.dependencies).execute({
        createdAt: new Date(),
        companyName: el.companyName,
        lastMessageAt: new Date(),
      });

      const addMembers1 = await addMemberToRoom_UseCase(
        this.dependencies
      ).execute(createdRoom.id, el.companyName, el._id);
      const addMembers2 = await addMemberToRoom_UseCase(
        this.dependencies
      ).execute(createdRoom.id, el.companyName, this.socket.data.user.id);
      console.log(createdRoom);
      console.log('***********************')
      console.log(addMembers2);
    }
  };
}
