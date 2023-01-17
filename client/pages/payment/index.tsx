import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import PayementComponent from "../../components/PayementComponents/PayementComponent";
import { useIsLogged, useIsPurchased } from "../../hooks/useAuth";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Payment = () => {
  useIsPurchased();

  return (
    <Layout title="Payment">
      <PayementComponent />
    </Layout>
  );
};

export default Payment;
