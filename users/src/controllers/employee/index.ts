import getMyProfileController from "./getMyProfile.controller";
import employeeLoginController from "./employeeLogin.controller";
import verifyEmployeeLoginController from "./verifyEmployeeLogin.controller";
import getMyProfileDataController from "./getMyProfileData.controller";
import editPersonalInfoController from "./editPersonalInfo.controller";
import editEmergancyContactController from "./editEmergancyContact.controller";
import getBankDetailsController from "./getBankDetails.controller";
import editBankDetailsController from "./editBankDetails.controller";
import sendBankDetailsController from "./sendBankDetails.controller";

export = (dependencies: any) => {
  return {
    getMyProfileController: getMyProfileController(dependencies),
    employeeLoginController: employeeLoginController(dependencies),
    verifyEmployeeLoginController: verifyEmployeeLoginController(dependencies),
    getMyProfileDataController: getMyProfileDataController(dependencies),
    editPersonalInfoController: editPersonalInfoController(dependencies),
    editEmergancyContactController:
      editEmergancyContactController(dependencies),
    getBankDetailsController: getBankDetailsController(dependencies),
    editBankDetailsController: editBankDetailsController(dependencies),
    sendBankDetailsController: sendBankDetailsController(dependencies),
  };
};
