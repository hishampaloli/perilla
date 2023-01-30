import applyLeaveController from "./applyLeave.controller";
import getMyLeaveReportController from "./getMyLeaveReport.controller";
import viewLeaveApplicationController from "./viewLeaveApplication.controller";
import getLeaveApplicationsController from "./getLeaveApplications.controller";
import approveLeaveController from "./approveLeave.controller";

export = (dependencies: any) => {
  return {
    applyLeaveController: applyLeaveController(dependencies),
    getMyLeaveReportController: getMyLeaveReportController(dependencies),
    viewLeaveApplicationController:
      viewLeaveApplicationController(dependencies),
    getLeaveApplicationsController:
      getLeaveApplicationsController(dependencies),
    approveLeaveController: approveLeaveController(dependencies),
  };
};
