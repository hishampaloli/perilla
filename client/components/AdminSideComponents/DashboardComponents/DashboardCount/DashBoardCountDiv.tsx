import React from "react";
import style from "../../../../styles/dashboard.module.scss";

const DashBoardCountDiv = ({
  count,
  text,
  icon,
}: {
  count: string;
  text: string;
  icon: any;
}) => {
  return (
    <div className={style.dashboardcountDiv}>
      <div className={style.iconDiv}>{icon}</div>
      <div>
        <h3>{count}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DashBoardCountDiv;
