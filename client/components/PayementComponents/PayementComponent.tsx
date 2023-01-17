import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { StripeLinkState } from "../../models/tenants";

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
        location.href=data?.url
    }
    
  }, [getLink]);

  return (
    <div style={{ marginTop: "100px" }}>
      <button onClick={getLink}>Pay 3000</button>
    </div>
  );
};

export default PayementComponent;
