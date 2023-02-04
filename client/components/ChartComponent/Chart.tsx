import React from "react";
import Chart from "react-apexcharts";

const Charts = ({ data, type }: { data: any; type: number }) => {
  console.log(data)
  const PurchaseState = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Janaury", "Deceber"],
      },
    },
    series: [
      {
        name: "Employees",
        data: [0, 1],
      },
      {
        name: "Tasks",
        data: [0, 8],
      },
      {
        name: "Projects",
        data: [0, 10],
      },
      {
        name: "Client",
        data: [0, 4],
      },
    ],
  };

  const DataState = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, 4, 7, 8],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <Chart
        options={PurchaseState.options}
        series={PurchaseState.series}
        type="area"
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default Charts;
