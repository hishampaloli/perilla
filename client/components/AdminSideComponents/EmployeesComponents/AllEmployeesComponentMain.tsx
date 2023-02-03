import React, { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AllEmployeesState } from "../../../models/admin";
import style from "../../../styles/allEmployee.module.scss";
import Paginate from "../../SegemanticComponents/Paginate";
import AddEmployeeComponent from "./AddEmployeeComponent/AddEmployeeComp";
import EmployeeListComp from "./AllEmployees/EmployeeListComp";
import EmployeeSearchbox from "./employeeSearch/EmployeeSearchbox";

const AllEmployeesComponent = ({ type }: { type: string }) => {
  const { data }: AllEmployeesState = useTypedSelector(
    (state) => state.allEmployees
  );

  
  return (
    <div className={style.AllEmployeesMain}>
      <AddEmployeeComponent type={type} />
      <EmployeeSearchbox type={type} />
      <EmployeeListComp type={type} />
    </div>
  );
};

export default AllEmployeesComponent;
