import React from "react";
import style from "../../styles/addForm.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";


const AddForm = ({ close }: { close: any }) => {
  return (
    <div className={style.addFormMain}>
      <i onClick={() => close(false)}>
        <CancelIcon />
      </i>
      AddForm
    </div>
  );
};

export default AddForm;
