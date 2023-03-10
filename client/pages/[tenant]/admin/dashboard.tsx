import React from "react";
import DashboardComponent from "../../../components/AdminSideComponents/DashboardComponents/MainDashboardComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";
import { RequireLogin, useIsLogged, useRequireAdmin } from "../../../hooks/useAuth";

const admin = () => {
  RequireLogin();
  useRequireAdmin();
  
  return (
    <AdminLayout title="Dashboard">
      <SubHeader text="Welcome Admin!" />
      <DashboardComponent />
    </AdminLayout>
  );
};

export default admin;
