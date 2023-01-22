import React, { useState } from "react";
import AddInputComp from "../../../AddFormComponent/AddInputComp";
import style from "../../../../styles/addForm.module.scss";
import SubmitButton from "../../../AddFormComponent/SubmitButton";

const EmployeeForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [employeeId, setEmployeeId] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <form>
      <div className={style.InputGroup}>
        <AddInputComp text="Name" type="text" handler={setName} />
        <AddInputComp text="Email" type="email" handler={setEmail} />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp text="Phone" type="number" handler={setPhone} />
        <AddInputComp text="Employee ID" type="text" handler={setEmployeeId} />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp text="Designation" type="text" handler={setDesignation} />
        <AddInputComp text="Password" type="text" handler={setPassword} />
      </div>

      <SubmitButton submit={""} />
    </form>
  );
};

export default EmployeeForm;
