import React from "react";
import style from "../../../../styles/allEmployee.module.scss";
import AddIcon from "@mui/icons-material/Add";

const AddEmployeeBtn = ({ setAdd, text }: { setAdd: any, text: string }) => {
  return (
    <div className={style.addButton}>
      <button onClick={() => setAdd(true)}>
        <AddIcon /> <p>Add {text}</p>{" "}
      </button>
    </div>
  );
};

export default AddEmployeeBtn;
