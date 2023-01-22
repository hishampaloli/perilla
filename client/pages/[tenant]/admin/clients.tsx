import React from "react";
import AllEmployeesComponent from "../../../components/AdminSideComponents/EmployeesComponents/AllEmployeesComponentMain";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const allClients = () => {
  return (
    <AdminLayout title="All Client">
      <SubHeader text="Clients" />
      <AllEmployeesComponent type="Client" />
    </AdminLayout>
  );
};

export default allClients;
