import React, { useState } from "react";
import style from "../../../styles/allEmployee.module.scss";
import AddEmployeeComponent from "./AddEmployeeComponent/AddEmployeeComp";
import EmployeeListComp from "./AllEmployees/EmployeeListComp";
import EmployeeSearchbox from "./employeeSearch/EmployeeSearchbox";

const AllEmployeesComponent = ({ type }: { type: string }) => {
  const [stateChanged, setStateChanged] = useState(false);
  return (
    <div className={style.AllEmployeesMain}>
      <AddEmployeeComponent  type={type} />
      <EmployeeSearchbox type={type} />
      <EmployeeListComp  type={type} />
    </div>
  );
};

export default AllEmployeesComponent;
