import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import PayoutComponent from "../../../components/PayoutComponents/PayoutComponent";

const dashboard = () => {


  return (
    <MainLayout title="Payouts">
      {" "}
      <SubHeader text="Payouts" />
      <PayoutComponent type="employee" />
    </MainLayout>
  );
};

export default dashboard;
