import React from "react";
import style from "../../../../styles/allEmployee.module.scss";

const EmployeeSearchbox = ({ type }: { type: string }) => {
  return (
    <div className={style.employeeSearch}>
      <div>
        <input type="text" placeholder={`${type} ID`} id="" />
        <input type="text" placeholder={`${type} Name`} name="" id="" />
      </div>

      <button>SEARCH</button>
    </div>
  );
};

export default EmployeeSearchbox;
