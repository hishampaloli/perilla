import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetEmployeeOtpState } from "../../models/employee";
import styles from "../../styles/buyProduct.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import VerticalInputDiv from "../FormComponents/VerticalInputDiv";
import FixedSpinner from "../layout/FixedSpinner";

const EmployeeLoginForm = ({
  setOtp,
  setNumber,
  setPass,
}: {
  setOtp: any;
  setNumber: any;
  setPass: any;
}) => {
  const [phone, setPhone] = useState<number>();
  const [password, setPassword] = useState<number>();
  const { getEmployeeOtp } = useActions();
  const { error, loading }: GetEmployeeOtpState = useTypedSelector(
    (state) => state.employeeLoginOtp
  );
  const router = useRouter();

  const { tenant } = router.query;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await getEmployeeOtp("", { company: tenant, phone, password });
    setNumber(phone);
    setPass(password);

    if (`${res}` === "success") {
      toast.success("Otp sent successfully");
      setOtp(true);
    } else {
      toast.error(`${res}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.buyerForm}>
      {" "}
      <h1>Employee Login</h1>
      <VerticalInputDiv
        label="Phone number"
        placeholder=""
        type="text"
        callBack={setPhone}
      />
      <VerticalInputDiv
        label="Password"
        placeholder=""
        type="text"
        callBack={setPassword}
      />
      {loading && <FixedSpinner />}
      <SubmitButton submit={"submit"} />
    </form>
  );
};

export default EmployeeLoginForm;
