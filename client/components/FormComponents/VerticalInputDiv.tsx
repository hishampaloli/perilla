import React from "react";
import style from "../../styles/form.module.scss";

const VerticalInputDiv = ({
  label,
  placeholder,
  type,
  callBack,
}: {
  label: string;
  placeholder: string;
  type: string;
  callBack: any;
}) => {
  return (
    <div className={style.verticalInputDiv}>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name=""
        placeholder={placeholder}
        id=""
        onChange={(e) => {
          callBack(e.target.value);
        }}
      />
    </div>
  );
};

export default VerticalInputDiv;
