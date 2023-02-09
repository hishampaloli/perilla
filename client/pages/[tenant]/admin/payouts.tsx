import React, { useEffect } from "react";
import BankDetailsMainComponent from "../../../components/bankDetailsComponent/bankDetailsMainComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";
import PayoutComponent from "../../../components/PayoutComponents/PayoutComponent";

const bankDetails = () => {
  return (
    <AdminLayout title="Payout Requests">
      <SubHeader text="Payout Requests" />
      <PayoutComponent type="admin" />
    </AdminLayout>
  );
};

export default bankDetails;
