import React, { useState } from "react";
import AddInputComp from "../../../AddFormComponent/AddInputComp";
import style from "../../../../styles/addForm.module.scss";
import SubmitButton from "../../../AddFormComponent/SubmitButton";

const ClientForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [employeeId, setEmployeeId] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <form>
      <div className={style.InputGroup}>
        <AddInputComp text="Client Name" type="text" handler={setName} />
        <AddInputComp text="Company Name" type="text" handler={setEmail} />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp text="Email" type="email" handler={setPhone} />
        <AddInputComp text="Phone" type="number" handler={setEmployeeId} />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp text="Client Id" type="text" handler={setDesignation} />
        <AddInputComp text="Gender" type="text" handler={setPassword} />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp text="Address" type="text" handler={setDesignation} />
        <AddInputComp text="Image" type="file" handler={setPassword} />
      </div>

      <SubmitButton submit={""} />
    </form>
  );
};

export default ClientForm;
