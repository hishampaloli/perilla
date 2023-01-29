import createProjectController from "./createProject.controller";
import getAllprojectsController from "./getAllprojects.controller";
import getSingleProjectController from "./getSingleProject.controller";
import editProjectController from "./editProject.controller";
import addTeamToProjectController from "./addTeamToProject.controller";
import removeTeamFromProjectController from "./removeTeamFromProject.controller";

export = (dependencies: any) => {
  return {
    createProjectController: createProjectController(dependencies),
    getAllprojectsController: getAllprojectsController(dependencies),
    getSingleProjectController: getSingleProjectController(dependencies),
    editProjectController: editProjectController(dependencies),
    addTeamToProjectController: addTeamToProjectController(dependencies),
    removeTeamFromProjectController:
      removeTeamFromProjectController(dependencies),
  };
};
