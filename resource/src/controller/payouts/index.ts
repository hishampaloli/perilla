import requestPayoutController from "./requestPayout.controller";
import getAllPayoutController from "./getAllPayout.controller";
import getSinglePayoutController from "./getSinglePayout.controller";
import getMyPayoutsController from "./getMyPayouts.controller";
import completePaymentController from "./completePayment.controller";

export = (dependencies: any) => {
  return {
    requestPayoutController: requestPayoutController(dependencies),
    getAllPayoutController: getAllPayoutController(dependencies),
    getSinglePayoutController: getSinglePayoutController(dependencies),
    getMyPayoutsController: getMyPayoutsController(dependencies),
    completePaymentController: completePaymentController(dependencies),
  };
};
