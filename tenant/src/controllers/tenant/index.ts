import createTenantController from "./createTenant.controller";
import getTenantsController from "./getTenants.controller";
import getOtpController from "./getOtp.controller";
import currentuserController from "./currentuser.controller";
import tenantLoginVerificationController from "./LoginVerification.controller";
import tenantLogoutController from "./tenantLogout.controller";
import tenantLoginController from "./tenantLogin.controller";
import getPaidTenantDataConroller from "./getPaidTenantData.conroller";
import stripePaymentController from "./stripePayment.controller";
import stripePayementVerificationController from "./stripePayementVerification.controller";
import sendWelcomeMailController from "./sendWelcomeMail.controller";

export = (dependencies: any) => {
  return {
    createTenantController: createTenantController(dependencies),
    getTenantsController: getTenantsController(dependencies),
    getOtpController: getOtpController(dependencies),
    currentuserController: currentuserController(dependencies),
    tenantLoginController: tenantLoginController(dependencies),
    tenantLogoutController: tenantLogoutController(dependencies),
    tenantLoginVerificationController:
      tenantLoginVerificationController(dependencies),
    getPaidTenantDataConroller: getPaidTenantDataConroller(dependencies),
    stripePaymentController: stripePaymentController(dependencies),
    stripePayementVerificationController:
      stripePayementVerificationController(dependencies),
    sendWelcomeMailController: sendWelcomeMailController(dependencies),
  };
};
