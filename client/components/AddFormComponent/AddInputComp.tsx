import React from "react";
import style from "../../styles/addForm.module.scss";

const AddInputComp = ({
  text,
  handler,
  type,
}: {
  text: string;
  handler: any;
  type: string;
}) => {
  return (
    <div className={style.addInputComp}>
      <li>{text}</li>
      <input
        type={type}
        onChange={(e) => handler(e.target.value)}
        name=""
        id=""
      />
    </div>
  );
};

export default AddInputComp;
