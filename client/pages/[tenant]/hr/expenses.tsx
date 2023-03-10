import React from "react";
import ExpenseComponent from "../../../components/assetsAndExpense/expense/ExpenseComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";

const expenses = () => {
  return (
    <MainLayout title="Expenses">
      <SubHeader text="Expenses" />
      <ExpenseComponent type="hr" />
    </MainLayout>
  );
};

export default expenses;
