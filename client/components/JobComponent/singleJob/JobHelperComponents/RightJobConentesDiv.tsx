import React from "react";
import style from "../../../../styles/jobViewComponent.module.scss";

const RightJobConentesDiv = ({
  icon,
  title,
  content,
}: {
  icon: any;
  title: any;
  content: any;
}) => {
  return (
    <div className={style.contentDiv}>
      <span>{icon}</span>
      <div>
        <strong>{title}</strong>
        <h3>{content}</h3>
      </div>
    </div>
  );
};

export default RightJobConentesDiv;
