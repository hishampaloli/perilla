import React from "react";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import EditProfileForm from "./EditProfileForm";
import EditBankDetailsForm from "./EditBankForm";
const EditBankComponent = ({ setEdit }: { setEdit: any }) => {
  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>

      <h1>Edit Profile</h1>

      <EditBankDetailsForm setEdit={setEdit} />
    </div>
  );
};

export default EditBankComponent;
