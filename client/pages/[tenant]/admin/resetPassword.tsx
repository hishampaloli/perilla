import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import ResetPasswordForm from "../../../components/ResetPasswordComponent/ResetPasswordForm";

const resetPassword = () => {
  return (
    <MainLayout title="Reset Password">
      <SubHeader text="Reset Password" />
      <ResetPasswordForm />
    </MainLayout>
  );
};

export default resetPassword;
