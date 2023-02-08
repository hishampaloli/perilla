import React from "react";
import ExpenseComponent from "../../../components/assetsAndExpense/expense/ExpenseComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const expenses = () => {
  return (
    <AdminLayout title="Assets">
      <SubHeader text="Assets" />
      {/* <ExpenseComponent type="hr" /> */}
    </AdminLayout>
  );
};

export default expenses;
