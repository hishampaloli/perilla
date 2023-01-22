import React, { useState } from "react";
import style from "../../../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import AddInputComp from "../../../AddFormComponent/AddInputComp";
import SubmitButton from "../../../AddFormComponent/SubmitButton";
import EmployeeForm from "./EmployeeForm";
import ClientForm from "./AddClientFormt";

const AddForm = ({ close, type }: { close: any; type: string }) => {
   
  return (
    <div className={style.addFormMain}>
      <i onClick={() => close(false)}>
        <CancelIcon />
      </i>

      <h1>Add {type}</h1>

      {type === "Client" ? <ClientForm /> : <EmployeeForm />}
    </div>
  );
};

export default AddForm;
