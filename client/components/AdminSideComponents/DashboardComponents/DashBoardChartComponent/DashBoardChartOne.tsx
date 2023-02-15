import React from "react";

import style from "../../../../styles/dashboard.module.scss";
import Charts from "../../../ChartComponent/Chart";
const DashBoardChartOne = () => {
  
  return (
    <div className={style.chartOne}>
      <h2 style={{ color: "white", margin: "20px", textAlign: "center" }}>
        Dash Board Overview 1
      </h2>
      <Charts data={3} type={1} />
    </div>
  );
};

export default DashBoardChartOne;
