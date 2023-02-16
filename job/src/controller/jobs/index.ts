import createJobController from "./createJob.controller";
import getAllJobController from "./getAllJob.controller";
import getSingleJobController from "./getSingleJob.controller";
import editJobController from "./editJob.controller";

export = (dependencies: any) => {
  return {
    createJobController: createJobController(dependencies),
    getAllJobController: getAllJobController(dependencies),
    getSingleJobController: getSingleJobController(dependencies),
    editJobController: editJobController(dependencies),
  };
};
