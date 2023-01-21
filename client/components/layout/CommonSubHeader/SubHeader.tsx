import React from "react";
import style from "../../../styles/header.module.scss";

const SubHeader = ({ text }: { text: string }) => {
  return (
    <div className={style.subHeader}>
      <h2>{text}</h2>
    </div>
  );
};

export default SubHeader;
