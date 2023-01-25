import React from "react";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import EditPersonalInfoForm from "./EditPersonalInfoForm";

const EditPersonalInfoComponent = ({ setEdit }: { setEdit: any }) => {
  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>

      <h1>Edit Personal Information</h1>

      <EditPersonalInfoForm setEdit={setEdit} />
    </div>
  );
};

export default EditPersonalInfoComponent;
