import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import {
  ChangeEmployeePasswordState,
  EditEmployeeProfileState,
  GetEmployeeProfileState,
} from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import FixedSpinner from "../layout/FixedSpinner";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";

const ChangePassForm = ({ setEdit }: { setEdit: any }) => {
  const { data }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const { loading, error }: ChangeEmployeePasswordState = useTypedSelector(
    (state) => state.changeEmployeePassword
  );

  const { changeEmployeePassword } = useActions();

  const employeeData = data?.data;

  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await changeEmployeePassword("s", employeeData?._id!, {
      password,
    });
    if (`${res}` === "success") {
      toast.success("Successfully Updated the password");
      setEdit(false);
    } else {
      toast.error(`${res}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.InputGroup}>
        <AddInputComp
          value={password}
          text="New Password"
          type="password"
          handler={setPassword}
        />
      </div>

      {loading && <FixedSpinner />}

      <SubmitButton submit={""} />
    </form>
  );
};

export default ChangePassForm;
