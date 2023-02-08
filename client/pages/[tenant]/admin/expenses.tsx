import React from "react";
import ExpenseComponent from "../../../components/assetsAndExpense/expense/ExpenseComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const expenses = () => {
  return (
    <AdminLayout title="Expenses">
      <SubHeader text="Expenses" />
      <ExpenseComponent type="admin" />
    </AdminLayout>
  );
};

export default expenses;
