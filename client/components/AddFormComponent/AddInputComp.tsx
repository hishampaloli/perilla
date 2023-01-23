import React from "react";
import style from "../../styles/addForm.module.scss";

const AddInputComp = ({
  text,
  handler,
  type,
  value,
}: {
  text: string;
  handler: any;
  type: string;
  value: any;
}) => {
  return (
    <div className={style.addInputComp}>
      <li>{text}</li>
      <input
        type={type}
        value={value}
        onChange={(e) => handler(e.target.value)}
        name=""
        id=""
      />
    </div>
  );
};

export default AddInputComp;
