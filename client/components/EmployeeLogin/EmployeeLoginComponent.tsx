import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetEmployeeOtpVerificationState } from "../../models/employee";
import styles from "../../styles/buyProduct.module.scss";
import FixedSpinner from "../layout/FixedSpinner";
import OtpComponent from "../OtpComponent/OtpComponent";
import EmployeeLoginForm from "./EmployeeLoginForm";

const EmployeeLoginComponent = () => {
  const [otp, setOtp] = useState(false);
  const [number, setNumber] = useState<number>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();
  const { error, loading }: GetEmployeeOtpVerificationState = useTypedSelector(
    (state) => state.employeeLoginOtpVerification
  );

  const { tenant } = router.query;
  
  const { getEmployeeOtpVerfication } = useActions();
  const handleOtp = async () => {
    const res = await getEmployeeOtpVerfication("d", {
      company: tenant,
      otp,
      phone: number,
      password,
    });
    if (`${res}` === "success") {
      toast.success("Welcome back");
      router.push(`/${tenant}/employee/dashboard`);
    } else {
      toast.error(`${res}`);
    }
  };
  return (
    <div className={styles.buyerFormDiv}>
        {loading && <FixedSpinner />}
      {otp ? (
        <OtpComponent handleSubmit={handleOtp} setOtpNumber={setOtp} />
      ) : (
        <EmployeeLoginForm
          setOtp={setOtp}
          setPass={setPassword}
          setNumber={setNumber}
        />
      )}
    </div>
  );
};

export default EmployeeLoginComponent;
