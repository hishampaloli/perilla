import createTenantController from "./createTenant.controller";
import getTenantsController from "./getTenants.controller";
import getOtpController from "./getOtp.controller";

export = (dependencies: any) => {
  return {
    createTenantController: createTenantController(dependencies),
    getTenantsController: getTenantsController(dependencies),
    getOtpController: getOtpController(dependencies),
  };
};
