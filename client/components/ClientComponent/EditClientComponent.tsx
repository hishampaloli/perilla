import React from "react";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import EditClientForm from "./EditClientForm";

const EditClientFormComponent = ({ setEdit }: { setEdit: any }) => {
  return (
    <div className={style.addFormMain}>
      <i onClick={() => setEdit(false)}>
        <CancelIcon />
      </i>

      <h1>Edit Client</h1>

      <EditClientForm setEdit={setEdit} />
    </div>
  );
};

export default EditClientFormComponent;
