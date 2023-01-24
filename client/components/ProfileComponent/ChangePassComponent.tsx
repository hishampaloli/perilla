import React from "react";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import ChangePassForm from "./ChangePassForm";

const ChangePassComponent = ({ setEdit }: { setEdit: any }) => {
  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>

      <h1>Edit Profile</h1>

      <ChangePassForm setEdit={setEdit} />
    </div>
  );
};

export default ChangePassComponent;
