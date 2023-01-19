import getMyProfileController from "./getMyProfile.controller";
import employeeLoginController from "./employeeLogin.controller";
import verifyEmployeeLoginController from "./verifyEmployeeLogin.controller";
import getMyProfileDataController from "./getMyProfileData.controller";
import editPersonalInfoController from "./editPersonalInfo.controller";
import editEmergancyContactController from "./editEmergancyContact.controller";

export = (dependencies: any) => {
  return {
    getMyProfileController: getMyProfileController(dependencies),
    employeeLoginController: employeeLoginController(dependencies),
    verifyEmployeeLoginController: verifyEmployeeLoginController(dependencies),
    getMyProfileDataController: getMyProfileDataController(dependencies),
    editPersonalInfoController: editPersonalInfoController(dependencies),
    editEmergancyContactController:
      editEmergancyContactController(dependencies),
  };
};
