import React from "react";
import DashboardComponent from "../../../components/AdminSideComponents/DashboardComponents/MainDashboardComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";
import { RequireLogin, useIsLogged } from "../../../hooks/useAuth";

const admin = () => {
  RequireLogin();
  return (
    <AdminLayout title="Dashboard">
      <SubHeader text="Welcome Admin!" />
      <DashboardComponent />
    </AdminLayout>
  );
};

export default admin;
