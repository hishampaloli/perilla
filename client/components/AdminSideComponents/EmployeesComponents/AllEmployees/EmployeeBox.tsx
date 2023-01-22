import React from "react";
import style from "../../../../styles/allEmployee.module.scss";

const EmployeeBox = ({
  name,
  designation,
  image,
}: {
  name: string;
  designation: string;
  image: string;
}) => {
  return (
    <div className={style.employeeBox}>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{designation}</p>
    </div>
  );
};

export default EmployeeBox;
