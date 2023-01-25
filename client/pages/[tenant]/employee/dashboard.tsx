import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import { useRequireEmployee } from "../../../hooks/useAuth";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";

const dashboard = () => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  useRequireEmployee();

  return (
    <MainLayout title="DashBoard">
      {" "}
      <SubHeader text="DashBoard" />
      <div>Employee Dash</div>
    </MainLayout>
  );
};

export default dashboard;
