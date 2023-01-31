import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import AllEmployeesComponent from "../../../components/AdminSideComponents/EmployeesComponents/AllEmployeesComponentMain";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";
import Spinner from "../../../components/layout/SpinnerComponent";

const allEmployee = () => {
  return (
    <AdminLayout title="All Employee">
      <SubHeader text="All Emlpoyees" />
      <AllEmployeesComponent type="Employees" />
    </AdminLayout>
  );
};

export default allEmployee;
