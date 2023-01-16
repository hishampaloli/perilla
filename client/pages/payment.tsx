import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useIsLogged, useIsPurchased } from "../hooks/useAuth";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Payment = () => {
  useIsPurchased();

  return (
    <Layout title="Payment">
      <h1>sdf</h1>
    
    </Layout>
  );
};

export default Payment;
