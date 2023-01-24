import React from "react";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import ChangePassForm from "./ChangePassForm";
import SalaryDetailsForm from "./SalaryDetailsForm";

const SalaryFormComponent = ({ setEdit }: { setEdit: any }) => {
  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>

      <h1>Edit Salary Details</h1>

      <SalaryDetailsForm setEdit={setEdit} />
    </div>
  );
};

export default SalaryFormComponent;
