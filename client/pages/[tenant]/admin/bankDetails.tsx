import React, { useEffect } from "react";
import BankDetailsMainComponent from "../../../components/bankDetailsComponent/bankDetailsMainComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const bankDetails = () => {
  return (
    <AdminLayout title="Bank Details">
      <SubHeader text="Bank Details" />
      <BankDetailsMainComponent />
    </AdminLayout>
  );
};

export default bankDetails;
