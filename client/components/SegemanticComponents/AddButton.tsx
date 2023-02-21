import React from "react";
import style from "../../styles/sementic.module.scss";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ setAdd, text }: { setAdd: any; text: string }) => {
  return (
    <div className={style.addBtn}>
      <button style={{cursor: 'pointer'}} onClick={() => setAdd(true)} >
        <AddIcon /> <span>{text}</span>
      </button>
    </div>
  );
};

export default AddButton;
