import React, { useEffect, useState } from "react";
import AddInputComp from "../AddFormComponent/AddInputComp";
import style from "../../styles/addForm.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";
import {
  EditEmployeeProfileState,
  GetEmployeeProfileState,
} from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { toast } from "react-hot-toast";
import Spinner from "../layout/SpinnerComponent";
import FixedSpinner from "../layout/FixedSpinner";

const EditProfileForm = ({ setEdit }: { setEdit: any }) => {
  const { data }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const { error, loading }: EditEmployeeProfileState = useTypedSelector(
    (state) => state.editEmployeeProfile
  );
  const employeeData = data?.data;

  console.log(error, loading);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [employeeId, setEmployeeId] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { editEmployeeProfile } = useActions();

  useEffect(() => {
    setName(employeeData?.name!);
    setEmail(employeeData?.email!);
    setPhone(employeeData?.phone!);
    setEmployeeId(employeeData?.employeeId!);
    setDesignation(employeeData?.designation!);
    setRole(employeeData?.role!);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await editEmployeeProfile("sd", employeeData?._id!, {
      name,
      email,
      phone,
      employeeId,
      designation,
      role,
    });

    console.log(res);
    if (`${res}` === "success") {
      toast.success("Successfully Updated ");
      setEdit(false);
    } else {
      toast.error(`${res}`);
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
          text="EmployeeId"
          value={employeeId}
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
        <AddInputComp value={role} text="Role" type="text" handler={setRole} />
      </div>

      {loading && <FixedSpinner />}

      <SubmitButton submit={""} />
    </form>
  );
};

export default EditProfileForm;
