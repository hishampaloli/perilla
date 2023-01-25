import React from "react";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import EditPersonalInfoForm from "./EditPersonalInfoForm";
import EditEmergencyContactForm from "./EditEmergencyContactForm";

const EditEmergencyComponent = ({ setEdit }: { setEdit: any }) => {
  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>

      <h1>Edit Emergency Contact</h1>

      <EditEmergencyContactForm setEdit={setEdit} />
    </div>
  );
};

export default EditEmergencyComponent;
