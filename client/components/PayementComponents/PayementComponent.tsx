import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StripeLinkState } from "../../models/tenants";
import style from "../../styles/payment.module.scss";

const PayementComponent = () => {
  const { GetStripeLink } = useActions();
  const { error, data }: StripeLinkState = useTypedSelector(
    (state) => state.stripeLink
  );

  const getLink = () => {
    GetStripeLink("");
  };

  useEffect(() => {
    if (data?.url) {
      location.href = data?.url;
    }
  }, [getLink]);

  return (
    <div className={style.payMentMain} >
      <div className={style.paymentbox}>
        <h2>Pay with Stripe</h2>
        <div className={style.itm}>
          <div>
            <p>Item :</p>
            <p>Price :</p>
            <p>Payment method :</p>
          </div>

          <div>
            <p>Perilla</p>
            <p>$200.00</p>
            <p>Stripe</p>
          </div>
        </div>
        <button onClick={getLink}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default PayementComponent;
