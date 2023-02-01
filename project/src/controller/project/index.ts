import createProjectController from "./createProject.controller";
import getAllprojectsController from "./getAllprojects.controller";
import getSingleProjectController from "./getSingleProject.controller";
import editProjectController from "./editProject.controller";
import addTeamToProjectController from "./addTeamToProject.controller";
import removeTeamFromProjectController from "./removeTeamFromProject.controller";
import getMyProjectController from "./getMyProject.controller";
import completeProjectController from "./completeProject.controller";
import getProjectsUnderUserController from "./getProjectsUnderUser.controller";
import getProjectsUnderClientController from "./getProjectsUnderClient.controller";

export = (dependencies: any) => {
  return {
    createProjectController: createProjectController(dependencies),
    getAllprojectsController: getAllprojectsController(dependencies),
    getSingleProjectController: getSingleProjectController(dependencies),
    editProjectController: editProjectController(dependencies),
    addTeamToProjectController: addTeamToProjectController(dependencies),
    removeTeamFromProjectController:
      removeTeamFromProjectController(dependencies),
    getMyProjectController: getMyProjectController(dependencies),
    completeProjectController: completeProjectController(dependencies),
    getProjectsUnderUserController:
      getProjectsUnderUserController(dependencies),
    getProjectsUnderClientController:
      getProjectsUnderClientController(dependencies),
  };
};
