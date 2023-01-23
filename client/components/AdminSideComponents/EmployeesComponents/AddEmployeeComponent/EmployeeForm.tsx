import React, { useEffect, useState } from "react";
import AddInputComp from "../../../AddFormComponent/AddInputComp";
import style from "../../../../styles/addForm.module.scss";
import SubmitButton from "../../../AddFormComponent/SubmitButton";
import { useActions } from "../../../../hooks/useAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AddEmployeesState } from "../../../../models/admin";
import toast from "react-hot-toast";

const EmployeeForm = ({ type, close }: { type: string; close: any }) => {
  const { data, error, loading }: AddEmployeesState = useTypedSelector(
    (state) => state.addEmployees
  );

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [employeeId, setEmployeeId] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { addEmployee } = useActions();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await addEmployee("sd", {
      role: type.toLowerCase(),
      name,
      email,
      password,
      phone,
      employeeId,
      designation,
    });
    if (`${res}` !== "success") {
      toast.error(`${res}`);
    } else {
      toast.success("Successfully added the user");
      close(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.InputGroup}>
        <AddInputComp value={name} text="Name" type="text" handler={setName} />
        <AddInputComp
          value={email}
          text="Email"
          type="email"
          handler={setEmail}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={phone}
          text="Phone"
          type="number"
          handler={setPhone}
        />
        <AddInputComp
          value={employeeId}
          text="Employee ID"
          type="text"
          handler={setEmployeeId}
        />
      </div>

      <div className={style.InputGroup}>
        <AddInputComp
          value={designation}
          text="Designation"
          type="text"
          handler={setDesignation}
        />
        <AddInputComp
          value={password}
          text="Password"
          type="text"
          handler={setPassword}
        />
      </div>

      <SubmitButton submit={""} />
    </form>
  );
};

export default EmployeeForm;
