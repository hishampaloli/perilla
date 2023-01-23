import Link from "next/link";
import React from "react";
import style from "../../../../styles/allEmployee.module.scss";

const EmployeeBox = ({
  name,
  designation,
  image,
  phone,
  type,
  companyName,
}: {
  name: string;
  designation: string;
  image: string;
  phone: number;
  type: string;
  companyName: string;
}) => {
  return (
    <Link
      href={`/${companyName}/profile/${type}/${phone}`}
      className={style.employeeBox}
    >
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{designation}</p>
    </Link>
  );
};

export default EmployeeBox;
