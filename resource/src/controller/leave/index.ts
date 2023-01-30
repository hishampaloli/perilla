import applyLeaveController from "./applyLeave.controller";
import getMyLeaveReportController from "./getMyLeaveReport.controller";
import viewLeaveApplicationController from "./viewLeaveApplication.controller";

export = (dependencies: any) => {
  return {
    applyLeaveController: applyLeaveController(dependencies),
    getMyLeaveReportController: getMyLeaveReportController(dependencies),
    viewLeaveApplicationController:
      viewLeaveApplicationController(dependencies),
  };
};
