import React from "react";
import DashBoardChartOne from "./DashBoardChartOne";
import DashBoardChartTwo from "./DashBoardChartTwo";
import style from "../../../../styles/dashboard.module.scss";

const DashBoardChartMain = () => {
  return (
    <div className={style.dashboardChartMain}>
      <DashBoardChartOne />
      <DashBoardChartTwo />
    </div>
  );
};

export default DashBoardChartMain;
